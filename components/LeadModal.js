'use client'

import { useState, useEffect } from 'react'
import styles from '../app/page.module.css'
import { X, ArrowRight, Loader2 } from 'lucide-react'

export default function LeadModal({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        businessType: '',
        need: 'Contato via Modal Hero'
    })
    const [status, setStatus] = useState('idle') // idle, loading, success, error
    const [message, setMessage] = useState('')

    // Prevenir scroll do body quando o modal estiver aberto
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    if (!isOpen) return null

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('loading')
        setMessage('')

        try {
            const res = await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })

            const data = await res.json()

            if (!res.ok) {
                throw new Error(data.error || 'Erro ao enviar.')
            }

            setStatus('success')
            setMessage('Tudo certo! Redirecionando para o WhatsApp...')

            // Redirecionamento confiável e estável após 1.5s
            setTimeout(() => {
                const text = encodeURIComponent(`Olá, sou ${formData.name} do negócio ${formData.businessType}. Gostaria de melhorar meu visual!`)
                window.location.href = `https://wa.me/5586981308653?text=${text}`
            }, 1500)

        } catch (error) {
            setStatus('error')
            setMessage(error.message)
        }
    }

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                <button className={styles.modalClose} onClick={onClose} aria-label="Fechar">
                    <X size={24} />
                </button>

                <div className={styles.modalHeader}>
                    <h3>Falta pouco!</h3>
                    <p>Para um atendimento mais rápido, me conta só o básico antes de irmos pro WhatsApp.</p>
                </div>

                <form onSubmit={handleSubmit} className={styles.modalForm}>
                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="modal-name">Como posso te chamar?</label>
                        <input
                            type="text"
                            id="modal-name"
                            name="name"
                            required
                            className={styles.input}
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Seu nome"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="modal-business">Qual o seu negócio?</label>
                        <input
                            type="text"
                            id="modal-business"
                            name="businessType"
                            required
                            className={styles.input}
                            value={formData.businessType}
                            onChange={handleChange}
                            placeholder="Ex: Hamburgueria, Loja..."
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="modal-contact">Seu WhatsApp</label>
                        <input
                            type="text"
                            id="modal-contact"
                            name="contact"
                            required
                            className={styles.input}
                            value={formData.contact}
                            onChange={handleChange}
                            placeholder="(xx) xxxxx-xxxx"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={status === 'loading' || status === 'success'}
                        className={`${styles.btn} ${styles.btnPrimary} ${styles.submitBtn}`}
                    >
                        {status === 'loading' ? (
                            <><Loader2 className={styles.spinIcon} size={20} /> Salvando...</>
                        ) : status === 'success' ? (
                            'Redirecionando...'
                        ) : (
                            <>Ir para o WhatsApp <ArrowRight size={20} /></>
                        )}
                    </button>

                    {status === 'error' && <div className={`${styles.formMessage} ${styles.formError}`}>{message}</div>}
                    {status === 'success' && <div className={`${styles.formMessage} ${styles.formSuccess}`}>{message}</div>}
                </form>
            </div>
        </div>
    )
}

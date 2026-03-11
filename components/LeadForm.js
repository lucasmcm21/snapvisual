'use client'

import { useState } from 'react'
import styles from '../app/page.module.css'

export default function LeadForm() {
    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        businessType: '',
        need: ''
    })
    const [status, setStatus] = useState('idle') // idle, loading, success, error
    const [message, setMessage] = useState('')

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
            setMessage('Recebemos seu contato! Em breve falaremos com você.')
            setFormData({ name: '', contact: '', businessType: '', need: '' })
        } catch (error) {
            setStatus('error')
            setMessage(error.message)
        }
    }

    return (
        <div className={styles.formContainer}>
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="name">Como podemos te chamar?</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className={styles.input}
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Seu nome completo ou apelido"
                    />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="contact">Seu WhatsApp principal</label>
                    <input
                        type="text"
                        id="contact"
                        name="contact"
                        required
                        className={styles.input}
                        value={formData.contact}
                        onChange={handleChange}
                        placeholder="(xx) xxxxx-xxxx"
                    />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="businessType">Qual é o segmento do seu negócio?</label>
                    <input
                        type="text"
                        id="businessType"
                        name="businessType"
                        required
                        className={styles.input}
                        value={formData.businessType}
                        onChange={handleChange}
                        placeholder="Ex: Hamburgueria, Loja Física, Barbearia..."
                    />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="need">O que você precisa hoje? (Opcional)</label>
                    <textarea
                        id="need"
                        name="need"
                        className={styles.input}
                        value={formData.need}
                        onChange={handleChange}
                        placeholder="Ex: Preciso de uma landing page para o meu delivery, ou pacote de artes para redes sociais"
                    />
                </div>

                <button
                    type="submit"
                    disabled={status === 'loading'}
                    className={`${styles.btn} ${styles.btnPrimary} ${styles.submitBtn}`}
                >
                    {status === 'loading' ? 'Enviando sua proposta...' : 'Quero melhorar meu visual e vender mais'}
                </button>

                {status === 'success' && <div className={`${styles.formMessage} ${styles.formSuccess}`}>{message}</div>}
                {status === 'error' && <div className={`${styles.formMessage} ${styles.formError}`}>{message}</div>}
            </form>
        </div>
    )
}

'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import LeadModal from '@/components/LeadModal'
import { CheckCircle2, Zap, LayoutTemplate, MessageSquare, Instagram, Edit3, Smartphone, PenTool, Layers, ArrowRight, LayoutDashboard } from 'lucide-react'

// Links Originais Puxados
const PORTFOLIO_URL = 'https://www.behance.net/lucasmouraocm'
const INSTAGRAM_URL = 'http://instagram.com/snapvisual.design'
const WHATSAPP_URL = 'http://wa.me/86981308653'

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false)

  return (
    <main>
      <LeadModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />

      {/* HEADER SIMPLES STATIC */}
      <header className={styles.header}>
        <div className={`${styles.container} ${styles.headerContainer}`}>
          <Image src="/snapvisual-logo.svg" alt="SnapVisual" width={400} height={120} className={styles.headerLogo} priority />
        </div>
      </header>

      {/* 1. HERO V2/V3 */}
      <section className={styles.hero}>
        <div className={styles.container} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>


          <h1 className={styles.heroHeadline}>
            Fim do visual amador.<br />
            <span className={styles.heroHighlight}>Sua marca pronta para vender.</span>
          </h1>

          <p className={styles.heroSub}>
            Visual moderno, direto e bem resolvido para quem precisa atrair cliente novo todo dia, sem cara de template barato e sem o custo de uma agência inflada.
          </p>

          <div className={styles.heroActions}>
            <button onClick={() => setModalOpen(true)} className={`${styles.btn} ${styles.btnPrimary}`}>
              Iniciar Conversa no WhatsApp
            </button>
            <a href={PORTFOLIO_URL} target="_blank" rel="noreferrer" className={`${styles.btn} ${styles.btnSecondary}`}>
              Ver Nossos Trabalhos
            </a>
          </div>

          {/* SIMULAÇÃO DE PROVA VISUAL EM CSS (HeroProof V3) */}
          <div className={styles.heroProof}>
            {/* Mock: Post Style */}
            <div className={`${styles.proofCard} ${styles.proofCardPost}`}>
              <div className={styles.proofHeader}>
                <div className={styles.proofAvatar}></div>
                <div className={styles.proofUserHolder}>
                  <div className={styles.proofUserName}></div>
                  <div className={styles.proofUserSub}></div>
                </div>
              </div>
              <div className={styles.proofBodyPost}>
                <div className={styles.proofImagePlaceholder}>
                  <span>NEW CAMPAIGN</span>
                </div>
                <div className={styles.proofPostLines}>
                  <div className={styles.mockLine}></div>
                  <div className={`${styles.mockLine} ${styles.short}`}></div>
                </div>
              </div>
            </div>

            {/* Mock: Brand Box */}
            <div className={`${styles.proofCard} ${styles.proofCardBrand}`}>
              <div className={styles.proofBrandCenter}>
                <div className={styles.proofBrandLogo}><Zap size={32} /></div>
                <div className={styles.proofBrandTitle}>Vanguard</div>
                <div className={styles.proofBrandTags}>
                  <span>Identity</span>
                  <span>UI/UX</span>
                </div>
              </div>
            </div>

            {/* Mock: UI Card */}
            <div className={`${styles.proofCard} ${styles.proofCardUI}`}>
              <div className={styles.proofUIHeader}>
                <h3>Dashboard</h3>
                <div className={styles.proofUIBadge}>Active</div>
              </div>
              <div className={styles.proofUIGraph}>
                <div className={styles.bar1}></div>
                <div className={styles.bar2}></div>
                <div className={styles.bar3}></div>
                <div className={styles.bar4}></div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. SOLUÇÕES (Ex-Serviços) */}
      <section className={`${styles.section} ${styles.solutionsSection}`} id="solucoes">
        <div className={styles.container}>
          <div className={styles.textCenter}>
            <h2 className={styles.title}>O que sua marca precisa para parecer pronta</h2>
            <p className={styles.subtitle}>
              Entregas visuais diretas para negócios que buscam velocidade, legibilidade e presença.
            </p>
          </div>

          <div className={styles.solutionsGrid}>
            <div className={styles.solutionCard}>
              <div className={styles.solutionIconWrapper}>
                <Smartphone size={24} />
              </div>
              <h3 className={styles.solutionTitle}>Posts Magnéticos</h3>
              <p className={styles.solutionProblem}>
                Problema: Feed que parece panfleto barato e não engaja.
              </p>
              <div className={styles.solutionDelivery}>
                <div className={styles.deliveryItem}><CheckCircle2 size={16} /> Linha criativa autoral</div>
                <div className={styles.deliveryItem}><CheckCircle2 size={16} /> Alto contraste e legibilidade</div>
                <div className={styles.deliveryItem}><CheckCircle2 size={16} /> Foco absoluto na sua oferta</div>
              </div>
            </div>

            <div className={styles.solutionCard}>
              <div className={styles.solutionIconWrapper}>
                <Layers size={24} />
              </div>
              <h3 className={styles.solutionTitle}>Landing Pages Comerciais</h3>
              <p className={styles.solutionProblem}>
                Problema: Perder venda porque o cliente não entende o que você vende.
              </p>
              <div className={styles.solutionDelivery}>
                <div className={styles.deliveryItem}><CheckCircle2 size={16} /> Design que carrega rápido</div>
                <div className={styles.deliveryItem}><CheckCircle2 size={16} /> Copy desenhada para venda direta</div>
                <div className={styles.deliveryItem}><CheckCircle2 size={16} /> Captação de leads inteligente</div>
              </div>
            </div>

            <div className={styles.solutionCard}>
              <div className={styles.solutionIconWrapper}>
                <Edit3 size={24} />
              </div>
              <h3 className={styles.solutionTitle}>Identidade Visual Tática</h3>
              <p className={styles.solutionProblem}>
                Problema: Logotipo confuso e paleta de cores misturada sem sentido.
              </p>
              <div className={styles.solutionDelivery}>
                <div className={styles.deliveryItem}><CheckCircle2 size={16} /> Marca forte e memorável</div>
                <div className={styles.deliveryItem}><CheckCircle2 size={16} /> Estética adaptada para o digital</div>
                <div className={styles.deliveryItem}><CheckCircle2 size={16} /> Manual ágil para o dia a dia</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. NICHOS (Para a Rotina Real) */}
      <section className={`${styles.section} ${styles.nicheSection}`}>
        <div className={styles.container}>
          <div className={styles.textCenter}>
            <h2 className={styles.title}>Pensado para o ritmo do negócio local</h2>
            <p className={styles.subtitle}>
              A SnapVisual funciona melhor onde a imagem precisa vender rápido. Desenhamos para quem vive a rotina de verdade.
            </p>
          </div>

          <div className={styles.nicheGrid}>
            <div className={styles.nicheCard}>
              <h3 className={styles.nicheTitle}>Alimentação & Delivery</h3>
              <div className={styles.nicheCompare}>
                <div className={styles.nicheBefore}><span>Antes:</span> Fotos escuras, zero apetite visual.</div>
                <div className={styles.nicheAfter}><span>Depois:</span> Direção de arte que vende antes da mordida.</div>
              </div>
            </div>

            <div className={styles.nicheCard}>
              <h3 className={styles.nicheTitle}>Barbearias & Estética</h3>
              <div className={styles.nicheCompare}>
                <div className={styles.nicheBefore}><span>Antes:</span> Feed bagunçado e sem padrão.</div>
                <div className={styles.nicheAfter}><span>Depois:</span> Estética premium que justifica o preço do serviço.</div>
              </div>
            </div>

            <div className={styles.nicheCard}>
              <h3 className={styles.nicheTitle}>Lojas & Varejo</h3>
              <div className={styles.nicheCompare}>
                <div className={styles.nicheBefore}><span>Antes:</span> Promoção poluída que ninguém clica.</div>
                <div className={styles.nicheAfter}><span>Depois:</span> Design focado totalmente em acelerar conversão.</div>
              </div>
            </div>

            <div className={styles.nicheCard}>
              <h3 className={styles.nicheTitle}>Serviços Locais</h3>
              <div className={styles.nicheCompare}>
                <div className={styles.nicheBefore}><span>Antes:</span> Perfil corporativo amador e genérico.</div>
                <div className={styles.nicheAfter}><span>Depois:</span> Posicionamento que anula a autoridade do concorrente.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DIFERENCIAIS (Secos e Fortes) */}
      <section className={`${styles.section} ${styles.diffsSection}`}>
        <div className={styles.container}>
          <div className={styles.textCenter}>
            <h2 className={styles.title}>Mais resultado. Menos enrolação.</h2>
          </div>
          <div className={styles.diffsGrid}>
            <div className={styles.diffItem}>
              <Zap className={styles.diffIcon} size={28} />
              <div className={styles.diffContent}>
                <h3>Resposta Rápida</h3>
                <p>Nenhuma mensagem fica dias sem resposta. A rotina do seu negócio não pode parar por causa de uma arte atrasada.</p>
              </div>
            </div>
            <div className={styles.diffItem}>
              <PenTool className={styles.diffIcon} size={28} />
              <div className={styles.diffContent}>
                <h3>Visual que Vende</h3>
                <p>O foco não é produzir uma tela de pintura, é ter um posicionamento que transmita qualidade e convide diretamente à conversão.</p>
              </div>
            </div>
            <div className={styles.diffItem}>
              <MessageSquare className={styles.diffIcon} size={28} />
              <div className={styles.diffContent}>
                <h3>Atendimento Direto</h3>
                <p>Evitamos burocracia, termos técnicos e fluxos engessados. Você diz o que precisa, nós direcionamos a melhor solução visual para aquilo.</p>
              </div>
            </div>
            <div className={styles.diffItem}>
              <LayoutDashboard className={styles.diffIcon} size={28} />
              <div className={styles.diffContent}>
                <h3>Feito para a Rotina</h3>
                <p>Sabemos que o lojista e o empresário fazem do financeiro ao marketing. Entregamos os arquivos prontos, nos formatos corretos e mastigados para uso próprio.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA FINAL */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaHeadline}>
            Seu próximo visual pode começar aqui.
          </h2>
          <p className={styles.subtitle} style={{ margin: '0 auto 3rem auto' }}>
            Você envia o básico. A SnapVisual entende a demanda e volta com o caminho mais direto para resolver.
          </p>

          <button onClick={() => setModalOpen(true)} className={`${styles.btn} ${styles.btnPrimary} ${styles.btnMega}`}>
            Quero melhorar minha marca
          </button>

          <div className={styles.guarantees}>
            <span className={styles.guaranteeItem}>
              <CheckCircle2 size={16} /> Resposta em poucas horas
            </span>
            <span className={styles.guaranteeItem}>
              <CheckCircle2 size={16} /> Atendimento sem robôs
            </span>
            <span className={styles.guaranteeItem}>
              <CheckCircle2 size={16} /> Orçamento sem compromisso
            </span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerContainer}>
            <Image src="/snapvisual-logo.svg" alt="SnapVisual" width={400} height={120} className={styles.footerLogo} />
            <div className={styles.footerLinks}>
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className={styles.footerLink}>Instagram</a>
              <a href={PORTFOLIO_URL} target="_blank" rel="noreferrer" className={styles.footerLink}>Behance</a>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className={styles.footerLink}>Fale Conosco</a>
            </div>
            <p style={{ color: '#666', fontSize: '0.85rem' }}>
              &copy; {new Date().getFullYear()} SnapVisual. Desenvolvido para marcas fortes.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}

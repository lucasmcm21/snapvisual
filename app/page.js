'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import LeadModal from '@/components/LeadModal'
import { CheckCircle2, Zap, LayoutTemplate, MessageSquare, Instagram, Edit3, Smartphone, PenTool, Layers, ArrowRight, LayoutDashboard, Target } from 'lucide-react'

// Links Originais Puxados
const PORTFOLIO_URL = 'https://www.behance.net/lucasmouraocm'
const INSTAGRAM_URL = 'http://instagram.com/snapvisual.design'
const WHATSAPP_URL = 'http://wa.me/5586981308653'

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false)

  return (
    <main>
      <LeadModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />

      {/* HEADER V5 - TRUE HEADER */}
      <header className={styles.header}>
        <div className={`${styles.container} ${styles.headerContainer}`}>
          <div className={styles.headerLogoWrapper}>
            <Image src="/snapvisual-logo.svg" alt="SnapVisual" width={300} height={60} className={styles.headerLogo} priority />
          </div>
          <nav className={styles.headerNav}>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={styles.navLink}>
              <MessageSquare size={16} />
              <span className={styles.navText}>WhatsApp</span>
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className={styles.navLink}>
              <Instagram size={16} />
              <span className={styles.navText}>Instagram</span>
            </a>
            <a href={PORTFOLIO_URL} target="_blank" rel="noopener noreferrer" className={styles.navLink}>
              <Layers size={16} />
              <span className={styles.navText}>Portfólio</span>
            </a>
          </nav>
        </div>
      </header>

      {/* 1. HERO V4 */}
      <section className={styles.hero}>
        <div className={styles.container} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

          <div className={styles.microLabel}>
            VISUAL COMERCIAL PARA NEGÓCIOS LOCAIS
          </div>

          <h1 className={styles.heroHeadline}>
            Fim do visual amador.<br />
            <span className={styles.heroHighlight}>Sua marca pronta para vender.</span>
          </h1>

          <p className={styles.heroSub}>
            A SnapVisual cria posts, páginas e identidades visuais para negócios que precisam atrair cliente sem parecer genérico nem depender do custo de uma agência inflada.
          </p>

          <div className={styles.heroActions}>
            <button onClick={() => setModalOpen(true)} className={`${styles.btn} ${styles.btnPrimary}`}>
              Quero melhorar minha marca
            </button>
            <a href="#portfolio" className={`${styles.btn} ${styles.btnSecondary}`}>
              Ver nossos trabalhos
            </a>
          </div>

          <div className={styles.heroMicroTrust}>
            Resposta rápida • Atendimento direto • Orçamento sem compromisso
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

      {/* 2. SOLUÇÕES / O QUE ENTREGAMOS */}
      <section className={`${styles.section} ${styles.solutionsSection}`} id="solucoes">
        <div className={styles.container}>
          <div className={styles.textCenter}>
            <h2 className={styles.title}>O visual certo para vender melhor no digital</h2>
            <p className={styles.subtitle}>
              Nem toda marca precisa de um projeto gigante. Muitas só precisam de um visual mais claro, profissional e convincente para parar de parecer improvisadas e começar a vender melhor.
            </p>
          </div>

          <div className={styles.solutionsGrid}>
            <div className={`${styles.solutionCard} ${styles.solutionCardPrimary}`}>
              <div className={styles.solutionIconWrapper}>
                <Smartphone size={24} />
              </div>
              <h3 className={styles.solutionTitle}>Posts para Instagram</h3>
              <p className={styles.solutionSubline}>Feed com cara de marca, não de improviso.</p>

              <p className={styles.solutionProblem}>
                Quando o feed parece genérico e bagunçado, a oferta passa batida e o cliente entra desconfiado.
              </p>

              <div className={styles.solutionDelivery}>
                <div className={styles.deliveryItem}><CheckCircle2 size={16} /> Artes com leitura rápida no celular</div>
                <div className={styles.deliveryItem}><CheckCircle2 size={16} /> Visual mais profissional e menos improvisado</div>
                <div className={styles.deliveryItem}><CheckCircle2 size={16} /> Conteúdo pensado para destacar sua oferta</div>
              </div>
              <div className={styles.solutionTag}>Ideal para Instagram</div>
            </div>

            <div className={styles.solutionCard}>
              <div className={styles.solutionIconWrapper}>
                <Target size={24} />
              </div>
              <h3 className={styles.solutionTitle}>Landing Pages de Conversão</h3>
              <p className={styles.solutionSubline}>Página clara para vender sem confundir.</p>

              <p className={styles.solutionProblem}>
                Se o cliente entra, não entende rápido o que você vende e sai sem agir, a página está falhando.
              </p>

              <div className={styles.solutionDelivery}>
                <div className={styles.deliveryItem}><CheckCircle2 size={16} /> Estrutura clara para vender sem confundir</div>
                <div className={styles.deliveryItem}><CheckCircle2 size={16} /> Copy direta para gerar contato ou lead</div>
                <div className={styles.deliveryItem}><CheckCircle2 size={16} /> Página leve, objetiva e pronta para campanha</div>
              </div>
              <div className={styles.solutionTag}>Captação rápida</div>
            </div>

            <div className={styles.solutionCard}>
              <div className={styles.solutionIconWrapper}>
                <Edit3 size={24} />
              </div>
              <h3 className={styles.solutionTitle}>Identidade Visual Comercial</h3>
              <p className={styles.solutionSubline}>Marca com padrão, força e uso real.</p>

              <p className={styles.solutionProblem}>
                Quando a marca parece improvisada e sem padrão, ela transmite menos confiança do que deveria.
              </p>

              <div className={styles.solutionDelivery}>
                <div className={styles.deliveryItem}><CheckCircle2 size={16} /> Visual coerente para transmitir mais confiança</div>
                <div className={styles.deliveryItem}><CheckCircle2 size={16} /> Estética pensada para uso real no digital</div>
                <div className={styles.deliveryItem}><CheckCircle2 size={16} /> Arquivos organizados para facilitar o dia a dia</div>
              </div>
              <div className={styles.solutionTag}>Marca mais forte</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2.5 TRABALHOS REAIS / PORTFOLIO */}
      <section className={`${styles.section} ${styles.portfolioSection}`} id="portfolio">
        <div className={styles.container}>
          <div className={styles.textCenter}>
            <h2 className={styles.title}>Visual que sai do site e funciona na prática</h2>
            <p className={styles.subtitle}>
              Alguns exemplos do nível que a SnapVisual entrega para marcas que querem parecer mais fortes.
            </p>
          </div>

          <div className={styles.portfolioGrid}>

            {/* 1. Tall Column 1 */}
            <div className={`${styles.portfolioItem} ${styles.portfolioItemTall}`}>
              <div className={styles.portfolioImageWrapper}>
                <Image src="/portfolio/dyf-mockup.png" alt="Landing page institucional" fill className={styles.portfolioImg} />
              </div>
              <p className={styles.portfolioCaption}>Landing page institucional</p>
            </div>

            {/* 2. Square Column 2 */}
            <div className={`${styles.portfolioItem} ${styles.portfolioItemSquare}`}>
              <div className={styles.portfolioImageWrapper}>
                <Image src="/portfolio/burger-house-post.png" alt="Post promocional para hamburgueria" fill className={styles.portfolioImg} />
              </div>
              <p className={styles.portfolioCaption}>Post promocional para hamburgueria</p>
            </div>

            {/* 3. Square Column 3 */}
            <div className={`${styles.portfolioItem} ${styles.portfolioItemSquare}`}>
              <div className={styles.portfolioImageWrapper}>
                <Image src="/portfolio/centergas-lembrete.png" alt="Campanha visual para delivery" fill className={`${styles.portfolioImg} ${styles.imgContain}`} />
              </div>
              <p className={styles.portfolioCaption}>Campanha visual para delivery</p>
            </div>

            {/* 4. Wide Column 2 & 3 */}
            <div className={`${styles.portfolioItem} ${styles.portfolioItemWide}`}>
              <div className={styles.portfolioImageWrapper}>
                <Image src="/portfolio/hazel-mockup-2.png" alt="Aplicação de identidade visual" fill className={styles.portfolioImg} />
              </div>
              <p className={styles.portfolioCaption}>Aplicação de identidade visual</p>
            </div>

            {/* 5. Square Column 1 (under DYF) */}
            <div className={`${styles.portfolioItem} ${styles.portfolioItemSquare}`}>
              <div className={styles.portfolioImageWrapper}>
                <Image src="/portfolio/cardapio-post.png" alt="Design de cardápio digital" fill className={`${styles.portfolioImg} ${styles.imgContain}`} />
              </div>
              <p className={styles.portfolioCaption}>Design de cardápio digital</p>
            </div>

            {/* 6. Wide Column 2 & 3 (under Hazel) */}
            <div className={`${styles.portfolioItem} ${styles.portfolioItemWide}`}>
              <div className={styles.portfolioImageWrapper}>
                <Image src="/portfolio/hazel-camiseta.png" alt="Apresentação de marca corporativa" fill className={`${styles.portfolioImg} ${styles.imgContain}`} />
              </div>
              <p className={styles.portfolioCaption}>Apresentação de marca corporativa</p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. NICHOS (Para a Rotina Real) */}
      <section className={`${styles.section} ${styles.nicheSection}`}>
        <div className={styles.container}>
          <div className={styles.textCenter}>
            <div className={styles.microLabel}>FEITO PARA O RITMO DO NEGÓCIO LOCAL</div>
            <h2 className={styles.title} style={{ marginTop: '0' }}>Feito para o ritmo do negócio local</h2>
            <p className={styles.subtitle}>
              A SnapVisual funciona melhor onde a imagem precisa convencer rápido: no feed, na oferta, no cardápio, no anúncio e no primeiro contato com o cliente.
            </p>
          </div>

          <div className={styles.nicheGrid}>
            <div className={styles.nicheCard}>
              <h3 className={styles.nicheTitle}>Alimentação & Delivery</h3>
              <div className={styles.nicheCompare}>
                <div className={styles.nicheBefore}><span>ANTES:</span> fotos escuras e visual sem apetite.</div>
                <div className={styles.nicheAfter}><span>DEPOIS:</span> peças que valorizam o produto e fazem o pedido parecer mais desejável.</div>
              </div>
              <div className={styles.nicheTags}>Cardápio • Promoções • Lançamentos</div>
            </div>

            <div className={styles.nicheCard}>
              <h3 className={styles.nicheTitle}>Barbearias & Estética</h3>
              <div className={styles.nicheCompare}>
                <div className={styles.nicheBefore}><span>ANTES:</span> feed sem padrão e aparência de serviço barato.</div>
                <div className={styles.nicheAfter}><span>DEPOIS:</span> visual que valoriza o atendimento e ajuda a justificar melhor o preço.</div>
              </div>
              <div className={styles.nicheTags}>Tabela de preços • Serviços • Antes e depois</div>
            </div>

            <div className={styles.nicheCard}>
              <h3 className={styles.nicheTitle}>Lojas & Varejo</h3>
              <div className={styles.nicheCompare}>
                <div className={styles.nicheBefore}><span>ANTES:</span> promoção poluída, oferta confusa e pouca atenção no produto.</div>
                <div className={styles.nicheAfter}><span>DEPOIS:</span> comunicação mais limpa para destacar produto, preço e ação.</div>
              </div>
              <div className={styles.nicheTags}>Promoções • Catálogo • Lançamentos</div>
            </div>

            <div className={styles.nicheCard}>
              <h3 className={styles.nicheTitle}>Serviços Locais</h3>
              <div className={styles.nicheCompare}>
                <div className={styles.nicheBefore}><span>ANTES:</span> perfil comum, genérico e pouco confiável.</div>
                <div className={styles.nicheAfter}><span>DEPOIS:</span> presença visual profissional para transmitir segurança logo no primeiro olhar.</div>
              </div>
              <div className={styles.nicheTags}>Perfil • Apresentação • Landing Page</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DIFERENCIAIS (Secos e Fortes) */}
      <section className={`${styles.section} ${styles.diffsSection}`}>
        <div className={styles.container}>
          <div className={styles.textCenter}>
            <div className={styles.microLabel}>POR QUE A SNAPVISUAL FUNCIONA MELHOR</div>
            <h2 className={styles.title} style={{ marginTop: '0' }}>Mais resultado. Menos enrolação.</h2>
            <p className={styles.subtitle}>
              A SnapVisual foi pensada para o pequeno negócio que precisa resolver rápido, comunicar melhor e receber material pronto para usar.
            </p>
          </div>
          <div className={styles.diffsGrid}>
            <div className={styles.diffItem}>
              <Zap className={styles.diffIcon} size={28} />
              <div className={styles.diffContent}>
                <h3>Resposta rápida</h3>
                <p>Seu negócio não pode esperar dias por retorno. A comunicação anda no ritmo da sua demanda, não no ritmo da enrolação.</p>
              </div>
            </div>
            <div className={styles.diffItem}>
              <PenTool className={styles.diffIcon} size={28} />
              <div className={styles.diffContent}>
                <h3>Visual com função comercial</h3>
                <p>Aqui o visual não existe para enfeitar. Ele existe para valorizar sua oferta, organizar a mensagem e ajudar o cliente a decidir.</p>
              </div>
            </div>
            <div className={styles.diffItem}>
              <MessageSquare className={styles.diffIcon} size={28} />
              <div className={styles.diffContent}>
                <h3>Atendimento direto</h3>
                <p>Sem linguagem complicada, sem excesso de etapas, sem processo travado. Você mostra a necessidade e a SnapVisual aponta o caminho mais prático.</p>
              </div>
            </div>
            <div className={styles.diffItem}>
              <LayoutDashboard className={styles.diffIcon} size={28} />
              <div className={styles.diffContent}>
                <h3>Pronto para a rotina</h3>
                <p>Os materiais já chegam pensados para uso real: formatos certos, aplicação simples e menos dependência de explicação técnica.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4.5 TRANSIÇÃO */}
      <section className={`${styles.section} ${styles.transitionSection}`}>
        <div className={styles.container}>
          <div className={styles.transitionBox}>
            <h2 className={styles.transitionTitle}>Se a sua marca parece abaixo do que você entrega, isso tem solução.</h2>
            <p className={styles.transitionText}>
              Muita empresa boa perde força no digital não por falta de qualidade, mas por parecer desorganizada, comum ou improvisada. A SnapVisual entra para corrigir isso com direção visual mais clara, mais profissional e mais comercial.
            </p>
          </div>
        </div>
      </section>

      {/* 5. CTA FINAL */}
      <section className={styles.ctaSection}>
        <div className={styles.container} style={{ position: 'relative', zIndex: 10 }}>
          <h2 className={styles.ctaHeadline}>
            Seu visual pode começar a melhorar hoje
          </h2>
          <p className={styles.subtitle} style={{ margin: '0 auto 1.5rem auto' }}>
            A gente entende a demanda, organiza o caminho e responde rápido.
          </p>
          <p className={styles.subtitle} style={{ margin: '0 auto 3rem auto', fontSize: '1rem', color: '#888' }}>
            Você manda o básico da demanda. A SnapVisual analisa, responde rápido e indica a solução mais direta para melhorar sua apresentação no digital.
          </p>

          <button onClick={() => setModalOpen(true)} className={`${styles.btn} ${styles.btnPrimary} ${styles.btnMega}`}>
            Quero melhorar minha marca
          </button>

          <div className={styles.guarantees}>
            <span className={styles.guaranteeItem}>
              <CheckCircle2 size={16} /> Resposta em poucas horas
            </span>
            <span className={styles.guaranteeItem}>
              <CheckCircle2 size={16} /> Atendimento direto, sem robôs
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
            <Image src="/snapvisual-logo.svg" alt="SnapVisual" width={420} height={84} className={styles.footerLogo} />
            <p className={styles.footerPhrase}>Visual comercial para negócios que querem parecer mais fortes no digital.</p>
            <div className={styles.footerLinks}>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className={styles.footerLink}>WhatsApp</a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className={styles.footerLink}>Instagram</a>
              <a href={PORTFOLIO_URL} target="_blank" rel="noreferrer" className={styles.footerLink}>Portfólio</a>
            </div>
            <p style={{ color: '#555', fontSize: '0.8rem', marginTop: '2rem' }}>
              &copy; {new Date().getFullYear()} SnapVisual.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}

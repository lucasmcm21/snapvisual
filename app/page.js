import styles from './page.module.css'
import LeadForm from '@/components/LeadForm'
import { CheckCircle2, Zap, LayoutTemplate, MessageSquare, Instagram, LayoutDashboard, Send } from 'lucide-react'

// Placeholders conforme solicitado
const PORTFOLIO_URL = '#'
const INSTAGRAM_URL = '#'
const WHATSAPP_URL = '#'

export default function Home() {
  return (
    <main>
      {/* 1. HERO */}
      <section className={styles.hero}>
        <h1 className={styles.heroHeadline}>
          Fim do visual amador. <br />
          <span className={styles.heroHighlight}>Sua marca pronta para vender.</span>
        </h1>
        <p className={styles.heroSub}>
          Nós somos a Snap Visual: ajudamos pequenos negócios a se destacarem no digital com soluções visuais simples, rápidas e comerciais.
        </p>
        <div className={styles.heroActions}>
          <a href={WHATSAPP_URL} className={`${styles.btn} ${styles.btnPrimary}`}>
            Falar pelo WhatsApp
          </a>
          <a href={PORTFOLIO_URL} className={`${styles.btn} ${styles.btnSecondary}`}>
            Ver Trabalhos Anteriores
          </a>
        </div>
      </section>

      {/* 2. O QUE A SNAP VISUAL FAZ */}
      <section className={`${styles.section} ${styles.container}`} id="servicos">
        <div className={styles.textCenter}>
          <h2 className={styles.title}>O que nós entregamos</h2>
          <p className={styles.subtitle}>
            Chega de templates genéricos ou depender de agências imprevisíveis. Desenvolvemos materiais que dão resultado com foco em empresas locais.
          </p>
        </div>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <Instagram className={styles.serviceIcon} size={40} />
            <h3 className={styles.serviceTitle}>Posts e Reels</h3>
            <p className={styles.serviceDesc}>Artes atrativas e comerciais para o Instagram e edições de vídeos curtos pensadas para engajar clientes de forma rápida.</p>
          </div>
          <div className={styles.serviceCard}>
            <LayoutDashboard className={styles.serviceIcon} size={40} />
            <h3 className={styles.serviceTitle}>Materiais Rápidos</h3>
            <p className={styles.serviceDesc}>Avisos, cardápios, convites e peças promocionais diagramadas de modo limpo e focado na legibilidade.</p>
          </div>
          <div className={styles.serviceCard}>
            <LayoutTemplate className={styles.serviceIcon} size={40} />
            <h3 className={styles.serviceTitle}>Landing Pages</h3>
            <p className={styles.serviceDesc}>Sua página focada em converter visitantes. Sem distrações, com carregamento rápido e voltada direto para as vendas.</p>
          </div>
        </div>
      </section>

      {/* 3. PARA QUEM É */}
      <section className={`${styles.section} ${styles.audienceSection}`}>
        <div className={`${styles.container} ${styles.textCenter}`}>
          <h2 className={styles.title}>Feito para Negócios Locais</h2>
          <p className={styles.subtitle}>
            Entendemos as dores e velocidades do seu dia a dia. Chegamos para ser um parceiro ágil.
          </p>
          <div className={styles.audienceTags}>
            <span className={styles.audienceTag}>Restaurantes</span>
            <span className={styles.audienceTag}>Hamburguerias</span>
            <span className={styles.audienceTag}>Lojas</span>
            <span className={styles.audienceTag}>Barbearias</span>
            <span className={styles.audienceTag}>Serviços Locais</span>
            <span className={styles.audienceTag}>Microempreendedores</span>
            <span className={styles.audienceTag}>Negócios de Bairro</span>
          </div>
        </div>
      </section>

      {/* 4. DIFERENCIAIS */}
      <section className={`${styles.section} ${styles.container}`}>
        <div className={styles.textCenter}>
          <h2 className={styles.title}>Por que escolher a Snap Visual?</h2>
          <p className={styles.subtitle}>
            Não somos uma agência corporativa cheia de reuniões teóricas. Somos práticos, entregando o valor real diretamente para a sua vitrine digital.
          </p>
        </div>
        <div className={styles.diffsGrid}>
          <div className={styles.diffItem}>
            <Zap className={styles.diffIcon} size={32} />
            <div className={styles.diffContent}>
              <h3>Agilidade na Entrega</h3>
              <p>Trabalhamos em um formato rápido para que sua atuação não perca o momento comercial, acelerando suas vendas.</p>
            </div>
          </div>
          <div className={styles.diffItem}>
            <CheckCircle2 className={styles.diffIcon} size={32} />
            <div className={styles.diffContent}>
              <h3>Clareza Funcional</h3>
              <p>Uma comunicação visual 100% focada em leitura e legibilidade para quem não tem tempo a perder na tela do celular.</p>
            </div>
          </div>
          <div className={styles.diffItem}>
            <MessageSquare className={styles.diffIcon} size={32} />
            <div className={styles.diffContent}>
              <h3>Apoio sem Burocracia</h3>
              <p>O atendimento é prático e direto. Nós evitamos jargões para resolver o que sua rede social e sua marca de fato demandam da forma mais leve possível.</p>
            </div>
          </div>
          <div className={styles.diffItem}>
            <Send className={styles.diffIcon} size={32} />
            <div className={styles.diffContent}>
              <h3>Estética Comercial</h3>
              <p>O foco não é produzir uma arte que pareça conceitual ou experimental, é ter um posicionamento que transmita qualidade e convide ao consumo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FORMULÁRIO DE INTERESSE */}
      <section className={`${styles.section} ${styles.formSection}`} id="contato">
        <div className={styles.container}>
          <div className={styles.textCenter}>
            <h2 className={styles.title}>Vamos melhorar o seu visual?</h2>
            <p className={styles.subtitle} style={{ marginBottom: '2rem' }}>
              Deixe suas informações. Faremos contato sem complicações para propor a solução certa.
            </p>
          </div>
          <LeadForm />
        </div>
      </section>

      {/* 6. CHAMADA FINAL */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaHeadline}>
            Seu negócio precisa e merece uma <br />
            <span className={styles.heroHighlight}>marca atrativa e confiante.</span>
          </h2>
          <a href={WHATSAPP_URL} className={`${styles.btn} ${styles.btnPrimary}`}>
            Iniciar nossa conversa agora
          </a>
        </div>
      </section>

      {/* 7. RODAPÉ */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerBrand}>
            S<span>V</span> SNAPVISUAL
          </div>
          <div className={styles.footerLinks}>
            <a href={INSTAGRAM_URL} className={styles.footerLink}>Instagram</a>
            <a href={PORTFOLIO_URL} className={styles.footerLink}>Portfólio</a>
            <a href={WHATSAPP_URL} className={styles.footerLink}>Fale Conosco</a>
          </div>
          <p className={styles.footerCopy}>
            &copy; {new Date().getFullYear()} Snap Visual. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  )
}

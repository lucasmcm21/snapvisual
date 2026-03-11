import { League_Spartan, Montserrat } from 'next/font/google'
import './globals.css'

const leagueSpartan = League_Spartan({
  subsets: ['latin'],
  variable: '--font-league-spartan',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata = {
  title: 'Snap Visual | Soluções Visuais Ágeis para Pequenos Negócios',
  description: 'Traga uma presença visual profissional e moderna para o seu negócio sem depender de agências caras. Posts, landing pages e reels para estabelecimentos locais.',
  openGraph: {
    title: 'Snap Visual | Soluções Visuais Ágeis',
    description: 'Apoio visual sem burocracia para pequenos negócios locais. Posts para Instagram, reels e landing pages focadas em conversão.',
    url: 'https://snapvisual.com.br',
    siteName: 'Snap Visual',
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${leagueSpartan.variable} ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  )
}

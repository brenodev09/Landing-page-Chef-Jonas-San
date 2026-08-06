import { useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useRolagemSuave } from './hooks/useRolagemSuave.js'
import Header from './components/Header/Header.jsx'
import Hero from './components/Hero/Hero.jsx'
import Servicos from './components/Servicos/Servicos.jsx'
import Galeria from './components/Galeria/Galeria.jsx'
import SobreChef from './components/SobreChef/SobreChef.jsx'
import Certificacoes from './components/Certificacoes/Certificacoes.jsx'
import Processo from './components/Processo/Processo.jsx'
import Depoimentos from './components/Depoimentos/Depoimentos.jsx'
import FAQ from './components/FAQ/FAQ.jsx'
import CTAFinal from './components/CTAFinal/CTAFinal.jsx'
import Footer from './components/Footer/Footer.jsx'
import estilos from './App.module.css'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const referenciaApp = useRef(null)

  useRolagemSuave()

  return (
    <div ref={referenciaApp} className={estilos.aplicativo}>
      <Header />
      <main>
        <Hero />
        <Servicos />
        <Processo />
        <Galeria />
        <SobreChef />
        <Certificacoes />
        <Depoimentos />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
    </div>
  )
}

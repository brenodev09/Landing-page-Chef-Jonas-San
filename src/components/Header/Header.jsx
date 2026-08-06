import { useEffect, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { rolarAte } from '../../utils/rolarAte.js'
import estilos from './Header.module.css'

const LINKS_NAVEGACAO = [
  { rotulo: 'Serviços', alvo: '#servicos' },
  { rotulo: 'Processo', alvo: '#processo' },
  { rotulo: 'Galeria', alvo: '#galeria' },
  { rotulo: 'O Chef', alvo: '#sobre' },
  { rotulo: 'Autoridade', alvo: '#autoridade' },
  { rotulo: 'Depoimentos', alvo: '#depoimentos' },
]

export default function Header() {
  const referenciaCabecalho = useRef(null)
  const [menuAberto, setMenuAberto] = useState(false)
  const [rolado, setRolado] = useState(false)

  useEffect(() => {
    const aoRolar = () => setRolado(window.scrollY > 40)
    window.addEventListener('scroll', aoRolar, { passive: true })
    return () => window.removeEventListener('scroll', aoRolar)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuAberto ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuAberto])

  useGSAP(() => {
    gsap.fromTo(
      referenciaCabecalho.current,
      { yPercent: -100, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 1.1, ease: 'power3.out', delay: 0.2 }
    )
  }, { scope: referenciaCabecalho })

  const aoClicarLink = (alvo) => {
    setMenuAberto(false)
    rolarAte(alvo)
  }

  return (
    <header
      ref={referenciaCabecalho}
      className={`${estilos.cabecalho} ${rolado ? estilos.cabecalhoRolado : ''}`}
    >
      <div className={estilos.envolucroCabecalho}>
        <a href="#topo" className={estilos.marca} onClick={(e) => { e.preventDefault(); aoClicarLink('#topo') }}>
          <span className={estilos.seloMarca} aria-hidden="true">匠</span>
          <span className={estilos.textoMarca}>
            JONAS
            <span className={estilos.textoMarcaSub}>Personal Chef · Omakase</span>
          </span>
        </a>

        <nav className={estilos.navegacaoDesktop} aria-label="Navegação principal">
          {LINKS_NAVEGACAO.map((link) => (
            <button key={link.alvo} className={estilos.linkNavegacao} onClick={() => aoClicarLink(link.alvo)}>
              {link.rotulo}
            </button>
          ))}
        </nav>

        <div className={estilos.acoesCabecalho}>
          <button className={estilos.botaoOrcamentoHeader} onClick={() => aoClicarLink('#contato')}>
            Solicitar Orçamento
          </button>
          <button
            className={`${estilos.botaoMenu} ${menuAberto ? estilos.botaoMenuAberto : ''}`}
            onClick={() => setMenuAberto((v) => !v)}
            aria-label="Abrir menu"
            aria-expanded={menuAberto}
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <div className={`${estilos.menuMovel} ${menuAberto ? estilos.menuMovelAberto : ''}`}>
        <button
          className={estilos.botaoFecharMenu}
          onClick={() => setMenuAberto(false)}
          aria-label="Fechar menu"
        >
          <span></span>
          <span></span>
        </button>

        <nav className={estilos.navegacaoMovel} aria-label="Navegação móvel">
          {LINKS_NAVEGACAO.map((link, indice) => (
            <button
              key={link.alvo}
              className={estilos.linkNavegacaoMovel}
              style={{ transitionDelay: `${indice * 40}ms` }}
              onClick={() => aoClicarLink(link.alvo)}
            >
              <span className={estilos.numeroLinkMovel}>0{indice + 1}</span>
              {link.rotulo}
            </button>
          ))}
          <button className={estilos.botaoOrcamentoMovel} onClick={() => aoClicarLink('#contato')}>
            Solicitar Orçamento
          </button>
        </nav>
      </div>
    </header>
  )
}

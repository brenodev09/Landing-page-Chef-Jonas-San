import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import estilos from './Certificacoes.module.css'

gsap.registerPlugin(ScrollTrigger)

const CREDENCIAIS = [
  { titulo: 'Tokyo Sushi Academy', descricao: 'Certificação em técnica Edomae e manejo de peixe cru', ano: '2013' },
  { titulo: 'Itamae Certificado', descricao: 'Reconhecimento formal como itamae por mestre japonês', ano: '2016' },
  { titulo: 'Sommelier de Sakê', descricao: 'Formação em harmonização e curadoria de sakês premium', ano: '2018' },
  { titulo: 'Segurança Alimentar', descricao: 'Certificação internacional em manipulação e HACCP', ano: '2020' },
]

const MENCOES = ['Gastronomia & Negócios', 'Prazeres da Mesa', 'Guia Gourmet SP', 'Rádio Sabor']

export default function Certificacoes() {
  const referenciaSecao = useRef(null)

  useGSAP(() => {
    gsap.fromTo(
      `.${estilos.cartaoCredencial}`,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.85,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: { trigger: `.${estilos.grelhaCredenciais}`, start: 'top 85%' },
      }
    )

    gsap.fromTo(
      `.${estilos.itemMencao}`,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: { trigger: `.${estilos.faixaMencoes}`, start: 'top 90%' },
      }
    )

    gsap.to(`.${estilos.faixaTextoMovel}`, {
      xPercent: -50,
      duration: 22,
      ease: 'none',
      repeat: -1,
    })
  }, { scope: referenciaSecao })

  return (
    <section id="autoridade" ref={referenciaSecao} className={estilos.certificacoesSecao}>
      <div className={estilos.faixaTitulo} aria-hidden="true">
        <div className={estilos.faixaTextoMovel}>
          <span>PRECISÃO&nbsp;&nbsp;·&nbsp;&nbsp;TRADIÇÃO&nbsp;&nbsp;·&nbsp;&nbsp;AUTORIDADE&nbsp;&nbsp;·&nbsp;&nbsp;EXCLUSIVIDADE&nbsp;&nbsp;·&nbsp;&nbsp;</span>
          <span>PRECISÃO&nbsp;&nbsp;·&nbsp;&nbsp;TRADIÇÃO&nbsp;&nbsp;·&nbsp;&nbsp;AUTORIDADE&nbsp;&nbsp;·&nbsp;&nbsp;EXCLUSIVIDADE&nbsp;&nbsp;·&nbsp;&nbsp;</span>
        </div>
      </div>

      <div className="envolucro-largura">
        <div className={estilos.cabecalhoCertificacoes}>
          <p className="rotulo-editorial">Certificações e Autoridade</p>
          <h2 className={estilos.tituloCertificacoes}>Credenciais que sustentam cada prato</h2>
        </div>

        <div className={estilos.grelhaCredenciais}>
          {CREDENCIAIS.map((credencial) => (
            <div key={credencial.titulo} className={estilos.cartaoCredencial}>
              <span className={estilos.anoCredencial}>{credencial.ano}</span>
              <h3 className={estilos.tituloCredencial}>{credencial.titulo}</h3>
              <p className={estilos.descricaoCredencial}>{credencial.descricao}</p>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  )
}

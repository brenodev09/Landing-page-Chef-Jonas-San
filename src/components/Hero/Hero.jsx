import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ParticulasFundo from '../ParticulasFundo/ParticulasFundo.jsx'
import { rolarAte } from '../../utils/rolarAte.js'
import imagemChef from '../../assets/chef-jonas.png'
import estilos from './Hero.module.css'

export default function Hero() {
  const referenciaSecao = useRef(null)
  const referenciaImagem = useRef(null)

  useGSAP(() => {
    const linha = gsap.timeline({ defaults: { ease: 'power3.out' } })

    linha
      .fromTo(`.${estilos.olhoEditorial}`, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.9 }, 0.5)
      .fromTo(
        `.${estilos.linhaTitulo}`,
        { yPercent: 120, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1.15, stagger: 0.12 },
        0.65
      )
      .fromTo(
        `.${estilos.textoIntroducao}`,
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.9 },
        '-=0.55'
      )
      .fromTo(
        `.${estilos.grupoBotoes} > *`,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 },
        '-=0.5'
      )
      .fromTo(
        `.${estilos.estatistica}`,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 },
        '-=0.4'
      )
      .fromTo(
        referenciaImagem.current,
        { clipPath: 'inset(0 0 100% 0)', scale: 1.08 },
        { clipPath: 'inset(0 0 0% 0)', scale: 1, duration: 1.6, ease: 'power4.out' },
        0.35
      )
      .fromTo(
        `.${estilos.simboloFundo}`,
        { opacity: 0 },
        { opacity: 1, duration: 1.8, stagger: 0.25 },
        0.2
      )

    gsap.to(`.${estilos.simboloFundo}`, {
      y: -26,
      duration: 9,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
      stagger: { each: 1.2, from: 'random' },
    })

    gsap.to(`.${estilos.brilhoVermelho}`, {
      opacity: 0.75,
      scale: 1.12,
      duration: 6,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
    })

    const aoMover = (evento) => {
      const { innerWidth, innerHeight } = window
      const x = (evento.clientX / innerWidth - 0.5) * 2
      const y = (evento.clientY / innerHeight - 0.5) * 2
      gsap.to(referenciaImagem.current, {
        x: x * 14,
        y: y * 10,
        duration: 1.2,
        ease: 'power2.out',
      })
      gsap.to(`.${estilos.simboloFundo}`, {
        x: x * -10,
        y: y * -6,
        duration: 1.6,
        ease: 'power2.out',
      })
    }
    window.addEventListener('mousemove', aoMover)

    return () => window.removeEventListener('mousemove', aoMover)
  }, { scope: referenciaSecao })

  return (
    <section id="topo" ref={referenciaSecao} className={estilos.heroSecao}>
      <div className={estilos.camadaFundo}>
        <ParticulasFundo quantidade={54} />
        <div className={estilos.textoFundoVertical} aria-hidden="true">一期一会</div>
        <span className={`${estilos.simboloFundo} ${estilos.simbolo1}`} aria-hidden="true">匠</span>
        <span className={`${estilos.simboloFundo} ${estilos.simbolo2}`} aria-hidden="true">心</span>
        <span className={`${estilos.simboloFundo} ${estilos.simbolo3}`} aria-hidden="true">技</span>
        <div className={estilos.brilhoVermelho} />
        <div className={estilos.gradienteVinheta} />
        <div className={estilos.texturaFumaca} />
      </div>

      <div className={`envolucro-largura ${estilos.conteudoHero}`}>
        <div className={estilos.colunaTexto}>
          <p className={`${estilos.olhoEditorial} rotulo-editorial`}>Alta gastronomia japonesa</p>

          <h1 className={estilos.titulo}>
            <span className={estilos.linhaTituloContainer}>
              <span className={estilos.linhaTitulo}>O ritual do sabor,</span>
            </span>
            <span className={estilos.linhaTituloContainer}>
              <span className={estilos.linhaTitulo}>
                <em>reservado</em>
              </span>
            </span>
            <span className={estilos.linhaTituloContainer}>
              <span className={estilos.linhaTitulo}>para a sua mesa</span>
            </span>
          </h1>

          <p className={estilos.textoIntroducao}>
            Sou Jonas, personal chef especializado em culinária japonesa autoral. Crio experiências
            Omakase, jantares exclusivos e eventos privados onde cada corte, cada prato e cada momento
            são conduzidos com precisão de mestre e sensibilidade de anfitrião.
          </p>

          <div className={estilos.grupoBotoes}>
            <a href="#contato" className={estilos.botaoPrimario} onClick={(e) => { e.preventDefault(); rolarAte('#contato') }}>
              Solicitar Orçamento
            </a>
            <a href="#servicos" className={estilos.botaoSecundario} onClick={(e) => { e.preventDefault(); rolarAte('#servicos') }}>
              Conhecer Experiências
            </a>
          </div>

          <div className={estilos.linhaEstatisticas}>
            <div className={estilos.estatistica}>
              <span className={estilos.numeroEstatistica}>12+</span>
              <span className={estilos.rotuloEstatistica}>Anos de ofício</span>
            </div>
            <div className={estilos.divisorEstatistica} />
            <div className={estilos.estatistica}>
              <span className={estilos.numeroEstatistica}>300+</span>
              <span className={estilos.rotuloEstatistica}>Experiências conduzidas</span>
            </div>
            <div className={estilos.divisorEstatistica} />
            <div className={estilos.estatistica}>
              <span className={estilos.numeroEstatistica}>100%</span>
              <span className={estilos.rotuloEstatistica}>Atendimento sob medida</span>
            </div>
          </div>
        </div>

        <div className={estilos.colunaImagem}>
          <div className={estilos.molduraImagem}>
            <img
              ref={referenciaImagem}
              src={imagemChef}
              alt="Chef Jonas em uniforme preto, segurando uma faca yanagiba de sushi"
              className={estilos.imagemChef}
            />
            <div className={estilos.linhaSeloImagem}>
              <span className={estilos.seloImagem}>匠</span>
              <span className={estilos.textoSeloImagem}>
                Jonas <br /> <em>· Personal Chef</em>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className={estilos.indicadorRolagem}>
        <span className={estilos.linhaRolagem} />
        <span className={estilos.textoRolagem}>Role</span>
      </div>
    </section>
  )
}

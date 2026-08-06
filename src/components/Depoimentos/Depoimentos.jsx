import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Keyboard, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import estilos from './Depoimentos.module.css'

gsap.registerPlugin(ScrollTrigger)

const DEPOIMENTOS = [
  {
    texto:
      'Recebemos quarenta convidados em casa e o Jonas transformou a sala de jantar em um restaurante de Tóquio. Cada tempo foi uma surpresa desenhada com precisão.',
    autor: 'Marina C.',
    contexto: 'Aniversário de casamento, São Paulo',
  },
  {
    texto:
      'Contratamos para um jantar corporativo e o nível de organização, sabor e apresentação elevou a percepção da nossa marca perante os clientes.',
    autor: 'Rafael T.',
    contexto: 'Diretor de Marketing, evento corporativo',
  },
  {
    texto:
      'A consultoria reorganizou completamente nosso cardápio e o fluxo da cozinha. Hoje operamos com muito mais consistência e menos desperdício.',
    autor: 'Studio Umami',
    contexto: 'Consultoria gastronômica',
  },
  {
    texto:
      'Uma experiência que fugiu de tudo que já vivemos em jantares privados. O respeito pela técnica japonesa e o cuidado com cada convidado foram impecáveis.',
    autor: 'Bianca e Felipe',
    contexto: 'Jantar de noivado, São Paulo',
  },
]

export default function Depoimentos() {
  const referenciaSecao = useRef(null)

  useGSAP(() => {
    gsap.fromTo(
      `.${estilos.cabecalhoDepoimentos} > *`,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: `.${estilos.cabecalhoDepoimentos}`, start: 'top 85%' },
      }
    )

    gsap.fromTo(
      `.${estilos.painelCarrossel}`,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: `.${estilos.painelCarrossel}`, start: 'top 85%' },
      }
    )
  }, { scope: referenciaSecao })

  return (
    <section id="depoimentos" ref={referenciaSecao} className={estilos.depoimentosSecao}>
      <div className="envolucro-largura">
        <div className={estilos.cabecalhoDepoimentos}>
          <p className="rotulo-editorial">Confiança</p>
          <h2 className={estilos.tituloDepoimentos}>Vozes de quem já se sentou à mesa</h2>
        </div>

        <div className={estilos.painelCarrossel}>
          <span className={estilos.aspasDecorativas} aria-hidden="true">”</span>

          <button className={`${estilos.setaNavegacao} ${estilos.setaAnterior} depoimentos-seta-anterior`} aria-label="Depoimento anterior">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
              <path d="M15 5L8 12L15 19" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button className={`${estilos.setaNavegacao} ${estilos.setaProxima} depoimentos-seta-proxima`} aria-label="Próximo depoimento">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
              <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <Swiper
            modules={[Navigation, Pagination, Keyboard, A11y]}
            navigation={{
              prevEl: '.depoimentos-seta-anterior',
              nextEl: '.depoimentos-seta-proxima',
            }}
            pagination={{
              el: '.depoimentos-paginacao',
              clickable: true,
              bulletClass: estilos.marcadorDepoimento,
              bulletActiveClass: estilos.marcadorAtivo,
            }}
            keyboard={{ enabled: true }}
            loop
            grabCursor
            speed={650}
            className={estilos.swiperDepoimentos}
          >
            {DEPOIMENTOS.map((item) => (
              <SwiperSlide key={item.autor} className={estilos.slideDepoimento}>
                <blockquote className={estilos.citacaoDepoimento}>{item.texto}</blockquote>
                <div className={estilos.autoriaDepoimento}>
                  <span className={estilos.nomeAutor}>{item.autor}</span>
                  <span className={estilos.contextoAutor}>{item.contexto}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className={`${estilos.navegacaoDepoimentos} depoimentos-paginacao`} />
        </div>
      </div>
    </section>
  )
}

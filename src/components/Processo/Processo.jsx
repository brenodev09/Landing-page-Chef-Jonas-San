import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import estilos from './Processo.module.css'

gsap.registerPlugin(ScrollTrigger)

const ETAPAS_PROCESSO = [
  {
    numero: '01',
    titulo: 'Consulta inicial',
    descricao: 'Conversamos sobre a ocasião, número de convidados, restrições e expectativa de experiência.',
  },
  {
    numero: '02',
    titulo: 'Proposta e menu',
    descricao: 'Envio uma proposta com formato, investimento e uma sugestão de menu alinhada à sazonalidade.',
  },
  {
    numero: '03',
    titulo: 'Curadoria de ingredientes',
    descricao: 'Seleciono fornecedores e peixe de procedência certificada para o dia do evento.',
  },
  {
    numero: '04',
    titulo: 'Preparo e montagem',
    descricao: 'Chego com antecedência para montar cozinha ou balcão, com toda a estrutura necessária.',
  },
  {
    numero: '05',
    titulo: 'A experiência',
    descricao: 'Conduzo o serviço em tempo real, tempo a tempo, com atenção total à sua mesa.',
  },
]

export default function Processo() {
  const referenciaSecao = useRef(null)

  useGSAP(() => {
    gsap.fromTo(
      `.${estilos.cabecalhoProcesso} > *`,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: `.${estilos.cabecalhoProcesso}`, start: 'top 85%' },
      }
    )

    gsap.fromTo(
      `.${estilos.linhaProgresso}`,
      { scaleX: 0 },
      {
        scaleX: 1,
        ease: 'none',
        transformOrigin: 'left',
        scrollTrigger: {
          trigger: `.${estilos.trilhaProcesso}`,
          start: 'top 70%',
          end: 'bottom 60%',
          scrub: 0.6,
        },
      }
    )

    gsap.utils.toArray(`.${estilos.etapaProcesso}`).forEach((etapa) => {
      gsap.fromTo(
        etapa,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: etapa, start: 'top 88%' },
        }
      )
    })
  }, { scope: referenciaSecao })

  return (
    <section id="processo" ref={referenciaSecao} className={estilos.processoSecao}>
      <div className="envolucro-largura">
        <div className={estilos.cabecalhoProcesso}>
          <p className="rotulo-editorial">Como funciona</p>
          <h2 className={estilos.tituloProcesso}>Do primeiro contato à última taça</h2>
          <p className={estilos.descricaoProcesso}>
            Um processo claro, pensado para eliminar incertezas — para que a única surpresa seja o sabor.
          </p>
        </div>

        <div className={estilos.trilhaProcesso}>
          <div className={estilos.linhaBase} aria-hidden="true" />
          <div className={estilos.linhaProgresso} aria-hidden="true" />

          {ETAPAS_PROCESSO.map((etapa) => (
            <div key={etapa.numero} className={estilos.etapaProcesso}>
              <span className={estilos.numeroEtapa}>{etapa.numero}</span>
              <span className={estilos.marcadorEtapa} aria-hidden="true" />
              <h3 className={estilos.tituloEtapa}>{etapa.titulo}</h3>
              <p className={estilos.descricaoEtapa}>{etapa.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

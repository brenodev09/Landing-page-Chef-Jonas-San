import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { rolarAte } from '../../utils/rolarAte.js'
import estilos from './Servicos.module.css'

gsap.registerPlugin(ScrollTrigger)

const LISTA_SERVICOS = [
  {
    id: '01',
    titulo: 'Omakase Privado',
    descricao:
      'A confiança entregue ao chef. Um menu degustação construído em tempo real, à sua mesa, guiado pela sazonalidade do peixe e pela leitura do momento.',
    detalhes: ['Balcão ou mesa, na sua residência', 'Menu construído no dia', '8 a 14 tempos autorais'],
    simbolo: '心',
    imagem: 'https://images.unsplash.com/photo-1681270496598-13c5365730c8?auto=format&fit=crop&w=1200&q=80',
    textoAlternativo: 'Prato de sashimi autoral servido com hashi sobre a mesa',
  },
  {
    id: '02',
    titulo: 'Eventos Corporativos',
    descricao:
      'Experiências gastronômicas para reuniões de alto nível, lançamentos e confraternizações — onde a precisão da cozinha japonesa comunica a mesma exigência da sua marca.',
    detalhes: ['Formatos para 10 a 120 convidados', 'Estações interativas de preparo', 'Curadoria de sakês e destilados'],
    simbolo: '結',
    imagem: 'https://images.unsplash.com/photo-1608060146923-7b8ab13e22bb?auto=format&fit=crop&w=1200&q=80',
    textoAlternativo: 'Convidados reunidos à mesa em um jantar corporativo',
  },
  {
    id: '03',
    titulo: 'Jantares Exclusivos',
    descricao:
      'Celebrações íntimas — aniversários, pedidos, reencontros — desenhadas como um capítulo único, com narrativa, ritmo e apresentação de cada prato.',
    detalhes: ['Roteiro personalizado por ocasião', 'Harmonização sob medida', 'Equipe de sala dedicada'],
    simbolo: '祝',
    imagem: 'https://images.unsplash.com/photo-1601351841251-766245326eee?auto=format&fit=crop&w=1200&q=80',
    textoAlternativo: 'Ambiente intimista de restaurante com iluminação suave',
  },
  {
    id: '04',
    titulo: 'Consultoria Gastronômica',
    descricao:
      'Estruturação de cardápio, técnica de corte, padronização de cozinha e treinamento de equipe para restaurantes e cozinhas privadas que buscam o padrão Omakase.',
    detalhes: ['Diagnóstico de cozinha e cardápio', 'Treinamento técnico da equipe', 'Padrões de qualidade e fornecedores'],
    simbolo: '道',
    imagem: 'https://images.unsplash.com/photo-1538128844159-f08f41bfb169?auto=format&fit=crop&w=1200&q=80',
    textoAlternativo: 'Chef trabalhando com concentração dentro da cozinha',
  },
]

export default function Servicos() {
  const referenciaSecao = useRef(null)

  useGSAP(() => {
    gsap.fromTo(
      `.${estilos.cabecalhoSecao} > *`,
      { opacity: 0, y: 26 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: { trigger: `.${estilos.cabecalhoSecao}`, start: 'top 82%' },
      }
    )

    const blocos = gsap.utils.toArray(`.${estilos.blocoServico}`)
    blocos.forEach((bloco, indice) => {
      gsap.fromTo(
        bloco,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: bloco, start: 'top 85%' },
        }
      )
      gsap.fromTo(
        bloco.querySelector(`.${estilos.painelVisual}`),
        { clipPath: 'inset(0 0 100% 0)' },
        {
          clipPath: 'inset(0 0 0% 0)',
          duration: 1.2,
          ease: 'power4.out',
          scrollTrigger: { trigger: bloco, start: 'top 82%' },
        }
      )
    })
  }, { scope: referenciaSecao })

  return (
    <section id="servicos" ref={referenciaSecao} className={estilos.servicosSecao}>
      <div className="envolucro-largura">
        <div className={estilos.cabecalhoSecao}>
          <p className="rotulo-editorial">Experiências</p>
          <h2 className={estilos.tituloSecao}>Quatro formas de receber a mesma exigência</h2>
          <p className={estilos.descricaoSecao}>
            Cada serviço nasce da mesma disciplina: técnica japonesa, ingrediente no ponto certo e uma
            experiência que não se repete.
          </p>
        </div>

        <div className={estilos.listaServicos}>
          {LISTA_SERVICOS.map((servico, indice) => (
            <article
              key={servico.id}
              className={`${estilos.blocoServico} ${indice % 2 === 1 ? estilos.blocoInvertido : ''}`}
            >
              <div className={estilos.painelVisual}>
                <img
                  src={servico.imagem}
                  alt={servico.textoAlternativo}
                  className={estilos.imagemVisual}
                  loading="lazy"
                />
                <span className={estilos.simboloVisual} aria-hidden="true">{servico.simbolo}</span>
                <div className={estilos.sobreposicaoVisual} aria-hidden="true" />
              </div>

              <div className={estilos.painelTexto}>
                <span className={estilos.indiceServico}>{servico.id}</span>
                <h3 className={estilos.tituloServico}>{servico.titulo}</h3>
                <p className={estilos.descricaoServico}>{servico.descricao}</p>
                <ul className={estilos.listaDetalhes}>
                  {servico.detalhes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a href="#contato" className={estilos.linkServico} onClick={(e) => { e.preventDefault(); rolarAte('#contato') }}>
                  <span>Consultar disponibilidade</span>
                  <span className={estilos.setaServico}>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

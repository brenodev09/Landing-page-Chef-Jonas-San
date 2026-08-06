import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import estilos from './FAQ.module.css'

gsap.registerPlugin(ScrollTrigger)

const PERGUNTAS = [
  {
    pergunta: 'Com quanto tempo de antecedência devo reservar?',
    resposta:
      'Recomendo entre 3 e 6 semanas de antecedência, especialmente para datas em fins de semana e alta temporada de eventos. Para consultorias, o prazo é definido em conjunto conforme a agenda da cozinha.',
  },
  {
    pergunta: 'Vocês levam todos os equipamentos e ingredientes?',
    resposta:
      'Sim. Chego com toda a estrutura necessária — utensílios, equipamentos de corte e os ingredientes selecionados junto a fornecedores de confiança. Você só precisa do espaço.',
  },
  {
    pergunta: 'É possível adaptar o menu para restrições alimentares?',
    resposta:
      'Totalmente. Alergias, intolerâncias e preferências são mapeadas na consulta inicial e o menu é ajustado sem perder a experiência Omakase.',
  },
  {
    pergunta: 'Qual o número mínimo e máximo de convidados?',
    resposta:
      'Experiências Omakase privadas funcionam bem a partir de 2 pessoas. Para eventos corporativos e jantares maiores, já conduzimos experiências para mais de 100 convidados com equipe ampliada.',
  },
  {
    pergunta: 'Como funciona o investimento?',
    resposta:
      'O valor varia conforme formato, número de tempos, ingredientes selecionados (como wagyu ou peixes de temporada) e número de convidados. Após a consulta inicial, envio uma proposta detalhada.',
  },
]

export default function FAQ() {
  const referenciaSecao = useRef(null)
  const [perguntaAberta, setPerguntaAberta] = useState(-1)

  useGSAP(() => {
    gsap.fromTo(
      `.${estilos.cabecalhoFAQ} > *`,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: `.${estilos.cabecalhoFAQ}`, start: 'top 85%' },
      }
    )

    gsap.fromTo(
      `.${estilos.itemFAQ}`,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: { trigger: `.${estilos.listaFAQ}`, start: 'top 85%' },
      }
    )
  }, { scope: referenciaSecao })

  const alternarPergunta = (indice) => {
    setPerguntaAberta((atual) => (atual === indice ? -1 : indice))
  }

  return (
    <section id="faq" ref={referenciaSecao} className={estilos.faqSecao}>
      <div className={`envolucro-largura ${estilos.grelhaFAQ}`}>
        <div className={estilos.cabecalhoFAQ}>
          <p className="rotulo-editorial">Perguntas frequentes</p>
          <h2 className={estilos.tituloFAQ}>Antes de reservar sua experiência</h2>
          <p className={estilos.descricaoFAQ}>
            Não encontrou sua resposta? Fale diretamente comigo pelo formulário de orçamento.
          </p>
        </div>

        <div className={estilos.listaFAQ}>
          {PERGUNTAS.map((item, indice) => {
            const estaAberta = perguntaAberta === indice
            return (
              <div key={item.pergunta} className={`${estilos.itemFAQ} ${estaAberta ? estilos.itemFAQAberto : ''}`}>
                <button
                  className={estilos.botaoPergunta}
                  onClick={() => alternarPergunta(indice)}
                  aria-expanded={estaAberta}
                >
                  <span className={estilos.numeroFAQ}>0{indice + 1}</span>
                  <span className={estilos.textoPergunta}>{item.pergunta}</span>
                  <span className={estilos.iconePergunta} aria-hidden="true">
                    {estaAberta ? '−' : '+'}
                  </span>
                </button>
                <div
                  className={estilos.painelResposta}
                  style={{ gridTemplateRows: estaAberta ? '1fr' : '0fr' }}
                >
                  <p className={estilos.textoResposta}>{item.resposta}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

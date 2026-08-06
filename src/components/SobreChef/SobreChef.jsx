import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import imagemChef from '../../assets/chef-jonas.png'
import estilos from './SobreChef.module.css'

gsap.registerPlugin(ScrollTrigger)

const TRAJETORIA = [
  { ano: '2012', evento: 'Formação em culinária japonesa tradicional, sob mentoria de itamae em Tóquio.' },
  { ano: '2015', evento: 'Chef de cozinha em restaurante Omakase premiado, especialização em corte e maturação de peixe.' },
  { ano: '2019', evento: 'Transição para atendimento privado — nasce o Personal Chef Omakase sob demanda.' },
  { ano: '2023', evento: 'Consultoria para cozinhas privadas e restaurantes em padronização de técnica e cardápio.' },
]

const ESPECIALIZACOES = ['Corte Edomae', 'Maturação de peixe', 'Fermentação e shoyu artesanal', 'Curadoria de sakê']

export default function SobreChef() {
  const referenciaSecao = useRef(null)

  useGSAP(() => {
    gsap.fromTo(
      `.${estilos.imagemEditorial}`,
      { clipPath: 'inset(0 0 100% 0)' },
      {
        clipPath: 'inset(0 0 0% 0)',
        duration: 1.3,
        ease: 'power4.out',
        scrollTrigger: { trigger: `.${estilos.colunaImagemSobre}`, start: 'top 78%' },
      }
    )

    gsap.fromTo(
      `.${estilos.colunaConteudoSobre} > *`,
      { opacity: 0, y: 28 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: { trigger: `.${estilos.colunaConteudoSobre}`, start: 'top 78%' },
      }
    )

    gsap.fromTo(
      `.${estilos.itemTrajetoria}`,
      { opacity: 0, x: -24 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.14,
        ease: 'power3.out',
        scrollTrigger: { trigger: `.${estilos.linhaDoTempo}`, start: 'top 82%' },
      }
    )

    gsap.fromTo(
      `.${estilos.linhaVerticalTempo}`,
      { scaleY: 0 },
      {
        scaleY: 1,
        duration: 1.4,
        ease: 'power2.inOut',
        transformOrigin: 'top',
        scrollTrigger: { trigger: `.${estilos.linhaDoTempo}`, start: 'top 82%' },
      }
    )
  }, { scope: referenciaSecao })

  return (
    <section id="sobre" ref={referenciaSecao} className={estilos.sobreSecao}>
      <div className={`envolucro-largura ${estilos.grelhaSobre}`}>
        <div className={estilos.colunaImagemSobre}>
          <div className={estilos.molduraEditorial}>
            <img src={imagemChef} alt="Chef Jonas em pose editorial, uniforme preto de itamae" className={estilos.imagemEditorial} />
          </div>
          <span className={estilos.legendaVertical}>Kyoto · São Paulo · 2012 — presente</span>
        </div>

        <div className={estilos.colunaConteudoSobre}>
          <p className="rotulo-editorial">O Chef</p>
          <h2 className={estilos.tituloSobre}>
            Formado na disciplina, <br /> dedicado à mesa do outro
          </h2>
          <p className={estilos.paragrafoSobre}>
            Minha trajetória começou com um princípio simples, transmitido por meus mentores em Tóquio:
            a técnica existe para servir o ingrediente, e o ingrediente existe para servir o convidado.
            Depois de anos em cozinhas de alta gastronomia japonesa, decidi levar esse padrão para dentro
            de casas, escritórios e celebrações — onde a experiência se torna pessoal.
          </p>
          <p className={estilos.paragrafoSobre}>
            Hoje conduzo experiências Omakase privadas com o mesmo rigor de um restaurante estrelado,
            mas com a intimidade de um chef que cozinha só para você.
          </p>

          <div className={estilos.blocoEspecializacoes}>
            <span className={estilos.rotuloBloco}>Especializações</span>
            <ul className={estilos.listaEspecializacoes}>
              {ESPECIALIZACOES.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className={estilos.linhaDoTempo}>
            <span className={estilos.linhaVerticalTempo} aria-hidden="true" />
            {TRAJETORIA.map((item) => (
              <div key={item.ano} className={estilos.itemTrajetoria}>
                <span className={estilos.pontoTempo} aria-hidden="true" />
                <span className={estilos.anoTempo}>{item.ano}</span>
                <p className={estilos.eventoTempo}>{item.evento}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

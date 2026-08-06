import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import GaleriaItemVideo from './GaleriaItemVideo.jsx'
import imagemPokeBowl from '../../assets/galeria/poke-bow.jpg'
import imagemSushiMoriawase from '../../assets/galeria/sushi-moriawase.jpg'
import imagemTartarFranco from '../../assets/galeria/tartar-franco-niponico.jpg'
import imagemTartarEbi from '../../assets/galeria/tartar-ebi-avocado.jpg'
import imagemSashimis from "../../assets/galeria/sashimis.jpg"
import imagemUsuzukuri from "../../assets/galeria/usuzukuri-fibonacci.jpg"
import imagemSpaghetti from "../../assets/galeria/Spaghetti.jpg"
import videoAtendimento1 from '../../assets/galeria/atendimento-presencial.mp4'
import videoAtendimento2 from '../../assets/galeria/atendimento-presencial-2.mp4'
import estilos from './Galeria.module.css'

gsap.registerPlugin(ScrollTrigger)

const ITENS_GALERIA = [
  {
    id: 1,
    tipo: 'imagem',
    legenda: 'Poke autoral, atum e abacate',
    categoria: 'Pratos',
    altura: 'baixo',
    origem: imagemPokeBowl,
  },
  {
    id: 2,
    tipo: 'video',
    legenda: 'Omakase ao vivo, atendimento à mesa',
    categoria: 'Eventos',
    altura: 'alto',
    origem: videoAtendimento1,
  },
  {
    id: 3,
    tipo: 'imagem',
    legenda: 'Moriawase, seleção de sashimi e nigiri',
    categoria: 'Pratos',
    altura: 'medio',
    origem: imagemSushiMoriawase,
  },
  {
    id: 4,
    tipo: 'imagem',
    legenda: 'Tartar franco-nipônico, caviar e trufa',
    categoria: 'Pratos',
    altura: 'medio',
    origem: imagemTartarFranco,
  },
  {
    id: 5,
    tipo: 'video',
    legenda: 'Bastidores do preparo, atendimento privado',
    categoria: 'Preparo',
    altura: 'alto',
    origem: videoAtendimento2,
  },
  {
    id: 6,
    tipo: 'imagem',
    legenda: 'Tartar de ebi e abacate, toque cítrico',
    categoria: 'Pratos',
    altura: 'baixo',
    origem: imagemTartarEbi,
  },
  {
    id: 7,
    tipo: 'imagem',
    legenda: 'Sashimis frescos e selecionados',
    categoria: 'Pratos',
    altura: 'medio',
    origem: imagemSashimis,
  },
  {
    id: 8,
    tipo: 'imagem',
    legenda: 'Usuzukuri Fibonacci',
    categoria: 'Pratos',
    altura: 'medio',
    origem: imagemUsuzukuri,
  },
  {
    id: 9,
    tipo: 'imagem',
    legenda: 'Spaghetti com mexilhões, caviar e cogumelos shiitake',
    categoria: 'Pratos',
    altura: 'medio',
    origem: imagemSpaghetti,
  },
]

export default function Galeria() {
  const referenciaSecao = useRef(null)

  useGSAP(() => {
    gsap.fromTo(
      `.${estilos.cabecalhoGaleria} > *`,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: `.${estilos.cabecalhoGaleria}`, start: 'top 85%' },
      }
    )

    gsap.utils.toArray(`.${estilos.itemGaleria}`).forEach((item, indice) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 46, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: 'power3.out',
          delay: (indice % 3) * 0.08,
          scrollTrigger: { trigger: item, start: 'top 92%' },
        }
      )
    })
  }, { scope: referenciaSecao })

  return (
    <section id="galeria" ref={referenciaSecao} className={estilos.galeriaSecao}>
      <div className="envolucro-largura">
        <div className={estilos.cabecalhoGaleria}>
          <p className="rotulo-editorial">Registro</p>
          <div className={estilos.titulo}>
            <h2 className={estilos.tituloGaleria}>Um arquivo de momentos e técnica</h2>
            <a target='blank' href="https://www.instagram.com/chef_jonas_san?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className={estilos.linkContato}>Ver mais no Instagram</a>
          </div>
        </div>

        <div className={estilos.grelhaMasonry}>
          {ITENS_GALERIA.map((item) => (
            <figure
              key={item.id}
              className={`${estilos.itemGaleria} ${estilos['altura' + item.altura[0].toUpperCase() + item.altura.slice(1)]}`}
            >
              {item.tipo === 'video' ? (
                <GaleriaItemVideo origem={item.origem} legenda={item.legenda} categoria={item.categoria} />
              ) : (
                <div className={estilos.superficieItem}>
                  <img
                    src={item.origem}
                    alt={item.legenda}
                    className={estilos.imagemItem}
                    loading="lazy"
                  />
                  <div className={estilos.sobreposicaoItem}>
                    <span className={estilos.categoriaItem}>{item.categoria}</span>
                    <figcaption className={estilos.legendaItem}>{item.legenda}</figcaption>
                  </div>
                </div>
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

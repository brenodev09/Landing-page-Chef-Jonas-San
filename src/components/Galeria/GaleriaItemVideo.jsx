import { useRef, useState } from 'react'
import estilos from './Galeria.module.css'

export default function GaleriaItemVideo({ origem, legenda, categoria }) {
  const referenciaVideo = useRef(null)
  const [pausado, setPausado] = useState(false)
  const [semSom, setSemSom] = useState(true)

  const alternarReproducao = (evento) => {
    evento.stopPropagation()
    const video = referenciaVideo.current
    if (!video) return
    if (video.paused) {
      video.play()
      setPausado(false)
    } else {
      video.pause()
      setPausado(true)
    }
  }

  const alternarSom = (evento) => {
    evento.stopPropagation()
    const video = referenciaVideo.current
    if (!video) return
    video.muted = !video.muted
    setSemSom(video.muted)
  }

  return (
    <div className={estilos.superficieItem}>
      <video
        ref={referenciaVideo}
        className={estilos.imagemItem}
        src={origem}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={legenda}
      />

      <span className={estilos.selosVideo} aria-hidden="true">
        <svg viewBox="0 0 24 24" width="13" height="13" fill="none">
          <path d="M6 4L19 12L6 20V4Z" fill="currentColor" />
        </svg>
        Vídeo
      </span>

      <div className={estilos.controlesVideo}>
        <button
          className={estilos.botaoControleVideo}
          onClick={alternarReproducao}
          aria-label={pausado ? 'Reproduzir vídeo' : 'Pausar vídeo'}
        >
          {pausado ? (
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" aria-hidden="true">
              <path d="M7 4L19 12L7 20V4Z" fill="currentColor" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" aria-hidden="true">
              <rect x="6" y="4" width="4" height="16" fill="currentColor" />
              <rect x="14" y="4" width="4" height="16" fill="currentColor" />
            </svg>
          )}
        </button>

        <button
          className={estilos.botaoControleVideo}
          onClick={alternarSom}
          aria-label={semSom ? 'Ativar som' : 'Silenciar vídeo'}
        >
          {semSom ? (
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" aria-hidden="true">
              <path d="M4 9V15H8L13 20V4L8 9H4Z" fill="currentColor" />
              <path d="M17 8L22 16M22 8L17 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" aria-hidden="true">
              <path d="M4 9V15H8L13 20V4L8 9H4Z" fill="currentColor" />
              <path d="M16.5 8.5C17.5 9.5 18 10.7 18 12C18 13.3 17.5 14.5 16.5 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M19 6C20.7 7.7 21.5 9.7 21.5 12C21.5 14.3 20.7 16.3 19 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      <div className={estilos.sobreposicaoItem}>
        <span className={estilos.categoriaItem}>{categoria}</span>
        <span className={estilos.legendaItem}>{legenda}</span>
      </div>
    </div>
  )
}

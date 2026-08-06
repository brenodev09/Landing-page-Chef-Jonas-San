import { useEffect, useRef } from 'react'
import estilos from './ParticulasFundo.module.css'

/**
 * Camada ambiente de partículas flutuantes (cinzas/brasa) desenhada em canvas.
 * Efeito sutil, leve, sem dependencias externas.
 */
export default function ParticulasFundo({ quantidade = 46, className = '' }) {
  const referenciaCanvas = useRef(null)

  useEffect(() => {
    const canvas = referenciaCanvas.current
    if (!canvas) return
    const contexto = canvas.getContext('2d')
    let idQuadro
    let largura, altura
    let particulas = []

    const reduzirMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const redimensionar = () => {
      largura = canvas.offsetWidth
      altura = canvas.offsetHeight
      canvas.width = largura * window.devicePixelRatio
      canvas.height = altura * window.devicePixelRatio
      contexto.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    const criarParticulas = () => {
      particulas = Array.from({ length: quantidade }, () => ({
        x: Math.random() * largura,
        y: Math.random() * altura,
        raio: Math.random() * 1.6 + 0.4,
        velocidadeY: Math.random() * 0.28 + 0.06,
        deriva: Math.random() * 0.4 - 0.2,
        opacidade: Math.random() * 0.5 + 0.15,
        matiz: Math.random() > 0.82 ? 'dourado' : 'branco',
      }))
    }

    const desenhar = () => {
      contexto.clearRect(0, 0, largura, altura)
      particulas.forEach((p) => {
        contexto.beginPath()
        contexto.arc(p.x, p.y, p.raio, 0, Math.PI * 2)
        contexto.fillStyle =
          p.matiz === 'dourado'
            ? `rgba(200, 168, 101, ${p.opacidade})`
            : `rgba(241, 236, 225, ${p.opacidade})`
        contexto.fill()

        if (!reduzirMovimento) {
          p.y -= p.velocidadeY
          p.x += p.deriva * 0.05
          if (p.y < -10) {
            p.y = altura + 10
            p.x = Math.random() * largura
          }
        }
      })
      idQuadro = requestAnimationFrame(desenhar)
    }

    redimensionar()
    criarParticulas()
    desenhar()

    const aoRedimensionar = () => {
      redimensionar()
      criarParticulas()
    }
    window.addEventListener('resize', aoRedimensionar)

    return () => {
      cancelAnimationFrame(idQuadro)
      window.removeEventListener('resize', aoRedimensionar)
    }
  }, [quantidade])

  return <canvas ref={referenciaCanvas} className={`${estilos.canvasParticulas} ${className}`} aria-hidden="true" />
}

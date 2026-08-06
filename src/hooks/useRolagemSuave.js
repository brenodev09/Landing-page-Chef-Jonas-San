import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Inicializa um scroll suave leve (não exagerado) com Lenis,
 * sincronizado ao ticker do GSAP para funcionar corretamente com ScrollTrigger.
 * Respeita a preferência de movimento reduzido do usuário.
 */
export function useRolagemSuave() {
  useEffect(() => {
    const prefereMovimentoReduzido = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefereMovimentoReduzido) return undefined

    const lenis = new Lenis({
      duration: 0.4,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1,
      syncTouch: false,
    })

    window.__lenis = lenis

    lenis.on('scroll', ScrollTrigger.update)

    const aoAtualizarQuadro = (tempo) => {
      lenis.raf(tempo * 1000)
    }
    gsap.ticker.add(aoAtualizarQuadro)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(aoAtualizarQuadro)
      lenis.destroy()
      window.__lenis = null
    }
  }, [])
}

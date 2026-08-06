/**
 * Rola suavemente até o elemento indicado, usando a instância global do
 * Lenis quando disponível (ver useRolagemSuave) e caindo para o
 * comportamento nativo do navegador quando não houver.
 */
export function rolarAte(seletor) {
  const alvo = document.querySelector(seletor)
  if (!alvo) return

  if (window.__lenis) {
    window.__lenis.scrollTo(alvo, { offset: -72, duration: 1.1 })
  } else {
    alvo.scrollIntoView({ behavior: 'smooth' })
  }
}

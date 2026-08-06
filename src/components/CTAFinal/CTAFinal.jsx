import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ParticulasFundo from '../ParticulasFundo/ParticulasFundo.jsx'
import estilos from './CTAFinal.module.css'

gsap.registerPlugin(ScrollTrigger)

export default function CTAFinal() {
  const referenciaSecao = useRef(null)
  const [enviado, setEnviado] = useState(false)

  useGSAP(() => {
    gsap.fromTo(
      `.${estilos.conteudoCTA} > *`,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: `.${estilos.conteudoCTA}`, start: 'top 82%' },
      }
    )

    gsap.fromTo(
      `.${estilos.cartaoFormulario}`,
      { opacity: 0, y: 40, scale: 0.98 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: `.${estilos.cartaoFormulario}`, start: 'top 85%' },
      }
    )
  }, { scope: referenciaSecao })

  const aoEnviar = (evento) => {
    evento.preventDefault()
    setEnviado(true)
  }

  return (
    <section id="contato" ref={referenciaSecao} className={estilos.ctaSecao}>
      <div className={estilos.camadaFundoCTA}>
        <ParticulasFundo quantidade={30} />
        <div className={estilos.brilhoCTA} />
      </div>

      <div className={`envolucro-largura ${estilos.grelhaCTA}`}>
        <div className={estilos.conteudoCTA}>
          <p className="rotulo-editorial">Sua mesa, minha cozinha</p>
          <h2 className={estilos.tituloCTA}>
            Vamos desenhar sua próxima <em>experiência</em>
          </h2>
          <p className={estilos.textoCTA}>
            Conte um pouco sobre a ocasião e retorno em até 24 horas com disponibilidade e proposta
            personalizada.
          </p>

          <div className={estilos.contatosDiretos}>
            <a href="mailto:contato@chefjonas.com.br" className={estilos.linkContato}>contato@chefjonas.com.br</a>
            <a href="https://wa.me/5511999999999" className={estilos.linkContato}>+55 11 99999-9999</a>
            <a href="https://www.instagram.com/chef_jonas_san?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className={estilos.linkContato}>@chef_jonas_san</a>
          </div>
        </div>

        <div className={estilos.cartaoFormulario}>
          {enviado ? (
            <div className={estilos.mensagemSucesso}>
              <span className={estilos.seloSucesso} aria-hidden="true">匠</span>
              <h3>Solicitação recebida</h3>
              <p>Obrigado. Retornarei em breve com os próximos passos para sua experiência.</p>
            </div>
          ) : (
            <form className={estilos.formulario} onSubmit={aoEnviar}>
              <div className={estilos.campoFormulario}>
                <label htmlFor="nome">Nome</label>
                <input id="nome" name="nome" type="text" placeholder="Seu nome completo" required />
              </div>
              <div className={estilos.campoFormulario}>
                <label htmlFor="email">E-mail</label>
                <input id="email" name="email" type="email" placeholder="voce@email.com" required />
              </div>
              <div className={estilos.linhaDupla}>
                <div className={estilos.campoFormulario}>
                  <label htmlFor="servico">Serviço</label>
                  <select id="servico" name="servico" required defaultValue="">
                    <option value="" disabled>Selecione</option>
                    <option value="omakase">Omakase Privado</option>
                    <option value="corporativo">Evento Corporativo</option>
                    <option value="jantar">Jantar Exclusivo</option>
                    <option value="consultoria">Consultoria Gastronômica</option>
                  </select>
                </div>
                <div className={estilos.campoFormulario}>
                  <label htmlFor="convidados">Convidados</label>
                  <input id="convidados" name="convidados" type="number" min="1" placeholder="Ex: 8" />
                </div>
              </div>
              <div className={estilos.campoFormulario}>
                <label htmlFor="mensagem">Conte sobre a ocasião</label>
                <textarea id="mensagem" name="mensagem" rows="3" placeholder="Data desejada, local, preferências..." />
              </div>
              <button type="submit" className={estilos.botaoEnviar}>
                Solicitar Orçamento
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

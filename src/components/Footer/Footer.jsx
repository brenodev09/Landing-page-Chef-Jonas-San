import estilos from './Footer.module.css'
import { rolarAte } from '../../utils/rolarAte.js'

const LINKS_RODAPE = [
  { rotulo: 'Serviços', alvo: '#servicos' },
  { rotulo: 'Processo', alvo: '#processo' },
  { rotulo: 'Galeria', alvo: '#galeria' },
  { rotulo: 'O Chef', alvo: '#sobre' },
  { rotulo: 'FAQ', alvo: '#faq' },
]

const REDES_SOCIAIS = ['Instagram', 'LinkedIn', 'WhatsApp']

export default function Footer() {
  const anoAtual = new Date().getFullYear()

  const aoClicarLink = (alvo) => {
    rolarAte(alvo)
  }

  return (
    <footer className={estilos.rodape}>
      <div className={`envolucro-largura ${estilos.grelheRodape}`}>
        <div className={estilos.blocoMarcaRodape}>
          <div className={estilos.marcaRodape}>
            <span className={estilos.seloRodape} aria-hidden="true">匠</span>
            <span className={estilos.textoMarcaRodape}>JONAS</span>
          </div>
          <p className={estilos.descricaoRodape}>
            Personal chef especializado em culinária japonesa autoral. Omakase privado, eventos
            exclusivos e consultoria gastronômica de alto padrão.
          </p>
        </div>

        <div className={estilos.blocoLinksRodape}>
          <span className={estilos.tituloBlocoRodape}>Navegação</span>
          <nav className={estilos.navegacaoRodape}>
            {LINKS_RODAPE.map((link) => (
              <button key={link.alvo} onClick={() => aoClicarLink(link.alvo)}>{link.rotulo}</button>
            ))}
          </nav>
        </div>

        <div className={estilos.blocoLinksRodape}>
          <span className={estilos.tituloBlocoRodape}>Contato</span>
          <div className={estilos.navegacaoRodape}>
            <a href="mailto:contato@chefjonas.com.br">contato@chefjonas.com.br</a>
            <a href="https://wa.me/5511999999999">+55 11 99999-9999</a>
            <span className={estilos.localizacaoRodape}>São Paulo, Brasil</span>
          </div>
        </div>

        <div className={estilos.blocoLinksRodape}>
          <span className={estilos.tituloBlocoRodape}>Redes</span>
          <div className={estilos.navegacaoRodape}>
            {REDES_SOCIAIS.map((rede) => (
              <a key={rede} href="#" onClick={(e) => e.preventDefault()}>{rede}</a>
            ))}
          </div>
        </div>
      </div>

      <div className={` ${estilos.linhaInferior}`}>
        <span>© {anoAtual} Jonas Personal Chef. Todos os direitos reservados.</span>
        {/* <span className={estilos.assinaturaRodape}>一期一会 — cada encontro, uma vez na vida</span> */}
      </div>
    </footer>
  )
}

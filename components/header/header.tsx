/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Navbar from '../navbar/navbar';
import CTA from './cta';

const Header = () => {
  return (
    <div>
      <Navbar />
      <div className="header">
        <div className="container">
          <div className="hero">
            <h6 className="subtitle">
              <strong>Makz</strong> Tech
            </h6>
            <h1 className="title">
              Criação de Sistemas e Sites Profissionais
            </h1>
            <p className="description">
              Criamos sistemas e sites profissionais sob medida para atender às suas necessidades. Combinamos design moderno e tecnologia de ponta para garantir funcionalidade, eficiência e uma experiência de usuário excepcional. Transforme sua presença digital com nossa expertise.
            </p>

            <div className="buttons">
              <CTA />
            </div>
          </div>
          <div className="image-container">
            <img src="https://sitextec.com.br/wp-content/themes/sitex/assets/images/header.webp"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
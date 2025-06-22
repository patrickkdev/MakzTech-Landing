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
            <p className="subtitle">
              <strong>Makz</strong>Tech
            </p>
            <h1 className="title">
              Conectamos seu negócio ao futuro
            </h1>
            <p className="description">
              Criamos sistemas e sites profissionais sob medida para atender às suas necessidades. Combinamos design moderno e tecnologia de ponta para garantir funcionalidade, eficiência e uma experiência de usuário excepcional. Se o seu negócio precisa de algo objetivo, bem feito e com entrega responsável, a MakzTech pode ajudar.
            </p>
            <div className="buttons">
              <CTA />
            </div>
          </div>
          <div className="image-container">
            <img src="/hero_image.png"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
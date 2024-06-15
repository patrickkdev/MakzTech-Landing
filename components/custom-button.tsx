/* eslint-disable @next/next/no-img-element */

interface props {
  text: string
  href?: string
  onClick?: () => void
  icon?: string
}

const Button = ({ text, href, onClick, icon }: props) => {
  return (
    <a 
      className="custom-button" 
      href={href}
      onClick={onClick}
      target="_blank"
      rel="noreferrer"
    >
      {text}
      {
        icon &&
        <img className='custom-button__icon' alt='icon' src={icon}/>
      }
    </a>
  )
}

export default Button
import Button from "../custom-button";

const CTA = ({hideText}: {hideText?: boolean}) => {
  return (
    <Button
      text={hideText ? "" : "Vamos conversar!"} 
      icon="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/whatsapp.svg" 
      href={"https://api.whatsapp.com/send?phone=5531996442788&text=Olá! Vim através do site: " + window.location.href}
    />
  )
}

export default CTA
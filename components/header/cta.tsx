import Button from "../custom-button";

const CTA = ({hideText}: {hideText?: boolean}) => {
  return (
    <Button
      text={hideText ? "" : "Entre em Contato!"} 
      icon="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/whatsapp.svg" 
      href="https://api.whatsapp.com/send?phone=5531971114423&text=Ol%C3%A1%2C%20vi%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20seu%20trabalho."
    />
  )
}

export default CTA
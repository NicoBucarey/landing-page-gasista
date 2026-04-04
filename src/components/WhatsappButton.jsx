export default function WhatsappButton() {

  const phone = "5492995284941"

  const whatsappLink = `https://wa.me/${phone}?text=Hola,%20te%20contacto%20por%20los%20servicios`

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
      title="Contactar por WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="28"
        height="28"
        fill="white"
      >
        <path d="M16 .4C7.4.4.4 7.4.4 16c0 2.8.7 5.5 2.1 7.9L.1 31.9l8.2-2.2c2.3 1.2 4.9 1.9 7.7 1.9 8.6 0 15.6-7 15.6-15.6S24.6.4 16 .4zm0 28.6c-2.4 0-4.7-.7-6.7-2l-.5-.3-4.9 1.3 1.3-4.8-.3-.5c-1.3-2-2-4.3-2-6.7C2.9 8.7 8.7 2.9 16 2.9s13.1 5.8 13.1 13.1S23.3 29 16 29zm7.2-9.8c-.4-.2-2.4-1.2-2.7-1.3-.4-.1-.6-.2-.9.2-.3.4-1 1.3-1.3 1.6-.2.2-.4.3-.8.1-.4-.2-1.7-.6-3.3-2-1.2-1-2-2.2-2.2-2.6-.2-.4 0-.6.2-.8.2-.2.4-.4.6-.6.2-.2.3-.4.4-.6.1-.2 0-.5-.1-.6-.1-.2-.9-2.1-1.2-2.9-.3-.7-.6-.6-.9-.6h-.8c-.3 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.2 3.3 1.4 3.6c.2.3 2.4 3.7 5.8 5.2.8.3 1.4.5 1.9.7.8.2 1.5.2 2.1.1.6-.1 2.4-1 2.7-2 .3-1 .3-1.8.2-2-.1-.2-.3-.3-.7-.5z"/>
      </svg>
    </a>
  )
}
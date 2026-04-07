import Hero from "./components/Hero"
import Services from "./components/Services"
import DetailedServices from "./components/DetailedServices"
import WhatsappButton from "./components/WhatsappButton"
import Credentials from "./components/Credentials"
import Gallery from "./components/Gallery"
import Location from "./components/Location"


function App() {
  return (
    <>
      <Hero />
      <Services/>
      <DetailedServices />
      <Credentials />
      <Gallery />
      <Location />
      <WhatsappButton />
    </>
  )
}

export default App

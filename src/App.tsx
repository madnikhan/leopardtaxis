import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ServicesBar } from './components/ServicesBar'
import { FaresDestinations } from './components/FaresDestinations'
import { Fleet } from './components/Fleet'
import { Footer } from './components/Footer'
import { WhatsAppButton } from './components/WhatsAppButton'

export default function App() {
  return (
    <div className="site">
      <Header />
      <main>
        <Hero />
        <ServicesBar />
        <FaresDestinations />
        <Fleet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

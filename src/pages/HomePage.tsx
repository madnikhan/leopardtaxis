import { Hero } from '../components/Hero'
import { AreasStrip } from '../components/AreasStrip'
import { FaresDestinations } from '../components/FaresDestinations'
import { usePageMeta } from '../usePageMeta'

export function HomePage() {
  usePageMeta(
    'Leopard Taxis | Warwickshire & Leamington Airport Transfers',
    'Reliable airport transfers and local taxis across Leamington Spa, Warwick and Warwickshire. Fixed rates to Heathrow and Birmingham. Book now.',
    '/',
  )

  return (
    <>
      <Hero />
      <AreasStrip />
      <FaresDestinations />
    </>
  )
}

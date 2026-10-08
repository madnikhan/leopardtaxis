import { Fleet } from '../components/Fleet'
import { PageBanner } from '../components/PageBanner'

export function FleetPage() {
  return (
    <>
      <PageBanner
        title="Our Fleet"
        subtitle="A range of vehicles to suit your needs — from saloon to 8-seaters."
      />
      <Fleet showHeader={false} />
    </>
  )
}

type PageBannerProps = {
  title: string
  subtitle?: string
}

export function PageBanner({ title, subtitle }: PageBannerProps) {
  return (
    <section className="page-banner" aria-label={title}>
      <div className="container page-banner__inner">
        <h1 className="page-banner__title">{title}</h1>
        {subtitle ? <p className="page-banner__subtitle">{subtitle}</p> : null}
      </div>
    </section>
  )
}

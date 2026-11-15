type PageBannerProps = {
  title: string
  subtitle?: string
  compact?: boolean
  areas?: boolean
}

export function PageBanner({ title, subtitle, compact = false, areas = false }: PageBannerProps) {
  const modifier = areas ? ' page-banner--areas' : compact ? ' page-banner--compact' : ''
  return (
    <section className={`page-banner${modifier}`} aria-label={title}>
      <div className="container page-banner__inner">
        <h1 className="page-banner__title">{title}</h1>
        {subtitle ? <p className="page-banner__subtitle">{subtitle}</p> : null}
      </div>
    </section>
  )
}

type IconProps = {
  className?: string
  size?: number
}

export function IconPin({ className, size = 28 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2c-3.9 0-7 3.1-7 7 0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"
      />
    </svg>
  )
}

export function IconPlane({ className, size = 28 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        fill="currentColor"
        d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"
      />
    </svg>
  )
}

export function IconDayOut({ className, size = 28 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2c-3.9 0-7 3.1-7 7 0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"
      />
      <circle cx="18.5" cy="5.5" r="3.2" fill="#0B3D2E" stroke="currentColor" strokeWidth="1.4" />
      <path stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" d="M18.5 4v3M17 5.5h3" />
    </svg>
  )
}

export function IconRoad({ className, size = 28 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        fill="currentColor"
        d="M4 20 9 4h2l-1.2 4H14L12.8 4h2l5 16h-2.2l-1.1-3.5H7.3L6.2 20H4zm4.1-5.5h7.8L14.6 10H9.4L8.1 14.5z"
      />
    </svg>
  )
}

export function IconPhone({ className, size = 22 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        fill="currentColor"
        d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8z"
      />
    </svg>
  )
}

export function IconMail({ className, size = 22 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        fill="currentColor"
        d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z"
      />
    </svg>
  )
}

export function IconCrown({ className, size = 28 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        fill="currentColor"
        d="M3 17h18v3H3v-3zm1-2 3.5-8 4 5 4.5-7L20 15H4z"
      />
    </svg>
  )
}

export function IconWhatsApp({ className, size = 28 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.96.52 3.87 1.5 5.55L2 22l4.8-1.56a9.9 9.9 0 0 0 5.24 1.43h.01c5.46 0 9.89-4.4 9.89-9.83A9.74 9.74 0 0 0 12.04 2zm5.77 13.97c-.24.68-1.42 1.3-1.97 1.38-.5.08-1.14.11-1.84-.12-.42-.14-.97-.31-1.67-.61-2.94-1.27-4.85-4.23-5-4.42-.14-.2-1.18-1.57-1.18-3 0-1.42.74-2.12 1.01-2.41.26-.28.58-.35.77-.35h.55c.18 0 .42-.07.65.5.24.58.82 2 .89 2.14.07.14.12.31.02.5-.1.2-.14.32-.28.5-.14.17-.3.38-.42.51-.14.14-.28.29-.12.57.16.28.7 1.15 1.5 1.86 1.03.92 1.9 1.2 2.17 1.34.27.13.43.11.59-.07.16-.17.68-.79.86-1.06.18-.28.36-.23.61-.14.24.1 1.55.73 1.82.86.26.14.44.2.5.31.07.11.07.66-.17 1.34z"
      />
    </svg>
  )
}

export function VerifiedBadge({ className }: { className?: string }) {
  return (
    <div className={`verified-badge ${className ?? ''}`}>
      <svg className="verified-badge__check" viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
        <circle cx="12" cy="12" r="11" fill="#1877F2" />
        <path
          fill="#fff"
          d="M10.2 15.8 6.7 12.3l1.4-1.4 2.1 2.1 5.1-5.1 1.4 1.4-6.5 6.5z"
        />
      </svg>
      <div className="verified-badge__copy">
        <strong>Meta Verified</strong>
        <span>Authentic business · Trusted by customers</span>
      </div>
    </div>
  )
}

export function GoogleMark({ className, size = 28 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  )
}

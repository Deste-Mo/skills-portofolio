interface IconProps {
  size?: number
  className?: string
}

export function FlagGb({ size = 20, className = "" }: IconProps) {
  return (
    <svg width={size} height={size * 0.75} viewBox="0 0 60 45" className={className}>
      <rect width="60" height="45" fill="#012169" />
      <path d="M0 0l60 45M60 0L0 45" stroke="#fff" strokeWidth="6" />
      <path d="M0 0l60 45M60 0L0 45" stroke="#C8102E" strokeWidth="3" />
      <rect x="25" width="10" height="45" fill="#fff" />
      <rect width="60" y="17.5" height="10" fill="#fff" />
      <rect x="27" width="6" height="45" fill="#C8102E" />
      <rect width="60" y="19.5" height="6" fill="#C8102E" />
    </svg>
  )
}

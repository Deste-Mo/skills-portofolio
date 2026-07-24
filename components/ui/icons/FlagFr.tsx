interface IconProps {
  size?: number
  className?: string
}

export function FlagFr({ size = 20, className = "" }: IconProps) {
  return (
    <svg width={size} height={size * 0.75} viewBox="0 0 60 45" className={className}>
      <rect width="60" height="45" fill="#fff" />
      <rect width="20" height="45" fill="#002395" />
      <rect x="40" width="20" height="45" fill="#ED2939" />
    </svg>
  )
}

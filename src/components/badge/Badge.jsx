import clsx from 'clsx'
import './Badge.css'

export default function Badge({children, shape, color}) {
  return (
    <span className={clsx(
      'badge',
      shape && `${shape}`,
      color && `${color}`
    )}>
      {children}
    </span>
  )
}
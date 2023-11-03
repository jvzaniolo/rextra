import { Link } from '@remix-run/react'
import { cx } from '~/utils/misc'

export function Header({ className }: { className?: string }) {
  return (
    <header
      className={cx(
        'z-10 flex items-center justify-between border-b border-neutral-200 bg-white px-4',
        className,
      )}
    >
      <Link to="/">Rextra</Link>

      <nav className="space-x-4">
        <Link to="/docs">Docs</Link>
      </nav>
    </header>
  )
}

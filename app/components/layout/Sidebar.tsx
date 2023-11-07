import { NavLink } from '@remix-run/react'
import { cx } from '~/utils/misc'

export function Sidebar({ className }: { className?: string }) {
  return (
    <aside
      className={cx(
        'border-r border-neutral-200 p-4 dark:border-neutral-800',
        className,
      )}
    >
      <p className="mb-4 text-xs font-semibold uppercase">Components</p>
      <NavLink
        to="/components/button"
        className="hover:bg-accent-700 aria-[current=page]:bg-accent-700 block rounded-lg px-3 py-2 transition-colors hover:text-white aria-[current=page]:text-white"
      >
        Button
      </NavLink>
    </aside>
  )
}

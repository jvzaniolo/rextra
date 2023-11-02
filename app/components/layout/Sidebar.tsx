import { NavLink } from '@remix-run/react'

export function Sidebar() {
	return (
		<aside className="max-w-xs flex-1 border-r border-neutral-200 p-4">
			<p className="mb-4 text-xs font-semibold uppercase">Components</p>
			<NavLink
				to="/docs/components/button"
				className="block rounded-lg px-3 py-2 transition-colors hover:bg-indigo-700 hover:text-white aria-[current=page]:bg-indigo-700 aria-[current=page]:text-white"
			>
				Button
			</NavLink>
		</aside>
	)
}

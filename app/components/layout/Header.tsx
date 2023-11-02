import { Link } from '@remix-run/react'

export function Header() {
	return (
		<header className="fixed top-0 w-full border-b border-neutral-200 bg-white">
			<div className="flex h-12 items-center justify-between px-4">
				<Link to="/">Rextra</Link>

				<nav className="space-x-4">
					<Link to="/docs">Docs</Link>
				</nav>
			</div>
		</header>
	)
}

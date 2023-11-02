import './index.css'

import { cssBundleHref } from '@remix-run/css-bundle'
import { type LinksFunction } from '@remix-run/node'
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from '@remix-run/react'
import { Header } from './components/layout/Header'
import { Sidebar } from './components/layout/Sidebar'

export const links: LinksFunction = () => [
	...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
]

export default function App() {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				<Header />
				<div className="flex min-h-screen pt-12">
					<Sidebar />
					<div className="mx-auto w-full max-w-2xl px-4">
						<Outlet />
					</div>
				</div>
				<ScrollRestoration />
				<LiveReload />
				<Scripts />
			</body>
		</html>
	)
}

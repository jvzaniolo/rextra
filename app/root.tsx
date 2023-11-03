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
import stylesheetHref from './index.css'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheetHref },
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
        <Header className="sticky top-0 h-12 bg-white" />
        <div className="flex h-full">
          <Sidebar className="sticky top-12 min-h-[calc(100vh-theme(spacing.12))] w-60 shrink-0 self-start" />
          <article className="min-h-[calc(100vh-theme(spacing.12))] flex-1 px-10">
            <Outlet />
          </article>
        </div>
        <ScrollRestoration />
        <LiveReload />
        <Scripts />
      </body>
    </html>
  )
}

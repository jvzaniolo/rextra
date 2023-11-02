import { type MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [
    { title: 'New Rextra App' },
    { name: 'description', content: 'Welcome to Rextra!' },
  ]
}

export default function Index() {
  return (
    <div>
      <h1>Welcome to Rextra</h1>
      <p>Rextra is a documentation template for Remix.</p>
    </div>
  )
}

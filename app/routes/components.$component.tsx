import { json, type DataFunctionArgs, type MetaFunction } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'
import { getMDXComponent } from 'mdx-bundler/client/index.js'
import { useMemo } from 'react'
import { ButtonDemo } from '~/components/demos/button.demo'
import { mdxComponents } from '~/mdx-components'
import { bundleMDXContent } from '~/utils/bundle-mdx-content.server'
import { getMDXContent } from '~/utils/get-mdx-content.server'
import { invariantResponse } from '~/utils/misc'

export async function loader({ params }: DataFunctionArgs) {
  const { component } = params

  invariantResponse(component, 'Missing component param')

  const content = await getMDXContent(component)
  const result = await bundleMDXContent(content)

  return json(result)
}

export const meta: MetaFunction<typeof loader> = ({ data }) =>
  data?.frontmatter.meta

const components = {
  ...mdxComponents,
  ButtonDemo,
}

export default function ComponentsPage() {
  const { code } = useLoaderData<typeof loader>()
  const Component = useMemo(() => getMDXComponent(code), [code])
  return (
    <main>
      <Component components={components} />
      <footer className="mt-12 border-t border-border py-10 text-end">
        <Link
          to="https://github.com/jvzaniolo/rextra/app/content/components/button.mdx"
          className="text-sm font-light text-neutral-600 underline-offset-4 hover:underline hover:[text-decoration-color:_theme(colors.neutral.400)] hover:[text-decoration-width:_1px] dark:text-neutral-400 dark:hover:[text-decoration-color:_theme(colors.neutral.600)]"
          target="_blank"
          rel="noopener noreferrer"
        >
          Edit this page on GitHub
        </Link>
      </footer>
    </main>
  )
}

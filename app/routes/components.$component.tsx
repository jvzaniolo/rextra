import fs from 'node:fs/promises'
import path from 'node:path'
import { json, type DataFunctionArgs, type MetaFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { bundleMDX } from 'mdx-bundler'
import { getMDXComponent } from 'mdx-bundler/client'
import { useMemo } from 'react'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import { Button } from '~/components/Button'
import { invariantResponse } from '~/utils/misc'

export async function loader({ params }: DataFunctionArgs) {
	const { component } = params

	invariantResponse(component, 'Missing component param')

	const source = await fs.readFile(
		path.join('app', 'content', 'components', `${component}.mdx`),
		{ encoding: 'utf-8' },
	)

	const { code, frontmatter } = await bundleMDX({
		source,
		mdxOptions(options) {
			options.rehypePlugins = [
				...(options.rehypePlugins ?? []),
				rehypeSlug,
				rehypeAutolinkHeadings,
				[rehypePrettyCode, { theme: 'moonlight', grid: false }],
			]
			return options
		},
	})

	return json({ code, frontmatter })
}

export const meta: MetaFunction<typeof loader> = ({ data }) =>
	data?.frontmatter.meta

export default function ComponentsPage() {
	const { code } = useLoaderData<typeof loader>()
	const Component = useMemo(() => getMDXComponent(code), [code])
	return <Component components={components} />
}

const components = {
	h1: (props: React.ComponentProps<'h1'>) => (
		<h1 className="mb-4 mt-8 text-4xl font-bold" {...props} />
	),
	pre: (props: React.ComponentProps<'pre'>) => (
		<pre className="mb-4 rounded-lg border border-neutral-800 p-4" {...props} />
	),
	Button,
}

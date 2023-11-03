import { bundleMDX } from 'mdx-bundler'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
// @ts-expect-error - shiki is not typed
import rehypeShiki from 'rehype-shiki'
import rehypeSlug from 'rehype-slug'

export async function bundleMDXContent(content: string) {
  const result = await bundleMDX({
    source: content,
    mdxOptions(options) {
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'wrap' }],
        [
          rehypeShiki,
          {
            theme: 'min-light',
            // theme: 'min-dark',
            useBackground: false,
          },
        ],
      ]

      return options
    },
  })

  return result
}

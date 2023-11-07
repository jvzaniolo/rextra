import remarkHeadings from '@vcarl/remark-headings'
import { bundleMDX } from 'mdx-bundler'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'

export async function bundleMDXContent(content: string) {
  const result = await bundleMDX({
    source: content,
    mdxOptions(options) {
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: 'wrap',
          },
        ],
        () =>
          rehypePrettyCode({
            theme: { light: 'min-light', dark: 'material-theme' },
            keepBackground: false,
          }),
      ]

      options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkHeadings]

      return options
    },
  })

  return result
}

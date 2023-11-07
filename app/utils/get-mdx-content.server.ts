import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export async function getMDXContent(slug: string) {
  const content = await readFile(join('content', 'components', `${slug}.mdx`), {
    encoding: 'utf-8',
  })

  return content
}

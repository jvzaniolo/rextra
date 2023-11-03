import { Link } from '@remix-run/react'

export const mdxComponents = {
  h1: (props: React.ComponentPropsWithoutRef<'h1'>) => (
    <h1
      className="pointer-events-none mb-4 mt-8 scroll-mt-16 text-4xl font-bold"
      {...props}
    />
  ),
  h2: (props: React.ComponentPropsWithoutRef<'h2'>) => (
    <h2 className="mb-4 mt-8 scroll-mt-16 text-3xl" {...props} />
  ),
  h3: (props: React.ComponentPropsWithoutRef<'h3'>) => (
    <h3 className="mb-4 mt-4 scroll-mt-16 text-2xl" {...props} />
  ),
  a: ({ href = '', ...props }: React.ComponentPropsWithoutRef<'a'>) => (
    // The content will be rendered by the MDX engine
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    <Link to={href} {...props} />
  ),
  code: (props: React.ComponentPropsWithoutRef<'code'>) => (
    <code
      className="rounded bg-indigo-50 px-1 py-0.5 text-sm text-indigo-800"
      {...props}
    />
  ),
  pre: (props: React.ComponentProps<'pre'>) => (
    <pre
      className="-mt-px mb-8 rounded-b-lg border border-neutral-200 p-4 text-sm"
      {...props}
    />
  ),
}

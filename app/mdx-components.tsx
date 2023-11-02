export const mdxComponents = {
  h1: (props: React.ComponentProps<'h1'>) => (
    <h1 className="mb-4 mt-8 text-4xl font-bold" {...props} />
  ),
  h2: (props: React.ComponentProps<'h2'>) => (
    <h2 className="mb-4 mt-8 text-3xl" {...props} />
  ),
  h3: (props: React.ComponentProps<'h3'>) => (
    <h3 className="mb-4 mt-4 text-2xl" {...props} />
  ),
  code: (props: React.ComponentProps<'code'>) => (
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

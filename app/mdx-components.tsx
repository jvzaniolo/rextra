import { Link } from '@remix-run/react'
import { Link as LinkIcon, Copy, Check } from 'lucide-react'
import { useId, useState } from 'react'

export const mdxComponents = {
  h1: (props: React.ComponentPropsWithoutRef<'h1'>) => (
    <h1
      className="pointer-events-none mb-4 mt-8 scroll-mt-16 text-4xl font-bold"
      {...props}
    />
  ),
  h2: ({ children, ...props }: React.ComponentPropsWithoutRef<'h2'>) => (
    <h2
      className="group mb-4 mt-8 flex scroll-mt-16 items-baseline gap-2 text-3xl"
      {...props}
    >
      {children}
      <LinkIcon
        size={16}
        className="hidden text-neutral-500 group-hover:inline dark:text-neutral-400"
      />
    </h2>
  ),
  h3: ({ children, ...props }: React.ComponentPropsWithoutRef<'h3'>) => (
    <h3
      className="group mb-4 mt-4 flex scroll-mt-16 items-baseline gap-2 text-2xl"
      {...props}
    >
      {children}
      <LinkIcon
        size={16}
        className="hidden text-neutral-500 group-hover:inline dark:text-neutral-400"
      />
    </h3>
  ),
  a: ({ href = '', ...props }: React.ComponentPropsWithoutRef<'a'>) => (
    // The content will be rendered by the MDX engine
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    <Link to={href} {...props} />
  ),
  hr: (props: React.ComponentPropsWithoutRef<'hr'>) => (
    <hr
      className="my-8 border-neutral-200 dark:border-neutral-800"
      {...props}
    />
  ),
  code: function Code({
    children,
    ...props
  }: React.ComponentPropsWithoutRef<'code'>) {
    const id = useId()
    return (
      <code
        id={id}
        className="dark:bg-accent-500/20 dark:text-accent-100 group rounded px-1 py-0.5 text-sm data-[language]:relative data-[language]:rounded-lg data-[language]:border data-[language]:border-border data-[language]:bg-transparent data-[language]:p-4"
        {...props}
      >
        {children}
        <CopyButton codeBlockId={id} />
      </code>
    )
  },
}

function CopyButton({ codeBlockId }: { codeBlockId: string }) {
  const [isCopied, setIsCopied] = useState(false)

  async function copyTextToClipboard(text: string) {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text)
    } else {
      return document.execCommand('copy', true, text)
    }
  }

  async function handleCopyToClipboard() {
    try {
      const content = document.getElementById(codeBlockId)?.textContent
      if (!content) return
      await copyTextToClipboard(content)
      setIsCopied(true)
      setTimeout(() => {
        setIsCopied(false)
      }, 2000)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <button
      className="absolute right-2 top-2 hidden rounded-md border border-border bg-background p-2 text-sm group-data-[language]:group-hover:inline dark:text-white"
      onClick={handleCopyToClipboard}
      aria-label="Copy code to clipboard"
    >
      {isCopied ? (
        <Check size={16} className="text-green-600 dark:text-green-500" />
      ) : (
        <Copy size={16} />
      )}
    </button>
  )
}

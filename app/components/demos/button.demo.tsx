import { Bookmark, ShoppingCart } from 'lucide-react'
import { Button } from '~/components/Button'

export const ButtonDemo = {
  Default: () => (
    <div className="mb-4 mt-8 rounded-lg border border-border p-4">
      <Button>
        <Bookmark size={16} />
        Bookmark
      </Button>
    </div>
  ),
  Variants: () => (
    <div className="mb-4 mt-8 rounded-lg border border-border p-4">
      <div className="flex gap-4">
        <Button variant="solid">Edit profile</Button>
        <Button variant="outline">Edit profile</Button>
      </div>
    </div>
  ),
  Customizing: () => (
    <div className="mb-4 mt-8 rounded-lg border border-border p-4">
      <Button variant="unset" className="rounded-none bg-black text-white">
        <ShoppingCart size={16} />
        Add to cart
      </Button>
    </div>
  ),
}

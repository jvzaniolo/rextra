import { cn } from '~/utils/misc'

export function Button({
	className,
	...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
	return (
		<button
			type="button"
			className={cn(
				'rounded-lg bg-indigo-600 px-3 py-2 font-medium text-white shadow',
				className,
			)}
			{...props}
		/>
	)
}

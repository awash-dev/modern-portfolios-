import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
    size?: 'sm' | 'md' | 'lg'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
        const variants = {
            primary: "bg-primary text-primary-foreground hover:opacity-90",
            secondary: "bg-secondary text-secondary-foreground hover:opacity-90",
            outline: "border-2 border-border bg-transparent hover:bg-surface text-foreground font-medium",
            ghost: "bg-transparent hover:bg-surface text-foreground font-medium",
        }

        const sizes = {
            sm: "h-9 px-4 text-sm rounded-lg",
            md: "h-11 px-6 text-base rounded-lg",
            lg: "h-14 px-8 text-lg rounded-2xl",
        }

        return (
            <button
                className={cn(
                    "inline-flex items-center justify-center transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]",
                    variants[variant],
                    sizes[size],
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }

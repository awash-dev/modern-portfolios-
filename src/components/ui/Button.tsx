import * as React from "react"
import { cn } from "@/lib/utils"

import { Loader2 } from "lucide-react"

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
    size?: 'sm' | 'md' | 'lg'
    isLoading?: boolean
    leftIcon?: React.ReactNode
    rightIcon?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', isLoading, leftIcon, rightIcon, children, disabled, ...props }, ref) => {
        const variants = {
            primary: "bg-primary text-white shadow-lg shadow-primary/20 hover:brightness-110",
            secondary: "bg-secondary text-white hover:brightness-110",
            outline: "border border-white/10 bg-white/5 hover:bg-white/10 text-white backdrop-blur-sm",
            ghost: "bg-transparent hover:bg-white/10 text-white",
        }

        const sizes = {
            sm: "h-9 px-4 text-xs font-bold uppercase tracking-wider",
            md: "h-12 px-6 text-sm font-bold uppercase tracking-widest",
            lg: "h-16 px-8 text-base font-bold uppercase tracking-[0.2em]",
        }

        return (
            <button
                className={cn(
                    "inline-flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.97] rounded-2xl md:rounded-3xl",
                    variants[variant],
                    sizes[size],
                    className
                )}
                ref={ref}
                disabled={isLoading || disabled}
                {...props}
            >
                {isLoading ? (
                    <>
                        <Loader2 className="animate-spin" size={18} />
                        <span>Processing...</span>
                    </>
                ) : (
                    <>
                        {leftIcon && <span className="shrink-0">{leftIcon}</span>}
                        {children}
                        {rightIcon && <span className="shrink-0">{rightIcon}</span>}
                    </>
                )}
            </button>
        )
    }
)
Button.displayName = "Button"

export { Button }

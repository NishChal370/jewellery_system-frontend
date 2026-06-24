import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@lib/utils";

const buttonVariants = cva(
    [
        "relative inline-flex items-center justify-center ",
        "cursor-pointer",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "focus-visible:outline-none focus-visible:ring-2",
        "focus-visible:ring-button-accent/30 focus-visible:ring-offset-2",
    ],
    {
        variants: {
            variant: {
                primary: [
                    "block",
                    "rounded-input",
                    "bg-primary",
                    "text-primary-foreground font-medium tracking-button",
                    "transition-[background-color,transform] duration-200",
                    "hover:bg-brand-hover",
                    "active:scale-[0.989]",
                ],

                secondary: [
                    "w-full gap-2",
                    "rounded-[10px]",
                    "border border-button-border",
                    "text-button-sm font-medium",
                    "text-accent-foreground",
                    "transition-[border-color,color,background-color] duration-200",
                    "active:scale-[0.989]",
                    "hover:border-border-hover",
                    "hover:text-foreground",
                ],
                text: [
                    "w-auto border-0 bg-transparent p-0",
                    "text-inherit font-medium",
                    "text-button-accent",
                    "transition-colors duration-200",
                    "active:scale-[0.989]",
                    "hover:underline",
                    "hover:text-button-glow",
                ],
            },

            size: {
                default: "",
                sm: "min-h-9 text-body-sm",
                md: "min-h-11",
                lg: "min-h-12 px-6 text-base",
                icon: "size-10 p-0",
            },

            fullWidth: {
                true: "w-full",
                false: "w-auto",
            },
        },

        defaultVariants: {
            variant: "primary",
            size: "md",
            fullWidth: true,
        },
    },
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    loading?: boolean;
    loadingText?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className,
            variant,
            size,
            fullWidth,
            loading = false,
            loadingText = "Loading...",
            disabled,
            children,
            type = "button",
            ...props
        },
        ref,
    ) => {
        return (
            <button
                ref={ref}
                type={type}
                className={cn(
                    buttonVariants({
                        variant,
                        size,
                        fullWidth,
                    }),
                    className,
                )}
                disabled={disabled || loading}
                aria-busy={loading}
                {...props}
            >
                <span className="relative z-10 inline-flex items-center justify-center gap-2">
                    {loading && (
                        <span
                        aria-hidden="true"
                        className="size-4 animate-spin rounded-full border-2 border-current border-r-transparent"
                        />
                    )}

                    {loading ? loadingText : children}
                </span>
            </button>
        );
    },
);

Button.displayName = "Button";

export default Button;
import {
  forwardRef,
  type InputHTMLAttributes,
  type ReactNode,
} from "react";
import {
  cva,
  type VariantProps,
} from "class-variance-authority";

import { cn } from "@lib/utils";

const inputVariants = cva(
    [
        "w-full",
        "rounded-input",
        "border",
        "bg-input-background",
        "font-sans text-input font-normal",
        "text-foreground",
        "outline-none",
        "transition-[border-color,box-shadow,background-color]",
        "duration-200",
        "disabled:cursor-not-allowed",
        "disabled:opacity-50",
        "read-only:cursor-default",
    ],
    {
        variants: {
            state: {
                default: [
                    "border-border",
                    "focus:border-brand",
                    "focus:bg-brand/[0.04]",
                    "focus:shadow-focus",
                ],

                error: [
                    "border-destructive",
                    "focus:border-destructive",
                    "focus:ring-2",
                    "focus:ring-destructive/15",
                ],

                success: [
                    "border-emerald-600",
                    "focus:border-emerald-600",
                    "focus:ring-2",
                    "focus:ring-emerald-600/15",
                ],
            },

            inputSize: {
                sm: "min-h-9 px-3",
                md: "min-h-11 px-4",
                lg: "min-h-12 px-4",
            },

            hasLeftIcon: {
                true: "pl-10",
                false: "",
            },

            hasRightIcon: {
                true: "pr-10",
                false: "",
            },
        },

        defaultVariants: {
            state: "default",
            inputSize: "md",
            hasLeftIcon: false,
            hasRightIcon: false,
        },
    },
);

export interface InputProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, "size">,
        VariantProps<typeof inputVariants> {
    label?: string;
    error?: string;
    helperText?: string;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    containerClassName?: string;
    labelClassName?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            id,
            name,
            type = "text",
            label,
            error,
            helperText,
            leftIcon,
            rightIcon,
            inputSize,
            className,
            containerClassName,
            labelClassName,
            disabled,
            required,
            ...props
        },
        ref,
    ) => {
    const inputId = id ?? name;
    const helperId = inputId ? `${inputId}-description` : undefined;
    const errorId = inputId ? `${inputId}-error` : undefined;

    const describedBy =
      error ? errorId : helperText ? helperId : props["aria-describedby"];

    return (
      <div className={cn("w-full", containerClassName)}>
       {label && (
          <label
                    htmlFor={inputId}
                    className="mb-1.5 block text-label font-medium"
                >
                     {label}
                    {required && (
                    <span
                        className="ml-1 text-destructive"
                        aria-hidden="true"
                    >
                        *
                    </span>
                )}
                </label>
        )}

        <div className="relative">
            {leftIcon && (
                <span
                    aria-hidden="true"
                    className={cn(
                        "pointer-events-none",
                        "absolute left-0 top-1/2",
                        "-translate-y-1/2",
                        "text-muted-foreground",
                    )}
                >
                    {leftIcon}
                </span>
            )}

            <input
                ref={ref}
                id={inputId}
                name={name}
                type={type}
                disabled={disabled}
                required={required}
                aria-invalid={Boolean(error)}
                aria-describedby={describedBy}
                className={cn(
                    inputVariants({
                        state: error ? "error" : "default",
                        inputSize,
                        hasLeftIcon: Boolean(leftIcon),
                        hasRightIcon: Boolean(rightIcon),
                    }),
                    className,
                )}
                {...props}
            />

            {rightIcon && (
                <span
                    className={cn(
                        "absolute right-3 top-1/2",
                        "-translate-y-1/2",
                        "text-muted-foreground",
                    )}
                >
                    {rightIcon}
                </span>
            )}
        </div>

        {error ? (
            <p
                id={errorId}
                role="alert"
                className="mt-1.5 text-body-sm text-destructive"
            >
                {error}
            </p>
        ) : helperText ? (
            <p
                id={helperId}
                className="mt-1.5 text-body-sm text-muted-foreground"
            >
                {helperText}
            </p>
        ) : null}
      </div>
    );
  },
);

Input.displayName = "Input";

export { Input, inputVariants };
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { LoaderCircle } from "lucide-react";
import React, { ButtonHTMLAttributes, FC } from "react";

export interface ButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	isLoading?: boolean;
}

const buttonVariants = cva(
	"inline-flex items-center justify-center rounded-md border",
	{
		variants: {
			variant: {
				default: "border-transparent text-white bg-primary hover:bg-primary/80",
				ghost:
					"border-primary border-2 text-primary bg-transparent hover:bg-primary/10",
			},
			size: {
				sm: "px-3 py-1 text-sm",
				md: "px-4 py-2 text-base",
				lg: "px-6 py-3 text-lg",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "md",
		},
	}
);

const Button: FC<ButtonProps> = ({
	className,
	children,
	variant,
	isLoading,
	size,
	...props
}) => {
	return (
		<button
			className={cn(buttonVariants({ variant, size, className }))}
			disabled={isLoading}
			{...props}
		>
			{isLoading ? <LoaderCircle className="animate-spin" /> : null}
			{!isLoading && children}
		</button>
	);
};

export default Button;

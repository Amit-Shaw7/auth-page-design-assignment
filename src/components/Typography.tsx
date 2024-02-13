interface TitleProps {
    children?: React.ReactNode;
    variant?: "h1" | "h2" | "h3" | "p";
    size?: "heading" | "description" | "para" | "base" | "sm" | "md" | "lg" | "xs" | "xl" | "2xl";
    className?: string;
}

export default function Typography({ variant, size, children, className }: TitleProps) {
    return (
        <div>
            {
                variant === "h1" && <h1 className={`text-${size} font-${size} ${className}`}>{children}</h1>
            }

            {
                variant === "h2" && <h2 className={`text-${size} ${className}`}>{children}</h2>
            }
            {
                variant === "h3" && <h3 className={`text-${size} ${className}`}>{children}</h3>
            }
            {
                variant === "p" && <p className={`text-${size} ${className}`}>{children}</p>
            }
        </div>
    )
}
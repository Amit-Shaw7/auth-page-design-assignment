interface ButtonProps {
    className?: string;
    children: React.ReactNode;
    variant: "contained" | "outlined" | "disabled";
    onClick?: () => void;
}
export default function Button({ className, children, variant, onClick }: ButtonProps) {
    return (
        <button
            onClick={onClick ? onClick : () => { }}
            className={`
                flex
                items-center
                justify-center
                h-[46px]
                rounded-[6px]
                text-para
                font-medium
                ${variant === "contained" && "bg-violet text-white"}
                ${variant === "outlined" && "bg-violet-light text-black"}
                ${variant === "disabled" && "bg-gray text-white"}
                ${className}
            `}
        >
            {children}
        </button>
    )
}
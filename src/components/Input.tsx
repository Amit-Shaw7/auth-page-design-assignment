interface InputProps {
    id: string;
    label: string;
    className?: string;
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function Input({ id, label, className, type, placeholder, value, onChange }: InputProps) {
    return (
        <div className="relative flex items-center justify-start">
            <input
                className={`
                    h-[40px]
                    w-full
                    border
                    border-gray
                    rounded-[6px]
                    peer
                    z-40
                    bg-transparent
                    focus:z-0
                    placeholder-transparent
                    focus:placeholder-gray
                    px-4
                    ${className}
                `}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />

            <label
                htmlFor={id}
                className={`
                    absolute 
                    transition-all 
                    duration-300
                    z-10
                    transform
                    translate-y-1/2
                    left-3
                    text-gray
                    peer-focus:text-violet
                    peer-placeholder-shown:translate-y-0
                    peer-focus:translate-y-0
                    peer-focus:top-[-7px]
                    peer-focus:text-sm
                    peer-focus:font-[500]
                    bg-gray-light
                    px-[5px]
                    ${value != "" && "z-50 -translate-y-0 top-[-7px] text-xs text-violet"}
                `}
            >
                {label}
            </label>
        </div>
    )
}

export default function Container({ children }: { children: React.ReactNode }) {
    return (
        <div className="border border-gray-light relative px-[20px] py-[20px]">
            {children}
        </div>
    )
}
import Typography from "./Typography";

export default function Topbar() {
    return (
        <div className="h-[68px] flex items-center px-[15px] py-[27px] justify-start">
            <Typography
                variant="h1"
                size="description"

            >
                Account Setting
            </Typography>
        </div>
    )
}
import Typography from "./Typography";

interface UserProps {
    user: {
        name: string,
        email: string
    }
}

export default function User({ user }: UserProps) {
    return (
        <div className="flex flex-row gap-[20px]">
            <div className="relative">
                <img
                    alt="avatar"
                    className="w-[76px] h-[76px] object-contain"
                    src="/avatar.png"
                />
                <img
                    className="w-[21px] h-[23px] object-contain absolute bottom-0 -right-1"
                    src="/capture.svg"
                    alt="image"
                />
            </div>
            <div className="flex flex-col gap-[6px]">
                <Typography
                    variant="h3"
                    size="base"
                    className="font-medium leading-[19px]"
                >
                    {user.name}
                </Typography>

                <Typography
                    variant="p"
                    size="sm"
                >
                    {user.email}
                </Typography>
            </div>
        </div>
    )
}
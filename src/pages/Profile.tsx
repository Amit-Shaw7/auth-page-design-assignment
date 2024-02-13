import Typography from "../components/Typography";
import User from "../components/User";

export default function Profile() {
    const user = {
        email: "Marry@gmail.com",
        name: "Marry Doe",
    }
    return (
        <div>
            <div className="drop-shadow-sm absolute w-full top-0 left-0 h-[68px] flex items-center justify-start px-[15px] py-[27px] bg-white">
                <Typography
                    variant="h1"
                    size="description"
                >
                    Account Setting
                </Typography>
            </div>

            <div className="bg-white-custom mt-[98px]">
                <User user={user} />
            </div>

            <div className="w-[337px] mt-[30px]">
                <Typography
                    variant="p"
                    size="para"
                    className="text-black-custom"
                >
                    Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
                </Typography>
            </div>
        </div>
    )
}
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Typography from "../components/Typography";

export default function Landing() {
    const navigate = useNavigate();
    const navigateToLogin = (href: string): void => {
        navigate(href);
    }
    return (
        <div className="flex flex-col relative top-[437px]">
            <div>
                <Typography
                    variant="h1"
                    size="heading"
                    className="text-heading font-heading leading-[17px]"
                >
                    Welcome to PopX
                </Typography>

                <Typography
                    variant="p"
                    size="description"
                    className="mt-[10px] w-[232px] text-gray-text leading-[26px]"
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                </Typography>
            </div>

            <div className="flex flex-col gap-[10px]">
                <Button
                    variant="contained"
                    onClick={() => navigateToLogin("/register")}
                    className="mt-[29px]"
                >
                    Create Account
                </Button>

                <Button
                    variant="outlined"
                    onClick={() => navigateToLogin("/login")}
                >
                    Already Registered? Login
                </Button>
            </div>
        </div>
    )
}
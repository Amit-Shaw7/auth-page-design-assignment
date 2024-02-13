import { ChangeEvent, useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Typography from "../components/Typography";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmail = (e: ChangeEvent<HTMLInputElement>): void => {
        setEmail(e.target?.value);
    }
    const handlePassword = (e: ChangeEvent<HTMLInputElement>): void => {
        setPassword(e.target?.value);
    }

    return (
        <div className="flex flex-col w-full relative mt-[20px]">
            <div className="flex flex-col gap-[10px]">
                <Typography
                    variant="h1"
                    size="heading"
                    className="text-heading font-heading w-[188px] line-height-[50px] leading-[36px]"
                >
                    Signin to your PopX account
                </Typography>

                <Typography
                    variant="p"
                    size="description"
                    className="text-gray-text w-[232px] font-[400]"
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                </Typography>
            </div>

            <div className="mt-[33px] flex flex-col gap-[23px] w-full">
                <Input
                    id="email"
                    label="Email Address"
                    type="email"
                    placeholder="Enter Email Address"
                    value={email}
                    onChange={handleEmail}
                />

                <Input
                    id="password"
                    label="Password"
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={handlePassword}
                />

                <Button
                    variant={(email && password) ? "contained" : "disabled"}
                >
                    Login
                </Button>
            </div>
        </div>
    )
}
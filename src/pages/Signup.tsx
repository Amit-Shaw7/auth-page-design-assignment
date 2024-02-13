import { ChangeEvent, useState } from "react";
import Typography from "../components/Typography";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [company, setCompany] = useState("");
    const [isAgency, setIsAgency] = useState("");

    const handleEmail = (e: ChangeEvent<HTMLInputElement>): void => {
        setEmail(e.target?.value);
    }
    const handlePassword = (e: ChangeEvent<HTMLInputElement>): void => {
        setPassword(e.target?.value);
    }
    const handleName = (e: ChangeEvent<HTMLInputElement>): void => {
        setName(e.target?.value);
    }
    const handlePhone = (e: ChangeEvent<HTMLInputElement>): void => {
        setPhone(e.target?.value);
    }
    const handleCompany = (e: ChangeEvent<HTMLInputElement>): void => {
        setCompany(e.target?.value);
    }
    const handleIsAgency = (e: ChangeEvent<HTMLInputElement>) => {
        setIsAgency(e.target?.value);
    }
    return (
        <div className="flex flex-col gap-[31px] w-full">
            <Typography
                variant="h1"
                size="heading"
                className="text-heading font-heading w-[188px] leading-[36px]"
            >
                Create your PopX account
            </Typography>

            <form action="" className="flex flex-col gap-[18px]">
                <div className="flex flex-col gap-[29px] w-full">
                    <Input
                        id="name"
                        label="Full Name"
                        type="text"
                        placeholder="Enter full name"
                        value={name}
                        onChange={handleName}
                    />
                    <Input
                        id="phone"
                        label="Phone Number"
                        type="number"
                        placeholder="Enter phone number"
                        value={phone}
                        onChange={handlePhone}
                    />
                    <Input
                        id="email"
                        label="Email Address"
                        type="email"
                        placeholder="Enter email address"
                        value={email}
                        onChange={handleEmail}
                    />

                    <Input
                        id="password"
                        label="Password"
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={handlePassword}
                    />
                    <Input
                        id="company"
                        label="Company Name"
                        type="text"
                        placeholder="Enter company name"
                        value={company}
                        onChange={handleCompany}
                    />
                </div>

                <div className="flex flex-col">
                    <div className="flex flex-col gap-[10px]">
                        <p className="text-sm">Are you an agency?</p>
                        <div className="flex items-center gap-[23px]">

                            <label className="flex items-center gap-1">
                                <input
                                    type="radio"
                                    name="isAgency"
                                    value={isAgency}
                                    onChange={handleIsAgency}
                                    className="h-[22px] w-[22px] accent-violet"
                                />
                                <span className="text-para">Yes</span>
                            </label>

                            <label className="flex items-center gap-1">
                                <input
                                    type="radio"
                                    name="isAgency"
                                    value={isAgency}
                                    onChange={handleIsAgency}
                                    className="h-[22px] w-[22px] accent-violet"
                                />
                                <span className="text-para">No</span>
                            </label>

                        </div>
                    </div>
                </div>
                <Button
                    variant={(email && password) ? "contained" : "disabled"}
                    className="mt-[100px]"
                >
                    Create Account
                </Button>
            </form>
        </div>
    )
}
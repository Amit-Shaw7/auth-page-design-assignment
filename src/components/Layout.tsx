import { Link, Outlet } from "react-router-dom";
import Container from "./Container";

export default function Layout() {
    return (
        <div className="h-[100vh] flex items-center justify-center">
            <div className="h-[700px] w-[375px] bg-gray-light">
                <div className="absolute top-[68px] left-[15px]">
                    <Link to="/profile">
                        View the profile page form <span className="text-violet underline">here</span>
                    </Link>
                </div>
                <Container>
                    <Outlet />
                </Container>
            </div>
        </div>
    )
}
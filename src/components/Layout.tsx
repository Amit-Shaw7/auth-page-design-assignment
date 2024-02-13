import { Outlet } from "react-router-dom";
import Container from "./Container";

export default function Layout() {
    return (
        <div className="h-[100vh] flex items-center justify-center">
            <div className="h-[700px] w-[375px] bg-gray-light">
                <Container>
                    <Outlet />
                </Container>
            </div>
        </div>
    )
}
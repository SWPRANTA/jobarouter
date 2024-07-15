import { NavLink, Outlet } from "react-router-dom";
import BreadCrumbs from "../components/BreadCrumbs";

export default function RootLayout() {
    return (
        <div className="root-layout">
            <header>
                <nav>
                    <h1>Jobarouter</h1>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="careers">Careers</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/help">Help</NavLink>
                </nav>
                <BreadCrumbs/>
            </header>

            <main>
                <Outlet/>
            </main>
        </div>
    )
}

import { Outlet } from "react-router-dom";
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
import Navbar from "../components/Navbar";

export default function DefaultLayout() {




    return (
        <>
            <Navbar />
            <AppHeader />
            <Outlet />
            <AppFooter />
        </>

    )
}
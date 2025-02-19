import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import img from "../assets/diamond-bg.jpg"

const RootLayout = () => {
    return (
        <div className="relative w-full h-full">
            {/* Video Background */}
            {/* <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0  w-full h-full object-cover -z-10"
            >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video> */}
            <img src={img} alt='image' className="absolute top-0 left-0  w-full h-full object-cover -z-10" />

            {/* Gradient Overlay */}
            <div className="absolute top-0 left-0 w-full  bg-black/70 h-full  mix-blend-multiply"></div>

            <main className="w-full h-auto overflow-x-hidden " >
                <Header />
                <Outlet />
                <Footer />
            </main >
        </div>
    )
}

export default RootLayout;
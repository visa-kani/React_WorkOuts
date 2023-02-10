import { Outlet,Link } from "react-router-dom";
import React from "react";

const Aboutpage = () =>{
    return (
        <>
        <nav >
            <Link className="display" to="/about/OurService">i</Link>
            <Link className="display" to="/about/OurAchievements">love</Link>
            <Link className="display" to="/about/OurGallery">u</Link>
        </nav>
        <Outlet/>
        </>
    )
}
export default Aboutpage;
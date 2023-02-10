import { Outlet,Link } from "react-router-dom";

const Routre = () => {

    return(
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/blogs">Blogs</Link>
                    </li>
                    <li>
                        <Link to="/Useparams">signin</Link>
                    </li>
                    <li>
                        <Link to="/nopages">No pages</Link>
                    </li>
                </ul>
            </nav>

            <Outlet/>
        </>
    )
};

export default Routre;
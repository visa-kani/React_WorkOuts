import { Outlet,Link } from "react-router-dom";

const Nesting = () => {

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
                        <Link to="/nopages"></Link>
                    </li>
                    <li>
                        <Link to='/Service'>Service</Link>
                    </li>
                </ul>
            </nav>

            <Outlet/>
        </>
    )
};

export default Nesting;
import {Link, Outlet} from "react-router-dom";

export const Layout = () => {
    return (
        <>
            <div>
                <Link to="/">Menu</Link>
                <Link to="/card">Card</Link>
            </div>Menu

            <div>
                <Outlet/>
            </div>
        </>
    );
};

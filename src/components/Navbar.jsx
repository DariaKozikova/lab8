import {Link, NavLink} from "react-router-dom"


const Navbar = () => {
    return (
        <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
           <Link to="/" className="text-xl font-bold hover:text-gray-300 transition-colors">Warehouse System</Link>
            <div className="flex gap-4">
                <NavLink to="/">Gallery</NavLink>
                <NavLink to="/favorites">Favourites</NavLink>
                <NavLink to="/admin">Admin</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
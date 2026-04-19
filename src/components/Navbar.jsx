import { Link } from 'react-router-dom';
const Navbar = () => (
  <nav className="navbar">
    <div className="container nav-box">
      <Link to="/" className="logo">Склад 2024</Link>
      <div className="links">
        <Link to="/">Галерея</Link>
        <Link to="/favorites">Улюблені ❤️</Link>
        <Link to="/admin">Адмінка</Link>
      </div>
    </div>
  </nav>
);
export default Navbar;
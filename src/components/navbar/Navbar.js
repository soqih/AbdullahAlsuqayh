import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import './Navbar.css'
const Navbar = () => {
    return (
        <nav className="navbar">
            <img className='logo' src= {logo} alt="" />
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">Blog</Link>
                <Link to="/">Work</Link>
            </div>
        </nav>
    );
}

export default Navbar;
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import styles from './Navbar.module.css'
const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <img className={styles.logo} src= {logo} alt="" />
            <div className= {styles.links}>
                <Link to="/">Home</Link>
                <Link to="/blogs">Blog</Link>
                <Link to="/projects">Work</Link>
            </div>
        </nav>
    );
}

export default Navbar;
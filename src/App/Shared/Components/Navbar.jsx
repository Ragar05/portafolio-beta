import { Link } from 'react-router-dom'; 
import '../Css/navbar.css';

export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">Portafolio</div>
            <ul className="nav-links">
                <li><Link to="/">Datos Personales</Link></li>
                <li><Link to="/profile">Perfil profesional</Link></li>
                <li><Link to="/experience">Experiencia Profesional</Link></li>
                <li><Link to="/studies">Experiencia Académica</Link></li>
            </ul>
        </nav>
    )
}

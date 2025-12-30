import styles from  "./NavBar.module.css"
import { Link } from "react-router-dom"
import { useAuth } from "../../../context/AuthContext"

const NavBar = () => {
    const {user} = useAuth()

    return(
        <div className={styles.navBarBox}>
            <nav>
                <ul>
                    <Link to="/">INICIO</Link>
                    {user && (
                        <Link to="/appointments">TURNOS</Link>
                    )}
                    <Link to="/famous">FAMOSOS</Link>
                    <Link to="/about">SOBRE</Link>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar
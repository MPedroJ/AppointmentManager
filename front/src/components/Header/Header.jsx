import Logo from "./Logo/Logo"
import NavBar from "./NavBar/NavBar"
import styles from "./Header.module.css"
import LoginButton from "./LoginButton/LoginButton"
// import ProfileButton from "./ProfileButton/ProfileButton"

const Header = () => {
    return(
        <div className={styles.headerBox}>
            <header>
                <Logo/>
                <NavBar/>
                {/* <ProfileButton/> */}
                <LoginButton/>
            </header>
        </div>
    )
}

export default Header
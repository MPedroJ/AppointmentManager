import GalacticCuts from "../../../assets/images/GalacticCuts.jpg"
import styles from "./Logo.module.css"

const Logo = () => {
    return(
        <div className={styles.logo}>
            <img src={GalacticCuts} alt="galactic cuts" />
        </div>
    )
}

export default Logo
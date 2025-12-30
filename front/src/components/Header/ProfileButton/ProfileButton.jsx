import profileMock from "../../../assets/images/profileMock.webp"
import styles from "./ProfileButton.module.css"

const ProfileButton = () => {
    return(
        <div className={styles.profileBox}>
            <img src={profileMock} alt="img" />
            {/* <div><a href="">Cambiar foto</a><a href="">Agendar un turno</a></div> */}
        </div>
    )
}

export default ProfileButton
import styles from "./InfoCard.module.css"

const InfoCard = ({imageSrc, description}) => {
    return(
        <div className={styles.infoCardBox}>
            <img src={imageSrc} alt="info" />
            <p>{description}</p>
        </div>
    )
}

export default InfoCard
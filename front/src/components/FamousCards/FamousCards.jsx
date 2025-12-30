import InfoCard from "../LandingPage/InfoCard"
import ronaldo from "../../assets/images/ronaldo.webp"
import messi from "../../assets/images/messi.webp"
import styles from "./FamousCards.module.css"

const FamousCards = () => {
    return(
        <div className={styles.infoCardsBox}>
            <InfoCard 
            imageSrc = {ronaldo}
            description = {`¿Querés un corte de otro nivel?
En Barbería Élite no solo cuidamos tu estilo, lo llevamos al máximo.
Futbolistas profesionales como Cristiano Ronaldo saben que la imagen es clave, y por eso confían en los mejores.

Cortes precisos, estilo definido y atención personalizada.
Convertite en el protagonista dentro y fuera de la cancha.
Venite a Barbería Élite y llevate un look digno de campeón.

Te esperamos. Tu estilo merece trato de profesional.`} />
            <InfoCard
            imageSrc = {messi}
            description = {`¿Querés un corte con magia argentina?
En Barbería Élite no solo te damos estilo, te damos identidad.
Porque si hasta Lionel Messi cuida su imagen al detalle, ¿por qué no hacerlo vos?

Cortes precisos, estilo auténtico y atención que marca la diferencia.
Llevá tu look al siguiente nivel con un servicio digno de los mejores del mundo.
En la cancha o en la vida, destacá con presencia.

Te esperamos en Barbería Élite. Tu imagen, como tu juego, merece ser legendaria.`}/>
        </div>
    )
}

export default FamousCards
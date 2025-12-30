import InfoCard from "./InfoCard"
import barbershop1 from "../../assets/images/barbershop1.jpg"
import barbershop2 from "../../assets/images/barbershop2.jpg"
import styles from "./LandingPage.module.css"

const LandingPage = () => {
    return(
        <div className={styles.infoCardsBox}>
            <InfoCard 
            imageSrc = {barbershop1}
            description = "En nuestra barbería no solo te ofrecemos un corte de pelo, sino una experiencia pensada para que te relajes y te sientas renovado. Combinamos técnicas clásicas con las últimas tendencias, en un ambiente cómodo y profesional. Cada cliente es único, y nos aseguramos de que salgas conforme, con un look que se adapte a tu estilo y personalidad. ¡Te esperamos para que descubras por qué tantos nos eligen!"/>
            <InfoCard
            imageSrc = {barbershop2}
            description = "En nuestra barbería recibimos a clientes de todas las edades, desde los más chicos que vienen por su primer corte, hasta adultos mayores que buscan mantener su estilo con el cuidado de siempre. Sabemos adaptar cada servicio a la edad y personalidad de quien se sienta en la silla, brindando un trato cercano, profesional y personalizado. Porque creemos que verse bien no tiene edad, y que todos merecen una experiencia de barbería cómoda y de calidad."/>
        </div>
    )
}

export default LandingPage
import styles from "./Appointment.module.css"

const Appointment = ({ appointment, onCancel }) => {
    const {id, date, time, status} = appointment

    return (
        <div className={styles.appointmentBox}>
            <span><strong>Numero: </strong>{id}</span>
            <span><strong>Fecha: </strong>{date}</span>
            <span><strong>Hora: </strong>{time}</span>
            <span className={status == "activo"  ? styles.active : styles.cancelled}>{status}</span>
            {appointment.status === "activo" && (
                <button className={styles.cancelButton} onClick={() => onCancel(appointment.id)}>
                    Cancelar
                </button>
            )}
        </div>
    )
}

export default Appointment
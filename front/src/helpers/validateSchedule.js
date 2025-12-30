
const validateSchedule = async (input) => {
    const errors = {}

    const dateRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/
    const timeRegex = /^(08|09|1[0-9]|20):(00|30)$/

    if (!input.date) {
        errors.date = "Debe agregar la fecha del turno"
    } else if (!dateRegex.test(input.date)) {
        errors.date = "La fecha no es valida"
    }

    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const appointmentDate = new Date(input.date + "T00:00:00")
    const notOnWeekend = appointmentDate.getDay()

    if (appointmentDate <= today) {
        errors.date = "El turno debe ser agendado posterior a dia de hoy"
    } else if (notOnWeekend === 0 || notOnWeekend === 6) {
        errors.date = "No se pueden agendar turnos los fines de semana"
    }

    if (!input.time) {
        errors.time = "Se debe agredar el horario del turno"
    } else if (!timeRegex.test(input.time)) {
        errors.time = "El establecimiento esta abierto de 8:00 a 20:00, por favor agendar turno en los horarios: 00 o 30 minutos"
    }

    return errors
}

export default validateSchedule
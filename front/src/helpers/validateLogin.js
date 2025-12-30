const validateLogin = (input) => {
    const errors = {}
    const usernameRegex = /^[a-zA-Z0-9_]{3,100}$/

    if(!usernameRegex.test(input.username)) {
        errors.username = "El nombre de usuario no es valido"
    }

    if (!input.password) {
        errors.password = "Contraseña no valida"
    }
    return errors
}

export default validateLogin
const validateRegister = (input) => {
  const errors = {};

  const nameRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]{2,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const birthdateRegex = /^\d{4}-\d{2}-\d{2}$/;
  const nDniRegex = /^\d{7,9}$/;
  const usernameRegex = /^[a-zA-Z0-9_]{3,100}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d.]{8,}$/;

  if (!nameRegex.test(input.name)) {
    errors.name = 'El nombre completo no es valido';
  }
  if (!emailRegex.test(input.email)) {
    errors.email = 'E-Mail no valido';
  }
  if (!birthdateRegex.test(input.birthdate)) {
    errors.birthdate = 'Fecha de nacimiento no es correcta';
  }
  if (!nDniRegex.test(input.nDni)) {
    errors.nDni = 'Numero de documento no es valido';
  }
  if (!usernameRegex.test(input.username)) {
    errors.username = 'El nombre de usuario no es valido';
  }
  if (!passwordRegex.test(input.password)) {
    errors.password = 'Contraseña no valida';
  }
  if (!input.confirmPassword) {
    errors.confirmPassword = 'Se debe repetir la contraseña';
  }
  if (input.password !== input.confirmPassword) {
    errors.confirmPassword = 'La confirmacion de la contraseña debe ser igual a las contraseña';
  }
  return errors;
};

export default validateRegister;

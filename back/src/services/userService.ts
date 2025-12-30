import { UserModel } from '../config/appDataSource';
import { IRegisterUser } from '../dto/UserDto';
import { Credential } from '../entities/Credential';
import { User } from '../entities/User';
import { saveNewCredentials } from './credentialService';

export const getAllUsersService = async () => {
  try {
    const users: User[] = await UserModel.find({
      relations: {
        appointments: true,
      },
    });
    return users;
  } catch (error) {
    console.error('No se encontraron los usuarios', error);
  }
};

export const getUserService = async ({ id }: { id: number }) => {
  const userFound: User | null = await UserModel.findOne({
    where: { id: id },
    relations: {
      appointments: true,
    },
  });
  if (!userFound) {
    throw new Error('No se encontro el usuario');
  }
  return userFound;
};

export const registerUserService = async (registerData: IRegisterUser) => {
  try {
    const { username, password } = registerData;
    const credential: Credential = await saveNewCredentials({ username, password });
    const { name, email, birthdate, nDni } = registerData;
    const user = await UserModel.create({ name, email, birthdate, nDni, credential });
    const userSaved = await UserModel.save(user);
    return userSaved;
  } catch {
    throw new Error('No se pudo crear el nuevo usuario');
  }
};

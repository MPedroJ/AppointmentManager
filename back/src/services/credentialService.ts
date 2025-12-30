import { CredentialModel, UserModel } from '../config/appDataSource';
import { ILoginData } from '../dto/CredentialDto';
import { Credential } from '../entities/Credential';

export const saveNewCredentials = async (credentialsData: ILoginData) => {
  const credential: Credential = await CredentialModel.create(credentialsData);
  const credentialsSaved: Credential = await CredentialModel.save(credential);
  return credentialsSaved;
};

export const userLoginService = async (loginData: ILoginData) => {
  const { username, password } = loginData;
  const found: Credential | null = await CredentialModel.findOne({
    where: { username },
  });

  if (!found) {
    throw new Error('Usuario no registrado');
  }

  if (found.password !== password) {
    throw new Error('Contraseña incorrecta');
  }
  const userToReturn = await UserModel.findOne({
    where: { credential: { id: found.id } },
  });
  return userToReturn;
};

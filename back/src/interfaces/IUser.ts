import { ICredential } from "./ICredential";

export interface IUser {
    id: number,
    name: string,
    email: string,
    birthdate: Date,
    nDni: number,
    credentialsId: ICredential
}
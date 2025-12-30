import { User } from "../entities/User"

export const passwordHider = (user: User) => {
    return {
        id: user.id,
        name: user.name,
        email:  user.email,
        birthdate: user.birthdate,
        nDni: user.nDni,
        credential: {
            username: user.credential.username
        }
    }
}
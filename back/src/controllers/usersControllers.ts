import { Request, Response } from "express";
import { userLoginService } from "../services/credentialService";
import { User } from "../entities/User";
import { getAllUsersService, getUserService, registerUserService } from "../services/userService";
import { passwordHider } from "../helpers/passwordHider";


export const getAllUsers = async (req: Request, res: Response) => {
        try {
                const users: User[] | undefined = await getAllUsersService()
                res.status(200).json(users)

        } catch (error) {
                res.status(404).json({ message: "No se pudieron encontrar los usuarios", error })
        }
}

export const getUser = async (req: Request, res: Response) => {
        try {
                const { id } = req.params
                const user = await getUserService({ id: Number(id) })
                res.status(200).json(user)

        } catch (error) {
                res.status(404).json({ message: "El usuario no fue encontrado", error })
        }
}

export const registerUser = async (req: Request, res: Response) => {
        try {
                const { name, email, birthdate, nDni, username, password } = req.body
                const newUser = await registerUserService({ name, email, birthdate, nDni, username, password })
                res.status(201).json({ message: "Usuario creado con exito", user: passwordHider(newUser) })

        } catch (error) {
                res.status(400).json({ message: "No se pudo guardar el usuario", error })
        }
}

export const userLogin = async (req: Request, res: Response) => {
        try {
                const { username, password } = req.body
                const newLogin = await userLoginService({ username, password })
                res.status(200).json({ message: "Logueado con exito", newLogin })

        } catch (error) {
                res.status(400).json({ message: "Usuario o contraseña incorrectos", error })
        }
}
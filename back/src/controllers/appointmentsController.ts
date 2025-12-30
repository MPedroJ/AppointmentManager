import { Request, Response } from "express";
import { cancelAppointmentService, getAllAppointmentsService, getAppointmentService, newAppointmentService } from "../services/appointmentService";
import { Appointment } from "../entities/Appointment";
import {  UserModel } from "../config/appDataSource";

export const getAllApointments = async (req: Request, res: Response) => {
    try {
        const appointments: Appointment[] | undefined = await getAllAppointmentsService()
        res.status(200).json(appointments)

    } catch (error) {
        res.status(404).json({ message: "No se pudieron encontrar los turnos", error })
    }
}

export const getAppointment = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const selectedAppointment: Appointment | null = await getAppointmentService({ id: Number(id) })
        res.status(200).json(selectedAppointment)

    } catch (error) {
        res.status(404).json({ message: "No se pudo encontrar el turno", error })
    }
}

export const getAppointmentByUserId = async (req: Request, res: Response) => {
    try {
        const {id} = req.params
        const userAppointments = await UserModel.findOne({
            where: {
                id: Number(id)
            },
            relations: {appointments: true}
        })

        res.status(200).json(userAppointments)
    } catch (error) {
        res.status(400).json({ message: "No se encontraron los turnos", error})
    }
}

export const newAppointment = async (req: Request, res: Response) => {
    try {
        const { date, time, userId } = req.body
        const newAppointment = await newAppointmentService({ date, time, userId })
        res.status(201).json({ message: "Turno creado con exito", newAppointment })

    } catch (error) {
        res.status(400).json({ message: "No se pudo guardar el turno", error })
    }
}

export const cancelAppointment = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const appointmentToCancel = await cancelAppointmentService({ id: Number(id) })
        res.status(200).json({ message: "Turno cancelado con exito", appointmentToCancel })

    } catch (error) {
        res.status(404).json({ message: "No se pudo cancelar el turno", error })
    }
}
import { AppDataSource } from "../config/appDataSource";
import { Appointment } from "../entities/Appointment";
import { Credential } from "../entities/Credential";
import { User } from "../entities/User";

export const preloadUsers = [
    {
        name: "Lucía Fernández",
        email: "lucia.fernandez@example.com",
        birthdate: new Date("1995-06-12"),
        nDni: 12345678,
    },
    {
        name: "Mateo García",
        email: "mateo.garcia@example.com",
        birthdate: new Date("1992-08-20"),
        nDni: 23456789,
    },
    {
        name: "Camila López",
        email: "camila.lopez@example.com",
        birthdate: new Date("2000-03-15"),
        nDni: 34567890,
    },
    {
        name: "Santiago Ruiz",
        email: "santiago.ruiz@example.com",
        birthdate: new Date("1991-11-05"),
        nDni: 45678901,
    },
    {
        name: "Valentina Gómez",
        email: "valentina.gomez@example.com",
        birthdate: new Date("1998-04-25"),
        nDni: 56789012,
    }
];

export const preloadCredentials = [
    {
        username: "luciaf95",
        password: "passLucia1"
    },
    {
        username: "mateogar92",
        password: "mateoPass2"
    },
    {
        username: "camilopez00",
        password: "Cami2024!"
    },
    {
        username: "santi1991",
        password: "S4ntiR!"
    },
    {
        username: "valengomez98",
        password: "ValePwd8"
    }
];

export const preloadAppointments = [
    {
        date: new Date("2025-06-15"),
        time: "10:00",
        userId: 1 // Lucía Fernández
    },
    {
        date: new Date("2025-06-16"),
        time: "11:30",
        userId: 2 // Mateo García
    },
    {
        date: new Date("2025-06-17"),
        time: "14:00",
        userId: 3 // Camila López
    },
    {
        date: new Date("2025-06-18"),
        time: "09:15",
        userId: 4 // Santiago Ruiz
    },
    {
        date: new Date("2025-06-19"),
        time: "13:45",
        userId: 5 // Valentina Gómez
    }
];


export const preloadCredentialsData = async () => {
    const queryRunner = AppDataSource.createQueryRunner();
    await queryRunner.connect()
    await queryRunner.startTransaction();

    const credentialsFound = await queryRunner.manager.find(Credential)
    if (credentialsFound.length) {
        console.log("No se hizo la precarga de credenciales, por que ya hay datos");
        queryRunner.rollbackTransaction()
    }


    try {
        const credentialsPromises = preloadCredentials.map(async (credentials) => {
            const newCredentials = await queryRunner.manager.create(Credential, credentials)
            await queryRunner.manager.save(newCredentials)
        })
        await Promise.all(credentialsPromises)
        console.log("Precarga de credenciales realizada con exito");
        await queryRunner.commitTransaction()
    } catch {
        console.log(("Error al precargar las credenciales"));
        await queryRunner.rollbackTransaction()
    } finally {
        console.log("Ha finalizado la precarga de credenciales");
        await queryRunner.release()
    }
}

export const preloadUserData = async () => {
    await AppDataSource.transaction(async (transactionalEntityManager) => {
        const usersFound = await AppDataSource.getRepository(User).find()
        if (usersFound.length) return console.log("No se hizo la precarga de usuarios, por que ya hay datos")

        const credentialsFound = await AppDataSource.getRepository(Credential).find()
        if (credentialsFound.length < preloadUsers.length) return console.log("No hay suficientes credenciales para vincular con  los  usuarios")

        for (let i = 0; i < preloadUsers.length; i++) {
            const userData = preloadUsers[i]
            const newUser = AppDataSource.getRepository(User).create({
                ...userData,
                credential: credentialsFound[i]
            })
            await transactionalEntityManager.save(newUser)
        }
        console.log("Precarga de datos realizada");
    })
}

export const preloadAppointmentData = async () => {
    const queryRunner = AppDataSource.createQueryRunner();
    await queryRunner.connect();

    const appointmentsFound = await AppDataSource.getRepository(Appointment).find()
    if (appointmentsFound.length) return console.log("No se hizo la precarga de turnos, por que ya hay datos");


    const promises = preloadAppointments.map(async (appointment) => {
        const newAppointment = await AppDataSource.getRepository(Appointment).create(appointment)
        await queryRunner.manager.save(newAppointment)
        const user = await AppDataSource.getRepository(User).findOneBy({ id: appointment.userId })
        if (!user) throw Error("Usuario inexistente")
        newAppointment.user = user;
        await queryRunner.manager.save(newAppointment)
    })

    try {
        await queryRunner.startTransaction();
        await Promise.all(promises)
        console.log("Precarga de turnos realizada con exito");
        await queryRunner.commitTransaction()
    } catch {
        console.log("Error al crear los turnos");
        await queryRunner.rollbackTransaction();
    } finally {
        console.log("Ha finalizado el intento de precarga");
        await queryRunner.release()
    }
}
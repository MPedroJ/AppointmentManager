import 'dotenv/config';

export const PORT: number = Number(process.env.PORT);
export const HOST_DB: string = String(process.env.HOST_DB);
export const PORT_DB: number = Number(process.env.PORT_DB);
export const USERNAME_DB: string = String(process.env.USERNAME_DB);
export const PASSWORD_DB: string = String(process.env.PASSWORD_DB);
export const DB_NAME: string = String(process.env.DB_NAME);

const isProduction = process.env.NODE_ENV === 'production';

export const DB_SYNCHRONIZE: boolean = process.env.DB_SYNCHRONIZE ? process.env.DB_SYNCHRONIZE === 'true' : !isProduction;
export const DB_DROP_SCHEMA: boolean = process.env.DB_DROP_SCHEMA ? process.env.DB_DROP_SCHEMA === 'true' : false;

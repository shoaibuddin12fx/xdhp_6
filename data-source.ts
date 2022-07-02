import { DataSource } from "typeorm";
import { User } from "./entities/user";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 8888,
    username: "root",
    password: "test",
    database: "xdhp_6",
    synchronize: true,
    logging: true,
    entities: [User],
    subscribers: [],
    migrations: [],
})
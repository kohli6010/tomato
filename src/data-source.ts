import {DataSource, DataSourceOptions} from 'typeorm';

let dbSourceOptions: DataSourceOptions = {
    type: "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: false,
    logging: true,
    entities: ["src/entity/**/*.ts"],
    migrations: ["src/migrations/**/*.ts"]
}

export const AppDataSource = new DataSource(dbSourceOptions);
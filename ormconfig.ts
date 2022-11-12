import { DataSource } from 'typeorm';

export const connectionSource = new DataSource({
  migrationsTableName: 'migrations',
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'crud_node',
  name: 'default',
  entities: ["src/models/**/*.ts"],
  migrations: ["src/database/migrations/*.ts"],
  subscribers: ['src/subscriber/**/*{.ts,.js}'],
});
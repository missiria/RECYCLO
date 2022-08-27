"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Env_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Env"));
const databaseConfig = {
    connection: Env_1.default.get('DB_CONNECTION'),
    connections: {
        mysql: {
            client: 'mysql',
            connection: {
                host: Env_1.default.get('MYSQL_HOST'),
                port: Env_1.default.get('MYSQL_PORT'),
                user: Env_1.default.get('MYSQL_USER'),
                password: Env_1.default.get('MYSQL_PASSWORD', ''),
                database: Env_1.default.get('MYSQL_DB_NAME'),
            },
            migrations: {
                naturalSort: true,
            },
            healthCheck: false,
            debug: true,
        },
    }
};
exports.default = databaseConfig;
//# sourceMappingURL=database.js.map
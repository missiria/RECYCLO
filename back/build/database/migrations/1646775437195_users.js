"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class UsersSchema extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'users';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary();
            table.string('email', 255).notNullable().unique();
            table.string('phone', 12).unique();
            table.string('password', 180).notNullable();
            table.string('first_name', 255);
            table.string('last_name', 255);
            table.string('code', 255);
            table.string('forget_password_code', 10).defaultTo(null);
            table.integer('user_id', 12);
            table.enum('role', ['ADMIN', 'MODERATOR', 'USER']).defaultTo('USER');
            table.boolean('is_verified').defaultTo(false);
            table.boolean('active').defaultTo(false);
            table.string('remember_me_token').nullable();
            table.timestamp('created_at', { useTz: true }).notNullable();
            table.timestamp('updated_at', { useTz: true }).notNullable();
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = UsersSchema;
//# sourceMappingURL=1646775437195_users.js.map
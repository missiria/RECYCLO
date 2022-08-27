"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Accounts extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'accounts';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary();
            table.integer('user_id').unsigned().references('users.id').onDelete('CASCADE');
            table.unique(['user_id']);
            table.string('society_id', 11);
            table.enum('gender', ['FEMALE', 'MALE']);
            table.enum('type', ['MENAGE', 'COLLECTOR']);
            table.string('avatar', 255);
            table.enum('type_verification', ['PERMIT', 'CARTE']);
            table.string('front_verification_path', 255);
            table.string('back_verification_path', 255);
            table.string('address', 255);
            table.integer('city_id').unsigned().nullable().references('cities.id').onDelete('CASCADE');
            table.string('country', 255);
            table.string('nationality', 255);
            table.integer('zip_code', 18);
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Accounts;
//# sourceMappingURL=1646776849646_accounts.js.map
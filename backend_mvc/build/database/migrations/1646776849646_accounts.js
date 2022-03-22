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
            table
                .integer('user_id')
                .unsigned()
                .references('users.id')
                .onDelete('CASCADE');
            table.unique(['user_id']);
            table.string('first_name', 180);
            table.string('last_name', 180);
            table.string('society_id', 11);
            table.enum('gender', ['FEMALE', 'MALE']);
            table.enum('type', ['COLLECTOR', 'WORKER']);
            table.string('avatar', 255);
            table.string('address', 255);
            table.string('city', 255);
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
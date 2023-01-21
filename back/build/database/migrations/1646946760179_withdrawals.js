"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Withdrawals extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'withdrawals';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary();
            table.integer('user_id').unsigned().references('users.id').onDelete('CASCADE');
            table.integer('account_id').unsigned().references('accounts.id').onDelete('CASCADE');
            table.integer('bank_id').unsigned().references('banks.id').onDelete('CASCADE');
            table.integer('withdrawal_code', 15);
            table.float('amount', 255);
            table.timestamp('expires_in', {});
            table.enum('status', ['PENDING', 'VALID', 'PAID', 'CANCELED']);
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Withdrawals;
//# sourceMappingURL=1646946760179_withdrawals.js.map
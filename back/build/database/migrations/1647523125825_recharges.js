"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Recharges extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'recharges';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.integer('user_id');
            table.enum('operator', ['ORANGE', 'IAM', 'INWI']);
            table.enum('type', ['INTERNET', 'MINUTES', 'BALANCE']);
            table.enum('status', ['PENDING', 'CHARGED']);
            table.integer('amount');
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Recharges;
//# sourceMappingURL=1647523125825_recharges.js.map
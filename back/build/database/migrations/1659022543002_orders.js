"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Orders extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'orders';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.integer('declaration_id');
            table.integer('user_id');
            table.enum('status', ['PENDING', 'CONFIRM', 'DONE', 'CANCELED']);
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Orders;
//# sourceMappingURL=1659022543002_orders.js.map
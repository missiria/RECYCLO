"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Notifications extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'notifications';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary();
            table.string('note', 255);
            table.enum('type', ['DECLARATION', 'MESSAGE', 'PAYMENT', 'POINT', 'UPDATE']);
            table.enum('status', ['READ', 'UNREAD']);
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Notifications;
//# sourceMappingURL=1646946403770_notifications.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Messages extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'messages';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary();
            table
                .integer('sender_user_id')
                .unsigned()
                .references('users.id')
                .onDelete('CASCADE');
            table
                .integer('received_user_id')
                .unsigned()
                .references('users.id')
                .onDelete('CASCADE');
            table.text('message', 'long');
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Messages;
//# sourceMappingURL=1646946326673_messages.js.map
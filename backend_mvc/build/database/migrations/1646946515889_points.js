"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Points extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'points';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary();
            table
                .integer('user_id')
                .unsigned()
                .references('users.id')
                .onDelete('CASCADE');
            table
                .integer('declaration_id')
                .unsigned()
                .references('declarations.id')
                .onDelete('CASCADE');
            table.float('point', 255);
            table.enum('status', ['VALID', 'PENDING']);
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Points;
//# sourceMappingURL=1646946515889_points.js.map
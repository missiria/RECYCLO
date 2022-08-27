"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Carts extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'carts';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary();
            table
                .integer('user_id')
                .unsigned()
                .references('users.id')
                .onDelete('CASCADE');
            table.string('number_card', 100);
            table.date('expiry_year');
            table.date('expiry_month');
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Carts;
//# sourceMappingURL=1646944854070_carts.js.map
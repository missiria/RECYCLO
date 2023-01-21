"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Declarations extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'declarations';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary();
            table.integer('collect_id');
            table.integer('user_id');
            table.float('quantity', 255);
            table.float('price', 5);
            table.enum('status', ['PENDING', 'VALID', 'CANCELED', 'PAID']);
            table.string('date');
            table.enum('time', ['08:00 - 12:00', '12:00 - 16:00', '16:00 - 20:00', '20:00 - 00:00']);
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Declarations;
//# sourceMappingURL=1646945937333_declarations.js.map
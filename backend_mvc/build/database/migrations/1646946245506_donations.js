"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Donations extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'donations';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary();
            table.string('email');
            table.string('full_name', 255);
            table.string('bank', 255);
            table.string('rib', 24);
            table.float('amount', 255);
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Donations;
//# sourceMappingURL=1646946245506_donations.js.map
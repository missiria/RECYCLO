"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class ImagesDeclarations extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'images_declarations';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.integer('declaration_id').unsigned().references('declarations.id').onDelete('CASCADE');
            table.string('image', 255);
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = ImagesDeclarations;
//# sourceMappingURL=1657389641361_images_declarations.js.map
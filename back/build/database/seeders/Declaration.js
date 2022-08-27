"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const Declaration_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Declaration"));
class DeclarationSeeder extends Seeder_1.default {
    async run() {
        await Declaration_1.default.createMany([
            {
                user_id: 1,
                collect_id: 1,
                quantity: 10,
                status: 'PENDING'
            },
            {
                user_id: 2,
                collect_id: 2,
                quantity: 10,
                status: 'PENDING'
            },
            {
                user_id: 2,
                collect_id: 3,
                quantity: 10,
                status: 'PENDING'
            },
            {
                user_id: 1,
                collect_id: 4,
                quantity: 10,
                status: 'CANCELED'
            }
        ]);
    }
}
exports.default = DeclarationSeeder;
//# sourceMappingURL=Declaration.js.map
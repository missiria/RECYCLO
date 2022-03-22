"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const Recharge_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Recharge"));
class RechargeSeeder extends Seeder_1.default {
    async run() {
        await Recharge_1.default.createMany([
            {
                user_id: 1,
                type: 'BALANCE',
                operator: 'ORANGE',
                status: 'PENDING',
                amount: 300
            },
            {
                user_id: 2,
                type: 'INTERNET',
                operator: 'ORANGE',
                status: 'PENDING',
                amount: 25
            },
            {
                user_id: 1,
                type: 'MINUTES',
                operator: 'ORANGE',
                status: 'PENDING',
                amount: 20
            },
            {
                user_id: 1,
                type: 'INTERNET',
                operator: 'ORANGE',
                status: 'CHARGED',
                amount: 100
            },
        ]);
    }
}
exports.default = RechargeSeeder;
//# sourceMappingURL=Recharge.js.map
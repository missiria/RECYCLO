"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Account_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Account"));
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
class AccountSeeder extends Seeder_1.default {
    async run() {
        await Account_1.default.createMany([
            {
                user_id: 1,
                gender: 'MALE',
                type: 'COLLECTOR',
                address: 'lorem ipsum',
                city_id: 1,
                nationality: 'Ukrainian',
                society_id: 'S638250',
                zip_code: 20000,
            },
            {
                user_id: 2,
                gender: 'MALE',
                type: 'MENAGE',
                address: 'lorem ipsum',
                city_id: 2,
                nationality: 'Ukrainian',
                society_id: 'S638250',
                zip_code: 20000,
            },
            {
                user_id: 3,
                gender: 'MALE',
                type: 'COLLECTOR',
                address: 'lorem ipsum',
                city_id: 1,
                country: 'UKRAINE',
                nationality: 'Ukrainian',
                society_id: 'S638250',
                zip_code: 20000,
            },
            {
                user_id: 6,
                gender: 'MALE',
                type: 'COLLECTOR',
                address: 'lorem ipsum',
                city_id: 1,
                country: 'UKRAINE',
                nationality: 'Ukrainian',
                society_id: 'S638250',
                zip_code: 20000,
            },
            {
                user_id: 7,
                gender: 'MALE',
                type: 'COLLECTOR',
                address: 'lorem ipsum',
                city_id: 1,
                country: 'UKRAINE',
                nationality: 'Ukrainian',
                society_id: 'S638250',
                zip_code: 20000,
            },
        ]);
    }
}
exports.default = AccountSeeder;
//# sourceMappingURL=Account.js.map
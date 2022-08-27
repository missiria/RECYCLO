"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const Donation_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Donation"));
class DonationSeeder extends Seeder_1.default {
    async run() {
        await Donation_1.default.createMany([
            {
                email: "missiria@gmail.com",
                full_name: 'Younes MISSIRIA',
                bank: 'BMCI',
                amount: 2500,
                rib: 4441455645565412
            },
            {
                email: "amin@gmail.com",
                full_name: 'Amine AMAZZAL',
                bank: 'BMCE',
                amount: 3200,
                rib: 25441455645565411
            },
            {
                email: "youssef@gmail.com",
                full_name: 'Youssef SAAIOU',
                bank: 'ATTIJARI',
                amount: 4500,
                rib: 25441455645565411
            },
            {
                email: "salem@gmail.com",
                full_name: 'Salem ELHOCEIMI',
                bank: 'BANK OF AMERICA',
                amount: 6100,
                rib: 45451110645555229
            }
        ]);
    }
}
exports.default = DonationSeeder;
//# sourceMappingURL=Donation.js.map
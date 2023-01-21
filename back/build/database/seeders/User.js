"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
class UserSeeder extends Seeder_1.default {
    async run() {
        await User_1.default.createMany([
            {
                email: 'missiria@gmail.com',
                phone: '0656560552',
                first_name: 'Younes',
                last_name: 'MISSIRIA',
                password: 'c++',
                role: 'ADMIN',
                active: true,
            },
            {
                email: 'amine@gmail.com',
                phone: '0691987003',
                first_name: 'amine',
                last_name: 'MISSIRIA',
                password: 'p@ssword',
                role: 'ADMIN',
                active: true,
            },
            {
                email: 'youssef@gmail.com',
                phone: '066262626262',
                first_name: 'youssef',
                last_name: 'MISSIRIA',
                password: 'p@ssword',
                role: 'ADMIN',
                active: false,
            },
            {
                email: 'salem@gmail.com',
                phone: '066161616142',
                first_name: 'Salem',
                last_name: 'MISSIRIA',
                password: '321321321',
                role: 'MODERATOR',
                active: true,
            },
            {
                email: 'hassan@gmail.com',
                phone: '066161616182',
                first_name: 'Hassan',
                last_name: 'MISSIRIA',
                password: '321321321',
                role: 'USER',
                active: true,
            },
            {
                email: 'mohamedmajilan@gmail.com',
                phone: '0615690996',
                first_name: 'Mohamed',
                last_name: 'Majilan',
                password: '123456789',
                role: 'USER',
                active: true,
            },
            {
                email: 'saidmajilan@gmail.com',
                phone: '0661728409',
                first_name: 'Said',
                last_name: 'Majilan',
                password: '123456789',
                role: 'USER',
                active: true,
            },
        ]);
    }
}
exports.default = UserSeeder;
//# sourceMappingURL=User.js.map
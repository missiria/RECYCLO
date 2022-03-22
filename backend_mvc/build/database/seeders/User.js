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
                password: 'c++',
                role: 'ADMIN',
                active: true
            },
            {
                email: 'amine@gmail.com',
                phone: '0656560552',
                password: 'p@ssword',
                role: 'ADMIN',
                active: true
            },
            {
                email: 'youssef@gmail.com',
                phone: '066262626262',
                password: 'p@ssword',
                role: 'ADMIN',
                active: false
            },
            {
                email: 'salem@gmail.com',
                phone: '066161616161',
                password: '321321321',
                role: 'MODERATOR',
                active: true
            },
            {
                email: 'hassan@gmail.com',
                phone: '066161616161',
                password: '321321321',
                role: 'USER',
                active: true
            }
        ]);
    }
}
exports.default = UserSeeder;
//# sourceMappingURL=User.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const Collect_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Collect"));
class CollectSeeder extends Seeder_1.default {
    async run() {
        await Collect_1.default.createMany([
            {
                collect_name: 'Plastique',
                image: 'collects/ci_1.png',
                point: 50,
                description: 'lorem ipsum',
            },
            {
                collect_name: 'Carton-Papier',
                image: 'collects/ci_2.png',
                point: 100,
                description: 'lorem ipsum',
            },
            {
                collect_name: 'Metal',
                image: 'collects/ci_3.png',
                point: 20,
                description: 'lorem ipsum',
            },
            {
                collect_name: 'Huile Végétale',
                image: 'collects/ci_4.png',
                point: 200,
                description: 'lorem ipsum',
            },
        ]);
    }
}
exports.default = CollectSeeder;
//# sourceMappingURL=Collect.js.map
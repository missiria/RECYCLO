"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const City_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/City"));
class CitySeeder extends Seeder_1.default {
    async run() {
        await City_1.default.createMany([
            {
                name: "Agadir",
                active: true,
            },
            {
                name: "Mohammedia",
                active: true,
            },
            {
                name: "Rabat",
                active: true,
            },
            {
                name: "Salé",
                active: true,
            },
            {
                name: "tangier",
                active: true,
            },
            {
                name: "Larache",
                active: true,
            },
            {
                name: "Chefchaouen",
                active: true,
            },
            {
                name: "Oujda",
                active: true,
            },
            {
                name: "Marrakech",
                active: true,
            },
            {
                name: "Inezgane",
                active: true,
            },
            {
                name: "Aït Melloul",
                active: true,
            },
            {
                name: "Dcheira El Jihadia",
                active: true,
            },
            {
                name: "Drargua",
                active: true,
            },
            {
                name: "Casablanca",
                active: true,
            }
        ]);
    }
}
exports.default = CitySeeder;
//# sourceMappingURL=City.js.map
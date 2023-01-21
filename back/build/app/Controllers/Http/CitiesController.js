"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const City_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/City"));
class CitiesController {
    async index({ response }) {
        const cities = await City_1.default.query()
            .select('id', 'name')
            .where('active', '=', true)
            .preload('country');
        return response.ok(cities);
    }
}
exports.default = CitiesController;
//# sourceMappingURL=CitiesController.js.map
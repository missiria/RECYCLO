"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Recharge_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Recharge"));
class RechargesController {
    async index({ response }) {
        const recharges = await Recharge_1.default.all();
        return response.ok(recharges);
    }
    async show({ params, response }) {
        const { id } = params;
        const recharge = await Recharge_1.default.find(id);
        if (!recharge) {
            return response.notFound({ message: 'Recharge none trouvé' });
        }
        return response.ok(recharge);
    }
}
exports.default = RechargesController;
//# sourceMappingURL=RechargesController.js.map
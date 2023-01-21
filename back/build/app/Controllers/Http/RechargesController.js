"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Helpers_1 = global[Symbol.for('ioc.use')]("App/Helpers");
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
    async store({ auth, request, response }) {
        const payload = request.body();
        const user = auth.use('api').user;
        const recharge = await Recharge_1.default.create({
            user_id: user.id,
            ...payload,
        });
        await (0, Helpers_1.createNotification)({
            status: 'UNREAD',
            type: 'PAYMENT',
            user_id: user.id,
            note: `${user?.fullName} a crée un rechage de type ${payload.type} de montant ${(0, Helpers_1.currencyFormat)(recharge.amount)} `,
        });
        response.ok({ message: 'Recharge enregistrée' });
    }
}
exports.default = RechargesController;
//# sourceMappingURL=RechargesController.js.map
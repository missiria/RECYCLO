"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Donation_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Donation"));
class DonationsController {
    async index({ response }) {
        const users = await Donation_1.default.all();
        return response.ok(users);
    }
    async show({ params, response }) {
        const { id } = params;
        const donation = await Donation_1.default.find(id);
        if (!donation) {
            return response.notFound({ message: 'Donation none trouvé' });
        }
        return response.ok(donation);
    }
}
exports.default = DonationsController;
//# sourceMappingURL=DonationsController.js.map
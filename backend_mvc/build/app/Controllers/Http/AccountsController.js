"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Account_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Account"));
const AccountFormValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/AccountFormValidator"));
class AccountsController {
    async index({ response }) {
        const accounts = await Account_1.default.all();
        return response.ok(accounts);
    }
    async show({ params, response }) {
        const { id } = params;
        const account = await Account_1.default.find(id);
        if (!account) {
            return response.notFound({ message: 'Compte none trouvé' });
        }
        return response.ok(account);
    }
    async store({ request, response }) {
        const payload = await request.validate(AccountFormValidator_1.default);
        const newAccount = await Account_1.default.create(payload);
        return response.ok(newAccount);
    }
    async destroy({ params, response }) {
        const { id } = params;
        const account = await Account_1.default.find(id);
        if (!account) {
            return response.notFound({ message: "Compte none trouvé" });
        }
        await account.delete();
        return response.ok({ message: 'Compte est bien supprimer successfully.' });
    }
}
exports.default = AccountsController;
//# sourceMappingURL=AccountsController.js.map
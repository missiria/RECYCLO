"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Account_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Account"));
const AccountFormValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/AccountFormValidator"));
class AccountsController {
    async show({ auth, response }) {
        const user = auth.use('api').user;
        const account = await Account_1.default.findBy('user_id', user.id);
        if (!account) {
            return response.notFound({ message: 'Compte non trouvée' });
        }
        return response.ok(account);
    }
    async update({ auth, request, response }) {
        const user = auth.use('api').user;
        if (!user)
            return response.badRequest('Need to be logged in');
        const { birth_day, birth_month, birth_year, ...rest } = await request.validate(AccountFormValidator_1.default);
        console.log(rest);
        const account = await Account_1.default.findBy('user_id', user?.id);
        if (!account)
            return response.notFound({ message: 'Compte non trouvée' });
        await account
            .merge({
            ...rest,
            ...(birth_year &&
                birth_month &&
                birth_day && {
                birth_date: new Date(`${birth_year}/${birth_month}/${birth_day}`),
            }),
        })
            .save();
        const token = await auth.use('api').generate(user ?? {}, {
            expiresIn: '30days',
        });
        return Object.assign({ auth: token, account }, user?.serialize());
    }
    async upload_verification({ auth, request, response }) {
        const user = auth.use('api').user;
        const account = await Account_1.default.findBy('user_id', user.id);
        account.type_verification = request.type;
        const frontVerify = request.file('front_card');
        if (frontVerify) {
            await frontVerify.move('uploads/validations/' + user.id, {
                name: `front_${Date.now()}.${frontVerify.extname}`,
                overwrite: true,
            });
        }
        account.front_verification_path = frontVerify.filePath
            .replace(/\\/g, '/')
            .replace('uploads/', '');
        const backVerify = request.file('back_card');
        if (backVerify) {
            await backVerify.move('uploads/validations/' + user.id, {
                name: `back_${Date.now()}.${backVerify.extname}`,
                overwrite: true,
            });
        }
        account.back_verification_path = backVerify.filePath.replace(/\\/g, '/').replace('uploads/', '');
        await account.save();
        return response.ok(account);
    }
    async destroy({ auth, response }) {
        const user = auth.use('api').user;
        const account = await Account_1.default.findBy('user_id', user.id);
        if (!account) {
            return response.notFound({ message: 'Compte none trouvé' });
        }
        await account.delete();
        return response.ok({ message: 'Compte est bien supprimer successfully.' });
    }
}
exports.default = AccountsController;
//# sourceMappingURL=AccountsController.js.map
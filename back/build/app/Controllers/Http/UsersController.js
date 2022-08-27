"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
const Account_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Account"));
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
const Hash_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Hash"));
const UserFormValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/UserFormValidator"));
const Mail_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Addons/Mail"));
class UsersController {
    async login({ auth, request, response }) {
        const phone = request.input('phone');
        const password = request.input('password');
        const user = await User_1.default.query().where('phone', phone).first();
        if (user) {
            if (!(await Hash_1.default.verify(user.password, password))) {
                return response.badRequest('Invalid credentials');
            }
            let token = await auth.use('api').generate(user, {
                expiresIn: '90days'
            });
            let account = await Account_1.default.findBy('user_id', user.id);
            let result = { auth: token, account: account };
            return Object.assign(result, user.serialize());
        }
        else {
            return { user: "Doesn't exist in our application!" };
        }
    }
    auth({ request }) {
        return request.cookie('user', []);
    }
    async logout({ auth, response }) {
        await auth.use('api').check();
        if (auth.use('api').isAuthenticated) {
            await auth.use('api').revoke();
            return {
                revoked: true
            };
        }
        else {
            return response.badRequest('USER/LOGOUT : you credentials');
        }
    }
    async index({ response }) {
        const users = await User_1.default.all();
        return response.ok(users);
    }
    async store({ request, auth }) {
        const payload = await request.validate(UserFormValidator_1.default);
        let account_type = payload.type;
        delete payload.type;
        const newUser = await User_1.default.create(payload);
        await auth.use('api').generate(newUser, {
            expiresIn: '90days'
        });
        let account = await Account_1.default.create({
            user_id: newUser.id,
            type: account_type
        });
        const signature = Route_1.default.makeSignedUrl('verifyEmail', {
            email: newUser.email,
        });
        await Mail_1.default.send((message) => {
            message
                .from('info@example.com')
                .to(newUser.email)
                .subject('Welcome Onboard! RECYCLOO')
                .htmlView('emails/welcome', { newUser, signature });
        });
        let result = { auth, account };
        return Object.assign(result, newUser.serialize());
    }
    async show({ params, response }) {
        const { id } = params;
        const user = await User_1.default.find(id);
        if (!user) {
            return response.notFound({ message: 'User not found' });
        }
        return response.ok(user);
    }
    async update({ request, params, response }) {
        const payload = await request.validate(UserFormValidator_1.default);
        const { id } = params;
        const user = await User_1.default.find(id);
        if (!user) {
            return response.notFound({ message: 'User not found' });
        }
        user.first_name = payload.first_name;
        user.last_name = payload.last_name;
        await user.save();
        return response.ok(user);
    }
    async destroy({ params, response }) {
        const { id } = params;
        const user = await User_1.default.find(id);
        if (!user) {
            return response.notFound({ message: 'user not found' });
        }
        await user.delete();
        return response.ok({ message: 'User deleted successfully.' });
    }
}
exports.default = UsersController;
//# sourceMappingURL=UsersController.js.map
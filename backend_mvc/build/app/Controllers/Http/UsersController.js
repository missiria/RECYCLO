"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
const Hash_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Hash"));
const UserFormValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/UserFormValidator"));
class UsersController {
    async login({ auth, request, response }) {
        const phone = request.input('phone');
        const password = request.input('password');
        const user = await User_1.default.query().where('phone', phone).where('active', 1).firstOrFail();
        if (!(await Hash_1.default.verify(user.password, password))) {
            return response.badRequest('Invalid credentials');
        }
        return await auth.use('web').login(user);
    }
    async logout({ auth, response }) {
        await auth.use('web').check();
        if (auth.use('web').isAuthenticated) {
            return await auth.use('web').logout();
        }
        else {
            return response.badRequest('USER/LOGOUT : you credentials');
        }
    }
    async index({ response }) {
        const users = await User_1.default.all();
        return response.ok(users);
    }
    async store({ request, response }) {
        const payload = await request.validate(UserFormValidator_1.default);
        const newUser = await User_1.default.create(payload);
        return response.ok(newUser);
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
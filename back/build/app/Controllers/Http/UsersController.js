"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateCode = void 0;
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
            if (!user.active) {
                return response.badRequest({ user: 'You need to verify your address email!' });
            }
            let token = await auth.use('api').generate(user, {
                expiresIn: '30days',
            });
            let account = await Account_1.default.findBy('user_id', user.id);
            let result = { auth: token, account };
            return Object.assign(result, user.serialize());
        }
        else {
            return response.badRequest({ user: "You Doesn't exist in our application!" });
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
                revoked: true,
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
    async store({ request, auth, response }) {
        const payload = await request.validate(UserFormValidator_1.default);
        let account_type = payload.type;
        delete payload.type;
        payload['code'] = (0, exports.generateCode)();
        const user = await User_1.default.findBy('email', payload.email);
        if (user)
            return response.badRequest('duplicated');
        const newUser = await User_1.default.create(payload);
        const token = await auth.use('api').generate(newUser, {
            expiresIn: '30days',
        });
        let account = await Account_1.default.create({
            user_id: newUser.id,
            type: account_type,
        });
        const signature = Route_1.default.makeSignedUrl('verifyEmail', {
            email: newUser.email,
        });
        await Mail_1.default.send((message) => {
            message
                .from(process.env.EMAIL)
                .to(newUser.email)
                .subject('Welcome Onboard! RECYCLOO')
                .htmlView('emails/welcome', {
                newUser,
                signature: `http://${process.env.HOST}${signature}`,
                code: payload['code'],
            });
        });
        return Object.assign({ auth: token, account }, newUser.serialize());
    }
    async verifyEmail({ request, auth, response }) {
        const { email } = request.body();
        const user = await User_1.default.findBy("email", email);
        if (!user)
            return response.notFound('No user with that email');
        const [{}, account] = await Promise.all([
            await user.merge({ active: true }).save(),
            await Account_1.default.findBy('user_id', user.id)
        ]);
        const token = await auth.use('api').generate(user, {
            expiresIn: '30days',
        });
        return Object.assign({ auth: token, account }, user.serialize());
    }
    async show({ params, response }) {
        const { id } = params;
        const user = await User_1.default.find(id);
        if (!user) {
            return response.notFound({ message: 'User not found' });
        }
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
    async forget_password({ response, request }) {
        const payload = request.body();
        payload['code'] = (0, exports.generateCode)();
        const user = await User_1.default.findBy('email', payload.email);
        if (!user)
            return response.notFound(`No user with that email: ${payload.email}`);
        await user.merge({ forget_password_code: payload['code'] }).save(),
            await Mail_1.default.send((message) => {
                message
                    .from(process.env.EMAIL)
                    .to(payload.email)
                    .subject('Here is you verification code')
                    .htmlView('emails/forget_password', { verificationCode: payload['code'] });
            });
        return response.ok({ message: `A verification code is sent to: ${payload.email}`, code: payload['code'] });
    }
    async update_password({ response, request }) {
        const { email, password } = request.body();
        const user = await User_1.default.findBy('email', email);
        if (!user)
            return response.status(400).json({ user: "You Doesn't exist in our application!" });
        await user.merge({ password }).save();
        return response.status(201).json({ message: "You've changed your password successfully" });
    }
    async resend_code({ response, request }) {
        const payload = request.body();
        console.log(payload);
        payload['code'] = (0, exports.generateCode)();
        const user = await User_1.default.findBy('email', payload.email);
        if (!user)
            return response.notFound(`No user with that email: ${payload.email}`);
        await user.merge({ forget_password_code: payload['code'] }).save();
        if (!payload.activation) {
            await Mail_1.default.send((message) => {
                message
                    .from(process.env.EMAIL)
                    .to(payload.email)
                    .subject('Here is you verification code')
                    .htmlView('emails/forget_password', { verificationCode: payload['code'] });
            });
        }
        else {
            await Mail_1.default.send((message) => {
                message
                    .from(process.env.EMAIL)
                    .to(user.email)
                    .subject('Welcome Onboard! RECYCLOO')
                    .htmlView('emails/welcome', {
                    user,
                    signature: ``,
                    code: payload['code'],
                });
            });
        }
        return response.status(200).json({ message: `A verification code is sent to: ${payload.email}`, code: payload['code'] });
    }
}
exports.default = UsersController;
const generateCode = () => {
    return Math.floor(Math.random() * 9000) + 1000;
};
exports.generateCode = generateCode;
//# sourceMappingURL=UsersController.js.map
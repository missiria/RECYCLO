"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class UserFormValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            email: Validator_1.schema.string({}, [Validator_1.rules.email(), Validator_1.rules.unique({ table: 'users', column: 'email' })]),
            password: Validator_1.schema.string({}, [Validator_1.rules.minLength(3), Validator_1.rules.maxLength(50)]),
            phone: Validator_1.schema.number([Validator_1.rules.unique({ table: 'users', column: 'email' })]),
            role: Validator_1.schema.enum(['ADMIN', 'USER', 'MODERATOR']),
            active: Validator_1.schema.boolean.optional(),
            remember_me_token: Validator_1.schema.boolean.optional()
        });
        this.messages = {};
    }
}
exports.default = UserFormValidator;
//# sourceMappingURL=UserFormValidator.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class UserFormValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            email: Validator_1.schema.string({}, [Validator_1.rules.email(), Validator_1.rules.unique({ table: 'users', column: 'email' })]),
            password: Validator_1.schema.string({}, [Validator_1.rules.minLength(3), Validator_1.rules.maxLength(50)]),
            first_name: Validator_1.schema.string({}, [Validator_1.rules.minLength(2), Validator_1.rules.maxLength(255)]),
            last_name: Validator_1.schema.string({}, [Validator_1.rules.minLength(2), Validator_1.rules.maxLength(255)]),
            phone: Validator_1.schema.number([Validator_1.rules.unique({ table: 'users', column: 'phone' })]),
            type: Validator_1.schema.enum(['MENAGE', 'COLLECTOR']),
            active: Validator_1.schema.boolean.optional(),
            remember_me_token: Validator_1.schema.boolean.optional()
        });
        this.messages = {
            unique: 'The {{ field }} is already an account'
        };
    }
}
exports.default = UserFormValidator;
//# sourceMappingURL=UserFormValidator.js.map
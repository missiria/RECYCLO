"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class ForgetPasswordValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            email: Validator_1.schema.string({}, [Validator_1.rules.email(), Validator_1.rules.unique({ table: 'users', column: 'email' })]),
            token: Validator_1.schema.string({}, [Validator_1.rules.required()])
        });
        this.messages = {};
    }
}
exports.default = ForgetPasswordValidator;
//# sourceMappingURL=ForgetPasswordValidator.js.map
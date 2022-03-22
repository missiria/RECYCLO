"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class DeclarationFormValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            collect_id: Validator_1.schema.number(),
            account_id: Validator_1.schema.number(),
            quantity: Validator_1.schema.number(),
            status: Validator_1.schema.enum(['PENDING', 'VALID', 'CANCELED', 'PAID']),
            image: Validator_1.schema.string({}, [Validator_1.rules.minLength(20)])
        });
        this.messages = {};
    }
}
exports.default = DeclarationFormValidator;
//# sourceMappingURL=DeclarationFormValidator.js.map
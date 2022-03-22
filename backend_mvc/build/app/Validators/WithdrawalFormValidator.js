"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class WithdrawalFormValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            user_id: Validator_1.schema.number(),
            amount: Validator_1.schema.number(),
            status: Validator_1.schema.enum(['PENDING', 'VALID', 'PAID', 'CANCELED'])
        });
        this.messages = {};
    }
}
exports.default = WithdrawalFormValidator;
//# sourceMappingURL=WithdrawalFormValidator.js.map
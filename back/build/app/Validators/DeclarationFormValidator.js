"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class DeclarationForm {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            collect_id: Validator_1.schema.number(),
            status: Validator_1.schema.enum.optional(['PENDING', 'VALID', 'CANCELED', 'PAID']),
            quantity: Validator_1.schema.number.optional(),
            date: Validator_1.schema.date(),
            time: Validator_1.schema.enum(['08:00 - 12:00', '12:00 - 16:00', '16:00 - 20:00', '20:00 - 00:00']),
        });
        this.messages = {};
    }
}
exports.default = DeclarationForm;
//# sourceMappingURL=DeclarationFormValidator.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class OrderForm {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            declaration_id: Validator_1.schema.number.optional(),
            status: Validator_1.schema.enum.optional(['PENDING', 'CONFIRM', 'DONE', 'CANCELED']),
        });
        this.messages = {};
    }
}
exports.default = OrderForm;
//# sourceMappingURL=OrderFormValidator.js.map
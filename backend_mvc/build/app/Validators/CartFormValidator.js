"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class CartFormValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            number_card: Validator_1.schema.number(),
            user_id: Validator_1.schema.number(),
            expiry_year: Validator_1.schema.date(),
            expiry_month: Validator_1.schema.date(),
        });
        this.messages = {};
    }
}
exports.default = CartFormValidator;
//# sourceMappingURL=CartFormValidator.js.map
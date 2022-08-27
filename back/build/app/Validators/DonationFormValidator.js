"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class DonationFormValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            full_name: Validator_1.schema.string(),
            bank: Validator_1.schema.string(),
            rib: Validator_1.schema.number(),
            amount: Validator_1.schema.number()
        });
        this.messages = {};
    }
}
exports.default = DonationFormValidator;
//# sourceMappingURL=DonationFormValidator.js.map
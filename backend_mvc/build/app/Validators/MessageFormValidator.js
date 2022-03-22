"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class MessageFormValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            message: Validator_1.schema.string(),
            sender_account_id: Validator_1.schema.number(),
            received_account_id: Validator_1.schema.number()
        });
        this.messages = {};
    }
}
exports.default = MessageFormValidator;
//# sourceMappingURL=MessageFormValidator.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class NotificationFormValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            note: Validator_1.schema.string(),
            type: Validator_1.schema.enum(['DECLARATION', 'MESSAGE', 'PAYMENT', 'POINT', 'UPDATE']),
            status: Validator_1.schema.enum(['READ', 'UNREAD'])
        });
        this.messages = {};
    }
}
exports.default = NotificationFormValidator;
//# sourceMappingURL=NotificationFormValidator.js.map
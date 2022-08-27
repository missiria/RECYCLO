"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class CollectFormValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            status: Validator_1.schema.enum.optional(['PENDING', 'VALID', 'CANCELED', 'PAID']),
            collect_id: Validator_1.schema.number.optional(),
            city_id: Validator_1.schema.number.optional(),
            peroid: Validator_1.schema.number.optional(),
            time: Validator_1.schema.string.optional(),
        });
        this.messages = {};
    }
}
exports.default = CollectFormValidator;
//# sourceMappingURL=DeclarationFilterFormValidator.js.map
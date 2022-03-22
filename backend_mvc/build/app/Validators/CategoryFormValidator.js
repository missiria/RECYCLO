"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class CategoryFormValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            description: Validator_1.schema.string({}, [Validator_1.rules.minLength(10)]),
            active: Validator_1.schema.boolean(),
            user_id: Validator_1.schema.number()
        });
        this.messages = {};
    }
}
exports.default = CategoryFormValidator;
//# sourceMappingURL=CategoryFormValidator.js.map
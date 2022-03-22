"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class ReviewFormValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            comment: Validator_1.schema.string({}, [Validator_1.rules.minLength(10), Validator_1.rules.maxLength(255)]),
            user_id: Validator_1.schema.number(),
            category_id: Validator_1.schema.number(),
            active: Validator_1.schema.boolean(),
        });
        this.messages = {};
    }
}
exports.default = ReviewFormValidator;
//# sourceMappingURL=ReviewFormValidator.js.map
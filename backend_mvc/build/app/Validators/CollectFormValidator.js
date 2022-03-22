"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class CollectFormValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            collect_name: Validator_1.schema.string({}, [Validator_1.rules.minLength(10)]),
            description: Validator_1.schema.string({}, [Validator_1.rules.minLength(50)]),
            image: Validator_1.schema.string({}, [Validator_1.rules.minLength(20)]),
            point: Validator_1.schema.number()
        });
        this.messages = {};
    }
}
exports.default = CollectFormValidator;
//# sourceMappingURL=CollectFormValidator.js.map
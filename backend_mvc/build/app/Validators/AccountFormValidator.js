"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class AccountFormValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            first_name: Validator_1.schema.string({}, [Validator_1.rules.minLength(3)]),
            last_name: Validator_1.schema.string({}, [Validator_1.rules.minLength(3)]),
            gender: Validator_1.schema.number(),
            type: Validator_1.schema.number(),
            avatar: Validator_1.schema.string.optional({}, [Validator_1.rules.minLength(4)]),
            address: Validator_1.schema.string({}, [Validator_1.rules.minLength(10)]),
            city: Validator_1.schema.string({}, [Validator_1.rules.minLength(4)]),
            country: Validator_1.schema.string({}, [Validator_1.rules.minLength(4)]),
            nationality: Validator_1.schema.string({}, [Validator_1.rules.minLength(4)]),
            society_id: Validator_1.schema.string(),
            zip_code: Validator_1.schema.number(),
            phone: Validator_1.schema.string({}, [Validator_1.rules.mobile()]),
        });
        this.messages = {};
    }
}
exports.default = AccountFormValidator;
//# sourceMappingURL=AccountFormValidator.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class AccountFormValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            gender: Validator_1.schema.enum.optional(['FEMALE', 'MALE']),
            avatar: Validator_1.schema.string.optional({}, [Validator_1.rules.minLength(4)]),
            address: Validator_1.schema.string.optional({}, [Validator_1.rules.minLength(4)]),
            city: Validator_1.schema.string.optional({}, [Validator_1.rules.minLength(4)]),
            country: Validator_1.schema.string.optional({}, [Validator_1.rules.minLength(4)]),
            nationality: Validator_1.schema.string.optional({}, [Validator_1.rules.minLength(4)]),
            society_id: Validator_1.schema.string.optional(),
            type: Validator_1.schema.enum.optional(['MENAGE', 'COLLECTOR']),
            zip_code: Validator_1.schema.number.optional(),
            city_id: Validator_1.schema.number.optional(),
            cin: Validator_1.schema.string.optional(),
            birth_date: Validator_1.schema.date.optional({ format: 'yyyy-MM-dd' }),
            first_name: Validator_1.schema.string.optional({}, [Validator_1.rules.minLength(10)]),
            last_name: Validator_1.schema.string.optional({}, [Validator_1.rules.minLength(10)]),
            phone: Validator_1.schema.string.optional({}, [Validator_1.rules.minLength(10)]),
            email: Validator_1.schema.string.optional({}, [Validator_1.rules.minLength(10)]),
            birth_day: Validator_1.schema.string.optional(),
            birth_month: Validator_1.schema.string.optional(),
            birth_year: Validator_1.schema.string.optional(),
        });
        this.messages = {};
    }
}
exports.default = AccountFormValidator;
//# sourceMappingURL=AccountFormValidator.js.map
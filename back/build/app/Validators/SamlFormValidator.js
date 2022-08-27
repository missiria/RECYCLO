"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class SamlFormValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            login_saml: Validator_1.schema.string(),
            password: Validator_1.schema.string({}, [Validator_1.rules.minLength(8), Validator_1.rules.maxLength(60)]),
        });
        this.messages = {
            'required': '{{ field }} est requis !!',
            'minLength': '{{ field }} doit étre inferieure que 8 !!'
        };
    }
}
exports.default = SamlFormValidator;
//# sourceMappingURL=SamlFormValidator.js.map
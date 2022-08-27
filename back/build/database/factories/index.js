"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFactory = void 0;
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
const Factory_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Factory"));
exports.UserFactory = Factory_1.default
    .define(User_1.default, ({ faker }) => {
    return {
        phone: faker.phone.phoneFormats(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        first_name: faker.name.findName(),
        last_name: faker.name.lastName(),
        active: faker.datatype.boolean(),
        remember_me_token: faker.datatype.boolean()
    };
})
    .build();
//# sourceMappingURL=index.js.map
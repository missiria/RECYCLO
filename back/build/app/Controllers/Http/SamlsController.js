"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
const SamlFormValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/SamlFormValidator"));
class SamlsController {
    async store({ request, response }) {
        const payload = await request.validate(SamlFormValidator_1.default);
        const newUser = await User_1.default.create(payload);
        response.ok(newUser);
    }
}
exports.default = SamlsController;
//# sourceMappingURL=SamlsController.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Declaration_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Declaration"));
class DeclarationsController {
    async index({ response }) {
        const declarations = await Declaration_1.default.all();
        return response.ok(declarations);
    }
    async show({ params, response }) {
        const { id } = params;
        const declaration = await Declaration_1.default.find(id);
        if (!declaration) {
            return response.notFound({ message: 'Déclaration none trouvé' });
        }
        return response.ok(declaration);
    }
}
exports.default = DeclarationsController;
//# sourceMappingURL=DeclarationsController.js.map
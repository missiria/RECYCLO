"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Collect_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Collect"));
class CollectsController {
    async index({ response }) {
        const collects = await Collect_1.default.all();
        return response.ok(collects);
    }
}
exports.default = CollectsController;
//# sourceMappingURL=CollectsController.js.map
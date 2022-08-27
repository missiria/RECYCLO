"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Order_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Order"));
const Declaration_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Declaration"));
const OrderFormValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/OrderFormValidator"));
class OrdersController {
    async index({ auth, request, response }) {
        const user = auth.use('api').user;
        const payload = await request.validate(OrderFormValidator_1.default);
        const orders = await Order_1.default.query().preload('declaration', (query) => {
            query.preload('collect', (query) => {
                query.select('id', 'collect_name', 'image', 'point', 'description');
            }).preload('user', (query) => {
                query.select('id', 'first_name', 'last_name', 'email', 'phone');
            });
        }).where('status', payload.status).where('user_id', user.id);
        return response.ok(orders);
    }
    async accept({ auth, params, response }) {
        const { id } = params;
        const user = auth.use('api').user;
        const declaration = await Declaration_1.default.find(id);
        if (!declaration) {
            return response.notFound({ message: 'Déclaration none trouvé' });
        }
        const newOrder = await Order_1.default.create({
            declaration_id: id,
            user_id: user.id,
            status: 'PENDING',
        });
        declaration.status = 'PAID';
        declaration.save();
        return response.ok({ error: false, message: 'Success', order: newOrder });
    }
}
exports.default = OrdersController;
//# sourceMappingURL=OrdersController.js.map
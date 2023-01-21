"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Order_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Order"));
const Declaration_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Declaration"));
const OrderFormValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/OrderFormValidator"));
const Helpers_1 = global[Symbol.for('ioc.use')]("App/Helpers");
class OrdersController {
    async index({ auth, request, response }) {
        const user = auth.use('api').user;
        const payload = await request.validate(OrderFormValidator_1.default);
        const orders = await Order_1.default.query()
            .preload('declaration', (query) => {
            query
                .preload('collect', (query) => {
                query.select('id', 'collect_name', 'image', 'point', 'description');
            })
                .preload('user', (query) => {
                query.select('id', 'first_name', 'last_name', 'email', 'phone');
            });
        })
            .where('status', payload.status)
            .where('user_id', user.id);
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
            user_id: user?.id,
            status: 'PENDING',
        });
        declaration.status = 'VALID';
        declaration.save();
        await (0, Helpers_1.createNotification)({
            note: `le collecteur ${user?.first_name} ${user?.last_name} a validée la déclaration qui est créé en ${declaration.createdAt.toLocaleString()} de quantité ${declaration.quantity}`,
            type: 'DECLARATION',
            status: 'UNREAD',
            user_id: user.id,
        });
        return response.ok({ error: false, message: 'Success', order: newOrder });
    }
    async updateOrder({ auth, params, request, response }) {
        const { id } = params;
        const { status } = request.body();
        const user = auth.use('api').user;
        const declaration = await Declaration_1.default.find(id);
        const order = await Order_1.default.findBy('declaration_id', declaration?.id);
        if (!declaration || !order) {
            return response.notFound({ message: 'Element non trouvé' });
        }
        await order.merge({ status }).save();
        console.log('reached');
        await (0, Helpers_1.createNotification)({
            note: `${user?.first_name} ${user?.last_name} Modifier la declaration ${declaration.id} créé en ${declaration.createdAt.toLocaleString()} de quantité ${declaration.quantity}`,
            type: 'DECLARATION',
            status: 'UNREAD',
            user_id: user.id,
        });
        response.ok({ message: 'Order modifiée' });
    }
}
exports.default = OrdersController;
//# sourceMappingURL=OrdersController.js.map
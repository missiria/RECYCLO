"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Declaration_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Declaration"));
const ImagesDeclaration_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/ImagesDeclaration"));
const Helpers_1 = global[Symbol.for('ioc.use')]("App/Helpers");
class DeclarationsController {
    async list({ request, response }) {
        const { city_id, collect_id, period, status, time } = request.body();
        const declarationsPromise = Declaration_1.default.query()
            .preload('images')
            .preload('collect')
            .preload('user', (query) => {
            query.select('*').preload('account', (query) => {
                query.select('*').preload('city', (query) => {
                    query.select('id', 'name');
                });
            });
        })
            .where('status', status)
            .orderBy('created_at', 'desc');
        if (city_id && city_id !== -1) {
            declarationsPromise.preload('user', (query) => {
                query.select('*').preload('account', (query) => {
                    query
                        .select('id', 'gender', 'type', 'avatar', 'address', 'city_id')
                        .preload('city', (query) => {
                        query.select('id', 'name');
                    });
                });
            });
        }
        if (collect_id && collect_id !== -1) {
            declarationsPromise.where('collect_id', collect_id);
        }
        if (time) {
            declarationsPromise.where('time', time);
        }
        if (period !== undefined && period !== -1) {
            if (period == 1) {
                declarationsPromise.where('created_at', '>', 'DATE_SUB(NOW(),INTERVAL 1 HOUR)');
            }
            else if (period == 2) {
                declarationsPromise.whereRaw('DATE(created_at) = DATE(NOW())');
            }
            else if (period == 3) {
                declarationsPromise.where('created_at', '>', 'DATE_SUB(NOW(),INTERVAL 7 days)');
            }
            else if (period == 4) {
                declarationsPromise
                    .whereRaw('month(created_at) = month(NOW())')
                    .whereRaw('year(created_at) = year(NOW())');
            }
        }
        return response.ok(await declarationsPromise);
    }
    async index({ request, response }) {
        const payload = request.body();
        console.log('payload >', payload);
        const declarations = await Declaration_1.default.query()
            .preload('images')
            .preload('collect')
            .where('status', payload.status)
            .preload('user', (query) => {
            query.select('*').preload('account', (query) => {
                query.select('*').preload('city', (query) => {
                    query.select('id', 'name');
                });
            });
        })
            .orderBy('created_at', 'desc');
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
    async save({ auth, request, response }) {
        const user = auth.use('api').user;
        const payload = request.body();
        payload.user_id = user?.id;
        payload.status = 'PENDING';
        const newDeclaration = await Declaration_1.default.create(payload);
        const images = request.files('images');
        for (let image of images) {
            await image.move('uploads/declarations/' + user?.id, {
                name: 'd_' + Date.now() + '.' + image.extname,
                overwrite: true,
            });
            await ImagesDeclaration_1.default.create({
                declaration_id: newDeclaration.id,
                image: image?.filePath?.replace(/\\/g, '/').replace('uploads/', ''),
            });
        }
        await (0, Helpers_1.createNotification)({
            type: 'DECLARATION',
            note: `${user?.first_name} ${user?.last_name} a Crée une declaration en ${newDeclaration.createdAt.toLocaleString()} de quantité ${newDeclaration.quantity}`,
            status: 'UNREAD',
            user_id: user.id,
        });
        return response.ok({ error: false, message: 'Success' });
    }
    async update({ auth, request, response, params }) {
        const user = auth.use('api').user;
        const { id } = params;
        const { status } = request.body();
        const declaration = await Declaration_1.default.find(id);
        if (!declaration)
            return response.notFound({ message: 'Declaration non trouvée' });
        await Promise.all([
            declaration.merge({ status }).save(),
            (0, Helpers_1.createNotification)({
                type: 'DECLARATION',
                note: `${user?.fullName} a modifée la declaration en ${declaration.updatedAt.toLocaleString()} de quantité ${declaration.quantity}`,
                status: 'UNREAD',
                user_id: user.id,
            }),
        ]);
        response.ok({ message: 'Declaration modifiée' });
    }
    async remove({ auth, params, response }) {
        const user = auth.use('api').user;
        const { id } = params;
        const declaration = await Declaration_1.default.find(id);
        if (!declaration)
            return response.notFound({ message: 'Declaration non trouvée' });
        await Promise.all([
            declaration.delete(),
            (0, Helpers_1.createNotification)({
                type: 'DECLARATION',
                note: `${user?.fullName} a supprimée la declaration en ${new Date().toLocaleDateString()} de quantité ${declaration.quantity}`,
                status: 'UNREAD',
                user_id: user.id,
            }),
        ]);
        response.ok({ message: 'Declaration Supprimée' });
    }
}
exports.default = DeclarationsController;
//# sourceMappingURL=DeclarationsController.js.map
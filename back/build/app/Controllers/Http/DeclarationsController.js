"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Declaration_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Declaration"));
const ImagesDeclaration_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/ImagesDeclaration"));
const DeclarationFormValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/DeclarationFormValidator"));
const DeclarationFilterFormValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/DeclarationFilterFormValidator"));
class DeclarationsController {
    async list({ request, response }) {
        const payload = await request.validate(DeclarationFilterFormValidator_1.default);
        const declarations = await Declaration_1.default.query().select('id', 'collect_id', 'user_id', 'quantity', 'status', 'date', 'time', 'created_at', 'updated_at').preload('images', (query) => {
            query.select('id', 'declaration_id', 'image');
        })
            .preload('collect', (query) => {
            query.select('id', 'collect_name', 'image', 'point', 'description');
        })
            .preload('user', (query) => {
            query.select('id', 'first_name', 'last_name', 'email', 'phone').preload('account', (query) => {
                query.select('id', 'gender', 'type', 'avatar', 'address', 'country', 'city_id').preload('city', (query) => {
                    query.select('id', 'name');
                });
            });
        }).where((query) => {
            query.where('status', 'VALID');
            if (payload.time !== undefined && payload.time !== '') {
                query.where('time', payload.time);
            }
            if (payload.collect_id !== undefined && payload.collect_id !== -1) {
                query.where('collect_id', payload.collect_id);
            }
            if (payload.city_id !== undefined && payload.city_id !== -1) {
                query.whereHas('user', (query) => {
                    query.whereHas('account', (query) => {
                        query.where('city_id', payload.city_id);
                    });
                });
            }
            if (payload.peroid !== undefined && payload.peroid !== -1) {
                if (payload.peroid == 1) {
                    query.where('created_at', '>', 'DATE_SUB(NOW(),INTERVAL 1 HOUR)');
                }
                else if (payload.peroid == 2) {
                    query.whereRaw('DATE(created_at) = DATE(NOW())');
                }
                else if (payload.peroid == 3) {
                    query.where('created_at', '>', 'DATE_SUB(NOW(),INTERVAL 7 days)');
                }
                else if (payload.peroid == 4) {
                    query.whereRaw('month(created_at) = month(NOW())').whereRaw('year(created_at) = year(NOW())');
                }
            }
        });
        return response.ok(declarations);
    }
    async index({ auth, request, response }) {
        const user = auth.use('api').user;
        const payload = await request.validate(DeclarationFilterFormValidator_1.default);
        const declarations = await Declaration_1.default.query().preload('images').preload('collect').where('status', payload.status).where('user_id', user.id);
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
        const payload = await request.validate(DeclarationFormValidator_1.default);
        payload.user_id = user.id;
        payload.status = 'PENDING';
        const newDeclaration = await Declaration_1.default.create(payload);
        const images = request.files('images');
        for (let image of images) {
            await image.move('uploads/declarations/' + user.id, {
                name: 'd_' + Date.now() + '.' + image.extname,
                overwrite: true,
            });
            await ImagesDeclaration_1.default.create({
                declaration_id: newDeclaration.id,
                image: image.filePath.replace(/\\/g, '/').replace('uploads/', ''),
            });
        }
        return response.ok({ error: false, message: 'Success' });
    }
}
exports.default = DeclarationsController;
//# sourceMappingURL=DeclarationsController.js.map
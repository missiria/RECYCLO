"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
const Application_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Application"));
Route_1.default.group(() => {
    Route_1.default.get('account', 'AccountsController.show');
    Route_1.default.put('accounts', 'AccountsController.update');
    Route_1.default.post('account/upload_verfication', 'AccountsController.upload_verfication');
    Route_1.default.delete('accounts', 'AccountsController.destroy');
    Route_1.default.post('orders', 'OrdersController.index');
    Route_1.default.post('orders/:id/accept', 'OrdersController.accept');
    Route_1.default.post('declarations', 'DeclarationsController.index');
    Route_1.default.post('declarations/add', 'DeclarationsController.save');
})
    .prefix('/api/v1')
    .middleware('api_auth');
Route_1.default.group(() => {
    Route_1.default.resource('cities', 'CitiesController').apiOnly();
    Route_1.default.post('users', 'UsersController.store');
    Route_1.default.get('collects', 'CollectsController.index');
    Route_1.default.get('declarations', 'DeclarationsController.list');
    Route_1.default.resource('donations', 'DonationsController').apiOnly();
    Route_1.default.resource('recharges', 'RechargesController').apiOnly();
    Route_1.default.get('/verify/:email', async ({ request }) => {
        if (request.hasValidSignature()) {
            return 'Votre compte est verifié par email!';
        }
        return 'Signature is missing or URL was tampered.';
    }).as('verifyEmail');
}).prefix('/api/v1');
Route_1.default.group(() => {
    Route_1.default.post('/users/login', 'UsersController.login').as('users.login');
    Route_1.default.post('/users/logout', 'UsersController.logout').as('users.logout');
    Route_1.default.post('/users/auth', 'UsersController.auth').as('users.auth');
}).prefix('/api/v1');
Route_1.default.get('/files/:folder/:image', async ({ response, params }) => {
    return response.download(Application_1.default.tmpPath(`uploads/${params.folder}/${params.image}`));
});
Route_1.default.get('/files/:type/:folder/:image', async ({ response, params }) => {
    return response.download(Application_1.default.tmpPath(`uploads/${params.type}/${params.folder}/${params.image}`));
});
Route_1.default.get('*', async ({ response }) => {
    return response.accepted({ error: 400, message: 'EDGE : Bad Request 400' });
});
//# sourceMappingURL=routes.js.map
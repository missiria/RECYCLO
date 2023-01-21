"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
const Application_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Application"));
Route_1.default.group(() => {
    Route_1.default.get('users/all', 'UsersController.index');
    Route_1.default.get('account', 'AccountsController.show');
    Route_1.default.put('accounts/update', 'AccountsController.update');
    Route_1.default.post('account/upload_verfication', 'AccountsController.upload_verification');
    Route_1.default.delete('accounts', 'AccountsController.destroy');
    Route_1.default.post('orders', 'OrdersController.index');
    Route_1.default.post('orders/:id/accept', 'OrdersController.accept');
    Route_1.default.put('orders/:id/update', 'OrdersController.updateOrder');
    Route_1.default.post('declarations', 'DeclarationsController.index');
    Route_1.default.post('declarations/filtered', 'DeclarationsController.list');
    Route_1.default.post('declarations/add', 'DeclarationsController.save');
    Route_1.default.put('declarations/update/:id', 'DeclarationsController.update');
    Route_1.default.delete('declarations/delete/:id', 'DeclarationsController.remove');
    Route_1.default.get('notifications/all', 'NotificationsController.getAllNotification');
    Route_1.default.get('notifications', 'NotificationsController.getUserNotifications');
    Route_1.default.get('notifications/length', 'NotificationsController.length');
    Route_1.default.post('notifications/create', 'NotificationsController.create');
    Route_1.default.get('wallet/balance', 'WalletsController.getWalletInfo');
    Route_1.default.post('payment/create', 'PaymentsController.createPayment');
    Route_1.default.get('payment/transactions', 'PaymentsController.getPayments');
    Route_1.default.resource('recharges', 'RechargesController').apiOnly();
    Route_1.default.get('banks/all', 'BanksController.getAllBanks');
    Route_1.default.get('withdrawals', 'WithdrawalsController.getWithdrawal');
    Route_1.default.post('feedback/create', 'ReviewsController.createReview');
    Route_1.default.get('feedback', 'ReviewsController.getReviewsByUserId');
})
    .prefix('/api/v1')
    .middleware('api_auth');
Route_1.default.group(() => {
    Route_1.default.post('users', 'UsersController.store');
    Route_1.default.resource('cities', 'CitiesController').apiOnly();
    Route_1.default.resource('countries', 'CountriesController').apiOnly();
    Route_1.default.post('forget_password', 'UsersController.forget_password');
    Route_1.default.post('update_password', 'UsersController.update_password');
    Route_1.default.post('resend_code', 'UsersController.resend_code');
    Route_1.default.post('verify', 'UsersController.verifyEmail');
    Route_1.default.get('collects', 'CollectsController.index');
    Route_1.default.get('declarations', 'DeclarationsController.list');
    Route_1.default.resource('donations', 'DonationsController').apiOnly();
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
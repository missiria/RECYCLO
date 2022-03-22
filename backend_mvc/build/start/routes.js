"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.get('/', async ({ auth }) => {
    await auth.use('web').check();
    if (auth.use('web').isAuthenticated) {
        return { hello: 'Connected !' };
    }
    else {
        return { hello: "HackerZ !!!" };
    }
});
Route_1.default.group(() => {
    Route_1.default.resource('users', 'UsersController').apiOnly();
    Route_1.default.resource('accounts', 'AccountsController').apiOnly();
    Route_1.default.resource('donations', 'DonationsController').apiOnly();
    Route_1.default.resource('declarations', 'DeclarationsController').apiOnly();
    Route_1.default.resource('recharges', 'RechargesController').apiOnly();
    Route_1.default.resource('collects', 'CollectsController').apiOnly();
    Route_1.default.post('/users/login', 'UsersController.login').as('users.login');
    Route_1.default.post('/users/logout', 'UsersController.logout').as('users.logout');
}).prefix('/api/v1');
//# sourceMappingURL=routes.js.map
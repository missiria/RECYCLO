"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ApiAuth {
    async handle({ auth, response }, next) {
        await auth.use('api').check();
        if (!auth.use('api').isAuthenticated) {
            response.status(401).json({ error: 401, message: 'Must be logged in' });
            return;
        }
        await next();
    }
}
exports.default = ApiAuth;
//# sourceMappingURL=ApiAuth.js.map
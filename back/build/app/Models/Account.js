"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const luxon_1 = require("luxon");
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
const City_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/City"));
const Orm_1 = global[Symbol.for('ioc.use')]("Adonis/Lucid/Orm");
class Account extends Orm_1.BaseModel {
}
__decorate([
    (0, Orm_1.column)({ isPrimary: true }),
    __metadata("design:type", Number)
], Account.prototype, "id", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Account.prototype, "user_id", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Account.prototype, "gender", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Account.prototype, "type", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Account.prototype, "society_id", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Account.prototype, "avatar", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Account.prototype, "address", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Account.prototype, "first_name", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Account.prototype, "last_name", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Account.prototype, "cin", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Account.prototype, "phone", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Account.prototype, "email", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Object)
], Account.prototype, "birth_date", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Account.prototype, "city_id", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Account.prototype, "country", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Account.prototype, "nationality", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Account.prototype, "type_verification", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Account.prototype, "front_verification_path", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Account.prototype, "back_verification_path", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Account.prototype, "zip_code", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true }),
    __metadata("design:type", luxon_1.DateTime)
], Account.prototype, "createdAt", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", luxon_1.DateTime)
], Account.prototype, "updatedAt", void 0);
__decorate([
    (0, Orm_1.hasOne)(() => User_1.default),
    __metadata("design:type", Object)
], Account.prototype, "user", void 0);
__decorate([
    (0, Orm_1.belongsTo)(() => City_1.default, { localKey: 'id', foreignKey: 'city_id' }),
    __metadata("design:type", Object)
], Account.prototype, "city", void 0);
exports.default = Account;
//# sourceMappingURL=Account.js.map
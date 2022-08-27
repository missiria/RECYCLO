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
const Collect_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Collect"));
const ImagesDeclaration_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/ImagesDeclaration"));
const Orm_1 = global[Symbol.for('ioc.use')]("Adonis/Lucid/Orm");
class Declaration extends Orm_1.BaseModel {
}
__decorate([
    (0, Orm_1.column)({ isPrimary: true }),
    __metadata("design:type", Number)
], Declaration.prototype, "id", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Declaration.prototype, "collect_id", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Declaration.prototype, "user_id", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Declaration.prototype, "quantity", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Declaration.prototype, "status", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Declaration.prototype, "date", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Declaration.prototype, "time", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Declaration.prototype, "collector_user_id", void 0);
__decorate([
    (0, Orm_1.hasMany)(() => ImagesDeclaration_1.default, {
        foreignKey: 'declaration_id',
    }),
    __metadata("design:type", Object)
], Declaration.prototype, "images", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true }),
    __metadata("design:type", luxon_1.DateTime)
], Declaration.prototype, "createdAt", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", luxon_1.DateTime)
], Declaration.prototype, "updatedAt", void 0);
__decorate([
    (0, Orm_1.hasOne)(() => Collect_1.default, {
        localKey: 'collect_id',
        foreignKey: 'id',
    }),
    __metadata("design:type", Object)
], Declaration.prototype, "collect", void 0);
__decorate([
    (0, Orm_1.hasOne)(() => User_1.default, {
        localKey: 'user_id',
        foreignKey: 'id',
    }),
    __metadata("design:type", Object)
], Declaration.prototype, "user", void 0);
__decorate([
    (0, Orm_1.hasOne)(() => User_1.default, {
        localKey: 'collector_user_id',
        foreignKey: 'id',
    }),
    __metadata("design:type", Object)
], Declaration.prototype, "collector_user", void 0);
exports.default = Declaration;
//# sourceMappingURL=Declaration.js.map
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ciudad = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let Ciudad = class Ciudad {
    static _OPENAPI_METADATA_FACTORY() {
        return { id_ciudad: { required: true, type: () => Number }, ciudad: { required: true, type: () => String }, municipio_id: { required: true, type: () => Number }, provincia_id: { required: true, type: () => Number } };
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Ciudad.prototype, "id_ciudad", void 0);
__decorate([
    typeorm_1.Column({
        type: "varchar",
        length: 200,
        unique: true
    }),
    __metadata("design:type", String)
], Ciudad.prototype, "ciudad", void 0);
__decorate([
    typeorm_1.Column({
        type: "int",
    }),
    __metadata("design:type", Number)
], Ciudad.prototype, "municipio_id", void 0);
__decorate([
    typeorm_1.Column({
        type: "int",
    }),
    __metadata("design:type", Number)
], Ciudad.prototype, "provincia_id", void 0);
Ciudad = __decorate([
    typeorm_1.Entity()
], Ciudad);
exports.Ciudad = Ciudad;
//# sourceMappingURL=ciudad.entity.js.map
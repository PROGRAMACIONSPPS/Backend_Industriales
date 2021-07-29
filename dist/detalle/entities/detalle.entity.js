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
exports.Detalle = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let Detalle = class Detalle {
    static _OPENAPI_METADATA_FACTORY() {
        return { id_taller: { required: true, type: () => Number }, id_factura: { required: true, type: () => Number }, id_producto: { required: true, type: () => Number }, precio_producto: { required: true, type: () => Number }, cantidad_producto: { required: true, type: () => Number } };
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Detalle.prototype, "id_taller", void 0);
__decorate([
    typeorm_1.Column({
        type: "int",
        nullable: false
    }),
    __metadata("design:type", Number)
], Detalle.prototype, "id_factura", void 0);
__decorate([
    typeorm_1.Column({
        type: "int",
        nullable: false
    }),
    __metadata("design:type", Number)
], Detalle.prototype, "id_producto", void 0);
__decorate([
    typeorm_1.Column({
        type: "int",
        nullable: false
    }),
    __metadata("design:type", Number)
], Detalle.prototype, "precio_producto", void 0);
__decorate([
    typeorm_1.Column({
        type: "int",
        nullable: false
    }),
    __metadata("design:type", Number)
], Detalle.prototype, "cantidad_producto", void 0);
Detalle = __decorate([
    typeorm_1.Entity()
], Detalle);
exports.Detalle = Detalle;
//# sourceMappingURL=detalle.entity.js.map
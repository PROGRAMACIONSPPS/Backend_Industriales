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
exports.Factura = exports.FacturaEntity = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
class FacturaEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.FacturaEntity = FacturaEntity;
let Factura = class Factura {
    static _OPENAPI_METADATA_FACTORY() {
        return { id_factura: { required: true, type: () => Number }, cliente_id: { required: true, type: () => Number }, fecha_venta: { required: true, type: () => Date }, costo_total: { required: true, type: () => Number }, numero_factura: { required: true, type: () => String }, comprobante_exposicion: { required: true, type: () => Number }, tipo_pago_id: { required: true, type: () => Number }, emite_factura: { required: true, type: () => Number }, tipo_factura: { required: true, type: () => Number }, utilidad: { required: true, type: () => Number }, hora_venta: { required: true, type: () => Date }, cuotas_id: { required: true, type: () => Number }, interes_cuotas: { required: true, type: () => Number }, usuario: { required: true, type: () => Number }, cupon: { required: true, type: () => Number }, caja_id: { required: true, type: () => Number }, autogenerada: { required: true, type: () => Number } };
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Factura.prototype, "id_factura", void 0);
__decorate([
    typeorm_1.Column({
        type: "int",
        nullable: false,
        unique: true
    }),
    __metadata("design:type", Number)
], Factura.prototype, "cliente_id", void 0);
__decorate([
    typeorm_1.Column({
        type: "date",
        nullable: true
    }),
    __metadata("design:type", Date)
], Factura.prototype, "fecha_venta", void 0);
__decorate([
    typeorm_1.Column({
        type: "decimal",
        precision: 8,
        scale: 2,
        default: 0,
        nullable: true
    }),
    __metadata("design:type", Number)
], Factura.prototype, "costo_total", void 0);
__decorate([
    typeorm_1.Column({
        type: "varchar",
        length: 50,
        nullable: true
    }),
    __metadata("design:type", String)
], Factura.prototype, "numero_factura", void 0);
__decorate([
    typeorm_1.Column({
        type: "int",
        nullable: true
    }),
    __metadata("design:type", Number)
], Factura.prototype, "comprobante_exposicion", void 0);
__decorate([
    typeorm_1.Column({
        type: "int",
        nullable: true
    }),
    __metadata("design:type", Number)
], Factura.prototype, "tipo_pago_id", void 0);
__decorate([
    typeorm_1.Column({
        type: "tinyint",
        nullable: true
    }),
    __metadata("design:type", Number)
], Factura.prototype, "emite_factura", void 0);
__decorate([
    typeorm_1.Column({
        type: "int",
        nullable: true
    }),
    __metadata("design:type", Number)
], Factura.prototype, "tipo_factura", void 0);
__decorate([
    typeorm_1.Column({
        type: "int",
        nullable: true
    }),
    __metadata("design:type", Number)
], Factura.prototype, "utilidad", void 0);
__decorate([
    typeorm_1.Column({
        type: "time",
        nullable: true
    }),
    __metadata("design:type", Date)
], Factura.prototype, "hora_venta", void 0);
__decorate([
    typeorm_1.Column({
        type: "int",
        nullable: true
    }),
    __metadata("design:type", Number)
], Factura.prototype, "cuotas_id", void 0);
__decorate([
    typeorm_1.Column({
        type: "decimal",
        precision: 8,
        scale: 2,
        default: 0,
        nullable: true
    }),
    __metadata("design:type", Number)
], Factura.prototype, "interes_cuotas", void 0);
__decorate([
    typeorm_1.Column({
        type: "int",
        nullable: true
    }),
    __metadata("design:type", Number)
], Factura.prototype, "usuario", void 0);
__decorate([
    typeorm_1.Column({
        type: "int",
        nullable: true
    }),
    __metadata("design:type", Number)
], Factura.prototype, "cupon", void 0);
__decorate([
    typeorm_1.Column({
        type: "int",
        nullable: true
    }),
    __metadata("design:type", Number)
], Factura.prototype, "caja_id", void 0);
__decorate([
    typeorm_1.Column({
        type: "tinyint",
        nullable: true
    }),
    __metadata("design:type", Number)
], Factura.prototype, "autogenerada", void 0);
Factura = __decorate([
    typeorm_1.Entity()
], Factura);
exports.Factura = Factura;
//# sourceMappingURL=factura.entity.js.map
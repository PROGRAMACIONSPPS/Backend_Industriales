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
exports.Producto = exports.ProductoEntity = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
class ProductoEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.ProductoEntity = ProductoEntity;
let Producto = class Producto {
    static _OPENAPI_METADATA_FACTORY() {
        return { id_producto: { required: true, type: () => Number }, codigo_barra: { required: true, type: () => Number }, descripcion: { required: true, type: () => String }, precio_unidad: { required: true, type: () => Number }, precio_kilo: { required: true, type: () => Number }, stock: { required: true, type: () => Number }, stock_minimo: { required: true, type: () => Number }, vencimiento: { required: true, type: () => Date }, taller_id: { required: true, type: () => Number }, tipo_precio: { required: true, type: () => Number }, tipo_precio_venta: { required: true, type: () => Number } };
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Producto.prototype, "id_producto", void 0);
__decorate([
    typeorm_1.Column({
        type: "int",
        nullable: false,
        unique: true
    }),
    __metadata("design:type", Number)
], Producto.prototype, "codigo_barra", void 0);
__decorate([
    typeorm_1.Column({
        type: "varchar",
        length: 255,
        nullable: false
    }),
    __metadata("design:type", String)
], Producto.prototype, "descripcion", void 0);
__decorate([
    typeorm_1.Column({
        type: "decimal",
        precision: 8,
        scale: 2,
        default: 0,
        nullable: true
    }),
    __metadata("design:type", Number)
], Producto.prototype, "precio_unidad", void 0);
__decorate([
    typeorm_1.Column({
        type: "decimal",
        precision: 8,
        scale: 2,
        default: 0,
        nullable: true
    }),
    __metadata("design:type", Number)
], Producto.prototype, "precio_kilo", void 0);
__decorate([
    typeorm_1.Column({
        type: "decimal",
        precision: 8,
        scale: 4,
        default: 0,
        nullable: true
    }),
    __metadata("design:type", Number)
], Producto.prototype, "stock", void 0);
__decorate([
    typeorm_1.Column({
        type: "decimal",
        precision: 8,
        scale: 4,
        default: 0,
        nullable: true
    }),
    __metadata("design:type", Number)
], Producto.prototype, "stock_minimo", void 0);
__decorate([
    typeorm_1.Column({
        type: "date",
        nullable: true
    }),
    __metadata("design:type", Date)
], Producto.prototype, "vencimiento", void 0);
__decorate([
    typeorm_1.Column({
        type: "int",
        nullable: false
    }),
    __metadata("design:type", Number)
], Producto.prototype, "taller_id", void 0);
__decorate([
    typeorm_1.Column({
        type: "int",
        nullable: true
    }),
    __metadata("design:type", Number)
], Producto.prototype, "tipo_precio", void 0);
__decorate([
    typeorm_1.Column({
        type: "int",
        nullable: true
    }),
    __metadata("design:type", Number)
], Producto.prototype, "tipo_precio_venta", void 0);
Producto = __decorate([
    typeorm_1.Entity()
], Producto);
exports.Producto = Producto;
//# sourceMappingURL=producto.entity.js.map
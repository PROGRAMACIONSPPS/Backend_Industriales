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
exports.CreateDetalleDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateDetalleDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { codigo_barra: { required: true, type: () => Number }, descripcion: { required: true, type: () => String }, precio_unidad: { required: true, type: () => Number }, precio_kilo: { required: true, type: () => Number }, stock: { required: true, type: () => Number }, stock_minimo: { required: true, type: () => Number }, vencimiento: { required: true, type: () => Date }, taller_id: { required: true, type: () => Number }, tipo_precio: { required: true, type: () => Number }, tipo_precio_venta: { required: true, type: () => Number } };
    }
}
__decorate([
    class_validator_1.IsInt({ message: 'El codigo de barra es un numero Entero' }),
    __metadata("design:type", Number)
], CreateDetalleDto.prototype, "codigo_barra", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.Length(2, 255, { message: 'La descripción del producto debe tener entre 2 a 255 caracteres' }),
    __metadata("design:type", String)
], CreateDetalleDto.prototype, "descripcion", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], CreateDetalleDto.prototype, "precio_unidad", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], CreateDetalleDto.prototype, "precio_kilo", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], CreateDetalleDto.prototype, "stock", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], CreateDetalleDto.prototype, "stock_minimo", void 0);
__decorate([
    class_validator_1.IsDateString(),
    __metadata("design:type", Date)
], CreateDetalleDto.prototype, "vencimiento", void 0);
__decorate([
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], CreateDetalleDto.prototype, "taller_id", void 0);
__decorate([
    class_validator_1.IsInt(),
    __metadata("design:type", Number)
], CreateDetalleDto.prototype, "tipo_precio", void 0);
__decorate([
    class_validator_1.IsInt(),
    __metadata("design:type", Number)
], CreateDetalleDto.prototype, "tipo_precio_venta", void 0);
exports.CreateDetalleDto = CreateDetalleDto;
//# sourceMappingURL=create-producto.dto.js.map
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
exports.CreateFacturaDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateFacturaDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { cliente_id: { required: true, type: () => Number }, fecha_venta: { required: true, type: () => Date }, costo_total: { required: true, type: () => Number }, numero_factura: { required: true, type: () => String }, comprobante_exposicion: { required: true, type: () => Number }, tipo_pago_id: { required: true, type: () => Number }, emite_factura: { required: true, type: () => Number }, tipo_factura: { required: true, type: () => Number }, utilidad: { required: true, type: () => Number }, hora_venta: { required: true, type: () => Date }, cuotas_id: { required: true, type: () => Number }, interes_cuotas: { required: true, type: () => Number }, usuario: { required: true, type: () => Number }, cupon: { required: true, type: () => Number }, caja_id: { required: true, type: () => Number }, autogenerada: { required: true, type: () => Number } };
    }
}
__decorate([
    class_validator_1.IsInt(),
    __metadata("design:type", Number)
], CreateFacturaDto.prototype, "cliente_id", void 0);
__decorate([
    class_validator_1.IsDateString(),
    __metadata("design:type", Date)
], CreateFacturaDto.prototype, "fecha_venta", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], CreateFacturaDto.prototype, "costo_total", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.Length(2, 50, { message: 'El número de factura debe tener entre 2 a 50 caracteres' }),
    __metadata("design:type", String)
], CreateFacturaDto.prototype, "numero_factura", void 0);
__decorate([
    class_validator_1.IsInt(),
    __metadata("design:type", Number)
], CreateFacturaDto.prototype, "comprobante_exposicion", void 0);
__decorate([
    class_validator_1.IsInt(),
    __metadata("design:type", Number)
], CreateFacturaDto.prototype, "tipo_pago_id", void 0);
__decorate([
    class_validator_1.IsInt({ message: 'Campo emite_factura revisar porque es un campo booleano' }),
    __metadata("design:type", Number)
], CreateFacturaDto.prototype, "emite_factura", void 0);
__decorate([
    class_validator_1.IsInt(),
    __metadata("design:type", Number)
], CreateFacturaDto.prototype, "tipo_factura", void 0);
__decorate([
    class_validator_1.IsInt(),
    __metadata("design:type", Number)
], CreateFacturaDto.prototype, "utilidad", void 0);
__decorate([
    class_validator_1.IsDateString(),
    __metadata("design:type", Date)
], CreateFacturaDto.prototype, "hora_venta", void 0);
__decorate([
    class_validator_1.IsInt(),
    __metadata("design:type", Number)
], CreateFacturaDto.prototype, "cuotas_id", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], CreateFacturaDto.prototype, "interes_cuotas", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], CreateFacturaDto.prototype, "usuario", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], CreateFacturaDto.prototype, "cupon", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], CreateFacturaDto.prototype, "caja_id", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], CreateFacturaDto.prototype, "autogenerada", void 0);
exports.CreateFacturaDto = CreateFacturaDto;
//# sourceMappingURL=create-factura.dto.js.map
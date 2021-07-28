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
exports.CreateTallerDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateTallerDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { denominacion: { required: true, type: () => String }, codigo_taller: { required: true, type: () => Number } };
    }
}
__decorate([
    class_validator_1.IsString(),
    class_validator_1.Length(1, 50, { message: 'El nombre del taller debe tener entre $constraint1 y $constraint2 caracteres' }),
    __metadata("design:type", String)
], CreateTallerDto.prototype, "denominacion", void 0);
__decorate([
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], CreateTallerDto.prototype, "codigo_taller", void 0);
exports.CreateTallerDto = CreateTallerDto;
//# sourceMappingURL=create-taller.dto.js.map
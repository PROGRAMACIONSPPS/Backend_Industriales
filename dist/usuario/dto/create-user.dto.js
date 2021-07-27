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
exports.CreateUserDto = void 0;
const openapi = require("@nestjs/swagger");
const enums_1 = require("../enums");
const class_validator_1 = require("class-validator");
const enumToString_1 = require("../../helpers/enumToString");
class CreateUserDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { correo: { required: true, type: () => String }, clave: { required: true, type: () => String }, dni: { required: true, type: () => Number }, nombre: { required: true, type: () => String }, apellido: { required: true, type: () => String }, destino_id: { required: true, type: () => Number }, img: { required: true, type: () => String }, fecha_alta: { required: true, type: () => Date }, ultima_actualizacion: { required: true, type: () => Date }, fecha_baja: { required: true, type: () => Date }, role: { required: true, description: "Una lista de roles de usuario", example: "['admin','super'.'normal']", enum: require("../enums/usuario-role-enums").UsuarioRole } };
    }
}
__decorate([
    class_validator_1.IsString(),
    class_validator_1.Matches(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/, { message: 'El email no es correcto' }),
    class_validator_1.Length(4, 50, { message: 'El usuario debe tener entre $constraint1 y $constraint2 caracteres en este momento tu texto tiene una longitud de $value letras' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "correo", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.MinLength(6, { message: 'La clave debe tener un mínimo de 6 caracteres' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "clave", void 0);
__decorate([
    class_validator_1.IsInt({ message: 'El dni debe ser un número entero' }),
    class_validator_1.Min(1000000, { message: 'El valor que intenta asignar a Dni no es válido' }),
    __metadata("design:type", Number)
], CreateUserDto.prototype, "dni", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.Length(2, 50, { message: 'El nombre debe tener entre $constraint1 y $constraint2 caracteres' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "nombre", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.Length(2, 50, { message: 'El apellido debe tener entre $constraint1 y $constraint2 caracteres' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "apellido", void 0);
__decorate([
    class_validator_1.IsInt({ message: 'El destino es un numero Entero' }),
    __metadata("design:type", Number)
], CreateUserDto.prototype, "destino_id", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "img", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsEnum(enums_1.UsuarioRole, {
        message: `No ha introducido un valor valido(${enumToString_1.EnumToString(enums_1.UsuarioRole)})`
    }),
    __metadata("design:type", Number)
], CreateUserDto.prototype, "role", void 0);
exports.CreateUserDto = CreateUserDto;
//# sourceMappingURL=create-user.dto.js.map
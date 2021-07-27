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
exports.Usuario = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const usuario_role_enums_1 = require("../enums/usuario-role-enums");
const bcryptjs_1 = require("bcryptjs");
const destino_entity_1 = require("../../destino/entities/destino.entity");
let Usuario = class Usuario {
    async hashPassword() {
        if (!this.clave) {
            return;
        }
        this.clave = await bcryptjs_1.hash(this.clave, 10);
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { id_usuario: { required: true, type: () => Number }, correo: { required: true, type: () => String, description: "el correo ser\u00E1 el \"usuario\" por lo que debe ser \u00FAnico" }, clave: { required: true, type: () => String }, dni: { required: true, type: () => Number }, nombre: { required: true, type: () => String }, apellido: { required: true, type: () => String }, img: { required: true, type: () => String }, destino_id: { required: true, type: () => Number }, destino: { required: true, type: () => require("../../destino/entities/destino.entity").Destino }, fecha_alta: { required: true, type: () => Date }, ultima_actualizacion: { required: true, type: () => Date }, fecha_baja: { required: true, type: () => Date }, role: { required: true, enum: require("../enums/usuario-role-enums").UsuarioRole } };
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Usuario.prototype, "id_usuario", void 0);
__decorate([
    typeorm_1.Column({
        type: "varchar",
        length: 50,
        unique: true
    }),
    __metadata("design:type", String)
], Usuario.prototype, "correo", void 0);
__decorate([
    typeorm_1.Column({
        type: "varchar",
        nullable: false,
        select: false
    }),
    __metadata("design:type", String)
], Usuario.prototype, "clave", void 0);
__decorate([
    typeorm_1.Column({
        type: "int",
        unsigned: true
    }),
    __metadata("design:type", Number)
], Usuario.prototype, "dni", void 0);
__decorate([
    typeorm_1.Column({
        type: "varchar",
        length: 50,
    }),
    __metadata("design:type", String)
], Usuario.prototype, "nombre", void 0);
__decorate([
    typeorm_1.Column({
        type: "varchar",
        length: 50,
    }),
    __metadata("design:type", String)
], Usuario.prototype, "apellido", void 0);
__decorate([
    typeorm_1.Column({
        type: "varchar",
        length: 100,
        nullable: true,
        default: "no-image.jpg"
    }),
    __metadata("design:type", String)
], Usuario.prototype, "img", void 0);
__decorate([
    typeorm_1.Column({
        type: "int",
        nullable: false
    }),
    __metadata("design:type", Number)
], Usuario.prototype, "destino_id", void 0);
__decorate([
    typeorm_1.ManyToOne(type => destino_entity_1.Destino, { eager: true }),
    typeorm_1.JoinColumn({
        name: "destino_id",
        referencedColumnName: "id_destino"
    }),
    __metadata("design:type", destino_entity_1.Destino)
], Usuario.prototype, "destino", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Usuario.prototype, "fecha_alta", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], Usuario.prototype, "ultima_actualizacion", void 0);
__decorate([
    typeorm_1.DeleteDateColumn(),
    __metadata("design:type", Date)
], Usuario.prototype, "fecha_baja", void 0);
__decorate([
    typeorm_1.Column({
        type: "enum",
        nullable: true,
        enum: usuario_role_enums_1.UsuarioRole,
        default: usuario_role_enums_1.UsuarioRole.normal
    }),
    __metadata("design:type", Number)
], Usuario.prototype, "role", void 0);
__decorate([
    typeorm_1.BeforeInsert(),
    typeorm_1.BeforeUpdate(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Usuario.prototype, "hashPassword", null);
Usuario = __decorate([
    typeorm_1.Entity('usuarios')
], Usuario);
exports.Usuario = Usuario;
//# sourceMappingURL=usuario.entity.js.map
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
exports.Municipio = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const dpto_prov_entity_1 = require("../../departamento-provincial/entity/dpto-prov.entity");
let Municipio = class Municipio {
    static _OPENAPI_METADATA_FACTORY() {
        return { id_municipio: { required: true, type: () => Number }, municipio: { required: true, type: () => String }, provincia_id: { required: true, type: () => Number }, departamento_id: { required: true, type: () => Number }, departamento: { required: true, type: () => require("../../departamento-provincial/entity/dpto-prov.entity").DepartamentoProvincial } };
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Municipio.prototype, "id_municipio", void 0);
__decorate([
    typeorm_1.Column({
        type: "varchar",
        length: 200
    }),
    __metadata("design:type", String)
], Municipio.prototype, "municipio", void 0);
__decorate([
    typeorm_1.Column({
        type: "int"
    }),
    __metadata("design:type", Number)
], Municipio.prototype, "provincia_id", void 0);
__decorate([
    typeorm_1.Column({
        type: "int"
    }),
    __metadata("design:type", Number)
], Municipio.prototype, "departamento_id", void 0);
__decorate([
    typeorm_1.ManyToOne(type => dpto_prov_entity_1.DepartamentoProvincial),
    typeorm_1.JoinColumn({
        name: "departamento_id",
        referencedColumnName: "id_dpto_prov"
    }),
    __metadata("design:type", dpto_prov_entity_1.DepartamentoProvincial)
], Municipio.prototype, "departamento", void 0);
Municipio = __decorate([
    typeorm_1.Entity()
], Municipio);
exports.Municipio = Municipio;
//# sourceMappingURL=municipio.entity.js.map
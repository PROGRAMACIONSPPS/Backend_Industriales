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
exports.Provincia = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const dpto_prov_entity_1 = require("../../departamento-provincial/entity/dpto-prov.entity");
let Provincia = class Provincia {
    static _OPENAPI_METADATA_FACTORY() {
        return { id_provincia: { required: true, type: () => Number }, provincia: { required: true, type: () => String }, departamentos: { required: true, type: () => [require("../../departamento-provincial/entity/dpto-prov.entity").DepartamentoProvincial] } };
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Provincia.prototype, "id_provincia", void 0);
__decorate([
    typeorm_1.Column({
        type: "varchar",
        length: 100
    }),
    __metadata("design:type", String)
], Provincia.prototype, "provincia", void 0);
__decorate([
    typeorm_1.OneToMany(type => dpto_prov_entity_1.DepartamentoProvincial, departamento => departamento.provincia, {
        onDelete: "CASCADE",
        eager: true,
        cascade: true
    }),
    __metadata("design:type", Array)
], Provincia.prototype, "departamentos", void 0);
Provincia = __decorate([
    typeorm_1.Entity()
], Provincia);
exports.Provincia = Provincia;
//# sourceMappingURL=provincia.entity.js.map
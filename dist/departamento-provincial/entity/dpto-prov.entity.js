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
exports.DepartamentoProvincial = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const provincia_entity_1 = require("../../provincia/entities/provincia.entity");
const municipio_entity_1 = require("../../municipio/entities/municipio.entity");
let DepartamentoProvincial = class DepartamentoProvincial {
    static _OPENAPI_METADATA_FACTORY() {
        return { id_dpto_prov: { required: true, type: () => Number }, departamento_provincial: { required: true, type: () => String }, provincia_id: { required: true, type: () => Number }, provincia: { required: true, type: () => require("../../provincia/entities/provincia.entity").Provincia }, municipios: { required: true, type: () => [require("../../municipio/entities/municipio.entity").Municipio] } };
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], DepartamentoProvincial.prototype, "id_dpto_prov", void 0);
__decorate([
    typeorm_1.Column({
        type: "varchar",
        length: 50,
    }),
    __metadata("design:type", String)
], DepartamentoProvincial.prototype, "departamento_provincial", void 0);
__decorate([
    typeorm_1.Column({
        type: "int",
        nullable: false
    }),
    __metadata("design:type", Number)
], DepartamentoProvincial.prototype, "provincia_id", void 0);
__decorate([
    typeorm_1.ManyToOne(type => provincia_entity_1.Provincia),
    typeorm_1.JoinColumn({
        name: "provincia_id",
        referencedColumnName: "id_provincia"
    }),
    __metadata("design:type", provincia_entity_1.Provincia)
], DepartamentoProvincial.prototype, "provincia", void 0);
__decorate([
    typeorm_1.OneToMany(type => municipio_entity_1.Municipio, muni => muni.departamento, {
        onDelete: "CASCADE",
        eager: true,
        cascade: true
    }),
    __metadata("design:type", Array)
], DepartamentoProvincial.prototype, "municipios", void 0);
DepartamentoProvincial = __decorate([
    typeorm_1.Entity()
], DepartamentoProvincial);
exports.DepartamentoProvincial = DepartamentoProvincial;
//# sourceMappingURL=dpto-prov.entity.js.map
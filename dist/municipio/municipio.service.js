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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MunicipioService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const municipio_entity_1 = require("./entities/municipio.entity");
const typeorm_2 = require("typeorm");
let MunicipioService = class MunicipioService {
    constructor(repositoryMunicipio) {
        this.repositoryMunicipio = repositoryMunicipio;
    }
    async getAll() {
        try {
            return await this.repositoryMunicipio.findAndCount();
        }
        catch (error) {
            return new common_1.BadRequestException(error.error.message);
        }
    }
    async editOne(id, data) {
        try {
            const respuesta = await this.repositoryMunicipio.update({
                id_municipio: id
            }, data);
            if (respuesta.affected == 0)
                throw new common_1.NotFoundException('Error: No se ha actualizado ningun registro');
            return respuesta;
        }
        catch (error) {
            return new common_1.BadRequestException(error.error.message);
        }
    }
};
MunicipioService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(municipio_entity_1.Municipio)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MunicipioService);
exports.MunicipioService = MunicipioService;
//# sourceMappingURL=municipio.service.js.map
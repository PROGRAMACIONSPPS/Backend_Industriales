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
exports.DestinoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const destino_entity_1 = require("./entities/destino.entity");
const typeorm_2 = require("typeorm");
let DestinoService = class DestinoService {
    constructor(destinoRepository) {
        this.destinoRepository = destinoRepository;
    }
    async getAll() {
        return await this.destinoRepository.find();
    }
    async getOne(id) {
        return await this.destinoRepository.findOneOrFail(id);
    }
    async editOne(id, data) {
        const respuesta = await this.destinoRepository.update(id, data);
        if ((await respuesta).affected == 0)
            throw new common_1.NotFoundException("No existe el registro de Sexo que intenta modificar");
        return respuesta;
    }
    async deleteOne(id) {
        const respuesta = await this.destinoRepository.findOne(id);
        if (!respuesta)
            throw new common_1.NotFoundException("No existe el registro SEXO que desea eliminar");
        return await this.destinoRepository.remove(respuesta);
    }
    async createOne(data) {
        const existe = await this.destinoRepository.findOne({ destino: data.destino });
        if (existe)
            throw new common_1.BadRequestException("El registro que intenta crear ya existe");
        const nuevo = this.destinoRepository.create(data);
        return await this.destinoRepository.save(nuevo);
    }
};
DestinoService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(destino_entity_1.Destino)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DestinoService);
exports.DestinoService = DestinoService;
//# sourceMappingURL=destino.service.js.map
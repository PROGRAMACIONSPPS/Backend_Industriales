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
exports.SexoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const sexo_entity_1 = require("./entities/sexo.entity");
const typeorm_2 = require("typeorm");
let SexoService = class SexoService {
    constructor(sexoRepository) {
        this.sexoRepository = sexoRepository;
    }
    async getAll() {
        try {
            return await this.sexoRepository.find();
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async getOne(id) {
        try {
            return await this.sexoRepository.findOneOrFail(id);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async editOne(id, data) {
        try {
            const existe = await this.sexoRepository.findOne({ sexo: data.sexo });
            if (existe) {
                throw new Error('El registro que desea crear/editar ya existe');
            }
            const respuesta = await this.sexoRepository.update(id, data);
            if ((await respuesta).affected == 0)
                throw new common_1.NotFoundException("No existe el registro de Sexo que intenta modificar");
            return respuesta;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    async deleteOne(id) {
        const respuesta = await this.sexoRepository.findOne(id);
        if (!respuesta)
            throw new common_1.NotFoundException("No existe el registro SEXO que desea eliminar");
        return await this.sexoRepository.remove(respuesta);
    }
    async createOne(data) {
        const existe = await this.sexoRepository.findOne({ sexo: data.sexo });
        if (existe)
            throw new common_1.BadRequestException("El registro que intenta crear ya existe");
        const nuevo = this.sexoRepository.create(data);
        return await this.sexoRepository.save(nuevo);
    }
};
SexoService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(sexo_entity_1.Sexo)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SexoService);
exports.SexoService = SexoService;
//# sourceMappingURL=sexo.service.js.map
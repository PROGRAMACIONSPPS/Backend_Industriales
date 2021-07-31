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
exports.DetalleService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const detalle_entity_1 = require("./entities/detalle.entity");
let DetalleService = class DetalleService {
    constructor(detalleRepository) {
        this.detalleRepository = detalleRepository;
    }
    async getAll() {
        try {
            return await this.detalleRepository.find();
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async getOne(id) {
        try {
            return await this.detalleRepository.findOneOrFail(id);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async editOne(id, data) {
        try {
            const existe = await this.detalleRepository.findOne({ precio_producto: data.precio_producto });
            if (existe) {
                throw new Error('El registro que desea crear/editar ya existe');
            }
            const respuesta = await this.detalleRepository.update(id, data);
            if ((await respuesta).affected == 0)
                throw new common_1.NotFoundException("No existe el registro de Sexo que intenta modificar");
            return respuesta;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    async deleteOne(id) {
        const respuesta = await this.detalleRepository.findOne(id);
        if (!respuesta)
            throw new common_1.NotFoundException("No existe el registro DETALLE que desea eliminar");
        return await this.detalleRepository.remove(respuesta);
    }
    async createOne(data) {
        return await this.detalleRepository.save(data);
    }
};
DetalleService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(detalle_entity_1.Detalle)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DetalleService);
exports.DetalleService = DetalleService;
//# sourceMappingURL=detalle.service.js.map
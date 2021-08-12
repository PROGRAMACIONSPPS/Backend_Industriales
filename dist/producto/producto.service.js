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
exports.ProductoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const producto_entity_1 = require("./entities/producto.entity");
let ProductoService = class ProductoService {
    constructor(productoRepository) {
        this.productoRepository = productoRepository;
    }
    async getAll() {
        try {
            return await this.productoRepository.find();
        }
        catch (error) {
            return new common_1.BadRequestException(error.error.message);
        }
    }
    async getOne(id) {
        try {
            return await this.productoRepository.findOneOrFail(id);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async deleteOne(id) {
        const respuesta = await this.productoRepository.findOne(id);
        if (!respuesta)
            throw new common_1.NotFoundException("No existe el registro PRODUCTO que desea eliminar");
        return await this.productoRepository.remove(respuesta);
    }
    async editOne(id, data) {
        try {
            const existe = await this.productoRepository.findOne({ descripcion: data.descripcion });
            if (existe) {
                throw new Error('El registro que desea crear/editar ya existe');
            }
            const respuesta = await this.productoRepository.update(id, data);
            if ((await respuesta).affected == 0)
                throw new common_1.NotFoundException("No existe el registro de Producto que intenta modificar");
            return respuesta;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    async createOne(data) {
        const existe = await this.productoRepository.findOne({ descripcion: data.descripcion });
        if (existe)
            throw new common_1.BadRequestException("El registro que intenta crear ya existe");
        const nuevo = this.productoRepository.create(data);
        return await this.productoRepository.save(nuevo);
    }
};
ProductoService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(producto_entity_1.Producto)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProductoService);
exports.ProductoService = ProductoService;
//# sourceMappingURL=producto.service.js.map
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
exports.ProductoController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const producto_service_1 = require("./producto.service");
const create_producto_dto_1 = require("./dto/create-producto.dto");
let ProductoController = class ProductoController {
    constructor(productoService) {
        this.productoService = productoService;
    }
    async getAll() {
        return await this.productoService.getAll();
    }
    async create(data) {
        return await this.productoService.createOne(data);
    }
};
__decorate([
    openapi.ApiOperation({ description: "Petici\u00F3n http que lista todos los registros" }),
    common_1.Get(),
    openapi.ApiResponse({ status: 200, type: Object }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductoController.prototype, "getAll", null);
__decorate([
    openapi.ApiOperation({ description: "Petici\u00F3n http que devuelve un registro seg\u00FAn id\nPetici\u00F3n http que crea un nuevo registro" }),
    common_1.Post(),
    openapi.ApiResponse({ status: 201, type: require("./entities/producto.entity").Producto }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_producto_dto_1.CreateProductoDto]),
    __metadata("design:returntype", Promise)
], ProductoController.prototype, "create", null);
ProductoController = __decorate([
    common_1.Controller('producto'),
    __metadata("design:paramtypes", [producto_service_1.ProductoService])
], ProductoController);
exports.ProductoController = ProductoController;
//# sourceMappingURL=producto.controller.js.map
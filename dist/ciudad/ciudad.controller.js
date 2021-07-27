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
exports.CiudadController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const ciudad_service_1 = require("./ciudad.service");
const dto_1 = require("./dto");
let CiudadController = class CiudadController {
    constructor(ciudadService) {
        this.ciudadService = ciudadService;
    }
    async getAll() {
        return await this.ciudadService.getAll();
    }
    async getOne(id) {
        return await this.ciudadService.getOne(id);
    }
    async create(data) {
        return await this.ciudadService.createOne(data);
    }
    async editOne(id, data) {
        return await this.ciudadService.editOne(id, data);
    }
    async deleteOne(id) {
        return await this.ciudadService.deleteOne(id);
    }
};
__decorate([
    openapi.ApiOperation({ description: "Petici\u00F3n http que lista todos los registros" }),
    common_1.Get(),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CiudadController.prototype, "getAll", null);
__decorate([
    openapi.ApiOperation({ description: "Petici\u00F3n http que devuelve un registro seg\u00FAn id" }),
    common_1.Get(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/ciudad.entity").Ciudad }),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CiudadController.prototype, "getOne", null);
__decorate([
    openapi.ApiOperation({ description: "Petici\u00F3n http que crea un nuevo registro" }),
    common_1.Post(),
    openapi.ApiResponse({ status: 201, type: require("./entities/ciudad.entity").Ciudad }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateCiudadDto]),
    __metadata("design:returntype", Promise)
], CiudadController.prototype, "create", null);
__decorate([
    openapi.ApiOperation({ description: "Petici\u00F3n http que edita un registro seg\u00FAn id" }),
    common_1.Put(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, dto_1.EditCiudadDto]),
    __metadata("design:returntype", Promise)
], CiudadController.prototype, "editOne", null);
__decorate([
    openapi.ApiOperation({ description: "Petici\u00F3n http que elimina un registro seg\u00FAn id" }),
    common_1.Delete(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/ciudad.entity").Ciudad }),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CiudadController.prototype, "deleteOne", null);
CiudadController = __decorate([
    common_1.Controller('ciudad'),
    __metadata("design:paramtypes", [ciudad_service_1.CiudadService])
], CiudadController);
exports.CiudadController = CiudadController;
//# sourceMappingURL=ciudad.controller.js.map
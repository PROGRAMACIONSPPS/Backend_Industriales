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
exports.DepartamentoProvincialController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const departamento_provincial_service_1 = require("./departamento-provincial.service");
const create_dpto_prov_dto_1 = require("./dto/create-dpto-prov.dto");
const edit_dpto_prov_dto_1 = require("./dto/edit-dpto-prov.dto");
let DepartamentoProvincialController = class DepartamentoProvincialController {
    constructor(dptoProvService) {
        this.dptoProvService = dptoProvService;
    }
    async getAll() {
        return await this.dptoProvService.getAll();
    }
    async getOne(id) {
        return await this.dptoProvService.getOne(id);
    }
    async create(data) {
        return await this.dptoProvService.createOne(data);
    }
    async editOne(id, data) {
        return await this.dptoProvService.editOne(id, data);
    }
    async deleteOne(id) {
        return await this.dptoProvService.deleteOne(id);
    }
};
__decorate([
    openapi.ApiOperation({ description: "Petici\u00F3n http que lista todos los registros" }),
    common_1.Get(),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DepartamentoProvincialController.prototype, "getAll", null);
__decorate([
    openapi.ApiOperation({ description: "Petici\u00F3n http que devuelve un registro seg\u00FAn id" }),
    common_1.Get(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entity/dpto-prov.entity").DepartamentoProvincial }),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DepartamentoProvincialController.prototype, "getOne", null);
__decorate([
    openapi.ApiOperation({ description: "Petici\u00F3n http que crea un nuevo registro" }),
    common_1.Post(),
    openapi.ApiResponse({ status: 201, type: require("./entity/dpto-prov.entity").DepartamentoProvincial }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dpto_prov_dto_1.CreateDptoProvDto]),
    __metadata("design:returntype", Promise)
], DepartamentoProvincialController.prototype, "create", null);
__decorate([
    openapi.ApiOperation({ description: "Petici\u00F3n http que edita un registro seg\u00FAn id" }),
    common_1.Put(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, edit_dpto_prov_dto_1.EditDptoProvDto]),
    __metadata("design:returntype", Promise)
], DepartamentoProvincialController.prototype, "editOne", null);
__decorate([
    openapi.ApiOperation({ description: "Petici\u00F3n http que elimina un registro seg\u00FAn id" }),
    common_1.Delete(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entity/dpto-prov.entity").DepartamentoProvincial }),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DepartamentoProvincialController.prototype, "deleteOne", null);
DepartamentoProvincialController = __decorate([
    common_1.Controller('departamento-provincial'),
    __metadata("design:paramtypes", [departamento_provincial_service_1.DepartamentoProvincialService])
], DepartamentoProvincialController);
exports.DepartamentoProvincialController = DepartamentoProvincialController;
//# sourceMappingURL=departamento-provincial.controller.js.map
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
exports.FacturaController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const factura_service_1 = require("./factura.service");
const create_factura_dto_1 = require("./dto/create-factura.dto");
let FacturaController = class FacturaController {
    constructor(facturaService) {
        this.facturaService = facturaService;
    }
    async getAll() {
        return await this.facturaService.getAll();
    }
    async create(data) {
        return await this.FacturaService.createOne(data);
    }
};
__decorate([
    openapi.ApiOperation({ description: "Petici\u00F3n http que lista todos los registros" }),
    common_1.Get(),
    openapi.ApiResponse({ status: 200, type: Object }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FacturaController.prototype, "getAll", null);
__decorate([
    openapi.ApiOperation({ description: "Petici\u00F3n http que crea un nuevo registro" }),
    common_1.Post(),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_factura_dto_1.CreateFacturaDto]),
    __metadata("design:returntype", Promise)
], FacturaController.prototype, "create", null);
FacturaController = __decorate([
    common_1.Controller('factura'),
    __metadata("design:paramtypes", [factura_service_1.FacturaService])
], FacturaController);
exports.FacturaController = FacturaController;
//# sourceMappingURL=factura.controller.js.map
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
exports.MunicipioController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const municipio_service_1 = require("./municipio.service");
const edit_municipio_dto_1 = require("./dto/edit-municipio.dto");
let MunicipioController = class MunicipioController {
    constructor(municipioService) {
        this.municipioService = municipioService;
    }
    async getAll() {
        try {
            return await this.municipioService.getAll();
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async editOne(id, data) {
        return await this.municipioService.editOne(id, data);
    }
};
__decorate([
    common_1.Get(),
    openapi.ApiResponse({ status: 200, type: Object }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MunicipioController.prototype, "getAll", null);
__decorate([
    common_1.Put(':id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, edit_municipio_dto_1.EditMunicipioDto]),
    __metadata("design:returntype", Promise)
], MunicipioController.prototype, "editOne", null);
MunicipioController = __decorate([
    common_1.Controller('municipio'),
    __metadata("design:paramtypes", [municipio_service_1.MunicipioService])
], MunicipioController);
exports.MunicipioController = MunicipioController;
//# sourceMappingURL=municipio.controller.js.map
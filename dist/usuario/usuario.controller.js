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
exports.UsuarioController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const path = require("path");
const uuid_1 = require("uuid");
const dto_1 = require("./dto");
const edit_user_dto_1 = require("./dto/edit-user.dto");
const usuario_service_1 = require("./usuario.service");
let UsuarioController = class UsuarioController {
    constructor(usuarioService) {
        this.usuarioService = usuarioService;
    }
    async getFoto(req, res) {
        try {
            if (!req.query.foto_nombre) {
                throw new Error('Debe proporcionar el nombre de la foto del Usuario');
            }
            const nombre_foto = req.query.foto_nombre.toString();
            const ruta = this.usuarioService.getFoto(nombre_foto);
            res.sendFile(ruta);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async getFotobyIdUsuario(req, res) {
        try {
            if (!req.query.id) {
                throw new Error('Debe proporcionar el id del Usuario');
            }
            const id = parseInt(req.query.id.toString());
            const ruta = await this.usuarioService.getFotoByIdUsuario(id);
            res.sendFile(ruta);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async getAll() {
        return await this.usuarioService.getMany();
    }
    async getOne(id) {
        return await this.usuarioService.getOne(id);
    }
    async create(usuarioDto) {
        return await this.usuarioService.createOne(usuarioDto);
    }
    async editOne(id, data) {
        return await this.usuarioService.editOne(id, data);
    }
    async deleteOne(id) {
        return await this.usuarioService.deleteOne(id);
    }
    async cargarFoto(foto, req) {
        try {
            if (req.query.id === null || foto === null) {
                throw new Error;
            }
            const id = parseInt(req.query.id.toString());
            return await this.usuarioService.cargarFoto(foto.filename, id);
        }
        catch (error) {
            throw new common_1.BadRequestException('No olvide adjuntar un archivo imagen y el parámetro id del  usuario!!');
        }
    }
};
__decorate([
    common_1.Get('foto'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, common_1.Req()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "getFoto", null);
__decorate([
    common_1.Get('/id/foto'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, common_1.Req()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "getFotobyIdUsuario", null);
__decorate([
    common_1.Get(),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "getAll", null);
__decorate([
    common_1.Get(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/usuario.entity").Usuario }),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "getOne", null);
__decorate([
    common_1.Post(),
    openapi.ApiResponse({ status: 201, type: require("./entities/usuario.entity").Usuario }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, edit_user_dto_1.EditUserDto]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "editOne", null);
__decorate([
    common_1.Delete(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "deleteOne", null);
__decorate([
    common_1.Post('foto'),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('foto', {
        storage: multer_1.diskStorage({
            destination: path.join(__dirname, '../../users-pictures'),
            filename: (req, file, cb) => {
                console.log('PASANDO POR RENOMBRAR ARCHIVO');
                cb(null, uuid_1.v4() + path.extname(file.originalname));
            },
        }),
        fileFilter: (req, file, cb) => {
            if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
                return cb(new common_1.HttpException('Formato de archivo inválido (jpg|jpeg|png|gif)', common_1.HttpStatus.BAD_REQUEST), false);
            }
            cb(null, true);
        }
    })),
    openapi.ApiResponse({ status: 201 }),
    __param(0, common_1.UploadedFile()),
    __param(1, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "cargarFoto", null);
UsuarioController = __decorate([
    common_2.Controller('usuarios'),
    __metadata("design:paramtypes", [usuario_service_1.UsuarioService])
], UsuarioController);
exports.UsuarioController = UsuarioController;
//# sourceMappingURL=usuario.controller.js.map
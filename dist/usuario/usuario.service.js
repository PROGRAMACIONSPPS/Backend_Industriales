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
exports.UsuarioService = void 0;
const common_1 = require("@nestjs/common");
const bcryptjs_1 = require("bcryptjs");
const typeorm_1 = require("typeorm");
const usuario_entity_1 = require("./entities/usuario.entity");
const typeorm_2 = require("@nestjs/typeorm");
const fs = require("fs-extra");
const path = require("path");
let UsuarioService = class UsuarioService {
    constructor(usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }
    async getMany() {
        return await this.usuarioRepository.findAndCount();
    }
    async getOne(id) {
        try {
            return await this.usuarioRepository.findOneOrFail(id);
        }
        catch (error) {
            throw new common_1.NotFoundException('El usuario No Existe', error);
        }
    }
    async editOne(id, data) {
        try {
            if (data.img) {
                throw new Error('La foto de usuario solo puede ser modificada por el servicio correspondiente!');
            }
            if (data.clave) {
                data.clave = await bcryptjs_1.hash(data.clave, 10);
            }
            const respuesta = await this.usuarioRepository.update(id, data);
            if (respuesta.affected == 0)
                throw new common_1.NotFoundException('Error: No se ha actualizado ningun registro');
            return respuesta;
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async deleteOne(id) {
        const usuarioSeleccionado = await this.usuarioRepository.findOne(id);
        if (!usuarioSeleccionado)
            throw new common_1.NotFoundException('No existe el Usuario que desea Eliminar');
        return await this.usuarioRepository.softDelete(id);
    }
    async createOne(data) {
        const existe = await this.usuarioRepository.findOne({ correo: data.correo });
        console.log('USUARIO ENCONTRADO', existe);
        if (existe)
            throw new common_1.BadRequestException('El email que intenta utilizar ya se encuentra utilizado!');
        const nuevo = this.usuarioRepository.create(data);
        const creado = await this.usuarioRepository.save(nuevo);
        delete creado.clave;
        return creado;
    }
    async getUserByEmail(correo) {
        return await this.usuarioRepository
            .createQueryBuilder('user')
            .where({ correo })
            .addSelect('user.clave')
            .getOne();
    }
    async cargarFoto(foto_url, id) {
        const user = await this.usuarioRepository.findOne({ id_usuario: id });
        if (!user) {
            throw new common_1.NotFoundException('No existe el usuario al que intenta asignar la imagen');
            return;
        }
        if (user.img !== null) {
            console.log('ENTRANDO A VERIFICACION DE IMAGEN EXISTE', user.img);
            fs.unlink(path.join(__dirname, '../../users-pictures', user.img)).then(resultado => {
                console.log('EL RESULTADO DE LA OPERACION DE BORRADO ES: ', resultado);
            }).catch(error => {
                console.log(error);
            });
        }
        let data = {
            "img": foto_url
        };
        const resultado = await this.usuarioRepository.update(id, data);
        if (resultado.affected == 0)
            throw new common_1.NotFoundException('No se ha actualizado el campo de imagen');
        return resultado;
    }
    getFoto(nombre_foto) {
        try {
            const ruta = path.resolve(__dirname, `../../users-pictures/${nombre_foto}`);
            return ruta;
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async getFotoByIdUsuario(id) {
        try {
            const user = await this.usuarioRepository.findOne({ id_usuario: id });
            if (!user) {
                throw new Error('El Usuario que busca no Existe');
            }
            const ruta = path.resolve(__dirname, `../../users-pictures/${user.img}`);
            return ruta;
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async deleteFoto(id) {
        try {
        }
        catch (error) {
        }
    }
};
UsuarioService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(usuario_entity_1.Usuario)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], UsuarioService);
exports.UsuarioService = UsuarioService;
//# sourceMappingURL=usuario.service.js.map
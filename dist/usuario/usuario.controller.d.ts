/// <reference types="multer" />
import { Request, Response } from 'express';
import { CreateUserDto } from './dto';
import { EditUserDto } from './dto/edit-user.dto';
import { UsuarioService } from './usuario.service';
export declare class UsuarioController {
    private readonly usuarioService;
    constructor(usuarioService: UsuarioService);
    getFoto(req: Request, res: Response): Promise<void>;
    getFotobyIdUsuario(req: Request, res: Response): Promise<void>;
    getAll(): Promise<[import("./entities/usuario.entity").Usuario[], number]>;
    getOne(id: number): Promise<import("./entities/usuario.entity").Usuario>;
    create(usuarioDto: CreateUserDto): Promise<import("./entities/usuario.entity").Usuario>;
    editOne(id: number, data: EditUserDto): Promise<import("typeorm").UpdateResult>;
    deleteOne(id: number): Promise<import("typeorm").UpdateResult>;
    cargarFoto(foto: Express.Multer.File, req: Request): Promise<import("typeorm").UpdateResult>;
}

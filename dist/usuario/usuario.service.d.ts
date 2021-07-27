import { CreateUserDto } from './dto/create-user.dto';
import { EditUserDto } from './dto/edit-user.dto';
import { Repository } from "typeorm";
import { Usuario } from './entities/usuario.entity';
import { Response } from 'express';
export declare class UsuarioService {
    private readonly usuarioRepository;
    res: Response;
    constructor(usuarioRepository: Repository<Usuario>);
    getMany(): Promise<[Usuario[], number]>;
    getOne(id: number): Promise<Usuario>;
    editOne(id: number, data: EditUserDto): Promise<import("typeorm").UpdateResult>;
    deleteOne(id: number): Promise<import("typeorm").UpdateResult>;
    createOne(data: CreateUserDto): Promise<Usuario>;
    getUserByEmail(correo: string): Promise<Usuario>;
    cargarFoto(foto_url: string, id: number): Promise<import("typeorm").UpdateResult>;
    getFoto(nombre_foto: string): string;
    getFotoByIdUsuario(id: number): Promise<string>;
    deleteFoto(id: number): Promise<void>;
}

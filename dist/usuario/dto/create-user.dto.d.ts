import { UsuarioRole } from '../enums';
export declare class CreateUserDto {
    correo: string;
    clave: string;
    dni: number;
    nombre: string;
    apellido: string;
    destino_id: number;
    img: string;
    fecha_alta: Date;
    ultima_actualizacion: Date;
    fecha_baja: Date;
    role: UsuarioRole;
}

import { UsuarioRole } from '../enums/usuario-role-enums';
import { Destino } from "src/destino/entities/destino.entity";
export declare class Usuario {
    id_usuario: number;
    correo: string;
    clave: string;
    dni: number;
    nombre: string;
    apellido: string;
    img: string;
    destino_id: number;
    destino: Destino;
    fecha_alta: Date;
    ultima_actualizacion: Date;
    fecha_baja: Date;
    role: UsuarioRole;
    hashPassword(): Promise<void>;
}

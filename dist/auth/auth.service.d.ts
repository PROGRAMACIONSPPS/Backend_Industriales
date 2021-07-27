import { UsuarioService } from '../usuario/usuario.service';
export declare class AuthService {
    private userService;
    constructor(userService: UsuarioService);
    validateUser(email: string, clave: string): Promise<any>;
}

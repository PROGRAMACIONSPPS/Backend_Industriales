import { BadRequestException, Injectable, MethodNotAllowedException, NotFoundException } from '@nestjs/common';
import {hash} from 'bcryptjs';
import { CreateUserDto } from './dto/create-user.dto';
import { EditUserDto } from './dto/edit-user.dto';
import { Repository } from "typeorm";
import { Usuario } from './entities/usuario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import * as fs from 'fs-extra';
import * as path from 'path';
import { UsuarioRole } from './enums/usuario-role-enums';
import { Response} from 'express';



interface IUsuario {
    correo: string,
    clave: string,
    dni: number,
    nombre: string,
    apellido: string,
    img: string,
    fecha_alta: Date,
    ultima_actualizacion:Date,
    fecha_baja: Date,
    role: UsuarioRole
}

@Injectable()
export class UsuarioService {
    res: Response;
constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>
){}

/**
 * Servicio que devueleve todos los registros de la tabla USUARIOS
 * @returns 
 */
async getMany(){
    return await this.usuarioRepository.findAndCount();
}

/**
 * Servicio que devuelve un registro USUARIO según ID
 * @param id 
 * @returns 
 */
async getOne(id:number){
    try {
        return await this.usuarioRepository.findOneOrFail(id);
    } catch (error) {
      throw new NotFoundException('El usuario No Existe',error);

    }
}

/**
 * Servicio que edita un registro USUARIO según id
 * @param id 
 * @param data 
 * @returns 
 */
async editOne(id:number, data: EditUserDto){
    try {
        if(data.img){
            throw new Error('La foto de usuario solo puede ser modificada por el servicio correspondiente!');
        }
        if(data.clave){
            data.clave = await hash(data.clave,10);
        }
     
    
    const respuesta =  await this.usuarioRepository.update(id, data);
    
    if (respuesta.affected == 0) throw new NotFoundException('Error: No se ha actualizado ningun registro')
    return respuesta;
        
    } catch (error) {
        throw new BadRequestException(error.message);
    }
               
     
}

/**
 * Servicio que elimina un registro USUARIO según ID
 * @param id 
 * @returns 
 */
async deleteOne(id:number){
    const usuarioSeleccionado = await this.usuarioRepository.findOne(id);
    if(!usuarioSeleccionado) throw new NotFoundException('No existe el Usuario que desea Eliminar');
    return await this.usuarioRepository.softDelete(id);
}

/**
 * Servicio que crea un nuevo Usuario 
 * @param data 
 * @returns 
 */
async createOne(data: CreateUserDto){
    
        const existe = await this.usuarioRepository.findOne({correo: data.correo});
        console.log('USUARIO ENCONTRADO',existe);
        if(existe) throw new BadRequestException('El email que intenta utilizar ya se encuentra utilizado!');
        const nuevo = this.usuarioRepository.create(data);
        const creado =  await this.usuarioRepository.save(nuevo);
        //quitare la contraseña por seguridad
        delete creado.clave;
        return creado;
}

async getUserByEmail(correo: string){
     return await this.usuarioRepository
                .createQueryBuilder('user')
                .where({correo})
                .addSelect('user.clave')
                .getOne()
}

async cargarFoto(foto_url: string, id: number){
    const user = await this.usuarioRepository.findOne({id_usuario: id});
    if(!user){
        throw new NotFoundException('No existe el usuario al que intenta asignar la imagen');
       return; 
    }
    //si ya existe una foto vamos a eliminarla
        if(user.img !== null){
                    console.log('ENTRANDO A VERIFICACION DE IMAGEN EXISTE', user.img);
                     fs.unlink(path.join(__dirname,'../../users-pictures',user.img)).then(resultado => {
                         console.log('EL RESULTADO DE LA OPERACION DE BORRADO ES: ', resultado);
                     }).catch(error=>{
                    console.log(error);
                });
           
        }
        
    


    let data: EditUserDto = {
        "img": foto_url
    };
    
    const resultado = await this.usuarioRepository.update(id, data);
    if(resultado.affected == 0) throw new NotFoundException('No se ha actualizado el campo de imagen');
    return resultado;
}

getFoto(nombre_foto: string){
    try {
        const ruta = path.resolve(__dirname,`../../users-pictures/${nombre_foto}` );
        return ruta;
        
        
    } catch (error) {
        throw new BadRequestException(error.message);
    }


}

async getFotoByIdUsuario(id: number){
    try {
        const user: IUsuario = await this.usuarioRepository.findOne({id_usuario: id});
        if(!user){
            throw new Error('El Usuario que busca no Existe');
        }
        const ruta = path.resolve(__dirname,`../../users-pictures/${user.img}` );
        return ruta;
        
        
    } catch (error) {
        throw new BadRequestException(error.message);
    }


}

async deleteFoto(id:number){
    try {
        
    } catch (error) {
        
    }

}

}

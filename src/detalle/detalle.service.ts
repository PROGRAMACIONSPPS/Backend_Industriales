import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDetalleDto } from './dto/create-detalle.dto';
import { EditDetalleDto } from './dto/edit-detalle.dto';
import { Detalle } from './entities/detalle.entity';

@Injectable()
export class DetalleService {
    
    constructor(
        @InjectRepository(Detalle)
        private readonly detalleRepository: Repository<Detalle>
    ){ }

    /**
     * Servicio que retorna todos los registros de la tabla DETALLE
     * @returns 
     */
    async getAll(){
        try {
            return await this.detalleRepository.find();
             } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    /**
     * Servicio que retorna un registro de la tabla DETALLE según ID
     * @param id 
     * @returns 
     */
    async getOne(id:number){
        try {
            return await this.detalleRepository.findOneOrFail(id);
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    async editOne(id: number, data: EditDetalleDto){
        try {
            const existe = await this.detalleRepository.findOne({precio_producto: data.precio_producto});
            if(existe){
                throw new Error('El registro que desea crear/editar ya existe');
            }
            const respuesta = await this.detalleRepository.update(id,data);
            if((await respuesta).affected == 0) throw new NotFoundException("No existe el registro de Sexo que intenta modificar");
            return respuesta;
        } catch (error) {
            throw new BadRequestException(error);
        }
    }

    /**
     * Servicio que elimina un registro de la tabla DETALLE según id
     * se utiliza remove y no delete porque solo el primero activa triggers
     * @param id 
     * @returns 
     */
    async deleteOne(id: number){
        const respuesta = await this.detalleRepository.findOne(id);
        if(!respuesta) throw new NotFoundException("No existe el registro DETALLE que desea eliminar");
        return await this.detalleRepository.remove(respuesta);        
    }

    /**
     * Servicio que crea un nuevo registro de la tabla DETALLE
     * @param data 
     * @returns 
     */
    async createOne(data: CreateDetalleDto){
        
        //const existe = await this.detalleRepository.findOne({precio_producto: data.precio_producto});
        //if(existe) throw new BadRequestException("El registro que intenta crear ya existe");
        //const nuevo = this.detalleRepository.create(data);
       // console.log(nuevo);
        return await this.detalleRepository.save(data)

    }


    



}

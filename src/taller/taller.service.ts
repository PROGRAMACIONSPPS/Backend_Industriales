import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EditTallerDto } from './dto/edit-taller.dto';
import { TallerEntity } from './entities/taller.entity';
import { CreateTallerDto } from './dto/create-taller.dto';

@Injectable()
export class TallerService {

    constructor(
        @InjectRepository(TallerEntity)
        private readonly tallerRepository: Repository<TallerEntity>
    ){ }

    /**
     * Servicio que retorna todos los registros de la tabla TALLER
     * @returns 
     */
    async getAll(){
        try {
            return await this.tallerRepository.find();
             } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    /**
     * Servicio que retorna un registro de la tabla TALLER según ID
     * @param id 
     * @returns 
     */
    async getOne(id:number){
        try {
            return await this.tallerRepository.findOneOrFail(id);
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    async editOne(id: number, data: EditTallerDto){
        
            const respuesta = await this.tallerRepository.update(id,data);
            if((await respuesta).affected == 0) throw new NotFoundException("No existe el registro de taller que intenta modificar");
            return respuesta;
        
    }

    /**
     * Servicio que elimina un registro de la tabla TALLER según id
     * se utiliza remove y no delete porque solo el primero activa triggers
     * @param id 
     * @returns 
     */
    async deleteOne(id: number){
        const respuesta = await this.tallerRepository.findOne(id);
        if(!respuesta) throw new NotFoundException("No existe el registro TALLER que desea eliminar");
        return await this.tallerRepository.remove(respuesta);        
    }

    /**
     * Servicio que crea un nuevo registro de la tabla TALLER
     * @param data 
     * @returns 
     */
    async createOne(data: CreateTallerDto){
        const existe = await this.tallerRepository.findOne({denominacion: data.denominacion});
        if(existe) throw new BadRequestException("El registro que intenta crear ya existe");
        const nuevo = this.tallerRepository.create(data);
        return await this.tallerRepository.save(nuevo)
    }



}

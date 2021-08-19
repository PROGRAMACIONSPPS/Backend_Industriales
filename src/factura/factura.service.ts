import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateFacturaDto } from './dto/create-factura.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Factura } from './entities/factura.entity';
import { Repository } from 'typeorm';
import { EditFacturaDto } from './dto/edit-factura.dto';

@Injectable()
export class FacturaService {
    //factraRepository: any;
    //facturaRepository: any;
    
    constructor(
        @InjectRepository(Factura)
        private readonly facturaRepository: Repository<Factura>
    ){}


    



    /**
     * Servicio que retorna todos los registros de la tabla FACTURA
     * @returns 
     */
    async getAll(){
        try {
            //return await this.facturaRepository.find();
            return await this.facturaRepository.find();

        } catch (error) {
            return new BadRequestException(error.error.message);
        }
    }



   
    /**
     * Servicio que crea un nuevo registro de la tabla FACTURA
     * @param data 
     * @returns 
     */
     async createOne(data: CreateFacturaDto){
        const existe = await this.facturaRepository.findOne({costo_total: data.costo_total});
        if(existe) throw new BadRequestException("El registro que intenta crear ya existe");
        const nuevo = this.facturaRepository.create(data);
        return await this.facturaRepository.save(nuevo)
    }



}

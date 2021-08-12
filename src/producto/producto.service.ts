import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductoDto } from './dto/create-producto.dto';
import { Producto } from './entities/producto.entity';

@Injectable()
export class ProductoService {

    constructor(
        @InjectRepository(Producto)
        private readonly productoRepository: Repository<Producto>
    ){}
    /**
     * Servicio que retorna todos los registros de la tabla PRODUCTO
     * @returns 
     */
    async getAll(){
        try {
            return await this.productoRepository.find();

        } catch (error) {
            return new BadRequestException(error.error.message);
        }
    }

    /**
     * Servicio que crea un nuevo registro de la tabla PRODUCTO
     * @param data 
     * @returns 
     */
     async createOne(data: CreateProductoDto){
        const existe = await this.productoRepository.findOne({descripcion: data.descripcion});
        if(existe) throw new BadRequestException("El registro que intenta crear ya existe");
        const nuevo = this.productoRepository.create(data);
        return await this.productoRepository.save(nuevo)
    }

}

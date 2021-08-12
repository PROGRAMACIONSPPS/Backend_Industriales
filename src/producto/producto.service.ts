import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductoDto } from './dto/create-producto.dto';
import { Producto } from './entities/producto.entity';
import { EditProductoDto } from './dto/edit-producto.dto';

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
     * Servicio que retorna un registro de la tabla PRODUCTO según ID
     * @param id 
     * @returns 
     */
     async getOne(id:number){
        try {
            return await this.productoRepository.findOneOrFail(id);
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    /**
     * Servicio que elimina un registro de la tabla PRODUCTO según id
     * se utiliza remove y no delete porque solo el primero activa triggers
     * @param id 
     * @returns 
     */
     async deleteOne(id: number){
        const respuesta = await this.productoRepository.findOne(id);
        if(!respuesta) throw new NotFoundException("No existe el registro PRODUCTO que desea eliminar");
        return await this.productoRepository.remove(respuesta);        
    }


    //Servicio que retorna un registro de la tabla PRODUCTO según ID

    async editOne(id: number, data: EditProductoDto){
        try {
            const existe = await this.productoRepository.findOne({descripcion: data.descripcion});
            if(existe){
                throw new Error('El registro que desea crear/editar ya existe');
            }
            const respuesta = await this.productoRepository.update(id,data);
            if((await respuesta).affected == 0) throw new NotFoundException("No existe el registro de Producto que intenta modificar");
            return respuesta;
        } catch (error) {
            throw new BadRequestException(error);
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

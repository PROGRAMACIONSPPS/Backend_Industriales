import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { FacturaService } from './factura.service';
import { CreateFacturaDto } from './dto/create-factura.dto';
import { CreateProductoDto } from '../producto/dto/create-producto.dto';

@Controller('factura')
export class FacturaController {
    FacturaService: any;

    constructor(
        private readonly facturaService: FacturaService
    ){}

    /**
     * Petición http que lista todos los registros
     * @returns 
     */
    @Get()
    async getAll(){
        return await this.facturaService.getAll();
    }

    


    /**
     * Petición http que crea un nuevo registro
     * @param data 
     * @returns 
     */
    @Post()
    async create(
        @Body()
        data: CreateFacturaDto
    ){
        return await this.FacturaService.createOne(data);
    }

    


}

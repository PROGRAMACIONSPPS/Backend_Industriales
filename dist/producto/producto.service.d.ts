import { BadRequestException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateProductoDto } from './dto/create-producto.dto';
import { Producto } from './entities/producto.entity';
export declare class ProductoService {
    private readonly productoRepository;
    constructor(productoRepository: Repository<Producto>);
    getAll(): Promise<Producto[] | BadRequestException>;
    createOne(data: CreateProductoDto): Promise<Producto>;
}

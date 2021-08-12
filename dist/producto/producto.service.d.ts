import { BadRequestException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateProductoDto } from './dto/create-producto.dto';
import { Producto } from './entities/producto.entity';
import { EditProductoDto } from './dto/edit-producto.dto';
export declare class ProductoService {
    private readonly productoRepository;
    constructor(productoRepository: Repository<Producto>);
    getAll(): Promise<Producto[] | BadRequestException>;
    getOne(id: number): Promise<Producto>;
    deleteOne(id: number): Promise<Producto>;
    editOne(id: number, data: EditProductoDto): Promise<import("typeorm").UpdateResult>;
    createOne(data: CreateProductoDto): Promise<Producto>;
}

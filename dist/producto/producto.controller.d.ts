import { ProductoService } from './producto.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { EditProductoDto } from './dto/edit-producto.dto';
export declare class ProductoController {
    private readonly productoService;
    constructor(productoService: ProductoService);
    getAll(): Promise<import("./entities/producto.entity").Producto[] | import("@nestjs/common").BadRequestException>;
    getOne(id: number): Promise<import("./entities/producto.entity").Producto>;
    create(data: CreateProductoDto): Promise<import("./entities/producto.entity").Producto>;
    editOne(id: number, data: EditProductoDto): Promise<import("typeorm").UpdateResult>;
    deleteOne(id: number): Promise<import("./entities/producto.entity").Producto>;
}

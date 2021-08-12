import { ProductoService } from './producto.service';
import { CreateProductoDto } from './dto/create-producto.dto';
export declare class ProductoController {
    private readonly productoService;
    constructor(productoService: ProductoService);
    getAll(): Promise<import("./entities/producto.entity").Producto[] | import("@nestjs/common").BadRequestException>;
    create(data: CreateProductoDto): Promise<import("./entities/producto.entity").Producto>;
}

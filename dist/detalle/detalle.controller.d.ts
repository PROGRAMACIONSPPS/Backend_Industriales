import { DetalleService } from './detalle.service';
import { CreateDetalleDto } from './dto/create-detalle.dto';
import { EditDetalleDto } from './dto/edit-detalle.dto';
export declare class DetalleController {
    private readonly detalleService;
    constructor(detalleService: DetalleService);
    getAll(): Promise<import("./entities/detalle.entity").Detalle[]>;
    getOne(id: number): Promise<import("./entities/detalle.entity").Detalle>;
    create(data: CreateDetalleDto): Promise<CreateDetalleDto & import("./entities/detalle.entity").Detalle>;
    editOne(id: number, data: EditDetalleDto): Promise<import("typeorm").UpdateResult>;
    deleteOne(id: number): Promise<import("./entities/detalle.entity").Detalle>;
}

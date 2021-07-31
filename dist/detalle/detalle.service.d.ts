import { Repository } from 'typeorm';
import { CreateDetalleDto } from './dto/create-detalle.dto';
import { EditDetalleDto } from './dto/edit-detalle.dto';
import { Detalle } from './entities/detalle.entity';
export declare class DetalleService {
    private readonly detalleRepository;
    constructor(detalleRepository: Repository<Detalle>);
    getAll(): Promise<Detalle[]>;
    getOne(id: number): Promise<Detalle>;
    editOne(id: number, data: EditDetalleDto): Promise<import("typeorm").UpdateResult>;
    deleteOne(id: number): Promise<Detalle>;
    createOne(data: CreateDetalleDto): Promise<CreateDetalleDto & Detalle>;
}

import { Destino } from './entities/destino.entity';
import { Repository } from 'typeorm';
import { EditDestinoDto } from './dto/edit-destino.dto';
import { CreateDestinoDto } from './dto/create-destino.dto';
export declare class DestinoService {
    private readonly destinoRepository;
    constructor(destinoRepository: Repository<Destino>);
    getAll(): Promise<Destino[]>;
    getOne(id: number): Promise<Destino>;
    editOne(id: number, data: EditDestinoDto): Promise<import("typeorm").UpdateResult>;
    deleteOne(id: number): Promise<Destino>;
    createOne(data: CreateDestinoDto): Promise<Destino>;
}

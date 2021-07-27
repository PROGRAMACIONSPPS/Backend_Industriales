import { Repository } from 'typeorm';
import { CreateCiudadDto, EditCiudadDto } from './dto';
import { Ciudad } from './entities/ciudad.entity';
export declare class CiudadService {
    private readonly ciudadRepository;
    constructor(ciudadRepository: Repository<Ciudad>);
    getAll(): Promise<[Ciudad[], number]>;
    getOne(id: number): Promise<Ciudad>;
    editOne(id: number, data: EditCiudadDto): Promise<import("typeorm").UpdateResult>;
    deleteOne(id: number): Promise<Ciudad>;
    createOne(data: CreateCiudadDto): Promise<Ciudad>;
}

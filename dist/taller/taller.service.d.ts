import { Repository } from 'typeorm';
import { EditTallerDto } from './dto/edit-taller.dto';
import { TallerEntity } from './entities/taller.entity';
import { CreateTallerDto } from './dto/create-taller.dto';
export declare class TallerService {
    private readonly tallerRepository;
    constructor(tallerRepository: Repository<TallerEntity>);
    getAll(): Promise<TallerEntity[]>;
    getOne(id: number): Promise<TallerEntity>;
    editOne(id: number, data: EditTallerDto): Promise<import("typeorm").UpdateResult>;
    deleteOne(id: number): Promise<TallerEntity>;
    createOne(data: CreateTallerDto): Promise<TallerEntity>;
}

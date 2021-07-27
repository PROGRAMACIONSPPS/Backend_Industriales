import { Sexo } from './entities/sexo.entity';
import { Repository } from 'typeorm';
import { EditSexoDto } from './dto/edit-sexo.dto';
import { CreateSexoDto } from './dto/create-sexo.dto';
export declare class SexoService {
    private readonly sexoRepository;
    constructor(sexoRepository: Repository<Sexo>);
    getAll(): Promise<Sexo[]>;
    getOne(id: number): Promise<Sexo>;
    editOne(id: number, data: EditSexoDto): Promise<import("typeorm").UpdateResult>;
    deleteOne(id: number): Promise<Sexo>;
    createOne(data: CreateSexoDto): Promise<Sexo>;
}

import { Repository } from 'typeorm';
import { CreateDptoProvDto } from './dto/create-dpto-prov.dto';
import { EditDptoProvDto } from './dto/edit-dpto-prov.dto';
import { DepartamentoProvincial } from './entity/dpto-prov.entity';
export declare class DepartamentoProvincialService {
    private readonly dptoProvRepository;
    constructor(dptoProvRepository: Repository<DepartamentoProvincial>);
    getAll(): Promise<[DepartamentoProvincial[], number]>;
    getOne(id: number): Promise<DepartamentoProvincial>;
    editOne(id: number, data: EditDptoProvDto): Promise<import("typeorm").UpdateResult>;
    deleteOne(id: number): Promise<DepartamentoProvincial>;
    createOne(data: CreateDptoProvDto): Promise<DepartamentoProvincial>;
}

import { DepartamentoProvincialService } from './departamento-provincial.service';
import { CreateDptoProvDto } from './dto/create-dpto-prov.dto';
import { EditDptoProvDto } from './dto/edit-dpto-prov.dto';
export declare class DepartamentoProvincialController {
    private readonly dptoProvService;
    constructor(dptoProvService: DepartamentoProvincialService);
    getAll(): Promise<[import("./entity/dpto-prov.entity").DepartamentoProvincial[], number]>;
    getOne(id: number): Promise<import("./entity/dpto-prov.entity").DepartamentoProvincial>;
    create(data: CreateDptoProvDto): Promise<import("./entity/dpto-prov.entity").DepartamentoProvincial>;
    editOne(id: number, data: EditDptoProvDto): Promise<import("typeorm").UpdateResult>;
    deleteOne(id: number): Promise<import("./entity/dpto-prov.entity").DepartamentoProvincial>;
}

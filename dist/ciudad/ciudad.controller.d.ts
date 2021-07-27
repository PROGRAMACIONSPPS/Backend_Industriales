import { CiudadService } from './ciudad.service';
import { CreateCiudadDto, EditCiudadDto } from './dto';
export declare class CiudadController {
    private readonly ciudadService;
    constructor(ciudadService: CiudadService);
    getAll(): Promise<[import("./entities/ciudad.entity").Ciudad[], number]>;
    getOne(id: number): Promise<import("./entities/ciudad.entity").Ciudad>;
    create(data: CreateCiudadDto): Promise<import("./entities/ciudad.entity").Ciudad>;
    editOne(id: number, data: EditCiudadDto): Promise<import("typeorm").UpdateResult>;
    deleteOne(id: number): Promise<import("./entities/ciudad.entity").Ciudad>;
}

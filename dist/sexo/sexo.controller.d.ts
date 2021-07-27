import { SexoService } from './sexo.service';
import { CreateSexoDto } from './dto/create-sexo.dto';
import { EditSexoDto } from './dto/edit-sexo.dto';
export declare class SexoController {
    private readonly sexoService;
    constructor(sexoService: SexoService);
    getAll(): Promise<import("./entities/sexo.entity").Sexo[]>;
    getOne(id: number): Promise<import("./entities/sexo.entity").Sexo>;
    create(data: CreateSexoDto): Promise<import("./entities/sexo.entity").Sexo>;
    editOne(id: number, data: EditSexoDto): Promise<import("typeorm").UpdateResult>;
    deleteOne(id: number): Promise<import("./entities/sexo.entity").Sexo>;
}

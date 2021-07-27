import { DestinoService } from './destino.service';
import { CreateDestinoDto } from './dto/create-destino.dto';
import { EditDestinoDto } from './dto/edit-destino.dto';
export declare class DestinoController {
    private readonly destinoService;
    constructor(destinoService: DestinoService);
    getAll(): Promise<import("./entities/destino.entity").Destino[]>;
    getOne(id: number): Promise<import("./entities/destino.entity").Destino>;
    create(data: CreateDestinoDto): Promise<import("./entities/destino.entity").Destino>;
    editOne(id: number, data: EditDestinoDto): Promise<import("typeorm").UpdateResult>;
    deleteOne(id: number): Promise<import("./entities/destino.entity").Destino>;
}

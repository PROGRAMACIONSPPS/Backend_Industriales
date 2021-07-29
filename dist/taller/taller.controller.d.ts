import { CreateTallerDto } from './dto/create-taller.dto';
import { EditTallerDto } from './dto/edit-taller.dto';
import { TallerService } from './taller.service';
export declare class TallerController {
    private readonly tallerService;
    constructor(tallerService: TallerService);
    getAll(): Promise<import("./entities/taller.entity").TallerEntity[]>;
    getOne(id: number): Promise<import("./entities/taller.entity").TallerEntity>;
    create(data: CreateTallerDto): Promise<import("./entities/taller.entity").TallerEntity>;
    editOne(id: number, data: EditTallerDto): Promise<import("typeorm").UpdateResult>;
    deleteOne(id: number): Promise<import("./entities/taller.entity").TallerEntity>;
}

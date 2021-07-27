import { BadRequestException } from '@nestjs/common';
import { MunicipioService } from './municipio.service';
import { EditMunicipioDto } from './dto/edit-municipio.dto';
export declare class MunicipioController {
    private readonly municipioService;
    constructor(municipioService: MunicipioService);
    getAll(): Promise<BadRequestException | [import("./entities/municipio.entity").Municipio[], number]>;
    editOne(id: number, data: EditMunicipioDto): Promise<BadRequestException | import("typeorm").UpdateResult>;
}

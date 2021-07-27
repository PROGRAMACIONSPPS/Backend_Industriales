import { BadRequestException } from '@nestjs/common';
import { Municipio } from './entities/municipio.entity';
import { Repository } from 'typeorm';
import { EditMunicipioDto } from './dto/edit-municipio.dto';
export declare class MunicipioService {
    private readonly repositoryMunicipio;
    constructor(repositoryMunicipio: Repository<Municipio>);
    getAll(): Promise<BadRequestException | [Municipio[], number]>;
    editOne(id: number, data: EditMunicipioDto): Promise<BadRequestException | import("typeorm").UpdateResult>;
}

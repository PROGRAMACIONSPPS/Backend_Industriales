import { BadRequestException } from '@nestjs/common';
import { Provincia } from './entities/provincia.entity';
import { Repository } from 'typeorm';
export declare class ProvinciaService {
    private readonly provinciaRepository;
    constructor(provinciaRepository: Repository<Provincia>);
    getAll(): Promise<BadRequestException | Provincia[]>;
}

import { BadRequestException } from '@nestjs/common';
import { ProvinciaService } from './provincia.service';
export declare class ProvinciaController {
    private readonly provinciaService;
    constructor(provinciaService: ProvinciaService);
    getAll(): Promise<BadRequestException | import("./entities/provincia.entity").Provincia[]>;
}

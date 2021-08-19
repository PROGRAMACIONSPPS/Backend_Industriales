import { BadRequestException } from '@nestjs/common';
import { CreateFacturaDto } from './dto/create-factura.dto';
import { Factura } from './entities/factura.entity';
import { Repository } from 'typeorm';
export declare class FacturaService {
    private readonly facturaRepository;
    constructor(facturaRepository: Repository<Factura>);
    getAll(): Promise<Factura[] | BadRequestException>;
    createOne(data: CreateFacturaDto): Promise<Factura>;
}

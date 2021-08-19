import { FacturaService } from './factura.service';
import { CreateFacturaDto } from './dto/create-factura.dto';
export declare class FacturaController {
    private readonly facturaService;
    FacturaService: any;
    constructor(facturaService: FacturaService);
    getAll(): Promise<import("./entities/factura.entity").Factura[] | import("@nestjs/common").BadRequestException>;
    create(data: CreateFacturaDto): Promise<any>;
}

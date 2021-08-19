import { PartialType } from '@nestjs/mapped-types';
import { CreateFacturaDto } from './create-factura.dto';

export class EditFacturaDto extends PartialType(CreateFacturaDto) {}
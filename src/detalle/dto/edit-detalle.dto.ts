import { PartialType } from '@nestjs/mapped-types';
import { CreateDetalleDto } from './create-detalle.dto';

export class EditDetalleDto extends PartialType(CreateDetalleDto){}
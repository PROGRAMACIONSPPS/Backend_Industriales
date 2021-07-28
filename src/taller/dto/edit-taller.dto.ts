import { PartialType } from '@nestjs/mapped-types';
import { CreateTallerDto } from './create-taller.dto';

export class EditTallerDto extends PartialType(CreateTallerDto){}
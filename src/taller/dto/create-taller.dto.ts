import { IsNumber, IsString, Length } from "class-validator";


export class CreateTallerDto {
    
    @IsString()
    @Length(1,50,{message:'El nombre del taller debe tener entre $constraint1 y $constraint2 caracteres'})
    denominacion: string;

    @IsNumber()
    codigo_taller: number;
    

}
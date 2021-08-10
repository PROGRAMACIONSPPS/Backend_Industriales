import { IsDateString, IsInt, IsNumber, IsOptional, IsString, Length } from "class-validator";

export class CreateProductoDto {
    
    @IsInt({message: 'El codigo de barra es un numero Entero'})
    codigo_barra: number;

    @IsString()
    @Length(2,255,{message:'La descripción del producto debe tener entre 2 a 255 caracteres'})
    descripcion: string;


    //Revisar bien las validaciones para los valores del tipo reales, solo se pondrá el decorador IsOpcional
    @IsOptional()
    precio_unidad: number;

    //Revisar bien las validaciones para los valores del tipo reales, solo se pondrá el decorador IsOpcional
    @IsOptional()
    precio_kilo: number;

    //Revisar bien las validaciones para los valores del tipo reales, solo se pondrá el decorador IsOpcional
    @IsOptional()
    stock: number;


    //Revisar bien las validaciones para los valores del tipo reales, solo se pondrá el decorador IsOpcional
    @IsOptional()
    stock_minimo: number;

    @IsDateString()
    vencimiento: Date;
    
    @IsNumber()
    taller_id: number;

    @IsInt()
    tipo_precio: number;

    @IsInt()
    tipo_precio_venta: number;

}
import { IsInt, IsOptional } from "class-validator";

export class CreateDetalleDto {
    
    @IsInt({message: 'La factura es un numero Entero'})
    factura_id: number;

    @IsInt({message: 'El producto es un numero Entero'})
    producto_id: number;
    
    //Revisar bien las validaciones para los valores del tipo reales, solo se pondrá el decorador IsOpcional
    @IsOptional()
    precio_producto: number;

    //Revisar bien las validaciones para los valores del tipo reales, solo se pondrá el decorador IsOpcional
    @IsOptional()
    cantidad_producto: number;


}
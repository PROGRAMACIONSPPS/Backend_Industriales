import { IsDateString, IsInt, IsOptional, IsString, Length } from 'class-validator';
export class CreateFacturaDto {
    
    @IsInt()
    cliente_id: number;

    @IsDateString()
    fecha_venta: Date;
    
    //Revisar bien las validaciones para los valores del tipo reales, solo se pondrá el decorador IsOpcional
    @IsOptional()
    costo_total: number;

    @IsString()
    @Length(2,50,{message:'El número de factura debe tener entre 2 a 50 caracteres'})
    numero_factura: string;

    @IsInt()
    comprobante_exposicion: number;

    @IsInt()
    tipo_pago_id: number;

    @IsInt({message:'Campo emite_factura revisar porque es un campo booleano'})
    emite_factura: number;

    @IsInt()
    tipo_factura: number;

    @IsInt()
    utilidad: number;

    @IsDateString()
    hora_venta: Date;

    @IsInt()
    cuotas_id: number;

    //Revisar bien las validaciones para los valores del tipo reales, solo se pondrá el decorador IsOpcional
    @IsOptional()
    interes_cuotas: number;

    @IsOptional()
    usuario: number;

    @IsOptional()
    cupon: number;

    @IsOptional()
    caja_id: number;

    @IsOptional()
    autogenerada: number;

}
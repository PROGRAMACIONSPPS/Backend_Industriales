import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export class FacturaEntity {}

/**
 * 
 */
 @Entity()
 export class  Factura {
 
     @PrimaryGeneratedColumn()
     id_factura: number;
         
    @Column({
        type: "int",
        nullable: false,
        unique: true
    })
    cliente_id: number;

    @Column({
        type: "date",
        nullable: true
    })
    fecha_venta: Date;  

    @Column({ 
        type: "decimal",
        precision: 8,
        scale: 2,
        default:0,
        nullable: true
    })
    costo_total: number;

    @Column({
        type: "varchar",
        length: 50,
        nullable: true
    })
    numero_factura: string;

    @Column({
        type: "int",
        nullable: true
    })
    comprobante_exposicion: number;

    @Column({
        type: "int",
        nullable: true
    })
    tipo_pago_id: number;

    //revisar este campo porque es de tipo boolean
    @Column({ 
        type: "tinyint",
        nullable: true
    })
    emite_factura: number;

    @Column({
        type: "int",
        nullable: true
    })
    tipo_factura: number;

    @Column({
        type: "int",
        nullable: true
    })
    utilidad: number;
    
    //revisar este campo porque es de tipo hora
    @Column({ 
        type: "time",
        nullable: true
    })
    hora_venta: Date;

    @Column({
        type: "int",
        nullable: true
    })
    cuotas_id: number;

    @Column({ 
        type: "decimal",
        precision: 8,
        scale: 2,
        default:0,
        nullable: true
    })
    interes_cuotas: number;

    @Column({
        type: "int",
        nullable: true
    })
    usuario: number;

    @Column({
        type: "int",
        nullable: true
    })
    cupon: number;

    @Column({
        type: "int",
        nullable: true
    })
    caja_id: number;
    

    //Revisar este campo porque es del tipo boolean
    @Column({
        type: "tinyint",
        nullable: true
    })
    autogenerada: number;
}

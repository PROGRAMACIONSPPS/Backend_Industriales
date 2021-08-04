import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export class ProductoEntity {}

/**
 * Tabla que contiene las opciones de sexo (masculino, femenino,...)
 */
 @Entity()
 export class  Producto {
 
     @PrimaryGeneratedColumn()
     id_producto: number;
         
    @Column({
        type: "int",
        nullable: false,
        unique: true
    })
    codigo_barra: number;

    @Column({
        type: "varchar",
        length: 255,
        nullable: false
    })
    descripcion: string;

    @Column({ 
        type: "decimal",
        precision: 8,
        scale: 2,
        default:0,
        nullable: true
    })
    precio_unidad: number;

    @Column({ 
        type: "decimal",
        precision: 8,
        scale: 2,
        default:0,
        nullable: true
    })
    precio_kilo: number;

    @Column({ 
        type: "decimal",
        precision: 8,
        scale: 4,
        default:0,
        nullable: true
    })
    stock: number;

    @Column({ 
        type: "decimal",
        precision: 8,
        scale: 4,
        default:0,
        nullable: true
    })
    stock_minimo: number;

    @Column({
        type: "date",
        nullable: true
    })
    vencimiento: Date;  

    @Column({
        type: "int",
        nullable: false
    })
    taller_id: number;

    @Column({
        type: "int",
        nullable: true
    })
    tipo_precio: number;

    @Column({
        type: "int",
        nullable: true
    })
    tipo_precio_venta: number;

    






    











}

    
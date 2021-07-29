import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Detalle {

    @PrimaryGeneratedColumn()
    id_taller: number;


    @Column({
        type: "int",
        nullable: false
    })
    id_factura: number;

    @Column({
        type: "int",
        nullable: false
    })
    id_producto: number;

    @Column({
        type: "int",
        nullable: false
    })
    precio_producto: number;
    
    @Column({
        type: "int",
        nullable: false
    })
    cantidad_producto: number;





}

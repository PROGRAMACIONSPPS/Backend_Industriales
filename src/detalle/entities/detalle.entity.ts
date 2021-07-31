import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Detalle {

    @PrimaryGeneratedColumn()
    id_detalle: number;

    //CLAVE FORANEA A LA TABLA FACTURA
    @Column({
    type: "int",
    nullable: true
    })
    factura_id: number;

    //CLAVE FORANEA A LA TABLA PRODUCTO

    @Column({
        type: "int",
        nullable: true
    })
    producto_id: number;

    @Column({
        type: "decimal",
        precision: 8,
        scale: 2,
        default: 0,
        nullable: true
    })
    precio_producto: number;
    
    @Column({
        type: "decimal",
        precision: 8,
        scale: 4,
        default:0,
        nullable: true
    })
    cantidad_producto: number;





}

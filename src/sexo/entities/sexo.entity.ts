import {Entity, PrimaryGeneratedColumn, Column } from "typeorm";

/**
 * Tabla que contiene las opciones de sexo (masculino, femenino,...)
 */
@Entity()
export class  Sexo {

    @PrimaryGeneratedColumn()
    id_detalle: number;

    @Column({
        type: "varchar",
        length: 50, 
        unique: true
           })
    sexo: string;
        }
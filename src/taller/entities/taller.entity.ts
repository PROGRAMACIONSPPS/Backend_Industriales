import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';
@Entity("taller")
export class TallerEntity {

    @PrimaryGeneratedColumn()
    id_taller: number;

    @Column({
        type: "varchar",
        length: 50, 
        nullable: false,
        unique: true
    })
    denominacion: string;

    @Column({
        type: "int",
        nullable: false
    })
    codigo_taller: number;

}

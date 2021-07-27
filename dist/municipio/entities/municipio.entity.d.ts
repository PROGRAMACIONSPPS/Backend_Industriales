import { DepartamentoProvincial } from '../../departamento-provincial/entity/dpto-prov.entity';
export declare class Municipio {
    id_municipio: number;
    municipio: string;
    provincia_id: number;
    departamento_id: number;
    departamento: DepartamentoProvincial;
}

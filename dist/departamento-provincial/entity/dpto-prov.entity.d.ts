import { Provincia } from '../../provincia/entities/provincia.entity';
import { Municipio } from '../../municipio/entities/municipio.entity';
export declare class DepartamentoProvincial {
    id_dpto_prov: number;
    departamento_provincial: string;
    provincia_id: number;
    provincia: Provincia;
    municipios: Municipio[];
}

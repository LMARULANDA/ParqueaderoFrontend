import { VehiculoModel } from './vehiculo.model';
import {ParentEntity} from './parentEntity.model';

export class RegistroModel extends ParentEntity {
public vehiculo: VehiculoModel;
public horaEntrada : Date;
public horaSalida : Date;
public pago : number;
}
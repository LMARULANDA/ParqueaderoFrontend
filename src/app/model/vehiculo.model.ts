import { ParentEntity } from './parentEntity.model';
export class VehiculoModel extends ParentEntity {
    public placa : string;
    public tipoDeVehiculo : string;
    public cilindraje : number;
}
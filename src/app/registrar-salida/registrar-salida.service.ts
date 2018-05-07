
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { VehiculoModel } from './../model/vehiculo.model';

@Injectable()
export class RegistrarSalidaService {

  constructor(private http:HttpClient) { }

  public guardarRegistroSalida(vehiculo : VehiculoModel):void {

    console.log('llamada desde el servicio');
    this.http.post("http://localhost:8080/registrarSalida", JSON.stringify(vehiculo)).subscribe();

  }

}

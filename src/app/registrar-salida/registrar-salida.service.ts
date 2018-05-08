
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { VehiculoModel } from './../model/vehiculo.model';
import { Observable } from 'rxjs/Observable';
import {RegistroModel} from './../model/registro.model';

@Injectable()
export class RegistrarSalidaService {

  constructor(private http:HttpClient) { }

  public guardarRegistroSalida(vehiculo : VehiculoModel):Observable<RegistroModel> {

    console.log('llamada desde el servicio');
    return this.http.post<RegistroModel>("http://localhost:8080/registrarSalida", JSON.stringify(vehiculo));

  }

}

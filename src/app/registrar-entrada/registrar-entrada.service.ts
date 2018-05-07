import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { RegistroModel } from './../model/registro.model';
import { VehiculoModel} from './../model/vehiculo.model';

@Injectable()
export class RegistrarEntradaService {

  constructor(private http:HttpClient) { }

  private registro: RegistroModel;
  
    public guardarRegistro(vehiculo: VehiculoModel) : void{
      console.log('llamda desde el servicio');
            this.http.post("http://localhost:8080/registrarIngreso", JSON.stringify(vehiculo)).subscribe();     
    }
          

}

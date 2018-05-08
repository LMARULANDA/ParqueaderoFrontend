import { Injectable } from '@angular/core';
import { RegistroModel } from './../model/registro.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RegistroService {

  private registros:Array<RegistroModel>
  constructor(private http:HttpClient) { }

  public getRegistros(): Observable<RegistroModel[]>{
    return this.http.get<RegistroModel[]>("http://localhost:8080/consultarVehiculos");
  }

}

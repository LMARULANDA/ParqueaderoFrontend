
import { Component, OnInit } from '@angular/core';

import {RegistrarSalidaService} from './registrar-salida.service';
import { VehiculoModel } from './../model/vehiculo.model';
import { RegistroModel } from '../model/registro.model';



@Component({
  selector: 'app-registrar-salida',
  templateUrl: './registrar-salida.component.html',
  styleUrls: ['./registrar-salida.component.css'],
  providers:[RegistrarSalidaService]
})
export class RegistrarSalidaComponent implements OnInit {

  private vehiculo :VehiculoModel;
  private registro :RegistroModel;

  constructor(private registrarSalidaService : RegistrarSalidaService) {
    this.vehiculo = JSON.parse(sessionStorage.getItem("vehiculo"));
    console.log(this.vehiculo);
  

   }

  ngOnInit() {
    this.guardarRegistroSalida();
  }

  public guardarRegistroSalida():void {
      console.log('esta enrutando bien la metodo registrarSalida');
      this.registrarSalidaService.guardarRegistroSalida(this.vehiculo).subscribe(res =>{
        this.registro = res;
        console.log(this.registro);
      })
    
  }


}

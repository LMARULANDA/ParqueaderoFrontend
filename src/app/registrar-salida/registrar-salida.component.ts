import { VehiculoModel } from './../model/vehiculo.model';
import { Component, OnInit } from '@angular/core';

import {RegistrarSalidaService} from './registrar-salida.service'

@Component({
  selector: 'app-registrar-salida',
  templateUrl: './registrar-salida.component.html',
  styleUrls: ['./registrar-salida.component.css'],
  providers:[RegistrarSalidaService]
})
export class RegistrarSalidaComponent implements OnInit {



  constructor(private registrarSalidaService : RegistrarSalidaService) {
    
   }

  ngOnInit() {
  }

  public guardarRegistroSalida(vehiculo : VehiculoModel):void {

    
  }


}

import { Component, OnInit } from '@angular/core';

import { RegistrarEntradaService } from './registrar-entrada.service';
import { RegistroModel } from './../model/registro.model';
import { VehiculoModel } from '../model/vehiculo.model';

@Component({
  selector: 'app-registrar-entrada',
  templateUrl: './registrar-entrada.component.html',
  styleUrls: ['./registrar-entrada.component.css'],
  providers: [RegistrarEntradaService]
})
export class RegistrarEntradaComponent implements OnInit {

  
  private vehiculo: VehiculoModel;

  constructor(private registrarEntradaService: RegistrarEntradaService) {
    this.vehiculo = new VehiculoModel;
  }

  ngOnInit() {
  }

  public guardarRegistro(): void {
    console.log("el boton si funciona bien");
    this.registrarEntradaService.guardarRegistro(this.vehiculo);
    
  }
}

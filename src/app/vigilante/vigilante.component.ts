
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RegistroModel } from './../model/registro.model';
import { VigilanteService } from './vigilante.service';
import { VehiculoModel } from './../model/vehiculo.model';


@Component({
  selector: 'app-vigilante',
  templateUrl: './vigilante.component.html',
  styleUrls: ['./vigilante.component.css'],
  providers: [VigilanteService]
})
export class VigilanteComponent implements OnInit {

 private registros:Array<RegistroModel>; 
  
  constructor(private vigilanteService: VigilanteService,private router : Router) { }

  ngOnInit() {
    this.loadVehiculosRegistrados();
  }
  private  loadVehiculosRegistrados():void {
    this.vigilanteService.getRegistros().subscribe(res =>{
      this.registros = res;
      
    });
    
  }
  public registrarSalida(vehiculo : VehiculoModel){
    sessionStorage.setItem('vehiculo',JSON.stringify(vehiculo));
    this.router.navigate(['/registrarSalidaComponent']);
  }

}

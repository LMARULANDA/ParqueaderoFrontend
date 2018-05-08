
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RegistroModel } from './../model/registro.model';
import { RegistroService } from './registro.service';
import { VehiculoModel } from './../model/vehiculo.model';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers: [RegistroService]
})
export class RegistroComponent implements OnInit {

 private registros:Array<RegistroModel>; 
  
  constructor(private registroService: RegistroService,private router : Router) { }

  ngOnInit() {
    this.loadVehiculosRegistrados();
  }
  private  loadVehiculosRegistrados():void {
    this.registroService.getRegistros().subscribe(res =>{
      this.registros = res;
      
    });
    
  }
  public registrarSalida(vehiculo : VehiculoModel){
    sessionStorage.setItem('vehiculo',JSON.stringify(vehiculo));
    this.router.navigate(['/registrarSalidaComponent']);
  }

}

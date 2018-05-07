import { Component, OnInit } from '@angular/core';

import { RegistroModel } from './../model/registro.model';
import { VigilanteService } from './vigilante.service';

@Component({
  selector: 'app-vigilante',
  templateUrl: './vigilante.component.html',
  styleUrls: ['./vigilante.component.css'],
  providers: [VigilanteService]
})
export class VigilanteComponent implements OnInit {

 private registros:Array<RegistroModel>; 
  
  constructor(private vigilanteService: VigilanteService) { }

  ngOnInit() {
    this.loadVehiculosRegistrados();
  }
  private  loadVehiculosRegistrados():void {
    this.vigilanteService.getRegistros().subscribe(res =>{
      this.registros = res;
      
    });
    
  }

}

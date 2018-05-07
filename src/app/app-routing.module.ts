
import {RouterModule, Routes} from '@angular/router'
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VigilanteComponent } from './vigilante/vigilante.component';
import { RegistrarEntradaComponent } from './registrar-entrada/registrar-entrada.component';
import { RegistrarSalidaComponent} from './registrar-salida/registrar-salida.component';


const routes: Routes =[
    {path:'', redirectTo: '/vigilanteComponent', pathMatch:'full'},
    {path: 'vigilanteComponent', component:VigilanteComponent},
    {path: 'registrarEntradaComponent', component:RegistrarEntradaComponent},
    {path: 'registrarSalidaComponent', component:RegistrarSalidaComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

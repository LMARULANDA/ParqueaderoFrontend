
import {RouterModule, Routes} from '@angular/router'
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VigilanteComponent } from './vigilante/vigilante.component';
import { RegistrarEntradaComponent } from './registrar-entrada/registrar-entrada.component';


const routes: Routes =[
    {path:'', redirectTo: '/vigilanteComponent', pathMatch:'full'},
    {path: 'vigilanteComponent', component:VigilanteComponent},
    {path: 'registrarEntradaComponent', component:RegistrarEntradaComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { VigilanteComponent } from './vigilante/vigilante.component';
import { RegistrarEntradaComponent } from './registrar-entrada/registrar-entrada.component';
import { RegistrarSalidaComponent } from './registrar-salida/registrar-salida.component';



@NgModule({
  declarations: [
    AppComponent,
    VigilanteComponent,
    RegistrarEntradaComponent,
    RegistrarSalidaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// Angular Material
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';
import { HttpClientModule } from '@angular/common/http';
import {MaterialModule} from './shared/material/material.module';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
// Servicios
import { TemporadasServiceService } from './servicios/temporadas-service.service';
// Componentes
import { AppComponent } from './app.component';
import { TemporadasComponent } from './componentes/temporadas/temporadas.component';
import { NavbarComponent } from './componentes/compartidos/navbar/navbar.component';
import { from } from 'rxjs';
import { HomeComponent } from './componentes/home/home.component';
import { FooterComponent } from './componentes/compartidos/footer/footer.component';
import { TemporadaComponent } from './componentes/temporada/temporada.component';
import { PokeTablaComponent } from './componentes/poke-tabla/poke-tabla.component';
import { PokeDetalleComponent } from './componentes/poke-detalles/poke-detalles.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './componentes/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    TemporadasComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    TemporadaComponent,
    PokeTablaComponent,
    PokeDetalleComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    FormsModule
  ],
  providers: [
    TemporadasServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

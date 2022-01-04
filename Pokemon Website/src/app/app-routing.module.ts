import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemporadasComponent } from './componentes/temporadas/temporadas.component';
import {HomeComponent  } from './componentes/home/home.component';
import { PokeDetalleComponent } from './componentes/poke-detalles/poke-detalles.component';
import {  TemporadaComponent } from './componentes/temporada/temporada.component';
import { PokeTablaComponent } from './componentes/poke-tabla/poke-tabla.component';
import { AboutComponent } from './componentes/about/about.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'temporadas', component: TemporadasComponent
  },
  {
    path: 'temporada/:id', component: TemporadaComponent
  },
  {
    path: 'pokeDetail/:id', component: PokeDetalleComponent
},
{
    path: 'pokeTabla', component: PokeTablaComponent
},
{
  path: 'about', component: AboutComponent
},
{
    path: '', pathMatch: 'full', redirectTo: 'home'
},
{
    path: '**', pathMatch: 'full', redirectTo: 'home'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

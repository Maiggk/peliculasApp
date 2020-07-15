import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { DetallePeliculaComponent } from './components/detalle-pelicula/detalle-pelicula.component';


const routes: Routes = [
  { path:'home', component:HomeComponent },
  { path:'buscador/:texto', component:BuscadorComponent },
  { path:'detalle/:id', component:DetallePeliculaComponent },
  { path:'**', pathMatch:'full', redirectTo:'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

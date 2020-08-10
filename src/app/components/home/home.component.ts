import { Component, OnInit } from '@angular/core';
import { PeliculasService, Pelicula } from 'src/app/services/peliculas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  peliculas:Pelicula[] = [];
  peliculasPopulares:Pelicula[] = [];
  peliculasInfantiles:Pelicula[] = [];

  constructor(private _ps:PeliculasService, private router:Router) { }

  ngOnInit() {
    this._ps.getEnCines().subscribe(
      (resp:Pelicula[]) => {
        console.log(resp);
        for(let i=0;i<6;i++){
          this.peliculas.push(resp[i]);
        }
      });

    this._ps.getInfantiles()
            .subscribe( (resp:Pelicula[]) => {
              this.peliculasInfantiles = resp;
            });
  }

  verDetalle( idPelicula:number){
    this.router.navigate(['detalle',idPelicula]);
  }

}

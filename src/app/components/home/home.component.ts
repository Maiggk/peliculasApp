import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  peliculas:any[] = [];
  peliculasPopulares:any[] = [];
  peliculasInfantiles:any[] = [];

  constructor(private _ps:PeliculasService, private router:Router) { }

  ngOnInit() {
    this._ps.getEnCines().subscribe(
      (resp:any[]) => {
        // this.peliculas = resp;
        for(let i=0;i<5;i++){
          this.peliculas.push(resp[i]);
        }

      });

    this._ps.getInfantiles()
            .subscribe( resp => {
              // this.peliculasInfantiles = resp;
              for(let i=0;i<5;i++){
                this.peliculasInfantiles.push(resp[i]);
              }
              console.log(this.peliculasInfantiles);
            });
  }

  verDetalle( idPelicula:number){
    this.router.navigate(['detalle',idPelicula]);
  }

}

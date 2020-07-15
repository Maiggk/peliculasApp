import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: []
})
export class BuscadorComponent implements OnInit {

  texto:string;
  peliculas:any[] = [];

  constructor(private _ps:PeliculasService,
              private activatedRoute:ActivatedRoute,
              private router:Router) {
      this.activatedRoute.params
                        .subscribe( params => {
                          this.texto = params['texto'];
                        });
                        console.log(this.texto);
      this._ps.getPeliculaKeyWord(this.texto)
              .subscribe( results => {
                  console.log(results);
                  this.peliculas= results;
              });
  }

  ngOnInit() {
  }

  verDetalle( idPelicula:number){
    this.router.navigate(['detalle',idPelicula]);
  }

}

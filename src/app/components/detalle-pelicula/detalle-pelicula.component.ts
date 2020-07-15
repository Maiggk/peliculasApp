import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styles: []
})
export class DetallePeliculaComponent implements OnInit {

  idPelicula:string = "";
  pelicula:Object;

  constructor(private _ps:PeliculasService,
              private activatedRoute:ActivatedRoute,
              private location:Location)
  {
    this.activatedRoute.params.subscribe( (params) => {
      this.idPelicula = params['id'];
    });

    this._ps.getPelicula(this.idPelicula)
            .subscribe( res => {
              this.pelicula = res;
            });
  }

  ngOnInit() {
  }

  regresar(){
    this.location.back();
  }

}

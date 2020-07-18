import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'peliculaImg'
})
export class PeliculaImgPipe implements PipeTransform {


  transform(pelicula:any = {}): any {

		let url = "https://image.tmdb.org/t/p/w300/";

	  if(pelicula.poster_path){
      return url + pelicula.poster_path;
	  }else{
		  if(pelicula.backdrop_path){
			return url + pelicula.poster_path;
		  }else{
			return "assets/img/no-image.jpg";
		  }
	  }

  }


}

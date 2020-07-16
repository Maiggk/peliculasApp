import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apiKey:string = '9456a9e0dcea67f2b817769d76953a12';
  private urlMovieDb:string = 'https://api.themoviedb.org/3';

  constructor(private http:HttpClient) { }

  getPelicula( peliculaId ){
    let url = `${ this.urlMovieDb }/movie/${ peliculaId }?api_key=${ this.apiKey }&language=es-MX`;
    return this.http.get(url);
  }

  getPopulares(){
    let url = `${ this.urlMovieDb }/discover/movie?api_key=${ this.apiKey }&language=es-Mx&sort_by=popularity.desc`;
    return this.http.get(url) //RECUPERAR DATOS MEDIANTE HTTP CLIENT
                    .pipe( map( res => {
                      return res;
                    }));
  }

  getPeliculaKeyWord(texto:string){
    let url = `${ this.urlMovieDb }/search/movie?api_key=${ this.apiKey }&language=es-MX&region=MX&query=${texto}&page=1&include_adult=false`;
    return this.http.get(url) //RECUPERAR DATOS MEDIANTE HTTP CLIENT
                    .pipe( map( res => {
                      return res['results'];
                    }));
  }

  getEnCines(){
    let url = `${ this.urlMovieDb }/movie/now_playing?api_key=${ this.apiKey }&language=es-Mx&page=1`;
    return this.http.get( url )
                .pipe( map( res => {
                  return res['results'];
                }));
  }

  getInfantiles(){
    let url = `${ this.urlMovieDb }/discover/movie?api_key=${ this.apiKey }&language=es-MX&region=MX&
                                    certification_country=US&certification.lte=G&sort_by=popularity.desc&include_adult=false&include_video=false`;
    return this.http.get(url)
                    .pipe( map( res => {
                      return res['results']
                    }));
  }

  private crearArregloPeliculas( peliculaObj:Object ){

    const peliculas:Object[] = [];

    Object.keys( peliculaObj['results'] ).forEach( key => {
      const pelicula:Object = peliculaObj[key];
      peliculas.push(pelicula);
    });
    return peliculas;
  }
}

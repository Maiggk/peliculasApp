import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pelicula-card',
  templateUrl: './pelicula-card.component.html',
  styles: []
})
export class PeliculaCardComponent implements OnInit {

  @Input() peliculaHijo:any;

  @Output() peliculaSeleccionada:EventEmitter<number>;

  constructor() {
    this.peliculaSeleccionada = new EventEmitter();
  }

  ngOnInit() {
  }

  emitirEvento( id:number ){
    this.peliculaSeleccionada.emit(id);
  }

}

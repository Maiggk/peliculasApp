import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  buscar(texto:string, event?){
    if(event!=null){
      if (event.key === "Enter") {
        event.preventDefault();
        if(texto.length == 0){  return; }
        this.router.navigate(['/buscador',encodeURI(texto)]);
      }
    }else{
      if(texto.length == 0){  return; }
      this.router.navigate(['/buscador',encodeURI(texto)]);
    }
  }

}

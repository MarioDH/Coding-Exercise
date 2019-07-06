import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-authorlist',
  templateUrl: './authorlist.component.html',
  styleUrls: ['./authorlist.component.css']
})
export class AuthorlistComponent implements OnInit {
  apiUrl = "http://localhost:3000";
  parametro : string;

  listaAutores: any;
  listaPublicaciones: any;

  constructor(private _http: HttpClient) { 
    this.getList();
  }

  ngOnInit() {
  }

  getList() {
    this._http.get( this.apiUrl + '/author/')
    .subscribe((respuesta) => {
      this.listaAutores = respuesta;
     },
     error => {
      console.error(error);
    }
    );
  }
  
  getPosts(nombre : string){
    this._http.get( this.apiUrl + '/author?name_like=' + nombre +'&_embed=posts')
    .subscribe((respuesta) => {
      const registros = Object.values(respuesta);
      this.listaPublicaciones = registros[0].posts;
      // console.log( this.listaPublicaciones);
     },
     error => {
      console.error(error);
    }
    );
  }
}

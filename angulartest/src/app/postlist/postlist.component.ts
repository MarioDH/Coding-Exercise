import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {

  apiUrl = "http://localhost:3000";
  parametro : string;
  ordenarPor = 'DESC';
  lista: any;
  listaAutores: any;

  constructor(private _http: HttpClient) { 
    this.getListAutores();
    this.ordenDESC();
  }

  ngOnInit() {
  }

  /**
   * Funcion getListOrderBy()
   * @param tipoOrdenamiento 
   * Funcion optimizada para ordenar de forma ascendente y descendente
   */
  getListOrderBy( tipoOrdenamiento : string){
    this.ordenarPor = tipoOrdenamiento;
    this._http.get( this.apiUrl + '/posts?_limit=10&_sort=date&_order=' + tipoOrdenamiento)
    .subscribe((respuesta) => {
      this.lista = respuesta;
     },
     error => {
      console.error(error);
    }
    );
  }
/**
 * Funcion seleccionarPagina()
 * @param numero 
 * Seleccionar Paginacion de regristros y variable por tipo de ordenamiento
 */
  seleccionarPagina(numero: string) {
    this._http.get( this.apiUrl + '/posts?_page='+numero +'&_limit=10&_sort=date&_order=' + this.ordenarPor)
    .subscribe((respuesta) => {
      this.lista = respuesta;
     },
     error => {
      console.error(error);
    }
    );
  }

  /**
   * Se obtiene lista de autores
   */
  getListAutores() {
    this._http.get( this.apiUrl + '/author/')
    .subscribe((respuesta) => {
      this.listaAutores = respuesta;
      console.log('lista de autores',this.listaAutores)
     },
     error => {
      console.error(error);
    }
    );
  }

/**
 * Lista de publicaciones Get General
 */
  getListPost(){
    this._http.get( this.apiUrl + '/posts/')
    .subscribe((respuesta) => {
      this.lista = respuesta;
     },
     error => {
      console.error(error);
    }
    );
  }

  /**
   * Lista de publicaciones ordenada de forma ascendente
   */
  ordenASC(){
    this._http.get( this.apiUrl + '/posts?_limit=10&_sort=date&_order=ASC')
    .subscribe((respuesta) => {
      this.lista = respuesta;
     },
     error => {
      console.error(error);
    }
    );
  }

  /**
   * Lista de publicaciones ordenada de forma descendente
   */
  ordenDESC() {
    this._http.get( this.apiUrl + '/posts?_limit=10&_sort=date&_order=DESC')
    .subscribe((respuesta) => {
      this.lista = respuesta;
     },
     error => {
      console.error(error);
    }
    );
  }

  /**
   * Lista primeras 10 publicaciones  ordenadas por fecha
   * En forma descendente
   */
  inicio() {
    this._http.get( this.apiUrl + '/posts?_limit=10&_sort=date&_order=DESC&_start=0')
    .subscribe((respuesta) => {
      this.lista = respuesta;
     },
     error => {
      console.error(error);
    }
    );
  }

}

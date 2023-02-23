import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  msj = "hola";
  constructor(private http: HttpClient) { }

  url = "http://localhost/ConexionBDAngular/";

  getUsuarios():Observable<any>{
    return this.http.get(this.url + "GET.php");
  }

  addUser(persona: any): Observable<any>{
    return this.http.post(this.url + "POST.php", persona);
  }

  deleteUser(id: number): Observable<any>{
    return this.http.delete(this.url + "DELETE.php/" + id);
  }
}

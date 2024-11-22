import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './usuario';
import { Observable } from 'rxjs';

const url = 'http://localhost:4444/auth';
const url2 = 'http://localhost:4444/servicio';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  login(username:string, password: string): Observable<string>{
    const user = new Usuario(username, password);
    return this.http.post<string>(url, user);
    
    return this.http.post<string>(url,user);
  }
  algo(): Observable<string>{
    return this.http.get<string>(url2);
  }
}

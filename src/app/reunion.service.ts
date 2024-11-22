import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReunionService {
  url = 'http://localhost:4444/reuniones';
  constructor(private http: HttpClient) { }
  getReuniones(){
    return this.http.get<string>(this.url);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  //URL da api
  private url:string = "http://localhost:8080";
  constructor(private http:HttpClient) { }
}

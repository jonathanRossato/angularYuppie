import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  VerificarLogin(): Observable<any>{
    return this.http.get("https://localhost:44325/api/Login?email=teste&senha=teste");
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) { }

  authenticate(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(username + ':' + password)
    });
    return this.http.get(this.apiUrl, { headers, withCredentials: true });
  }

  saveCredentials(username: string, password: string) {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
  }

  getCredentials() {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    return username && password ? { username, password } : null;
  }

  clearCredentials() {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
  }
}
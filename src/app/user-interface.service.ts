import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInterface} from './user-interface';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserInterfaceService {
    private baseURL ="http://localhost/8848/User";

  constructor(private http: HttpClient) { }
  getUsers(): Observable<UserInterface[]>{
    return this.http.get<UserInterface[]>(`${this.baseURL}/getsUsers`);
  }

  addUsers(users: UserInterface): Observable<Object>{
    return this.http.post(`${this.baseURL}/addUsers`, users);
  }

  getUsersById(id: number): Observable<UserInterface>{
    return this.http.get<UserInterface>(`${this.baseURL}/${id}`);
  }

  updateUsers(id: number, users: UserInterface): Observable<Object>{
    return this.http.put(`${this.baseURL}/${id}`, users);
  }

  deleteUsers(id: number): Observable<Object>{
    return this.http.delete(`${this.baseURL}/${id}`);
  }
}

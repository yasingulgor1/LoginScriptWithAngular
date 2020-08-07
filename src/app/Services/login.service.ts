import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Employee } from '../Models/EmployeeDateset';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    apiUrl = 'http://10.0.0.109:3000/employees';

    constructor(private http: HttpClient) { }

    getAllEmployee(): Observable<Employee[]> {
        return this.http.get<Employee[]>(this.apiUrl);
    }

    getEmployeeById(id: number) : Observable<Employee> {
        return this.http.get<Employee>(this.apiUrl + "/" + id);
    }

}

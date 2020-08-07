import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Services/login.service';
import { Employee } from '../Models/EmployeeDateset';
import { Router } from '@angular/router';

@Component({
    selector: 'ns-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    Employees: Employee[];
    Employee: Employee;
    Error: string;
    counter: number = 0;
    constructor(private loginService: LoginService, private router: Router) { }
    ngOnInit(): void {
        this.loginService.getAllEmployee().subscribe(employees => this.Employees = employees);
    }
    checkUser(email, password: any) {
        let found: boolean = false;
        if (this.Employees) {
            this.Employees.forEach(element => {
                if (element.email == email.text) {
                    this.loginService.getEmployeeById(element.id).subscribe(res => this.Employee = res);
                    found = true;
                    setTimeout(() => {
                        if (this.Employee) {
                            if (this.Employee.password == password.text) {
                                this.router.navigate(['home']);
                            }
                            else {
                                this.Error = "Incorect Password";
                                setTimeout(() => {
                                    this.Error = "";
                                }, 2500);
                            }
                        }
                        else {
                            this.Error = "Employee Not Found";
                            setTimeout(() => {
                                this.Error = "";
                            }, 2500);
                        }
                    }, 500);

                }
            });
            if (!found) {
                this.Error = "Incorrect Email";
                setTimeout(() => {
                    this.Error = "";
                }, 2500);

            }
        }
    }












}

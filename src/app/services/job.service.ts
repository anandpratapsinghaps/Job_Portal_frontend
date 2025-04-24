import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  // Removed duplicate login method to resolve the error.
  apiEndPoint: string = 'https://freeapi.miniprojectideas.com/api/JobPortal/';
  loginSub: any;

  // loginSub: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  // setLoginStatus(status: boolean): void {
  //   this.loginSub.next(status);
  // }

  // getLoginStatus(): Observable<boolean> {
  //   return this.loginSub.asObservable();
  // }

  registerAsRecruiter(obj: any): Observable<any> {
    return this.http.post(this.apiEndPoint + 'AddNewEmployer', obj)
  }

  registerAsJobSeeker(obj: any): Observable<any> {
    return this.http.post(this.apiEndPoint + 'AddNewJobSeeker', obj)
  }
  login(obj: any) {
    return this.http.post(this.apiEndPoint +'login', obj)
  }
}

import { Injectable } from '@angular/core';
import { HttpEvent, HttpRequest, HttpHandler, HttpInterceptor, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { IsdAppDataService } from '../services/isd-app-data.service';
import { tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { APP_CONSTANTS } from '../constants/app.constants';
import { environment } from '../../environments/environment';
@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  constructor(
    private appDataService: IsdAppDataService,
    private router: Router) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let setHeader;
    if (req.url.includes('getUserPicture') || req.url.includes('saveUserRating')) {
      setHeader = {
        email: this.appDataService.userDetails.email,
        uid: this.appDataService.userDetails.uid,
        firstName: this.appDataService.userDetails.firstName,
        lastName: this.appDataService.userDetails.lastName
      };
    } else {
      setHeader = {
        // Authorization: 'Bearer ' + this.appDataService.userDetails.token
      };
    }
    const modified = req.clone({
      headers: new HttpHeaders(setHeader)
    });

    return next.handle(modified).pipe(
      tap(evt => {
        if (evt instanceof HttpResponse) {
          if (evt.body && evt.body.success !== undefined && evt.body.success === false) {
            alert('Your session expired. Please login again');
            this.appDataService.logout().subscribe(result => {
              this.router.navigate([APP_CONSTANTS.PAGE_ROUTES.LOGIN]);
            },
              (err) => {

              });
          }
        }
      }),
      catchError(err => {
        return of(err);
      })
    );

  }
}


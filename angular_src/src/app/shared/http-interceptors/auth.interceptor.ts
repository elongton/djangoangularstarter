import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders
} from '@angular/common/http';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer'
import { Observable } from 'rxjs';
import { first, flatMap } from 'rxjs/operators';



/** Pass untouched request through to the next request handler. */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private store: Store<fromApp.AppState>){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    return this.store.select('auth').pipe(
      first(),
      flatMap(authState => {
        console.log(authState.token)
        const authReq = !!authState.token ? req.clone({
          setHeaders: { Authorization: 'JWT ' + authState.token },
        }) : req;
        console.log(authReq)
        return next.handle(authReq);
      }),
    );

  }//intercept

}//AuthInterceptor
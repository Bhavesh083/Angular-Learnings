import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { HttpCallsService } from './services/http-calls.service';

@Injectable()
export class LoggerInterceptor implements HttpInterceptor {
  constructor(private log : HttpCallsService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err) => {
        this.log.logErrors.push(err.message);
        return throwError(err);
      }),
      map( (event : HttpEvent<any>) => {
        if(event instanceof HttpResponse){
          this.log.logResponse.push(event.body.message);
        }
        else {
          this.log.logRequests.push("Sent a request at "+ new Date());
        }
        return event;
      })
    );
  }
}

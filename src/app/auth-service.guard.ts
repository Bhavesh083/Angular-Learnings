import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, CanMatch, Resolve, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from './services/auth-service.service';
import { AllCRUDComponent } from './modules/crud/components/all-crud/all-crud.component';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceGuard implements CanActivate, CanActivateChild, CanDeactivate<unknown>, CanLoad, CanMatch, Resolve<any> {

  constructor(private auth : AuthServiceService){}

  canActivate() : boolean {
    if(this.auth.isLoggedIn){
      return true;
    }
    return false;
  }

  canActivateChild(): boolean {
    if(this.auth.isLoggedIn){
      return true;
    }
    return false;
  }
  
  canDeactivate(component: AllCRUDComponent): boolean {
    return component.canNavigate;
  }

  resolve() : boolean{
    return true;
  }

  canMatch(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
}

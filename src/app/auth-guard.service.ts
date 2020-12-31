import { Injectable } from '@angular/core';
import { 
  ActivatedRouteSnapshot, 
  CanActivate, 
  Router, 
  RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { ProfileService } from './account/profile.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private user: ProfileService, private route: Router) { }

  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<any> {
    return this.user.profile.pipe(take(1), map((data) =>{
      if(!data.isLoggedIn) {
        this.route.navigate(['/login']);
        return false;
      }
      return true
    }))
  }
}

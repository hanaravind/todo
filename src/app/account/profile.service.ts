import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profile = new BehaviorSubject({ profile: '', isLoggedIn: false })
  currentSignIn: any

  constructor(private route: Router) { }

  getName () {
    return this.profile.asObservable();
  }

  setName (name: string, isLoggedIn:boolean) {
    this.currentSignIn = {
      profile: name,
      isLoggedIn: isLoggedIn
    }
    this.profile.next(this.currentSignIn)
    this.route.navigateByUrl('/dashboard')
  }

  logout() {
    this.profile.next({ profile: '', isLoggedIn: false })
    this.route.navigateByUrl('/login')
  }
}

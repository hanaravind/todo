import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/account/profile.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userlog: any = {}
  constructor(private isLoggedIn: ProfileService) { }

  ngOnInit(): void {
   this.isLoggedIn.getName().subscribe(data => {
     this.userlog = data
   })
  }

  logout () {
    this.isLoggedIn.logout()
  }

}

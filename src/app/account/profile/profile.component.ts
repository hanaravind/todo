import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
  userStatus: any = {}
  userLog: any
  constructor(private user: ProfileService) { }

  ngOnInit(): void {
    this.userLog = this.user.getName().subscribe(data => {
     this.userStatus = data
    })
  }

  ngOnDestroy () {
    this.userLog.unsubscribe()
  }

}

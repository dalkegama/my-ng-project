import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { Subscription, Observable } from 'rxjs';
import { Users } from './users';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  // userList: Observable<Users[]> = new Observable<Users[]>();
  userList = new Observable<Users[]>();
  // userList = new Subscription();
  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    // this.userList = this.dashboardService
    //   .getUserList()
    //   .subscribe((data: Users[]) => data);
    this.userList = this.dashboardService.getUserList();
  }

  change(event) {
    if (event === 'Organization') {
      return 'organization';
    }
  }

  clickUser(event) {
    console.log('clicked', event);
  }
}

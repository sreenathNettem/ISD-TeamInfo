import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-isd-login',
  templateUrl: './isd-login.page.html',
  styleUrls: ['./isd-login.page.scss'],
})
export class IsdLoginPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  teamMemberInfoPage() {
    this.router.navigate(['/team-member-info']);
  }

}

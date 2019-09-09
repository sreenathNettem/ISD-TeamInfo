import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-isd-landing',
  templateUrl: './isd-landing.page.html',
  styleUrls: ['./isd-landing.page.scss'],
})
export class IsdLandingPage implements OnInit {

  constructor( private router: Router,) { }

  ngOnInit() {
  }
  teamMemberInfoPage() {
    this.router.navigate(['/team-member-info']);
  }

  adminpage() {
    this.router.navigate(['/adminpage']);
  }
}

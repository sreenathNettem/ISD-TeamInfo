import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IsdAppDataService } from 'src/app/services/isd-app-data.service';

@Component({
  selector: 'app-isd-login',
  templateUrl: './isd-login.page.html',
  styleUrls: ['./isd-login.page.scss'],
})
export class IsdLoginPage implements OnInit {

  isLoggedIn = false;
  constructor(private router: Router, private appDataService: IsdAppDataService) { }

  ngOnInit() {
  }

  login() {
    this.appDataService.isLoggedIn().subscribe(flag => {
      this.isLoggedIn = true;
      this.appDataService.getAuthentication().subscribe(userDetails => {
        this.appDataService.userDetails = userDetails;
        this.appDataService.setUserDetails(userDetails).subscribe(result => {
          setTimeout(() => {
            window.location.assign(window.location.host);
          }, 2000);
        });
      }, error => {
        setTimeout(() => {
          window.location.assign(window.location.host);
        }, 2500);
      });
    },
      error => {
        alert(error);
      });
  }

}

import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IsdAppDataService } from 'src/app/services/isd-app-data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private appDataService: IsdAppDataService,
    private router: Router,

  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.appDataService.isLoggedIn().subscribe(result => {
        if (result.isLoggedIn) {
          if (result.userDetails.role === 'admin') {
            this.router.navigate(['/isd-landing']);
          } else {
          this.router.navigate(['/team-member-info']);
          }
        } else {
          this.router.navigate(['/isd-login']);
        }
        this.splashScreen.hide();
      });
  });
  }
}

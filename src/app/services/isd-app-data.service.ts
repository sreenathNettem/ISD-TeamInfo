import { Injectable, Output, EventEmitter } from '@angular/core';
import { IsdHttpService } from './isd-http.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { APP_CONSTANTS } from '../constants/app.constants';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IsdAppDataService {

  defaultFilterSelection = 'qtr=CQ&revTyp=Transactional';
  filterSelection: string;
  noAuthentication = environment.noAuthentication;
  userDetails;
  constructor(
    private httpService: IsdHttpService,
    private storage: Storage,
    private route: Router,
    private inAppBrowser: InAppBrowser
    ) {

    if (this.noAuthentication) {
      this.userDetails = environment.userDetails;
    }

  }

  @Output() filtersChange: EventEmitter<any> = new EventEmitter<any>();

  getTilesData(queryString: string) {
    return this.httpService.fetchApiData(`${this.httpService.apiUrls.tiles}${queryString}`);
  }

  isLoggedIn(): Observable<any> {
    return new Observable<any>(observer => {
      this.storage.get(APP_CONSTANTS.STORAGE_KEYS.USER).then(userDetails => {
        if (!this.noAuthentication) {
          this.userDetails = userDetails;
        }
        observer.next({userDetails: this.userDetails, isLoggedIn: this.userDetails ? true : this.noAuthentication});
      })
        .catch(err => {
          observer.error(err);
        });
    });
  }

  getAuthentication() {
    return new Observable<any>(observer => {
      const options = 'hidden=no,toolbar=yes,hidenavigationbuttons=yes,closebuttoncaption=Cancel,closebuttoncolor=#FFFFFF,lefttoright=yes,location=no,hideurlbar=yes,toolbarposition=top,presentationstyle=fullscreen,clearcache=yes,clearsessioncache=yes';
      const browser = this.inAppBrowser.create(this.httpService.w3Url, '_blank', options);
      browser.on('loadstop').subscribe(event => {
        if (event.url === this.httpService.w3Url) {
          browser.executeScript({ code: 'document.body.innerHTML' }).then(userDetails => {
            userDetails = userDetails[0];
            userDetails = decodeURI(userDetails.replace(/<iframe.+?<\/iframe>|<style.+?<\/style>/g, ''));
            userDetails = JSON.parse(userDetails);
            if (userDetails.email) {
              browser.close();
              userDetails.role = 'admin';
              observer.next(userDetails);
            }
          });
        }
      });
      browser.on('exit').subscribe(event => {
        observer.error('error');
      });
    });
  }

  setUserDetails(userDetails): Observable<any> {
    return new Observable<any>(observer => {
      if (userDetails) {
        this.storage.set(APP_CONSTANTS.STORAGE_KEYS.USER, userDetails);
        this.userDetails = userDetails;
        observer.next(true);
      } else {
        observer.error();
      }
    });
  }

  getProfileAvatar() {
    const url = `${this.httpService.apiUrls.getProfile}`;
    return this.httpService.fetchProfileAvatar(url);
  }

  isNetWorkAvailable() {
    return new Observable<any>(observer => {
      this.httpService.isNetWorkAvailable.subscribe(status => {
        observer.next(status);
      });
    });
  }

  logout(): Observable<any> {
    return new Observable<any>(observer => {
      this.storage.set(APP_CONSTANTS.STORAGE_KEYS.USER, null);
      observer.next();
    });
  }

  saveUserRating(params) {
    return this.httpService.setData(`${this.httpService.backendUrl}${this.httpService.apiUrls.saveUserRating}`, params);
  }

  getUserRatingsByDate(query) {
    return this.httpService.fetchData(`${this.httpService.backendUrl}${this.httpService.apiUrls.getUserRatingsByDate}?${query}`);
  }

  getAllUserRatings() {
    return this.httpService.fetchData(`${this.httpService.backendUrl}${this.httpService.apiUrls.getAllUserRatings}`);
  }

  getUserRatingComments() {
    return this.httpService.fetchData(`${this.httpService.backendUrl}${this.httpService.apiUrls.getUserRatingComments}`);
  }

}

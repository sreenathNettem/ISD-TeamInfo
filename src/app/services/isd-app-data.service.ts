import { Injectable, Output, EventEmitter } from '@angular/core';
import { IsdHttpService } from './isd-http.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { APP_CONSTANTS } from '../constants/app.constants';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { environment } from '../../environments/environment';
import { ProfileDetailsService } from './profile-details.service'

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
    private inAppBrowser: InAppBrowser,
    private profileDetailsService: ProfileDetailsService
  ) {

    if (this.noAuthentication) {
      this.userDetails = environment.userDetails;
    }

  }

  @Output() filtersChange: EventEmitter<any> = new EventEmitter<any>();

  getTilesData(queryString: string) {
    return this.httpService.fetchApiData(`${this.httpService.apiUrls.tiles}${queryString}`);
  }

  getDonutGraphData(queryString: string) {
    return this.httpService.fetchApiData(`${this.httpService.apiUrls.donut}${queryString}`).pipe(map((response: any) => {
      const responseData: any = [];
      response.forEach(data => {
        const graphData: any = {};
        graphData.label = data.label;
        graphData.value = data.value;
        graphData.dataAsOf = data.title['Data as of'];
        for (let [key, value] of Object.entries(data.comparison)) {
          graphData.isNegative = value < 0;
          graphData.wtwOrWsrValue = value;
          if (key === ' pts wtw') {
            graphData.units = ' pts';
            graphData.wtwOrWsr = 'wtw';
            graphData.showArrow = true;
          } else {
            graphData.units = 'M';
            graphData.wtwOrWsr = key;
            graphData.showArrow = false;
            graphData.wtwOrWsrValue = `$${value}`;
          }
        }
        responseData.push(graphData);
      });
      return responseData;
    }));
  }

  getGeoCovGraphsData(queryString: string) {
    return this.httpService.fetchApiData(`${this.httpService.apiUrls.geoCov}${queryString}`);
  }

  getGeoWsrGraphsData(queryString: string) {
    return this.httpService.fetchApiData(`${this.httpService.apiUrls.geoWsr}${queryString}`);
  }

  getBuCovGraphsData(queryString: string) {
    return this.httpService.fetchApiData(`${this.httpService.apiUrls.buCov}${queryString}`);
  }

  getBuWsrGraphsData(queryString: string) {
    return this.httpService.fetchApiData(`${this.httpService.apiUrls.buWsr}${queryString}`);
  }

  getTransKeyDealsData(queryString: string) {
    return this.httpService.fetchApiData(`${this.httpService.apiUrls.transKeyDeals}${queryString}`);
  }

  getTransKeyDealsDetailsData(queryString: string) {
    return this.httpService.fetchApiData(`${this.httpService.apiUrls.transKeyDealsDetails}${queryString}`).pipe(map((response: any) => {
      response.data.forEach(data => {
        data.currentIndex = 0;
      });
      return response;
    }));
  }

  getTransKeyDealsSearch(queryString: string) {
    return this.httpService.fetchApiData(`${this.httpService.apiUrls.searchEndPoint}${queryString}`);
  }

  buildFilterQuery(filterPrompts) {
    let queryString = '';
    filterPrompts.parametersList.forEach(prompts => {
      if (prompts.model !== '' && prompts.model !== 'All' && prompts.model !== undefined && prompts.model.length !== 0) {
        queryString += `${prompts.name}=${prompts.model}&`;
      }
    });

    filterPrompts.segments.forEach(prompts => {
      if (prompts.model !== '' && prompts.model !== 'All' && prompts.model !== undefined && prompts.model.length !== 0) {
        if (prompts.model === 'Trans. Revenue') {
          queryString += `${prompts.name}=Transactional&`;
        } else {
          queryString += `${prompts.name}=${prompts.model}&`;
        }
      }
    });
    this.defaultFilterSelection = queryString;
    return queryString;
  }

  logout(): Observable<any> {
    return new Observable<any>(observer => {
      this.storage.set(APP_CONSTANTS.STORAGE_KEYS.USER, null);
      observer.next();
    });
  }

  isLoggedIn(): Observable<any> {
    return new Observable<any>(observer => {
      this.storage.get(APP_CONSTANTS.STORAGE_KEYS.USER).then(userDetails => {
        if (!this.noAuthentication) {
          this.userDetails = userDetails;
        }
        // alert('loggedin');
        // alert(userDetails);
        // if (userDetails) { 
        // alert(userDetails.email);
        // }

        observer.next(userDetails ? true : this.noAuthentication);
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

  getProfileDetails() {
    return this.profileDetailsService.profileDetails[0];
  }

  isNetWorkAvailable() {
    return new Observable<any>(observer => {
      this.httpService.isNetWorkAvailable.subscribe(status => {
        observer.next(status);
      });
    });
  }

}

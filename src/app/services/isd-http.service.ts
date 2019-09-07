import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from './../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class IsdHttpService {

  apiUrl = environment.backendApiUrl;
  w3Url = environment.backendW3Url;
  avatarUrl = environment.backendAvatarUrl;
  accessHubUrl = environment.accessHubUrl;

  apiUrls = {
    tiles:  'execTiles/pmfacts?',
    donut: 'execDonut/pmfacts?',
    geoCov: 'execSummary/pmfacts?view=geo&',
    buCov: 'execSummary/pmfacts?view=brand&',
    geoWsr: 'execSummary/pmfacts?view=geo&',
    buWsr: 'execSummary/pmfacts?view=brand&',
    transKeyDeals: 'transKeydeals/roadmap?',
    transKeyDealsDetails: 'transKeydeals/roadmap?getDetails=Y&',
    searchEndPoint: 'searchOpp/roadmap?qtr=CQ&search=',
    getProfile: 'getUserPicture'
  };

  isNetWorkAvailable = new BehaviorSubject(true);

  constructor(private http: HttpClient) { }

  fetchData(url: string): Observable<any[]> {
    this.isNetWorkAvailable.next(navigator.onLine);
    return this.http.get<any[]>(url);
  }

  fetchApiData(url: string): Observable<any[]> {
    return this.fetchData(this.apiUrl + url);
  }

  fetchProfileAvatar(url: string): Observable<any[]> {
    return this.fetchData(this.avatarUrl + url);
  }

  fetchAccessHubDetails(url: string): Observable<any[]> {
    return this.fetchData(this.accessHubUrl + url);
  }

}

import { Component, OnInit, SecurityContext } from '@angular/core';
import { Router } from '@angular/router';
import { IsdAppDataService } from '../../services/isd-app-data.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { TEAMS, PROJECTS, IMAGEDATA, LINE_GRAPH_DATA, USER_COMMENTS } from './../../constants/app.constants';
import { IsdUtilityService } from '../../services/isd-utility.service';

@Component({
  selector: 'app-team-member-info',
  templateUrl: './team-member-info.page.html',
  styleUrls: ['./team-member-info.page.scss'],
})
export class TeamMemberInfoPage implements OnInit {
  public projects: any[];
  public teams: any[];
  public imgData: any[];
  public project: any;
  public selectedTeams: any[];
  public defaultImage: any;
  public userRating = { user_rating: '', user_project: '', user_team: '', user_comment: '' };
  public currentTab;
  public lineGraphData = LINE_GRAPH_DATA;
  public userComments = USER_COMMENTS;
  public showGraph = true;
  public sTeam: any;
  public isDisabled = false;
  public isAdmin = true;
  public currentTabGraph;
  public userDayRatings = [];

  constructor(
    private utilityService: IsdUtilityService,
    private appDataService: IsdAppDataService,
    private sanitizer: DomSanitizer,
    private router: Router
  ) {
    this.userRating.user_rating = IMAGEDATA[0].ratingNum;
    this.defaultImage = IMAGEDATA[0].image;
    this.isAdmin = this.appDataService.userDetails.role === 'admin' ? true : false;
  }

  ngOnInit() {
    this.teams = TEAMS;
    this.projects = PROJECTS;
    this.imgData = IMAGEDATA;
  }

  logout() {
    this.appDataService.logout().subscribe(result => {
      this.router.navigate(['/isd-login']);
    });
  }

  setTeamValues(Project) {
    this.userRating.user_project = Project.id;
    this.selectedTeams = this.teams.filter(team => team.project_id === Project.id);
  }

  teamId(team) {
    this.userRating.user_team = team.id;
  }

  onChange(imgData) {
    this.defaultImage = imgData.image;
    this.userRating.user_rating = imgData.ratingNum;
  }

  saveUserRating() {
    this.userRating.user_comment = this.sanitizer.sanitize(SecurityContext.HTML, this.userRating.user_comment);
    this.appDataService.saveUserRating(this.userRating).subscribe(response => {
      if (response.status === 'Success') {
        this.utilityService.toastFunction('Submitted successfully');
      } else {
        this.utilityService.toastFunction('Data not updated successfully. Please try again.');
      }
    });
    this.utilityService.toastFunction('Submitted successfully');
    this.defaultImage = IMAGEDATA[0].image;
    this.userRating.user_rating = IMAGEDATA[0].ratingNum;
    this.userRating.user_comment = '';
    this.project = '';
  }

  segmentChanged($event) {
    this.currentTab = $event.target.value;
    if (this.currentTab === 'Team') {
      this.getAllUserRatings();
    }
  }

  segmentChangedGraphs($event) {
    this.currentTabGraph = $event.target.value;
    if (this.currentTab === 'Team') {
      this.getAllUserRatings();
    }
  }

  setButtonStatus() {
    if (this.project && this.sTeam) {
      this.isDisabled = true;
    } else {
      this.isDisabled = false;
    }
  }

  getUserRatingsByDate(project, team) {
    this.appDataService.getUserRatingsByDate(`user_project=${project.id}&user_team=${team.id}`).subscribe(rating => {
      this.lineGraphData = rating;
      this.checkGraphResponse();
    });
  }

  checkGraphResponse() {
    this.showGraph = false;
    this.lineGraphData.forEach((d, k) => {
      if (d.length > 0) {
        this.showGraph = true;
      }
    });
  }

  getAllUserRatings() {
    this.appDataService.getAllUserRatings().subscribe(rating => {
      this.lineGraphData = rating;
      console.log(this.lineGraphData);
      this.checkGraphResponse();
    });
    this.appDataService.getUserRatingComments().subscribe(comments => {
      this.userComments = comments;
    });
    this.appDataService.getUserRatingDay().subscribe(dayRatings => {
      this.userDayRatings = dayRatings;
    });
    this.project = '';
    this.sTeam = '';
  }

}

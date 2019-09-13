import { Component, OnInit, SecurityContext } from '@angular/core';
import { Router } from '@angular/router';
import { IsdAppDataService } from '../../services/isd-app-data.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { TEAMS, PROJECTS, IMAGEDATA } from './../../constants/app.constants';
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
  project: any;
  public selectedTeams: any[];
  defaultImage: any;
  userRating = { user_rating: '', user_project: '', user_team: '', user_comment: '' };
  constructor(
    private utilityService: IsdUtilityService,
    private appDataService: IsdAppDataService,
    private sanitizer: DomSanitizer
  ) {
    this.userRating.user_rating = IMAGEDATA[0].ratingNum;
    this.defaultImage = IMAGEDATA[0].image;
  }

  ngOnInit() {
    this.teams = TEAMS;
    this.projects = PROJECTS;
    this.imgData = IMAGEDATA;
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
        this.utilityService.toastFunction('Fail');
      }
    });
    this.defaultImage = IMAGEDATA[0].image;
    this.userRating.user_comment = '';
    this.project = '';
  }
}

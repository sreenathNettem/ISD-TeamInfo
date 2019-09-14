import { Component, OnInit } from '@angular/core';
import { IsdAppDataService } from './../../services/isd-app-data.service';
import { TEAMS, PROJECTS } from './../../constants/app.constants';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.page.html',
  styleUrls: ['./adminpage.page.scss'],
})
export class AdminpagePage implements OnInit {
  public projects: any[];
  public teams: any[];
  public selectedTeams: any[];
  public project: any;
  public sTeam: any;
  public isDisabled = false;
  public lineData = [];
  public showGraph = true;
  constructor(private appDataService: IsdAppDataService) { }

  ngOnInit() {
    this.teams = TEAMS;
    this.projects = PROJECTS;
    this.getAllUserRatings();
  }

  getAllUserRatings() {
    this.appDataService.getAllUserRatings().subscribe(rating => {
      this.lineData = rating;
      this.checkGraphResponse();
    });
    this.project = '';
    this.sTeam = '';
  }

  getUserRatingsByDate(project, team) {
    this.appDataService.getUserRatingsByDate(`user_project=${project.id}&user_team=${team.id}`).subscribe(rating => {
      this.lineData = rating;
      this.checkGraphResponse();
    });
  }

  setTeamValues(sProject) {
    this.sTeam = null;
    this.selectedTeams = this.teams.filter(team => team.project_id === sProject.id);
  }

  setButtonStatus() {
    if (this.project && this.sTeam) {
      this.isDisabled = true;
    } else {
      this.isDisabled = false;
    }
  }

  checkGraphResponse() {
    this.showGraph = false;
    this.lineData.forEach((d, k) => {
      if (d.length > 0) {
        this.showGraph = true;
      }
    });
  }
}

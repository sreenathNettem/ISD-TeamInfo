import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IsdAppDataService } from '../../services/isd-app-data.service';
@Component({
  selector: 'app-team-member-info',
  templateUrl: './team-member-info.page.html',
  styleUrls: ['./team-member-info.page.scss'],
})
export class TeamMemberInfoPage implements OnInit {
  public projects: any[];
  public teams: any[];
  showImage = false;
  defaultImage = './assets/imgs/5.png';
  public selectedTeams: any[];
  imgData = [
    {
      'coordinate': '250, 74, 296, 90',
      'image': './assets/imgs/5.png'
    },
    {
      'coordinate': '220, 130, 246, 146',
      'image': './assets/imgs/4.png'
    },
    {
      'coordinate': '162, 160, 178, 176',
      'image': './assets/imgs/3.png'
    },
    {
      'coordinate': '100, 130, 116, 146',
      'image': './assets/imgs/2.png'
    },
    {
      'coordinate': '74,74,90,90',
      'image': './assets/imgs/1.png'
    }
  ];
  public sTeam: any;
  rating: number;
  userRating = {user_rating: '1', user_project: '2', user_team: '3', user_comment: '4'};
  constructor(private appDataService: IsdAppDataService, private router: Router) {
    this.initializeProject();
    this.initializeTeams();
  }

  ngOnInit() {
  }

  initializeProject() {
    this.projects = [
        {id: 1, name: 'ISD'},
        {id: 2, name: 'Cognos'},
    ];
    }

    initializeTeams() {
    this.teams = [
        {id: 1, name: 'UI', project_id: 1, Project_name: 'ISD'},
        {id: 2, name: 'API', project_id: 1, Project_name: 'ISD'},
        {id: 3, name: 'TEST', project_id: 1, Project_name: 'ISD'},
        {id: 4, name: 'DEVOPS', project_id: 1, Project_name: 'ISD'},
        {id: 5, name: 'CALL', project_id: 2, Project_name: 'Cognos'},
        {id: 7, name: 'STD Reports', project_id: 2, Project_name: 'Cognos'}
    ];
    }

    setTeamValues(Project) {
        this.selectedTeams = this.teams.filter(team => team.project_id === Project.id);
    }

    onChange(image) {
      this.defaultImage = image;
    }

    saveUserRating() {
      this.appDataService.saveUserRating(this.userRating).subscribe(response => {
        console.log(response);
      });
    }


}

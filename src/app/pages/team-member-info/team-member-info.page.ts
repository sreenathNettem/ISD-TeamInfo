import { Component, OnInit, SecurityContext  } from '@angular/core';
import { Router } from '@angular/router';
import { IsdAppDataService } from '../../services/isd-app-data.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'app-team-member-info',
  templateUrl: './team-member-info.page.html',
  styleUrls: ['./team-member-info.page.scss'],
})
export class TeamMemberInfoPage implements OnInit {
  public projects: any[];
  public teams: any[];
  showImage = false;
  defaultRatingNum = '5';
  sTeam: any;
  project: any;
  defaultImage = './assets/imgs/5.png';
  public selectedTeams: any[];
  imgData = [
    {
      coordinate: '250, 74, 296, 90',
      image: './assets/imgs/5.png',
      ratingNum: '5',
      isSelected: false
    },
    {
      coordinate: '220, 130, 246, 146',
      image: './assets/imgs/4.png',
      ratingNum: '4',
      isSelected: true
    },
    {
      coordinate: '162, 160, 178, 176',
      image: './assets/imgs/3.png',
      ratingNum: '3',
      isSelected: true
    },
    {
      coordinate: '100, 130, 116, 146',
      image: './assets/imgs/2.png',
      ratingNum: '2',
      isSelected: true
    },
    {
      coordinate: '74,74,90,90',
      image: './assets/imgs/1.png',
      ratingNum: '1',
      isSelected: true
    }
  ];
  userRating = {user_rating: '', user_project: '', user_team: '', user_comment: ''};
  constructor(
    private appDataService: IsdAppDataService,
    private router: Router,
    private sanitizer: DomSanitizer,
   ) {
    this.initializeProject();
    this.initializeTeams();
    this.userRating.user_rating = this.defaultRatingNum;
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
      this.userRating.user_project = Project.id;
      this.selectedTeams = this.teams.filter(team => team.project_id === Project.id);
    }
    TeamId(Team) {
      this.userRating.user_team = Team.id;
    }
    onClick(imgData) {
      this.defaultRatingNum = imgData.ratingNum;
      this.userRating.user_rating = imgData.ratingNum;
      console.log(imgData.ratingNum);
      this.imgData.forEach(page => {
        if (page === imgData) {
          page.isSelected = !page.image;
        } else {
          page.isSelected = true;
        }
      });
    }

    saveUserRating() {
      this.userRating.user_comment =  this.sanitizer.sanitize(SecurityContext.HTML, this.userRating.user_comment);
      this.appDataService.saveUserRating(this.userRating).subscribe(response => {
        console.log(response);
      });
      this.userRating.user_comment = '';
      this.project = '';
    }
}

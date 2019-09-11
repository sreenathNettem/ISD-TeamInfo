import { Component, OnInit, SecurityContext } from '@angular/core';
import { Router } from '@angular/router';
import { IsdAppDataService } from '../../services/isd-app-data.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ToastController } from '@ionic/angular';
import { TEAMS, PROJECTS } from './../../constants/app.constants';

@Component({
  selector: 'app-team-member-info',
  templateUrl: './team-member-info.page.html',
  styleUrls: ['./team-member-info.page.scss'],
})
export class TeamMemberInfoPage implements OnInit {
  public projects: any[];
  public teams: any[];
  sTeam: any;
  project: any;
  public selectedTeams: any[];
  defaultImage = '../../../assets/imgs/5.png';
  imgData = [
    {
      coordinate: '240, 74, 306, 130',
      image: './assets/imgs/5.png',
      ratingNum: '5',
      isSelected: false
    },
    {
      coordinate: '220, 130, 286, 196',
      image: './assets/imgs/4.png',
      ratingNum: '4',
      isSelected: true
    },
    {
      coordinate: '162, 160, 228, 226',
      image: './assets/imgs/3.png',
      ratingNum: '3',
      isSelected: true
    },
    {
      coordinate: '100, 130, 196, 166',
      image: './assets/imgs/2.png',
      ratingNum: '2',
      isSelected: true
    },
    {
      coordinate: '64, 74, 130, 130',
      image: './assets/imgs/1.png',
      ratingNum: '1',
      isSelected: true
    }
  ];
  userRating = { user_rating: '', user_project: '', user_team: '', user_comment: '' };
  constructor(
    private appDataService: IsdAppDataService,
    private sanitizer: DomSanitizer,
    public toastController: ToastController
  ) {
    this.userRating.user_rating = this.imgData[0].ratingNum;
  }

  ngOnInit() {
    this.teams = TEAMS;
    this.projects = PROJECTS;
  }

  setTeamValues(Project) {
    this.userRating.user_project = Project.id;
    this.selectedTeams = this.teams.filter(team => team.project_id === Project.id);
  }

  teamId(team) {
    this.userRating.user_team = team.id;
  }

  onClick(imgData) {
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

  onChange(imgData) {
    this.defaultImage = imgData.image;
    this.userRating.user_rating = imgData.ratingNum;
  }

  saveUserRating() {
    this.userRating.user_comment = this.sanitizer.sanitize(SecurityContext.HTML, this.userRating.user_comment);
    this.appDataService.saveUserRating(this.userRating).subscribe(response => {
      console.log(response);
    });
    this.toastFunction();
    console.log(this.userRating);
    this.defaultImage = '../../../assets/imgs/5.png';
    this.userRating.user_comment = '';
    this.project = '';
  }
  async toastFunction() {
    const toast = await this.toastController.create({
      message: 'Submitted successfully',
      duration: 2000
    });
    await toast.present();
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team-member-info',
  templateUrl: './team-member-info.page.html',
  styleUrls: ['./team-member-info.page.scss'],
})
export class TeamMemberInfoPage implements OnInit {
  public projects: any[];
  public teams: any[];
  showImage: boolean = false;
  defaultImage = '../../../assets/imgs/1.png';
  public selectedTeams: any[];

  public sProject: any;
  public sTeam: any;
  rating: number;
  constructor(private router: Router) {
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

    setTeamValues(sProject) {
        this.selectedTeams = this.teams.filter(team => team.project_id === sProject.id);
    }

    onChange() {
      // alert('"0"');
      console.log('0 is clicked');
      this.defaultImage = '../../../assets/imgs/1.png';
    }
    onChange1() {
      // alert('"1"');
      console.log('1 is clicked');
      this.defaultImage = '../../../assets/imgs/2.png';
    }
    onChange2() {
      // alert('"2"');
      console.log('2 is clicked');
    }
    onChange3() {
      // alert('"3"');
      console.log('3 is clicked');
    }
    onChange4() {
      // alert('"4"');
      console.log('4 is clicked');
    }

}

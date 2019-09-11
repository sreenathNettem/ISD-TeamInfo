import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.page.html',
  styleUrls: ['./adminpage.page.scss'],
})
export class AdminpagePage {
  public projects: any[];
  public teams: any[];
  public selectedTeams: any[];


  lineData = [
    [{
      "date": '09-09-2019',
      "value": 0
    },
    {
      "date": '10-09-2019',
      "value": 400
    },
    {
      "date": '11-09-2019',
      "value": 250
    },
    {
      "date": '12-09-2019',
      "value": 140
    }
    ],
    [
      {
        "date": '09-09-2019',
        "value": 430
      },
      {
        "date": '10-09-2019',
        "value": 370
      },
      {
        "date": '11-09-2019',
        "value": 250
      },
      {
        "date": '12-09-2019',
        "value": 450
      }
    ],
    [
      {
        "date": '09-09-2019',
        "value": 130
      },
      {
        "date": '10-09-2019',
        "value": 270
      },
      {
        "date": '11-09-2019',
        "value": 350
      },
      {
        "date": '12-09-2019',
        "value": 450
      }
    ],
    [
      {
        "date": '09-09-2019',
        "value": 100
      },
      {
        "date": '10-09-2019',
        "value": 190
      },
      {
        "date": '11-09-2019',
        "value": 200
      },
      {
        "date": '12-09-2019',
        "value": 250
      }
    ]
  ];
  constructor() {
    this.initializeProject();
    this.initializeTeams();
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

}

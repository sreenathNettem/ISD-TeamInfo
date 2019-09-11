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
  constructor(private appDataService: IsdAppDataService) { }

  ngOnInit() {
    this.teams = TEAMS;
    this.projects = PROJECTS;
  }

  setTeamValues(sProject) {
    this.selectedTeams = this.teams.filter(team => team.project_id === sProject.id);
  }

}

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
      "DATE": '09-09-2019',
      "VALUE": 0
    },
    {
      "DATE": '10-09-2019',
      "VALUE": 400
    },
    {
      "DATE": '11-09-2019',
      "VALUE": 250
    },
    {
      "DATE": '12-09-2019',
      "VALUE": 140
    }
    ],
    [
      {
        "DATE": '09-09-2019',
        "VALUE": 430
      },
      {
        "DATE": '10-09-2019',
        "VALUE": 370
      },
      {
        "DATE": '11-09-2019',
        "VALUE": 250
      },
      {
        "DATE": '12-09-2019',
        "VALUE": 450
      }
    ],
    [
      {
        "DATE": '09-09-2019',
        "VALUE": 130
      },
      {
        "DATE": '10-09-2019',
        "VALUE": 270
      },
      {
        "DATE": '11-09-2019',
        "VALUE": 350
      },
      {
        "DATE": '12-09-2019',
        "VALUE": 450
      }
    ],
    [
      {
        "DATE": '09-09-2019',
        "VALUE": 100
      },
      {
        "DATE": '10-09-2019',
        "VALUE": 190
      },
      {
        "DATE": '11-09-2019',
        "VALUE": 200
      },
      {
        "DATE": '12-09-2019',
        "VALUE": 250
      }
    ]
  ];
  constructor(private appDataService: IsdAppDataService) { }

  ngOnInit() {
    this.teams = TEAMS;
    this.projects = PROJECTS;
  }

  getUserRatingsByDate(project, team) {
    this.appDataService.getUserRatingsByDate(`user_project=${project.id}&user_team=${team.id}`).subscribe(rating => {
      this.lineData = rating;
      

      console.log(this.lineData);
    });
  }

  setTeamValues(sProject) {
    this.selectedTeams = this.teams.filter(team => team.project_id === sProject.id);
  }

}

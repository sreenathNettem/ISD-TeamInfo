import { Component, OnInit } from '@angular/core';
import { IsdAppDataService } from './../../services/isd-app-data.service';
import { TEAMS, PROJECTS } from './../../constants/app.constants';
import { Router } from '@angular/router';

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
  public showGraph = true;
  // lineData = [];
  constructor(private appDataService: IsdAppDataService, private router: Router) { }

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

  lineData2 = [
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
      }
    ]
  ];
  ngOnInit() {
    this.teams = TEAMS;
    this.projects = PROJECTS;
    // this.getAllUserRatings();
  }

  getAllUserRatings() {
    this.appDataService.getAllUserRatings().subscribe(rating => {
      this.lineData = rating;
      this.checkGraphResponse();
    });
    this.project = '';
    this.sTeam = '';
  }

  reset() {
    // console.log(this.lineData2)
    // this.lineData = [...this.lineData2];
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
  logout() {
    this.appDataService.logout().subscribe(result => {
      this.router.navigate(['/isd-login']);
    });
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

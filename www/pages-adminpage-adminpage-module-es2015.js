(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-adminpage-adminpage-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/adminpage/adminpage.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/adminpage/adminpage.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"gradient-background\">\n    <ion-title class=\"ion-text-center\">SMS Mood Marbles</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"primary\" (click)=\"logout()\">\n      <ion-button>\n        <ion-icon slot=\"icon-only\" name=\"log-out\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-card padding>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-item>\n          <ion-label>Projects</ion-label>\n          <ion-select placeholder=\"Projects\" (ionChange)=\"setTeamValues(project)\" [(ngModel)]=\"project\">\n            <ion-select-option [value]=\"project\" *ngFor=\"let project of projects\">{{project.name}} </ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\" *ngIf=\"project\">\n        <ion-item>\n          <ion-label>Teams</ion-label>\n          <ion-select placeholder=\"Teams\" (ionChange)=\"setButtonStatus()\" [(ngModel)]=\"sTeam\">\n            <ion-select-option [value]=\"sTeam\" *ngFor=\"let sTeam of selectedTeams\">{{sTeam.name}}</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-button expand=\"small\" [disabled]=\"!isDisabled\" (click)=\"getUserRatingsByDate(project, sTeam)\">Filter\n        </ion-button>\n        <ion-button expand=\"small\" [disabled]=\"!isDisabled\" (click)=\"reset()\">Reset</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n  <ion-card class=\"welcome-card\">\n    <ng-container *ngIf=\"showGraph\">\n      <ion-card-header>\n        <ion-card-title>\n          Mood Marbles - Daily\n        </ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <app-line-graph [lineData]=\"lineData\"></app-line-graph>\n      </ion-card-content>\n    </ng-container>\n    <ng-container *ngIf=\"!showGraph\">\n      <p class=\"no-data-available\">Data not available for this selection</p>\n    </ng-container>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/adminpage/adminpage.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/adminpage/adminpage.module.ts ***!
  \*****************************************************/
/*! exports provided: AdminpagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminpagePageModule", function() { return AdminpagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _adminpage_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./adminpage.page */ "./src/app/pages/adminpage/adminpage.page.ts");
/* harmony import */ var _line_graph_line_graph_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../line-graph/line-graph.component */ "./src/app/line-graph/line-graph.component.ts");








const routes = [
    {
        path: '',
        component: _adminpage_page__WEBPACK_IMPORTED_MODULE_6__["AdminpagePage"]
    }
];
let AdminpagePageModule = class AdminpagePageModule {
};
AdminpagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_adminpage_page__WEBPACK_IMPORTED_MODULE_6__["AdminpagePage"], _line_graph_line_graph_component__WEBPACK_IMPORTED_MODULE_7__["LineGraphComponent"]]
    })
], AdminpagePageModule);



/***/ }),

/***/ "./src/app/pages/adminpage/adminpage.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/adminpage/adminpage.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #f4f4f4;\n}\n\nion-card {\n  --background: #fff;\n  margin: 10px 10px;\n}\n\nion-select {\n  width: 100%;\n  max-width: 100%;\n  padding: 0;\n}\n\n.no-data-available {\n  font-weight: bold;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zd2FteS9EZXNrdG9wL0lCTS9tb29kIG1hcmJsZXMvSVNELVRlYW1JbmZvL3NyYy9hcHAvcGFnZXMvYWRtaW5wYWdlL2FkbWlucGFnZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2FkbWlucGFnZS9hZG1pbnBhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURHQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQ0FKOztBREdBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWRtaW5wYWdlL2FkbWlucGFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZjRmNGY0O1xufVxuXG5pb24tY2FyZCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xuICAgIG1hcmdpbjogMTBweCAxMHB4O1xufVxuXG5cbmlvbi1zZWxlY3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4ubm8tZGF0YS1hdmFpbGFibGUge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI2Y0ZjRmNDtcbn1cblxuaW9uLWNhcmQge1xuICAtLWJhY2tncm91bmQ6ICNmZmY7XG4gIG1hcmdpbjogMTBweCAxMHB4O1xufVxuXG5pb24tc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMDtcbn1cblxuLm5vLWRhdGEtYXZhaWxhYmxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/adminpage/adminpage.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/adminpage/adminpage.page.ts ***!
  \***************************************************/
/*! exports provided: AdminpagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminpagePage", function() { return AdminpagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_isd_app_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/isd-app-data.service */ "./src/app/services/isd-app-data.service.ts");
/* harmony import */ var _constants_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../constants/app.constants */ "./src/app/constants/app.constants.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let AdminpagePage = class AdminpagePage {
    // lineData = [];
    constructor(appDataService, router) {
        this.appDataService = appDataService;
        this.router = router;
        this.isDisabled = false;
        this.showGraph = true;
        this.lineData = [
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
        this.lineData2 = [
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
    }
    ngOnInit() {
        this.teams = _constants_app_constants__WEBPACK_IMPORTED_MODULE_3__["TEAMS"];
        this.projects = _constants_app_constants__WEBPACK_IMPORTED_MODULE_3__["PROJECTS"];
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
        }
        else {
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
};
AdminpagePage.ctorParameters = () => [
    { type: _services_isd_app_data_service__WEBPACK_IMPORTED_MODULE_2__["IsdAppDataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AdminpagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-adminpage',
        template: __webpack_require__(/*! raw-loader!./adminpage.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/adminpage/adminpage.page.html"),
        styles: [__webpack_require__(/*! ./adminpage.page.scss */ "./src/app/pages/adminpage/adminpage.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_isd_app_data_service__WEBPACK_IMPORTED_MODULE_2__["IsdAppDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], AdminpagePage);



/***/ })

}]);
//# sourceMappingURL=pages-adminpage-adminpage-module-es2015.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-team-member-info-team-member-info-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/team-member-info/team-member-info.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/team-member-info/team-member-info.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>teamMemberInfo</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <ion-row>\r\n    <ion-col size='12' text-center>\r\n      <img  [src]=\"defaultImage\" alt=\"Workplace\" usemap=\"#workmap\">\r\n      <map name=\"workmap\">\r\n        <!-- <area shape=\"rect\" coords=\"74,74,90,90\" alt=\"not good\" (click)='onChange()'>\r\n        <area shape=\"rect\" coords=\"100, 130, 116, 146\" alt=\"not bad\" (click)='onChange1()'>\r\n        <area shape=\"rect\" coords=\"162, 160, 178, 176\" alt=\"okay\" (click)='onChange2()'>\r\n        <area shape=\"rect\" coords=\"220, 130, 246, 146\" alt=\"good\" (click)='onChange3()'>\r\n        <area shape=\"rect\" coords=\"250, 74, 296, 90\" alt=\"great\" (click)='onChange4()'> -->\r\n        <area shape=\"rect\" *ngFor= \"let data of imgData\" [coords]= \"data.coordinate\" alt=\"not good\" (click)='onChange(data.image)'>\r\n      </map>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row>\r\n    <ion-col size='6'>\r\n      <ion-list>\r\n        <ion-list-header>PROJECT</ion-list-header>        \r\n        <ion-item>\r\n            <ion-select placeholder= 'projects' (ionChange)=\"setTeamValues(sProject)\"[(ngModel)]=\"sProject\">\r\n                <ion-select-option [value]=\"sProject\" *ngFor=\"let sProject of projects\">{{sProject.name}} </ion-select-option>\r\n            </ion-select>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-col>\r\n    <ion-col size='6'>\r\n      <ion-list>\r\n        <ion-list-header>TEAM</ion-list-header>        \r\n        <ion-item>\r\n            <ion-select placeholder='teams'  [(ngModel)]=\"sTeam\">\r\n                <ion-select-option [value]=\"sTeam\" *ngFor=\"let sTeam of selectedTeams\">{{sTeam.name}}</ion-select-option>\r\n            </ion-select>\r\n         </ion-item>\r\n      </ion-list>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row>\r\n    <ion-col>\r\n      <p>COMMENTS</p>\r\n      <ion-textarea placeholder='Enter your comments here..' rows='4'></ion-textarea>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-button>Submit</ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/team-member-info/team-member-info.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/team-member-info/team-member-info.module.ts ***!
  \*******************************************************************/
/*! exports provided: TeamMemberInfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamMemberInfoPageModule", function() { return TeamMemberInfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _team_member_info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./team-member-info.page */ "./src/app/pages/team-member-info/team-member-info.page.ts");







var routes = [
    {
        path: '',
        component: _team_member_info_page__WEBPACK_IMPORTED_MODULE_6__["TeamMemberInfoPage"]
    }
];
var TeamMemberInfoPageModule = /** @class */ (function () {
    function TeamMemberInfoPageModule() {
    }
    TeamMemberInfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_team_member_info_page__WEBPACK_IMPORTED_MODULE_6__["TeamMemberInfoPage"]]
        })
    ], TeamMemberInfoPageModule);
    return TeamMemberInfoPageModule;
}());



/***/ }),

/***/ "./src/app/pages/team-member-info/team-member-info.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/team-member-info/team-member-info.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-select {\n  width: 100%;\n  max-width: 100%;\n}\n\nion-textarea {\n  border: 1px solid #ddd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGVhbS1tZW1iZXItaW5mby9DOlxcVXNlcnNcXFNyZWVuYXRoTmV0dGVtXFxEb2N1bWVudHNcXElTRC1UZWFtSW5mby9zcmNcXGFwcFxccGFnZXNcXHRlYW0tbWVtYmVyLWluZm9cXHRlYW0tbWVtYmVyLWluZm8ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy90ZWFtLW1lbWJlci1pbmZvL3RlYW0tbWVtYmVyLWluZm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUNDSjs7QURDQTtFQUNJLHNCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90ZWFtLW1lbWJlci1pbmZvL3RlYW0tbWVtYmVyLWluZm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNlbGVjdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5pb24tdGV4dGFyZWEge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxufSIsImlvbi1zZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG5pb24tdGV4dGFyZWEge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/team-member-info/team-member-info.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/team-member-info/team-member-info.page.ts ***!
  \*****************************************************************/
/*! exports provided: TeamMemberInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamMemberInfoPage", function() { return TeamMemberInfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var TeamMemberInfoPage = /** @class */ (function () {
    function TeamMemberInfoPage(router) {
        this.router = router;
        this.showImage = false;
        this.defaultImage = '../../../assets/imgs/1.png';
        this.imgData = [
            {
                'coordinate': '74,74,90,90',
                'image': '../../../assets/imgs/1.png'
            },
            {
                'coordinate': '100, 130, 116, 146',
                'image': '../../../assets/imgs/2.png'
            },
            {
                'coordinate': '162, 160, 178, 176',
                'image': '../../../assets/imgs/3.png'
            },
            {
                'coordinate': '220, 130, 246, 146',
                'image': '../../../assets/imgs/4.png'
            },
            {
                'coordinate': '250, 74, 296, 90',
                'image': '../../../assets/imgs/5.png'
            }
        ];
        this.initializeProject();
        this.initializeTeams();
    }
    TeamMemberInfoPage.prototype.ngOnInit = function () {
    };
    TeamMemberInfoPage.prototype.initializeProject = function () {
        this.projects = [
            { id: 1, name: 'ISD' },
            { id: 2, name: 'Cognos' },
        ];
    };
    TeamMemberInfoPage.prototype.initializeTeams = function () {
        this.teams = [
            { id: 1, name: 'UI', project_id: 1, Project_name: 'ISD' },
            { id: 2, name: 'API', project_id: 1, Project_name: 'ISD' },
            { id: 3, name: 'TEST', project_id: 1, Project_name: 'ISD' },
            { id: 4, name: 'DEVOPS', project_id: 1, Project_name: 'ISD' },
            { id: 5, name: 'CALL', project_id: 2, Project_name: 'Cognos' },
            { id: 7, name: 'STD Reports', project_id: 2, Project_name: 'Cognos' }
        ];
    };
    TeamMemberInfoPage.prototype.setTeamValues = function (sProject) {
        this.selectedTeams = this.teams.filter(function (team) { return team.project_id === sProject.id; });
    };
    TeamMemberInfoPage.prototype.onChange = function (image) {
        console.log('0 is clicked');
        this.defaultImage = image;
    };
    TeamMemberInfoPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    TeamMemberInfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-team-member-info',
            template: __webpack_require__(/*! raw-loader!./team-member-info.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/team-member-info/team-member-info.page.html"),
            styles: [__webpack_require__(/*! ./team-member-info.page.scss */ "./src/app/pages/team-member-info/team-member-info.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], TeamMemberInfoPage);
    return TeamMemberInfoPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-team-member-info-team-member-info-module-es5.js.map
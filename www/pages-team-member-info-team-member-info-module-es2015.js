(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-team-member-info-team-member-info-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/team-member-info/team-member-info.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/team-member-info/team-member-info.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"gradient-background\">\n    <ion-title class=\"ion-text-center\">SMS Mood Marbles</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"primary\" (click)=\"logout()\">\n      <ion-button>\n        <ion-icon slot=\"icon-only\" name=\"log-out\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content no-padding>\n  <ion-row class=\"ion-margin-top ion-margin-bottom\">\n    <ion-col size=\"12\" text-center>How do you feel about?</ion-col>\n  </ion-row>\n  <ion-card>\n    <ion-row>\n      <ion-col size='12' text-center>\n        <img [src]=\"defaultImage\" alt=\"Workplace\" usemap=\"#workmap\">\n        <map name=\"workmap\">\n          <area shape=\"rect\" *ngFor=\"let data of imgData\" [coords]=\"data.coordinate\" alt=\"not good\"\n            (click)='onChange(data)'>\n        </map>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n  <ion-card padding>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-item>\n          <ion-label>Projects</ion-label>\n          <ion-select placeholder=\"Projects\" (ionChange)=\"setTeamValues(project)\" [(ngModel)]=\"project\">\n            <ion-select-option [value]=\"project\" *ngFor=\"let project of projects\">{{project.name}} </ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"6\" *ngIf=\"project\">\n        <ion-item>\n          <ion-label>Teams</ion-label>\n          <ion-select placeholder=\"Teams\" (ionChange)=\"teamId(sTeam)\" [(ngModel)]=\"sTeam\">\n            <ion-select-option [value]=\"sTeam\" *ngFor=\"let sTeam of selectedTeams\">{{sTeam.name}}</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <p>Comments</p>\n        <ion-textarea placeholder=\"Enter your comments..\" rows=\"4\" [(ngModel)]=\"userRating.user_comment\"></ion-textarea>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-button expand=\"full\" [disabled]=\"!project || !sTeam\" (click)=\"saveUserRating()\">Submit</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _team_member_info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./team-member-info.page */ "./src/app/pages/team-member-info/team-member-info.page.ts");







const routes = [
    {
        path: '',
        component: _team_member_info_page__WEBPACK_IMPORTED_MODULE_6__["TeamMemberInfoPage"]
    }
];
let TeamMemberInfoPageModule = class TeamMemberInfoPageModule {
};
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



/***/ }),

/***/ "./src/app/pages/team-member-info/team-member-info.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/team-member-info/team-member-info.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-select {\n  width: 100%;\n  max-width: 100%;\n  padding: 0;\n}\n\nion-textarea {\n  border: 1px solid #ddd;\n}\n\n.active {\n  border-radius: 10%;\n  border: 3px solid #ddd;\n}\n\n.item {\n  --background:transparent;\n}\n\nion-card {\n  --background: #fff;\n  margin: 10px 10px;\n}\n\n.displayFlex {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.displayFlex img {\n  width: 50px;\n  height: 50px;\n}\n\nion-button {\n  --background: linear-gradient(to right, #4E7FF0, #2856C9);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zd2FteS9EZXNrdG9wL0lCTS9tb29kIG1hcmJsZXMvSVNELVRlYW1JbmZvL3NyYy9hcHAvcGFnZXMvdGVhbS1tZW1iZXItaW5mby90ZWFtLW1lbWJlci1pbmZvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGVhbS1tZW1iZXItaW5mby90ZWFtLW1lbWJlci1pbmZvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQ0FBOztBREVBO0VBQ0Esc0JBQUE7QUNDQTs7QURDQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNFQTs7QURBQTtFQUNBLHdCQUFBO0FDR0E7O0FEREE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDSUE7O0FERkE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDS0E7O0FESkE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ01BOztBREhBO0VBQ0EseURBQUE7QUNNQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlYW0tbWVtYmVyLWluZm8vdGVhbS1tZW1iZXItaW5mby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi1zZWxlY3Qge1xud2lkdGg6IDEwMCU7XG5tYXgtd2lkdGg6IDEwMCU7XG5wYWRkaW5nOiAwO1xufVxuaW9uLXRleHRhcmVhIHtcbmJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG59XG4uYWN0aXZlIHtcbmJvcmRlci1yYWRpdXM6IDEwJTtcbmJvcmRlcjogM3B4IHNvbGlkICNkZGQ7XG59XG4uaXRlbXtcbi0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDsgIFxufVxuaW9uLWNhcmR7XG4tLWJhY2tncm91bmQ6ICNmZmY7XG5tYXJnaW46IDEwcHggMTBweDtcbn1cbi5kaXNwbGF5RmxleCB7XG5kaXNwbGF5OiBmbGV4O1xuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5pbWcge1xud2lkdGg6IDUwcHg7XG5oZWlnaHQ6IDUwcHg7XG59XG59XG5pb24tYnV0dG9ue1xuLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM0RTdGRjAsICMyODU2QzkpO1xuXG59IiwiaW9uLXNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmlvbi10ZXh0YXJlYSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG59XG5cbi5hY3RpdmUge1xuICBib3JkZXItcmFkaXVzOiAxMCU7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNkZGQ7XG59XG5cbi5pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xufVxuXG5pb24tY2FyZCB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZjtcbiAgbWFyZ2luOiAxMHB4IDEwcHg7XG59XG5cbi5kaXNwbGF5RmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmRpc3BsYXlGbGV4IGltZyB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbmlvbi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzRFN0ZGMCwgIzI4NTZDOSk7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_isd_app_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/isd-app-data.service */ "./src/app/services/isd-app-data.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _constants_app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../constants/app.constants */ "./src/app/constants/app.constants.ts");
/* harmony import */ var _services_isd_utility_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/isd-utility.service */ "./src/app/services/isd-utility.service.ts");







let TeamMemberInfoPage = class TeamMemberInfoPage {
    constructor(utilityService, appDataService, sanitizer, router) {
        this.utilityService = utilityService;
        this.appDataService = appDataService;
        this.sanitizer = sanitizer;
        this.router = router;
        this.userRating = { user_rating: '', user_project: '', user_team: '', user_comment: '' };
        this.userRating.user_rating = _constants_app_constants__WEBPACK_IMPORTED_MODULE_5__["IMAGEDATA"][0].ratingNum;
        this.defaultImage = _constants_app_constants__WEBPACK_IMPORTED_MODULE_5__["IMAGEDATA"][0].image;
    }
    ngOnInit() {
        this.teams = _constants_app_constants__WEBPACK_IMPORTED_MODULE_5__["TEAMS"];
        this.projects = _constants_app_constants__WEBPACK_IMPORTED_MODULE_5__["PROJECTS"];
        this.imgData = _constants_app_constants__WEBPACK_IMPORTED_MODULE_5__["IMAGEDATA"];
    }
    setTeamValues(Project) {
        this.userRating.user_project = Project.id;
        this.selectedTeams = this.teams.filter(team => team.project_id === Project.id);
    }
    teamId(team) {
        this.userRating.user_team = team.id;
    }
    onChange(imgData) {
        this.defaultImage = imgData.image;
        this.userRating.user_rating = imgData.ratingNum;
    }
    saveUserRating() {
        this.userRating.user_comment = this.sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SecurityContext"].HTML, this.userRating.user_comment);
        this.appDataService.saveUserRating(this.userRating).subscribe(response => {
            if (response.status === 'Success') {
                this.utilityService.toastFunction('Submitted successfully');
            }
            else {
                this.utilityService.toastFunction('Data not updated successfully. Please try again.');
            }
        });
        this.defaultImage = _constants_app_constants__WEBPACK_IMPORTED_MODULE_5__["IMAGEDATA"][0].image;
        this.userRating.user_comment = '';
        this.project = '';
    }
    logout() {
        this.appDataService.logout().subscribe(result => {
            this.router.navigate(['/isd-login']);
        });
    }
};
TeamMemberInfoPage.ctorParameters = () => [
    { type: _services_isd_utility_service__WEBPACK_IMPORTED_MODULE_6__["IsdUtilityService"] },
    { type: _services_isd_app_data_service__WEBPACK_IMPORTED_MODULE_3__["IsdAppDataService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
TeamMemberInfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-team-member-info',
        template: __webpack_require__(/*! raw-loader!./team-member-info.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/team-member-info/team-member-info.page.html"),
        styles: [__webpack_require__(/*! ./team-member-info.page.scss */ "./src/app/pages/team-member-info/team-member-info.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_isd_utility_service__WEBPACK_IMPORTED_MODULE_6__["IsdUtilityService"],
        _services_isd_app_data_service__WEBPACK_IMPORTED_MODULE_3__["IsdAppDataService"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], TeamMemberInfoPage);



/***/ }),

/***/ "./src/app/services/isd-utility.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/isd-utility.service.ts ***!
  \*************************************************/
/*! exports provided: IsdUtilityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsdUtilityService", function() { return IsdUtilityService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let IsdUtilityService = class IsdUtilityService {
    constructor(router, loaderController, actionSheetController, activatedRoute, alertController, toastController) {
        this.router = router;
        this.loaderController = loaderController;
        this.actionSheetController = actionSheetController;
        this.activatedRoute = activatedRoute;
        this.alertController = alertController;
        this.toastController = toastController;
    }
    /** Loader controller util service starts here */
    // /**
    //    * Present Loader with message on screen
    //    * @param loaderMessage - loader message
    //    * @returns [LoadingController] - Controller for handling loader
    //    */
    showLoader(loaderMessage = '') {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loaderElement = yield this.loaderController.create({
                message: loaderMessage,
                spinner: 'crescent',
                backdropDismiss: true
            });
            const loader = yield this.loaderController.getTop();
            yield this.loaderElement.present();
            setTimeout(() => {
                this.hideLoader();
            }, 5000);
        });
    }
    /**
     * Hide loader
     * @param loader - LoadingController
     */
    hideLoader() {
        this.loaderController.dismiss(this.loaderElement);
    }
    getAllLoaders() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loader = yield this.loaderController.getTop();
            return loader;
        });
    }
    /** Loader controller util service ends here */
    priceConversion(value) {
        if (value !== undefined && value !== null) {
            return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        }
        else {
            return '';
        }
    }
    /*Action sheet controller util service starts here*/
    presentActionSheet(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                cssClass: 'alertDanger',
                header: data.header,
                buttons: this.createButtons(data),
            });
            yield actionSheet.present();
        });
    }
    createButtons(data) {
        const buttons = [];
        data.data.forEach(page => {
            const button = {
                text: page.text,
                cssClass: 'action-sheet-btn-color',
                handler: () => {
                    this.router.navigate([page.route]);
                }
            };
            buttons.push(button);
        });
        return buttons;
    }
    presentAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                // header: data.header,
                // message: data.message,
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Delete',
                        handler: () => {
                            console.log('Confirm Okay');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    /* toast messages */
    toastFunction(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message,
                duration: 2000,
                position: 'top'
            });
            toast.present();
        });
    }
};
IsdUtilityService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
IsdUtilityService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
], IsdUtilityService);



/***/ })

}]);
//# sourceMappingURL=pages-team-member-info-team-member-info-module-es2015.js.map
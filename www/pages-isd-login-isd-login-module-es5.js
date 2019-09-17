(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-isd-login-isd-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/isd-login/isd-login.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/isd-login/isd-login.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <ion-row>\n    <ion-col class=\"logo\">\n      <img src=\"./assets/logo.png\" />\n    </ion-col>\n  </ion-row>\n  <!-- <ion-row class=\"welcome-content\">\n    <ion-col>\n      <p>Welcome to SMS Mood Marbles</p>\n    </ion-col>\n  </ion-row> -->\n  <ion-button expand=\"large\" (click)='login()'>Login</ion-button>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/isd-login/isd-login.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/isd-login/isd-login.module.ts ***!
  \*****************************************************/
/*! exports provided: IsdLoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsdLoginPageModule", function() { return IsdLoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _isd_login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./isd-login.page */ "./src/app/pages/isd-login/isd-login.page.ts");







var routes = [
    {
        path: '',
        component: _isd_login_page__WEBPACK_IMPORTED_MODULE_6__["IsdLoginPage"]
    }
];
var IsdLoginPageModule = /** @class */ (function () {
    function IsdLoginPageModule() {
    }
    IsdLoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_isd_login_page__WEBPACK_IMPORTED_MODULE_6__["IsdLoginPage"]]
        })
    ], IsdLoginPageModule);
    return IsdLoginPageModule;
}());



/***/ }),

/***/ "./src/app/pages/isd-login/isd-login.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/isd-login/isd-login.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-button {\n  text-transform: capitalize;\n  left: 23;\n  left: 23%;\n  width: 50%;\n  height: 48px;\n  position: absolute;\n  --background: linear-gradient(to right, #4E7FF0, #2856C9);\n}\n\nion-button {\n  text-transform: capitalize;\n}\n\nion-row {\n  position: relative;\n  top: 0%;\n  padding: 16px;\n}\n\n.log {\n  margin: auto;\n}\n\n.log img {\n  margin-top: 50px;\n  width: 80%;\n}\n\n.welcome-content {\n  text-align: center;\n}\n\n.welcome-content p {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zd2FteS9EZXNrdG9wL0lCTS9tb29kIG1hcmJsZXMvSVNELVRlYW1JbmZvL3NyYy9hcHAvcGFnZXMvaXNkLWxvZ2luL2lzZC1sb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2lzZC1sb2dpbi9pc2QtbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5REFBQTtBQ0NKOztBREVBO0VBQ0ksMEJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pc2QtbG9naW4vaXNkLWxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1idXR0b24ge1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIGxlZnQ6IDIzO1xuICAgIGxlZnQ6IDIzJTtcbiAgICB3aWR0aDogNTAlO1xuICAgIGhlaWdodDogNDhweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM0RTdGRjAsICMyODU2QzkpO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuaW9uLXJvdyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMCU7XG4gICAgcGFkZGluZzogMTZweDtcbn1cblxuLmxvZ3tcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi5sb2cgaW1ne1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgd2lkdGg6IDgwJTtcbn1cblxuLndlbGNvbWUtY29udGVudCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyXG59XG5cbi53ZWxjb21lLWNvbnRlbnQgcCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59IiwiaW9uLWJ1dHRvbiB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBsZWZ0OiAyMztcbiAgbGVmdDogMjMlO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM0RTdGRjAsICMyODU2QzkpO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbmlvbi1yb3cge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMCU7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbi5sb2cge1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5sb2cgaW1nIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgd2lkdGg6IDgwJTtcbn1cblxuLndlbGNvbWUtY29udGVudCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLndlbGNvbWUtY29udGVudCBwIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/isd-login/isd-login.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/isd-login/isd-login.page.ts ***!
  \***************************************************/
/*! exports provided: IsdLoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsdLoginPage", function() { return IsdLoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_isd_app_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/isd-app-data.service */ "./src/app/services/isd-app-data.service.ts");




var IsdLoginPage = /** @class */ (function () {
    function IsdLoginPage(router, appDataService) {
        this.router = router;
        this.appDataService = appDataService;
    }
    IsdLoginPage.prototype.ngOnInit = function () {
    };
    IsdLoginPage.prototype.login = function () {
        var _this = this;
        this.appDataService.isLoggedIn().subscribe(function (flag) {
            _this.appDataService.getAuthentication().subscribe(function (userDetails) {
                _this.appDataService.userDetails = userDetails;
                _this.appDataService.setUserDetails(userDetails).subscribe(function (result) {
                    setTimeout(function () {
                        window.location.assign(window.location.host);
                    }, 2000);
                    if (userDetails.role !== 'admin') {
                        _this.router.navigate(['/team-member-info']);
                    }
                    else {
                        _this.router.navigate(['/isd-landing']);
                    }
                });
            }, function (error) {
                setTimeout(function () {
                    window.location.assign(window.location.host);
                }, 2500);
            });
        }, function (error) {
            alert(error);
        });
    };
    IsdLoginPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_services_isd_app_data_service__WEBPACK_IMPORTED_MODULE_3__["IsdAppDataService"] }
    ]; };
    IsdLoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-isd-login',
            template: __webpack_require__(/*! raw-loader!./isd-login.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/isd-login/isd-login.page.html"),
            styles: [__webpack_require__(/*! ./isd-login.page.scss */ "./src/app/pages/isd-login/isd-login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_isd_app_data_service__WEBPACK_IMPORTED_MODULE_3__["IsdAppDataService"]])
    ], IsdLoginPage);
    return IsdLoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-isd-login-isd-login-module-es5.js.map
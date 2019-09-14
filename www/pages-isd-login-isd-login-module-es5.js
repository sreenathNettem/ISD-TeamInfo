(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-isd-login-isd-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/isd-login/isd-login.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/isd-login/isd-login.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n  <ion-button  expand=\"large\" (click)='login()'>Login</ion-button>\r\n</ion-content>"

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

module.exports = "ion-button {\n  text-transform: capitalize;\n  left: 23;\n  left: 23%;\n  width: 50%;\n  height: 48px;\n  position: absolute;\n  --background: linear-gradient(to right, #4E7FF0, #2856C9);\n  top: 40%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaXNkLWxvZ2luL0M6XFxVc2Vyc1xcU0hJTFBBRE9ERElQQUxMSVxcRGVza3RvcFxcSVNELVRlYW1JbmZvL3NyY1xcYXBwXFxwYWdlc1xcaXNkLWxvZ2luXFxpc2QtbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9pc2QtbG9naW4vaXNkLWxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseURBQUE7RUFDQSxRQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pc2QtbG9naW4vaXNkLWxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1idXR0b24ge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBsZWZ0OiAyMztcclxuICAgIGxlZnQ6IDIzJTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzRFN0ZGMCwgIzI4NTZDOSk7XHJcbiAgICB0b3A6IDQwJTtcclxufVxyXG4iLCJpb24tYnV0dG9uIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGxlZnQ6IDIzO1xuICBsZWZ0OiAyMyU7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogNDhweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzRFN0ZGMCwgIzI4NTZDOSk7XG4gIHRvcDogNDAlO1xufSJdfQ== */"

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
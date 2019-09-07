(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-isd-login-isd-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/isd-login/isd-login.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/isd-login/isd-login.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n  <div class=\"login-logo\">\r\n    <img src=\"assets/icon/favicon.png\">\r\n  </div>\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-button type=\"submit\" expand=\"block\" (click)='login()'>Admin</ion-button>\r\n    </ion-col>\r\n    <ion-col>\r\n      <ion-button color=\"light\" expand=\"block\" (click)='login()'>Team Member</ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n \r\n</ion-content>"

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

module.exports = ".login-logo {\n  padding: 20px 0;\n  min-height: 200px;\n  text-align: center;\n}\n\n.login-logo img {\n  max-width: 150px;\n}\n\n.list {\n  margin-bottom: 0;\n}\n\nion-button {\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaXNkLWxvZ2luL0M6XFxVc2Vyc1xcU3JlZW5hdGhOZXR0ZW1cXERvY3VtZW50c1xcSVNELVRlYW1JbmZvL3NyY1xcYXBwXFxwYWdlc1xcaXNkLWxvZ2luXFxpc2QtbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9pc2QtbG9naW4vaXNkLWxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0E7O0FERUE7RUFDQSxnQkFBQTtBQ0NBOztBREVBO0VBQ0EsZ0JBQUE7QUNDQTs7QURDQTtFQUNBLDBCQUFBO0FDRUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pc2QtbG9naW4vaXNkLWxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1sb2dvIHtcclxucGFkZGluZzogMjBweCAwO1xyXG5taW4taGVpZ2h0OiAyMDBweDtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubG9naW4tbG9nbyBpbWcge1xyXG5tYXgtd2lkdGg6IDE1MHB4O1xyXG59XHJcblxyXG4ubGlzdCB7XHJcbm1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuaW9uLWJ1dHRvbntcclxudGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuIiwiLmxvZ2luLWxvZ28ge1xuICBwYWRkaW5nOiAyMHB4IDA7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2dpbi1sb2dvIGltZyB7XG4gIG1heC13aWR0aDogMTUwcHg7XG59XG5cbi5saXN0IHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufSJdfQ== */"

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
    IsdLoginPage.prototype.teamMemberInfoPage = function () {
        this.router.navigate(['/team-member-info']);
    };
    // adminpage(){
    //   this.router.navigate(['/adminpage']);
    // }
    IsdLoginPage.prototype.login = function () {
        var _this = this;
        this.appDataService.isLoggedIn().subscribe(function (flag) {
            _this.appDataService.getAuthentication().subscribe(function (userDetails) {
                _this.appDataService.userDetails = userDetails;
                _this.appDataService.setUserDetails(userDetails).subscribe(function (result) {
                    setTimeout(function () {
                        window.location.assign(window.location.host);
                    }, 2000);
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
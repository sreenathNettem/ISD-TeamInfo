(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-isd-login-isd-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/isd-login/isd-login.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/isd-login/isd-login.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <ion-row>\n    <ion-col class=\"logo\" style=\"margin-top: 150px; text-align: center;\">\n      <img src=\"./assets/mm-logo2.png\" style=\"width: 60%\" />\n    </ion-col>\n  </ion-row>\n  <ion-row *ngIf=\"!isLoggedIn\">\n    <ion-col style=\"text-align: center;\">\n      <ion-button expand=\"large\" (click)='login()' color=\"light\">Login</ion-button>\n    </ion-col>\n  </ion-row>\n  <ion-row *ngIf=\"isLoggedIn\">\n    <ion-col style=\"text-align: center;\">\n      <a size=\"large\" expand=\"block\">Loading...</a>\n    </ion-col>\n  </ion-row>\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _isd_login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./isd-login.page */ "./src/app/pages/isd-login/isd-login.page.ts");







const routes = [
    {
        path: '',
        component: _isd_login_page__WEBPACK_IMPORTED_MODULE_6__["IsdLoginPage"]
    }
];
let IsdLoginPageModule = class IsdLoginPageModule {
};
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



/***/ }),

/***/ "./src/app/pages/isd-login/isd-login.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/isd-login/isd-login.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #12327E;\n}\n\nion-button {\n  text-transform: capitalize;\n  left: 23;\n  left: 23%;\n  width: 50%;\n  height: 48px;\n  position: absolute;\n  --background: linear-gradient(to right, #4E7FF0, #2856C9);\n}\n\nion-button {\n  text-transform: capitalize;\n}\n\nion-row {\n  position: relative;\n  top: 0%;\n  padding: 16px;\n}\n\n/* Login Page */\n\n.log {\n  margin: auto;\n}\n\n.log img {\n  margin-top: 50px;\n  width: 50% !important;\n}\n\n.welcome-content {\n  text-align: center;\n}\n\n.welcome-content p {\n  font-weight: bold;\n}\n\n/* Login Page */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zd2FteS9EZXNrdG9wL0lCTS9tb29kIG1hcmJsZXMvSVNELVRlYW1JbmZvL3NyYy9hcHAvcGFnZXMvaXNkLWxvZ2luL2lzZC1sb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2lzZC1sb2dpbi9pc2QtbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUNDSjs7QURDQTtFQUNJLDBCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseURBQUE7QUNFSjs7QURDQTtFQUNJLDBCQUFBO0FDRUo7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0FDRUo7O0FEQ0EsZUFBQTs7QUFDQTtFQUNJLFlBQUE7QUNFSjs7QURDQTtFQUNJLGdCQUFBO0VBQ0EscUJBQUE7QUNFSjs7QURDQTtFQUNJLGtCQUFBO0FDRUo7O0FEQ0E7RUFDSSxpQkFBQTtBQ0VKOztBRENBLGVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pc2QtbG9naW4vaXNkLWxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6ICMxMjMyN0U7XG59XG5pb24tYnV0dG9uIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBsZWZ0OiAyMztcbiAgICBsZWZ0OiAyMyU7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNEU3RkYwLCAjMjg1NkM5KTtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbmlvbi1yb3cge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDAlO1xuICAgIHBhZGRpbmc6IDE2cHg7XG59XG5cbi8qIExvZ2luIFBhZ2UgKi9cbi5sb2cge1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLmxvZyBpbWcge1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xufVxuXG4ud2VsY29tZS1jb250ZW50IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcbn1cblxuLndlbGNvbWUtY29udGVudCBwIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLyogTG9naW4gUGFnZSAqLyIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjMTIzMjdFO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGxlZnQ6IDIzO1xuICBsZWZ0OiAyMyU7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogNDhweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzRFN0ZGMCwgIzI4NTZDOSk7XG59XG5cbmlvbi1idXR0b24ge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuaW9uLXJvdyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwJTtcbiAgcGFkZGluZzogMTZweDtcbn1cblxuLyogTG9naW4gUGFnZSAqL1xuLmxvZyB7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmxvZyBpbWcge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XG59XG5cbi53ZWxjb21lLWNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi53ZWxjb21lLWNvbnRlbnQgcCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4vKiBMb2dpbiBQYWdlICovIl19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_isd_app_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/isd-app-data.service */ "./src/app/services/isd-app-data.service.ts");




let IsdLoginPage = class IsdLoginPage {
    constructor(router, appDataService) {
        this.router = router;
        this.appDataService = appDataService;
        this.isLoggedIn = false;
    }
    ngOnInit() {
    }
    login() {
        this.appDataService.isLoggedIn().subscribe(flag => {
            this.isLoggedIn = true;
            this.appDataService.getAuthentication().subscribe(userDetails => {
                this.appDataService.userDetails = userDetails;
                this.appDataService.setUserDetails(userDetails).subscribe(result => {
                    setTimeout(() => {
                        window.location.assign(window.location.host);
                    }, 2000);
                });
            }, error => {
                setTimeout(() => {
                    window.location.assign(window.location.host);
                }, 2500);
            });
        }, error => {
            alert(error);
        });
    }
};
IsdLoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_isd_app_data_service__WEBPACK_IMPORTED_MODULE_3__["IsdAppDataService"] }
];
IsdLoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-isd-login',
        template: __webpack_require__(/*! raw-loader!./isd-login.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/isd-login/isd-login.page.html"),
        styles: [__webpack_require__(/*! ./isd-login.page.scss */ "./src/app/pages/isd-login/isd-login.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_isd_app_data_service__WEBPACK_IMPORTED_MODULE_3__["IsdAppDataService"]])
], IsdLoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-isd-login-isd-login-module-es2015.js.map
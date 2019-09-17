(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-isd-landing-isd-landing-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/isd-landing/isd-landing.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/isd-landing/isd-landing.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding>\n  <ion-row>\n    <ion-col text-center>\n      <img src=\"./assets/logo.png\" />\n    </ion-col>\n  </ion-row>\n  <!-- <ion-row class=\"welcome-content\">\n    <ion-col>\n      <p>Welcome to SMS Mood Marbles</p>\n    </ion-col>\n  </ion-row> -->\n  <ion-row>\n    <ion-col>\n      <ion-button type=\"submit\" expand=\"block\" (click)='adminpage()'>Admin</ion-button>\n    </ion-col>\n    <ion-col>\n      <ion-button expand=\"block\" (click)='teamMemberInfoPage()'>Team Member</ion-button>\n    </ion-col>\n  </ion-row>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/isd-landing/isd-landing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/isd-landing/isd-landing.module.ts ***!
  \*********************************************************/
/*! exports provided: IsdLandingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsdLandingPageModule", function() { return IsdLandingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _isd_landing_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./isd-landing.page */ "./src/app/pages/isd-landing/isd-landing.page.ts");







const routes = [
    {
        path: '',
        component: _isd_landing_page__WEBPACK_IMPORTED_MODULE_6__["IsdLandingPage"]
    }
];
let IsdLandingPageModule = class IsdLandingPageModule {
};
IsdLandingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_isd_landing_page__WEBPACK_IMPORTED_MODULE_6__["IsdLandingPage"]]
    })
], IsdLandingPageModule);



/***/ }),

/***/ "./src/app/pages/isd-landing/isd-landing.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/isd-landing/isd-landing.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-button {\n  text-transform: capitalize;\n}\n\n.bold {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zd2FteS9EZXNrdG9wL0lCTS9tb29kIG1hcmJsZXMvSVNELVRlYW1JbmZvL3NyYy9hcHAvcGFnZXMvaXNkLWxhbmRpbmcvaXNkLWxhbmRpbmcucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9pc2QtbGFuZGluZy9pc2QtbGFuZGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQkFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2lzZC1sYW5kaW5nL2lzZC1sYW5kaW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1idXR0b24ge1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4uYm9sZCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59IiwiaW9uLWJ1dHRvbiB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4uYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/isd-landing/isd-landing.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/isd-landing/isd-landing.page.ts ***!
  \*******************************************************/
/*! exports provided: IsdLandingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsdLandingPage", function() { return IsdLandingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let IsdLandingPage = class IsdLandingPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    teamMemberInfoPage() {
        this.router.navigate(['/team-member-info']);
    }
    adminpage() {
        this.router.navigate(['/adminpage']);
    }
};
IsdLandingPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
IsdLandingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-isd-landing',
        template: __webpack_require__(/*! raw-loader!./isd-landing.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/isd-landing/isd-landing.page.html"),
        styles: [__webpack_require__(/*! ./isd-landing.page.scss */ "./src/app/pages/isd-landing/isd-landing.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], IsdLandingPage);



/***/ })

}]);
//# sourceMappingURL=pages-isd-landing-isd-landing-module-es2015.js.map
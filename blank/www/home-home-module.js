(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title text-center>\n      POIAPP\n    </ion-title>\n  </ion-toolbar>\n  <ion-fab vertical=\"center\" horizontal=\"end\" slot=\"fixed\">\n      <ion-fab-button size=\"small\" (click)=\"openAdmin()\" color=\"danger\">\n        <ion-icon name=\"settings\"></ion-icon>\n      </ion-fab-button>\n  </ion-fab>\n</ion-header>\n\n<ion-card>\n    <ion-card-content>\n        <ion-input [(ngModel)]=\"locString\" placeholder=\"Enter Location\"></ion-input>\n        <ion-input [(ngModel)]=\"typeString\" placeholder=\"Enter Type\"></ion-input>\n\n        <ion-fab vertical=\"center\" horizontal=\"end\" slot=\"fixed\">\n            <ion-fab-button size=\"small\" (click)=\"saveLocation()\">\n              <ion-icon name=\"checkmark\"></ion-icon>\n            </ion-fab-button>\n        </ion-fab>\n    </ion-card-content>\n</ion-card>\n  \n  <ion-content>\n    <ion-card *ngFor=\"let poi of newPoi\">\n      <ion-card-content>\n        <h2><b>{{ poi.name }}</b></h2>\n        <h3>{{ poi.location }}</h3>\n        <h3>{{ poi.type }}</h3>\n        <h3>{{ poi.description }}</h3>\n        <h3>ID: {{ poi._id }}</h3>\n      </ion-card-content>\n    </ion-card>\n  </ion-content>\n\n\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _admin_admin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../admin/admin.page */ "./src/app/admin/admin.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var HomePage = /** @class */ (function () {
    function HomePage(http, modalController) {
        this.http = http;
        this.modalController = modalController;
        this.newPoi = [];
        this.apiURL = 'https://poiapi.herokuapp.com/pois';
        this.loadPOIS();
    }
    HomePage.prototype.loadPOIS = function () {
        var _this = this;
        this.http.get(this.apiURL).subscribe(function (response) {
            _this.newPoi = response;
        });
    };
    HomePage.prototype.saveLocation = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if ((this.locString == undefined || this.locString == "") && (this.typeString == undefined || this.typeString == "")) {
                    this.apiURL = 'https://poiapi.herokuapp.com/pois';
                }
                if ((this.locString != undefined && this.locString != "") && (this.typeString == undefined || this.typeString == "")) {
                    this.apiURL = 'https://poiapi.herokuapp.com/pois/location/' + this.locString;
                }
                if ((this.locString == undefined || this.locString == "") && (this.typeString != undefined && this.typeString != "")) {
                    this.apiURL = this.apiURL = 'https://poiapi.herokuapp.com/pois/type/' + this.typeString;
                }
                if ((this.locString != undefined && this.locString != "") && (this.typeString != undefined && this.typeString != "")) {
                    this.apiURL = 'https://poiapi.herokuapp.com/pois/location/' + this.locString + '/type/' + this.typeString;
                }
                this.loadPOIS();
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.openAdmin = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _admin_admin_page__WEBPACK_IMPORTED_MODULE_3__["AdminPage"],
                            componentProps: {}
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss()
                            .then(function () {
                            _this.loadPOIS();
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map
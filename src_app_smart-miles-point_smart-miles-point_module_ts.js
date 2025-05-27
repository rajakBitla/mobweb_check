(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_smart-miles-point_smart-miles-point_module_ts"],{

/***/ 27807:
/*!***********************************************************************!*\
  !*** ./src/app/smart-miles-point/smart-miles-point-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SmartMilesPointPageRoutingModule: () => (/* binding */ SmartMilesPointPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _smart_miles_point_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./smart-miles-point.page */ 30919);




const routes = [{
  path: '',
  component: _smart_miles_point_page__WEBPACK_IMPORTED_MODULE_0__.SmartMilesPointPage
}];
let SmartMilesPointPageRoutingModule = class SmartMilesPointPageRoutingModule {};
SmartMilesPointPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], SmartMilesPointPageRoutingModule);


/***/ }),

/***/ 19397:
/*!***************************************************************!*\
  !*** ./src/app/smart-miles-point/smart-miles-point.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SmartMilesPointPageModule: () => (/* binding */ SmartMilesPointPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var _smart_miles_point_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./smart-miles-point-routing.module */ 27807);
/* harmony import */ var _smart_miles_point_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./smart-miles-point.page */ 30919);







let SmartMilesPointPageModule = class SmartMilesPointPageModule {};
SmartMilesPointPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _smart_miles_point_routing_module__WEBPACK_IMPORTED_MODULE_0__.SmartMilesPointPageRoutingModule],
  declarations: [_smart_miles_point_page__WEBPACK_IMPORTED_MODULE_1__.SmartMilesPointPage]
})], SmartMilesPointPageModule);


/***/ }),

/***/ 30919:
/*!*************************************************************!*\
  !*** ./src/app/smart-miles-point/smart-miles-point.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SmartMilesPointPage: () => (/* binding */ SmartMilesPointPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _smart_miles_point_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./smart-miles-point.page.html?ngResource */ 747);
/* harmony import */ var _smart_miles_point_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./smart-miles-point.page.scss?ngResource */ 91047);
/* harmony import */ var _smart_miles_point_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_smart_miles_point_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 2288);





let SmartMilesPointPage = class SmartMilesPointPage {
  constructor(navCtrl) {
    this.navCtrl = navCtrl;
  }
  ngOnInit() {
    this.width = 100;
  }
  goToBack() {
    this.navCtrl.navigateForward('more');
  }
  static {
    this.ctorParameters = () => [{
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController
    }];
  }
};
SmartMilesPointPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-smart-miles-point',
  template: _smart_miles_point_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_smart_miles_point_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController])], SmartMilesPointPage);


/***/ }),

/***/ 91047:
/*!**************************************************************************!*\
  !*** ./src/app/smart-miles-point/smart-miles-point.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 92487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 31386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `ion-button {
  z-index: 100;
}

ion-title {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
}

.firstImg-set {
  background-color: rgb(148, 165, 214);
  margin-top: 10px;
  border-radius: 20px;
  margin-left: 10px;
  margin-right: 10px;
}

.image-set {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100px;
  height: 100px;
}

.secDiv {
  border-bottom: 0.5px solid rgb(61, 57, 57);
  margin-left: 5px;
  margin-right: 5px;
}

.thrDiv {
  margin-top: 20px;
  height: 20px;
  margin-right: -50px !important;
  margin-left: 15px;
  padding-right: 10px;
  width: 100%;
  background: #ddd;
  text-align: center;
}

.progress-line {
  height: 20px;
  border-radius: 20px;
  background: #152caf;
}

.image-sett {
  width: 30px;
  height: 30px;
  text-align: center;
}

.container {
  position: relative;
  margin-top: 20px;
}

.smallProgress {
  display: block;
  width: 230px;
  height: 30px;
  background: #152caf;
  position: absolute;
}

.tierShow {
  background: chocolate;
  width: 400px;
  height: 60px;
  z-index: 9;
}
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNtYXJ0LW1pbGVzLXBvaW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFlBQUE7QUFDRDs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBS0E7RUFDSSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBRko7O0FBTUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBSEo7O0FBTUE7RUFDSSwwQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFISjs7QUFNQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBSEo7O0FBT0E7RUFFRyxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUxIOztBQU9BO0VBQ0csV0FBQTtFQUNBLFlBQUE7RUFDQyxrQkFBQTtBQUpKOztBQU1BO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQUhKOztBQUtBO0VBQ0ksY0FBQTtFQUdBLFlBQUE7RUFDQSxZQUFBO0VBRUEsbUJBQUE7RUFJQSxrQkFBQTtBQVJKOztBQVVBO0VBQ0kscUJBQUE7RUFJQSxZQUFBO0VBQ0EsWUFBQTtFQUtBLFVBQUE7QUFkSiIsImZpbGUiOiJzbWFydC1taWxlcy1wb2ludC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYnV0dG9uIHtcblx0ei1pbmRleDogMTAwO1xufVxuXG5pb24tdGl0bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLy8gaW9uLWNvbnRlbnR7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgXG4vLyB9XG4uZmlyc3RJbWctc2V0e1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDgsIDE2NSwgMjE0KTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIFxuICAgXG59ICAgIFxuLmltYWdlLXNldHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICBcbn1cbi5zZWNEaXZ7XG4gICAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgcmdiKDYxLCA1NywgNTcpO1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi50aHJEaXZ7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtNTBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogI2RkZDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgXG59XG5cbi5wcm9ncmVzcy1saW5le1xuICAgIFxuICAgaGVpZ2h0OiAyMHB4O1xuICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgIGJhY2tncm91bmQ6ICMxNTJjYWY7XG59XG4uaW1hZ2Utc2V0dHtcbiAgIHdpZHRoOiAzMHB4O1xuICAgaGVpZ2h0OiAzMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jb250YWluZXJ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uc21hbGxQcm9ncmVzc3tcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICAvLyBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAvLyBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDIzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICAvLyBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGJhY2tncm91bmQ6ICMxNTJjYWY7XG4gICAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC8vIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgLy8gcGFkZGluZy1ib3R0b206IDVweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4udGllclNob3d7XG4gICAgYmFja2dyb3VuZDogY2hvY29sYXRlO1xuICAgIC8vIGRpc3BsYXk6IGJsb2NrO1xuICAgIC8vIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIC8vIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIC8vIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC8vIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgLy8gcGFkZGluZy1ib3R0b206IDVweDtcbiAgICB6LWluZGV4OiA5O1xuIFxufVxuIl19 */`, "",{"version":3,"sources":["webpack://./src/app/smart-miles-point/smart-miles-point.page.scss"],"names":[],"mappings":"AAAA;EACC,YAAA;AACD;;AAEA;EACE,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;AACF;;AAKA;EACI,oCAAA;EACA,gBAAA;EACA,mBAAA;EACA,iBAAA;EACA,kBAAA;AAFJ;;AAMA;EACI,cAAA;EACA,iBAAA;EACA,kBAAA;EACA,YAAA;EACA,aAAA;AAHJ;;AAMA;EACI,0CAAA;EACA,gBAAA;EACA,iBAAA;AAHJ;;AAMA;EACI,gBAAA;EACA,YAAA;EACA,8BAAA;EACA,iBAAA;EACA,mBAAA;EACA,WAAA;EACA,gBAAA;EACA,kBAAA;AAHJ;;AAOA;EAEG,YAAA;EACA,mBAAA;EACA,mBAAA;AALH;;AAOA;EACG,WAAA;EACA,YAAA;EACC,kBAAA;AAJJ;;AAMA;EACI,kBAAA;EACA,gBAAA;AAHJ;;AAKA;EACI,cAAA;EAGA,YAAA;EACA,YAAA;EAEA,mBAAA;EAIA,kBAAA;AARJ;;AAUA;EACI,qBAAA;EAIA,YAAA;EACA,YAAA;EAKA,UAAA;AAdJ;AACA,4rGAA4rG","sourcesContent":["ion-button {\n\tz-index: 100;\n}\n\nion-title {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n}\n// ion-content{\n//     background-color: white;\n    \n// }\n.firstImg-set{\n    background-color: rgb(148, 165, 214);\n    margin-top: 10px;\n    border-radius: 20px;\n    margin-left: 10px;\n    margin-right: 10px;\n    \n   \n}    \n.image-set{\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    width: 100px;\n    height: 100px;\n   \n}\n.secDiv{\n    border-bottom: 0.5px solid rgb(61, 57, 57);\n    margin-left: 5px;\n    margin-right: 5px;\n}\n\n.thrDiv{\n    margin-top: 20px;\n    height: 20px;\n    margin-right: -50px !important;\n    margin-left: 15px;\n    padding-right: 10px;\n    width: 100%;\n    background: #ddd;\n    text-align: center;\n    \n}\n\n.progress-line{\n    \n   height: 20px;\n   border-radius: 20px;\n   background: #152caf;\n}\n.image-sett{\n   width: 30px;\n   height: 30px;\n    text-align: center;\n}\n.container{\n    position: relative;\n    margin-top: 20px;\n}\n.smallProgress{\n    display: block;\n    // margin-left: auto;\n    // margin-right: auto;\n    width: 230px;\n    height: 30px;\n    // border-radius: 20px;\n    background: #152caf;\n    // text-align: center;\n    // padding-top: 5px;\n    // padding-bottom: 5px;\n    position: absolute;\n}\n.tierShow{\n    background: chocolate;\n    // display: block;\n    // margin-left: auto;\n    // margin-right: auto;\n    width: 400px;\n    height: 60px;\n    // border-radius: 20px;\n    // text-align: center;\n    // padding-top: 5px;\n    // padding-bottom: 5px;\n    z-index: 9;\n \n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 747:
/*!**************************************************************************!*\
  !*** ./src/app/smart-miles-point/smart-miles-point.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar  >\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goToBack()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n      <!-- <ion-back-button (click)=\"goToBack()\" >\n      </ion-back-button> -->\n    </ion-buttons>\n      <!-- <ion-title>Smart Miles Point</ion-title> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"firstImg-set\" >\n    <ion-img class=\"image-set\" src=\"../../assets/icon/Amenities.png\"></ion-img>\n    <p class=\"ion-text-center\" style=\"padding-bottom: 10px; color: white;\">Samarpit, You are <br> Silver,Custome</p>\n  </div>\n\n  <div class=\"secDiv\"></div>\n  <div>\n    <div class=\"thrDiv\">\n      <div [ngStyle]=\"{'width.%':width}\" class=\"progress-line\">\n        <span>\n  \n        </span>\n    </div>\n  </div>\n  <div>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"3\">\n          <!-- <ion-icon name=\"disc\"></ion-icon> -->\n          <ion-img class=\"image-sett\" src=\"../../assets/icon/Amenities.png\"></ion-img>\n        </ion-col> \n        <ion-col size=\"3\">\n          <!-- <ion-icon name=\"disc\"></ion-icon> -->\n          <ion-img class=\"image-sett\" src=\"../../assets/icon/Amenities.png\"></ion-img>\n        </ion-col>\n        <ion-col size=\"3\">\n          <!-- <ion-icon name=\"disc\"></ion-icon> -->\n          <ion-img class=\"image-sett\" src=\"../../assets/icon/Amenities.png\"></ion-img>\n        </ion-col>\n        <ion-col size=\"3\">\n          <!-- <ion-icon name=\"disc\"></ion-icon> -->\n          <ion-img class=\"image-sett\" src=\"../../assets/icon/Amenities.png\"></ion-img>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  </div>\n  <div class=\"ion-text-center\">\n    <p>Your Live Point Balance <br> <span style=\"font-size: 1.5rem;\">4500</span></p>\n  </div>\n  <div class=\"container\">\n    <div class=\"smallProgress\">\n      <span style=\"color: white;\">Your Next Destination</span>\n    </div>\n    <div class=\"tierShow\">\n\n    </div>\n  </div>\n \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_smart-miles-point_smart-miles-point_module_ts.js.map
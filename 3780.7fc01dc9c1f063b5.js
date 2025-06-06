"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[3780],{

/***/ 83780:
/*!*********************************************************!*\
  !*** ./node_modules/@capacitor/network/dist/esm/web.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Network: () => (/* binding */ Network),
/* harmony export */   NetworkWeb: () => (/* binding */ NetworkWeb)
/* harmony export */ });
/* harmony import */ var _Users_raja_Documents_officeProjects_Live_issues_Ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/core */ 15083);


function translatedConnection() {
  const connection = window.navigator.connection || window.navigator.mozConnection || window.navigator.webkitConnection;
  let result = 'unknown';
  const type = connection ? connection.type || connection.effectiveType : null;
  if (type && typeof type === 'string') {
    switch (type) {
      // possible type values
      case 'bluetooth':
      case 'cellular':
        result = 'cellular';
        break;
      case 'none':
        result = 'none';
        break;
      case 'ethernet':
      case 'wifi':
      case 'wimax':
        result = 'wifi';
        break;
      case 'other':
      case 'unknown':
        result = 'unknown';
        break;
      // possible effectiveType values
      case 'slow-2g':
      case '2g':
      case '3g':
        result = 'cellular';
        break;
      case '4g':
        result = 'wifi';
        break;
      default:
        break;
    }
  }
  return result;
}
class NetworkWeb extends _capacitor_core__WEBPACK_IMPORTED_MODULE_1__.WebPlugin {
  constructor() {
    super();
    this.handleOnline = () => {
      const connectionType = translatedConnection();
      const status = {
        connected: true,
        connectionType: connectionType
      };
      this.notifyListeners('networkStatusChange', status);
    };
    this.handleOffline = () => {
      const status = {
        connected: false,
        connectionType: 'none'
      };
      this.notifyListeners('networkStatusChange', status);
    };
    if (typeof window !== 'undefined') {
      window.addEventListener('online', this.handleOnline);
      window.addEventListener('offline', this.handleOffline);
    }
  }
  getStatus() {
    var _this = this;
    return (0,_Users_raja_Documents_officeProjects_Live_issues_Ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!window.navigator) {
        throw _this.unavailable('Browser does not support the Network Information API');
      }
      const connected = window.navigator.onLine;
      const connectionType = translatedConnection();
      const status = {
        connected,
        connectionType: connected ? connectionType : 'none'
      };
      return status;
    })();
  }
}
const Network = new NetworkWeb();

//# sourceMappingURL=web.js.map

/***/ })

}]);
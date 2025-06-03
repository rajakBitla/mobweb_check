"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[7825],{

/***/ 67825:
/*!******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/status-tap-42a8af65.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   startStatusTap: () => (/* binding */ startStatusTap)
/* harmony export */ });
/* harmony import */ var _Users_raja_Documents_officeProjects_Live_issues_Ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-527b9e34.js */ 96317);
/* harmony import */ var _index_9a17db3d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-9a17db3d.js */ 94493);
/* harmony import */ var _helpers_d94bc8ad_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers-d94bc8ad.js */ 92486);
/* harmony import */ var _index_cfd9c1f2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index-cfd9c1f2.js */ 8736);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */




const startStatusTap = () => {
  const win = window;
  win.addEventListener('statusTap', () => {
    (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.d)(() => {
      const width = win.innerWidth;
      const height = win.innerHeight;
      const el = document.elementFromPoint(width / 2, height / 2);
      if (!el) {
        return;
      }
      const contentEl = (0,_index_9a17db3d_js__WEBPACK_IMPORTED_MODULE_2__.f)(el);
      if (contentEl) {
        new Promise(resolve => (0,_helpers_d94bc8ad_js__WEBPACK_IMPORTED_MODULE_3__.c)(contentEl, resolve)).then(() => {
          (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.w)(/*#__PURE__*/(0,_Users_raja_Documents_officeProjects_Live_issues_Ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            /**
             * If scrolling and user taps status bar,
             * only calling scrollToTop is not enough
             * as engines like WebKit will jump the
             * scroll position back down and complete
             * any in-progress momentum scrolling.
             */
            contentEl.style.setProperty('--overflow', 'hidden');
            yield (0,_index_9a17db3d_js__WEBPACK_IMPORTED_MODULE_2__.s)(contentEl, 300);
            contentEl.style.removeProperty('--overflow');
          }));
        });
      }
    });
  });
};


/***/ })

}]);
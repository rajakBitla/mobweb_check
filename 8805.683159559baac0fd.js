"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[8805],{

/***/ 28805:
/*!****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ion_spinner: () => (/* binding */ Spinner)
/* harmony export */ });
/* harmony import */ var _index_527b9e34_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-527b9e34.js */ 96317);
/* harmony import */ var _theme_01f3f29c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme-01f3f29c.js */ 80333);
/* harmony import */ var _index_cfd9c1f2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-cfd9c1f2.js */ 8736);
/* harmony import */ var _ionic_global_b26f573e_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ionic-global-b26f573e.js */ 12508);
/* harmony import */ var _spinner_configs_964f7cf3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./spinner-configs-964f7cf3.js */ 37895);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */





const spinnerCss = ":host{display:inline-block;position:relative;width:28px;height:28px;color:var(--color);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host(.ion-color){color:var(--ion-color-base)}svg{-webkit-transform-origin:center;transform-origin:center;position:absolute;top:0;left:0;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0)}:host-context([dir=rtl]) svg{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}[dir=rtl] svg{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}@supports selector(:dir(rtl)){svg:dir(rtl){-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}}:host(.spinner-lines) line,:host(.spinner-lines-small) line{stroke-width:7px}:host(.spinner-lines-sharp) line,:host(.spinner-lines-sharp-small) line{stroke-width:4px}:host(.spinner-lines) line,:host(.spinner-lines-small) line,:host(.spinner-lines-sharp) line,:host(.spinner-lines-sharp-small) line{stroke-linecap:round;stroke:currentColor}:host(.spinner-lines) svg,:host(.spinner-lines-small) svg,:host(.spinner-lines-sharp) svg,:host(.spinner-lines-sharp-small) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite}:host(.spinner-bubbles) svg{-webkit-animation:spinner-scale-out 1s linear infinite;animation:spinner-scale-out 1s linear infinite;fill:currentColor}:host(.spinner-circles) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite;fill:currentColor}:host(.spinner-crescent) circle{fill:transparent;stroke-width:4px;stroke-dasharray:128px;stroke-dashoffset:82px;stroke:currentColor}:host(.spinner-crescent) svg{-webkit-animation:spinner-rotate 1s linear infinite;animation:spinner-rotate 1s linear infinite}:host(.spinner-dots) circle{stroke-width:0;fill:currentColor}:host(.spinner-dots) svg{-webkit-animation:spinner-dots 1s linear infinite;animation:spinner-dots 1s linear infinite}:host(.spinner-circular) svg{-webkit-animation:spinner-circular linear infinite;animation:spinner-circular linear infinite}:host(.spinner-circular) circle{-webkit-animation:spinner-circular-inner ease-in-out infinite;animation:spinner-circular-inner ease-in-out infinite;stroke:currentColor;stroke-dasharray:80px, 200px;stroke-dashoffset:0px;stroke-width:5.6;fill:none}:host(.spinner-paused),:host(.spinner-paused) svg,:host(.spinner-paused) circle{-webkit-animation-play-state:paused;animation-play-state:paused}@-webkit-keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}@keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}@-webkit-keyframes spinner-scale-out{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1)}100%{-webkit-transform:scale(0, 0);transform:scale(0, 0)}}@keyframes spinner-scale-out{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1)}100%{-webkit-transform:scale(0, 0);transform:scale(0, 0)}}@-webkit-keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes spinner-dots{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}50%{-webkit-transform:scale(0.4, 0.4);transform:scale(0.4, 0.4);opacity:0.3}100%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}}@keyframes spinner-dots{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}50%{-webkit-transform:scale(0.4, 0.4);transform:scale(0.4, 0.4);opacity:0.3}100%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}}@-webkit-keyframes spinner-circular{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-circular{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes spinner-circular-inner{0%{stroke-dasharray:1px, 200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px, 200px;stroke-dashoffset:-15px}100%{stroke-dasharray:100px, 200px;stroke-dashoffset:-125px}}@keyframes spinner-circular-inner{0%{stroke-dasharray:1px, 200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px, 200px;stroke-dashoffset:-15px}100%{stroke-dasharray:100px, 200px;stroke-dashoffset:-125px}}";
const IonSpinnerStyle0 = spinnerCss;
const Spinner = class {
  constructor(hostRef) {
    (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.color = undefined;
    this.duration = undefined;
    this.name = undefined;
    this.paused = false;
  }
  getName() {
    const spinnerName = this.name || _index_cfd9c1f2_js__WEBPACK_IMPORTED_MODULE_2__.c.get('spinner');
    const mode = (0,_ionic_global_b26f573e_js__WEBPACK_IMPORTED_MODULE_3__.b)(this);
    if (spinnerName) {
      return spinnerName;
    }
    return mode === 'ios' ? 'lines' : 'circular';
  }
  render() {
    var _a;
    const self = this;
    const mode = (0,_ionic_global_b26f573e_js__WEBPACK_IMPORTED_MODULE_3__.b)(self);
    const spinnerName = self.getName();
    const spinner = (_a = _spinner_configs_964f7cf3_js__WEBPACK_IMPORTED_MODULE_4__.S[spinnerName]) !== null && _a !== void 0 ? _a : _spinner_configs_964f7cf3_js__WEBPACK_IMPORTED_MODULE_4__.S['lines'];
    const duration = typeof self.duration === 'number' && self.duration > 10 ? self.duration : spinner.dur;
    const svgs = [];
    if (spinner.circles !== undefined) {
      for (let i = 0; i < spinner.circles; i++) {
        svgs.push(buildCircle(spinner, duration, i, spinner.circles));
      }
    } else if (spinner.lines !== undefined) {
      for (let i = 0; i < spinner.lines; i++) {
        svgs.push(buildLine(spinner, duration, i, spinner.lines));
      }
    }
    return (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_0__.e, {
      key: 'e0dfa8a3ee2a0469eb31323f506750bd77d65797',
      class: (0,_theme_01f3f29c_js__WEBPACK_IMPORTED_MODULE_1__.c)(self.color, {
        [mode]: true,
        [`spinner-${spinnerName}`]: true,
        'spinner-paused': self.paused || _index_cfd9c1f2_js__WEBPACK_IMPORTED_MODULE_2__.c.getBoolean('_testing')
      }),
      role: "progressbar",
      style: spinner.elmDuration ? {
        animationDuration: duration + 'ms'
      } : {}
    }, svgs);
  }
};
const buildCircle = (spinner, duration, index, total) => {
  const data = spinner.fn(duration, index, total);
  data.style['animation-duration'] = duration + 'ms';
  return (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", {
    viewBox: data.viewBox || '0 0 64 64',
    style: data.style
  }, (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_0__.h)("circle", {
    transform: data.transform || 'translate(32,32)',
    cx: data.cx,
    cy: data.cy,
    r: data.r,
    style: spinner.elmDuration ? {
      animationDuration: duration + 'ms'
    } : {}
  }));
};
const buildLine = (spinner, duration, index, total) => {
  const data = spinner.fn(duration, index, total);
  data.style['animation-duration'] = duration + 'ms';
  return (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", {
    viewBox: data.viewBox || '0 0 64 64',
    style: data.style
  }, (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_0__.h)("line", {
    transform: "translate(32,32)",
    y1: data.y1,
    y2: data.y2
  }));
};
Spinner.style = IonSpinnerStyle0;


/***/ })

}]);
"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[6521],{

/***/ 6521:
/*!******************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-input-password-toggle.entry.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ion_input_password_toggle: () => (/* binding */ InputPasswordToggle)
/* harmony export */ });
/* harmony import */ var _index_527b9e34_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-527b9e34.js */ 96317);
/* harmony import */ var _index_cfd9c1f2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-cfd9c1f2.js */ 8736);
/* harmony import */ var _theme_01f3f29c_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme-01f3f29c.js */ 80333);
/* harmony import */ var _index_e2cf2ceb_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index-e2cf2ceb.js */ 23992);
/* harmony import */ var _ionic_global_b26f573e_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ionic-global-b26f573e.js */ 12508);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */





const iosInputPasswordToggleCss = "";
const IonInputPasswordToggleIosStyle0 = iosInputPasswordToggleCss;
const mdInputPasswordToggleCss = "";
const IonInputPasswordToggleMdStyle0 = mdInputPasswordToggleCss;
const InputPasswordToggle = class {
  constructor(hostRef) {
    (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.togglePasswordVisibility = () => {
      const {
        inputElRef
      } = this;
      if (!inputElRef) {
        return;
      }
      inputElRef.type = inputElRef.type === 'text' ? 'password' : 'text';
    };
    this.color = undefined;
    this.showIcon = undefined;
    this.hideIcon = undefined;
    this.type = 'password';
  }
  /**
   * Whenever the input type changes we need to re-run validation to ensure the password
   * toggle is being used with the correct input type. If the application changes the type
   * outside of this component we also need to re-render so the correct icon is shown.
   */
  onTypeChange(newValue) {
    if (newValue !== 'text' && newValue !== 'password') {
      (0,_index_cfd9c1f2_js__WEBPACK_IMPORTED_MODULE_1__.p)(`[ion-input-password-toggle] - Only inputs of type "text" or "password" are supported. Input of type "${newValue}" is not compatible.`, this.el);
      return;
    }
  }
  connectedCallback() {
    const {
      el
    } = this;
    const inputElRef = this.inputElRef = el.closest('ion-input');
    if (!inputElRef) {
      (0,_index_cfd9c1f2_js__WEBPACK_IMPORTED_MODULE_1__.p)('[ion-input-password-toggle] - No ancestor ion-input found. This component must be slotted inside of an ion-input.', el);
      return;
    }
    /**
     * Important: Set the type in connectedCallback because the default value
     * of this.type may not always be accurate. Usually inputs have the "password" type
     * but it is possible to have the input to initially have the "text" type. In that scenario
     * the wrong icon will show briefly before switching to the correct icon. Setting the
     * type here allows us to avoid that flicker.
     */
    this.type = inputElRef.type;
  }
  disconnectedCallback() {
    this.inputElRef = null;
  }
  render() {
    var _a, _b;
    const {
      color,
      type
    } = this;
    const mode = (0,_ionic_global_b26f573e_js__WEBPACK_IMPORTED_MODULE_4__.b)(this);
    const showPasswordIcon = (_a = this.showIcon) !== null && _a !== void 0 ? _a : _index_e2cf2ceb_js__WEBPACK_IMPORTED_MODULE_3__.x;
    const hidePasswordIcon = (_b = this.hideIcon) !== null && _b !== void 0 ? _b : _index_e2cf2ceb_js__WEBPACK_IMPORTED_MODULE_3__.y;
    const isPasswordVisible = type === 'text';
    return (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_0__.e, {
      key: '1a28e078c83e74c72d8bb8189ece93ec2e3fa3d0',
      class: (0,_theme_01f3f29c_js__WEBPACK_IMPORTED_MODULE_2__.c)(color, {
        [mode]: true
      })
    }, (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_0__.h)("ion-button", {
      key: '61591d11d97f3065240e51d8887f831339fd36cf',
      mode: mode,
      color: color,
      fill: "clear",
      shape: "round",
      "aria-checked": isPasswordVisible ? 'true' : 'false',
      "aria-label": isPasswordVisible ? 'Hide password' : 'Show password',
      role: "switch",
      type: "button",
      onPointerDown: ev => {
        /**
         * This prevents mobile browsers from
         * blurring the input when the password toggle
         * button is activated.
         */
        ev.preventDefault();
      },
      onClick: this.togglePasswordVisibility
    }, (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_0__.h)("ion-icon", {
      key: '9d98e6675d5e2adea5c0f56ab67e98b6f57521dd',
      slot: "icon-only",
      "aria-hidden": "true",
      icon: isPasswordVisible ? hidePasswordIcon : showPasswordIcon
    })));
  }
  get el() {
    return (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_0__.f)(this);
  }
  static get watchers() {
    return {
      "type": ["onTypeChange"]
    };
  }
};
InputPasswordToggle.style = {
  ios: IonInputPasswordToggleIosStyle0,
  md: IonInputPasswordToggleMdStyle0
};


/***/ })

}]);
"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[3162],{

/***/ 93162:
/*!********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ion_back_button: () => (/* binding */ BackButton)
/* harmony export */ });
/* harmony import */ var _Users_raja_Documents_officeProjects_Live_issues_Ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-527b9e34.js */ 96317);
/* harmony import */ var _helpers_d94bc8ad_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-d94bc8ad.js */ 92486);
/* harmony import */ var _theme_01f3f29c_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme-01f3f29c.js */ 80333);
/* harmony import */ var _index_e2cf2ceb_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index-e2cf2ceb.js */ 23992);
/* harmony import */ var _index_cfd9c1f2_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index-cfd9c1f2.js */ 8736);
/* harmony import */ var _ionic_global_b26f573e_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ionic-global-b26f573e.js */ 12508);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */






const backButtonIosCss = ":host{--background:transparent;--color-focused:currentColor;--color-hover:currentColor;--icon-margin-top:0;--icon-margin-bottom:0;--icon-padding-top:0;--icon-padding-end:0;--icon-padding-bottom:0;--icon-padding-start:0;--margin-top:0;--margin-end:0;--margin-bottom:0;--margin-start:0;--min-width:auto;--min-height:auto;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--opacity:1;--ripple-color:currentColor;--transition:background-color, opacity 100ms linear;display:none;min-width:var(--min-width);min-height:var(--min-height);color:var(--color);font-family:var(--ion-font-family, inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-kerning:none;font-kerning:none}ion-ripple-effect{color:var(--ripple-color)}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.show-back-button){display:block}:host(.back-button-disabled){cursor:default;opacity:0.5;pointer-events:none}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;-webkit-margin-start:var(--margin-start);margin-inline-start:var(--margin-start);-webkit-margin-end:var(--margin-end);margin-inline-end:var(--margin-end);margin-top:var(--margin-top);margin-bottom:var(--margin-bottom);-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;min-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;opacity:var(--opacity);overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{-webkit-padding-start:var(--icon-padding-start);padding-inline-start:var(--icon-padding-start);-webkit-padding-end:var(--icon-padding-end);padding-inline-end:var(--icon-padding-end);padding-top:var(--icon-padding-top);padding-bottom:var(--icon-padding-bottom);-webkit-margin-start:var(--icon-margin-start);margin-inline-start:var(--icon-margin-start);-webkit-margin-end:var(--icon-margin-end);margin-inline-end:var(--icon-margin-end);margin-top:var(--icon-margin-top);margin-bottom:var(--icon-margin-bottom);display:inherit;font-size:var(--icon-font-size);font-weight:var(--icon-font-weight);pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:\"\";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.ion-color.ion-focused) .button-native{color:var(--ion-color-base)}@media (any-hover: hover){:host(.ion-color:hover) .button-native{color:var(--ion-color-base)}}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-hover:transparent;--background-hover-opacity:1;--background-focused:currentColor;--background-focused-opacity:.1;--border-radius:4px;--color:var(--ion-color-primary, #0054e9);--icon-margin-end:1px;--icon-margin-start:-4px;--icon-font-size:1.6em;--min-height:32px;font-size:clamp(17px, 1.0625rem, 21.998px)}.button-native{-webkit-transform:translateZ(0);transform:translateZ(0);overflow:visible;z-index:99}:host(.ion-activated) .button-native{opacity:0.4}@media (any-hover: hover){:host(:hover){opacity:0.6}}";
const IonBackButtonIosStyle0 = backButtonIosCss;
const backButtonMdCss = ":host{--background:transparent;--color-focused:currentColor;--color-hover:currentColor;--icon-margin-top:0;--icon-margin-bottom:0;--icon-padding-top:0;--icon-padding-end:0;--icon-padding-bottom:0;--icon-padding-start:0;--margin-top:0;--margin-end:0;--margin-bottom:0;--margin-start:0;--min-width:auto;--min-height:auto;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--opacity:1;--ripple-color:currentColor;--transition:background-color, opacity 100ms linear;display:none;min-width:var(--min-width);min-height:var(--min-height);color:var(--color);font-family:var(--ion-font-family, inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-kerning:none;font-kerning:none}ion-ripple-effect{color:var(--ripple-color)}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.show-back-button){display:block}:host(.back-button-disabled){cursor:default;opacity:0.5;pointer-events:none}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;-webkit-margin-start:var(--margin-start);margin-inline-start:var(--margin-start);-webkit-margin-end:var(--margin-end);margin-inline-end:var(--margin-end);margin-top:var(--margin-top);margin-bottom:var(--margin-bottom);-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;min-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;opacity:var(--opacity);overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{-webkit-padding-start:var(--icon-padding-start);padding-inline-start:var(--icon-padding-start);-webkit-padding-end:var(--icon-padding-end);padding-inline-end:var(--icon-padding-end);padding-top:var(--icon-padding-top);padding-bottom:var(--icon-padding-bottom);-webkit-margin-start:var(--icon-margin-start);margin-inline-start:var(--icon-margin-start);-webkit-margin-end:var(--icon-margin-end);margin-inline-end:var(--icon-margin-end);margin-top:var(--icon-margin-top);margin-bottom:var(--icon-margin-bottom);display:inherit;font-size:var(--icon-font-size);font-weight:var(--icon-font-weight);pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:\"\";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.ion-color.ion-focused) .button-native{color:var(--ion-color-base)}@media (any-hover: hover){:host(.ion-color:hover) .button-native{color:var(--ion-color-base)}}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--border-radius:4px;--background-focused:currentColor;--background-focused-opacity:.12;--background-hover:currentColor;--background-hover-opacity:0.04;--color:currentColor;--icon-margin-end:0;--icon-margin-start:0;--icon-font-size:1.5rem;--icon-font-weight:normal;--min-height:32px;--min-width:44px;--padding-start:12px;--padding-end:12px;font-size:0.875rem;font-weight:500;text-transform:uppercase}:host(.back-button-has-icon-only){--border-radius:50%;min-width:48px;min-height:48px;aspect-ratio:1/1}.button-native{-webkit-box-shadow:none;box-shadow:none}.button-text{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:0;padding-bottom:0}ion-icon{line-height:0.67;text-align:start}@media (any-hover: hover){:host(.ion-color:hover) .button-native::after{background:var(--ion-color-base)}}:host(.ion-color.ion-focused) .button-native::after{background:var(--ion-color-base)}";
const IonBackButtonMdStyle0 = backButtonMdCss;
const BackButton = class {
  constructor(hostRef) {
    var _this = this;
    (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.inheritedAttributes = {};
    this.onClick = /*#__PURE__*/function () {
      var _ref = (0,_Users_raja_Documents_officeProjects_Live_issues_Ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (ev) {
        const nav = _this.el.closest('ion-nav');
        ev.preventDefault();
        if (nav && (yield nav.canGoBack())) {
          return nav.pop({
            animationBuilder: _this.routerAnimation,
            skipIfBusy: true
          });
        }
        return (0,_theme_01f3f29c_js__WEBPACK_IMPORTED_MODULE_3__.o)(_this.defaultHref, ev, 'back', _this.routerAnimation);
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();
    this.color = undefined;
    this.defaultHref = undefined;
    this.disabled = false;
    this.icon = undefined;
    this.text = undefined;
    this.type = 'button';
    this.routerAnimation = undefined;
  }
  componentWillLoad() {
    this.inheritedAttributes = (0,_helpers_d94bc8ad_js__WEBPACK_IMPORTED_MODULE_2__.i)(this.el);
    if (this.defaultHref === undefined) {
      this.defaultHref = _index_cfd9c1f2_js__WEBPACK_IMPORTED_MODULE_5__.c.get('backButtonDefaultHref');
    }
  }
  get backButtonIcon() {
    const icon = this.icon;
    if (icon != null) {
      // icon is set on the component or by the config
      return icon;
    }
    if ((0,_ionic_global_b26f573e_js__WEBPACK_IMPORTED_MODULE_6__.b)(this) === 'ios') {
      // default ios back button icon
      return _index_cfd9c1f2_js__WEBPACK_IMPORTED_MODULE_5__.c.get('backButtonIcon', _index_e2cf2ceb_js__WEBPACK_IMPORTED_MODULE_4__.c);
    }
    // default md back button icon
    return _index_cfd9c1f2_js__WEBPACK_IMPORTED_MODULE_5__.c.get('backButtonIcon', _index_e2cf2ceb_js__WEBPACK_IMPORTED_MODULE_4__.a);
  }
  get backButtonText() {
    const defaultBackButtonText = (0,_ionic_global_b26f573e_js__WEBPACK_IMPORTED_MODULE_6__.b)(this) === 'ios' ? 'Back' : null;
    return this.text != null ? this.text : _index_cfd9c1f2_js__WEBPACK_IMPORTED_MODULE_5__.c.get('backButtonText', defaultBackButtonText);
  }
  get hasIconOnly() {
    return this.backButtonIcon && !this.backButtonText;
  }
  get rippleType() {
    // If the button only has an icon we use the unbounded
    // "circular" ripple effect
    if (this.hasIconOnly) {
      return 'unbounded';
    }
    return 'bounded';
  }
  render() {
    const {
      color,
      defaultHref,
      disabled,
      type,
      hasIconOnly,
      backButtonIcon,
      backButtonText,
      icon,
      inheritedAttributes
    } = this;
    const showBackButton = defaultHref !== undefined;
    const mode = (0,_ionic_global_b26f573e_js__WEBPACK_IMPORTED_MODULE_6__.b)(this);
    const ariaLabel = inheritedAttributes['aria-label'] || backButtonText || 'back';
    return (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.e, {
      key: '5466624a10f1ab56f5469e6dc07080303880f2fe',
      onClick: this.onClick,
      class: (0,_theme_01f3f29c_js__WEBPACK_IMPORTED_MODULE_3__.c)(color, {
        [mode]: true,
        button: true,
        // ion-buttons target .button
        'back-button-disabled': disabled,
        'back-button-has-icon-only': hasIconOnly,
        'in-toolbar': (0,_theme_01f3f29c_js__WEBPACK_IMPORTED_MODULE_3__.h)('ion-toolbar', this.el),
        'in-toolbar-color': (0,_theme_01f3f29c_js__WEBPACK_IMPORTED_MODULE_3__.h)('ion-toolbar[color]', this.el),
        'ion-activatable': true,
        'ion-focusable': true,
        'show-back-button': showBackButton
      })
    }, (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.h)("button", {
      key: '63bc75ef0ad7cc9fb79e58217a3314b20acd73e3',
      type: type,
      disabled: disabled,
      class: "button-native",
      part: "native",
      "aria-label": ariaLabel
    }, (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.h)("span", {
      key: '5d3eacbd11af2245c6e1151cab446a0d96559ad8',
      class: "button-inner"
    }, backButtonIcon && (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-icon", {
      key: '6439af0ae463764174e7d3207f02267811df666d',
      part: "icon",
      icon: backButtonIcon,
      "aria-hidden": "true",
      lazy: false,
      "flip-rtl": icon === undefined
    }), backButtonText && (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.h)("span", {
      key: '8ee89fb18dfdb5b75948a8b197ff4cdbc008742f',
      part: "text",
      "aria-hidden": "true",
      class: "button-text"
    }, backButtonText)), mode === 'md' && (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-ripple-effect", {
      key: '63803a884998bc73bea5afe0b2a0a14e3fa4d6bf',
      type: this.rippleType
    })));
  }
  get el() {
    return (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.f)(this);
  }
};
BackButton.style = {
  ios: IonBackButtonIosStyle0,
  md: IonBackButtonMdStyle0
};


/***/ })

}]);
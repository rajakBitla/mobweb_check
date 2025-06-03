"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[7372],{

/***/ 97372:
/*!****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-loading.entry.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ion_loading: () => (/* binding */ Loading)
/* harmony export */ });
/* harmony import */ var _Users_raja_Documents_officeProjects_Live_issues_Ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-527b9e34.js */ 96317);
/* harmony import */ var _config_9898ed97_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config-9898ed97.js */ 21517);
/* harmony import */ var _helpers_d94bc8ad_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers-d94bc8ad.js */ 92486);
/* harmony import */ var _lock_controller_316928be_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lock-controller-316928be.js */ 67838);
/* harmony import */ var _overlays_d99dcb0a_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./overlays-d99dcb0a.js */ 31933);
/* harmony import */ var _theme_01f3f29c_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./theme-01f3f29c.js */ 80333);
/* harmony import */ var _index_cfd9c1f2_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index-cfd9c1f2.js */ 8736);
/* harmony import */ var _ionic_global_b26f573e_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ionic-global-b26f573e.js */ 12508);
/* harmony import */ var _animation_8b25e105_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./animation-8b25e105.js */ 7458);
/* harmony import */ var _index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index-a5d50daf.js */ 28476);
/* harmony import */ var _hardware_back_button_a7eb8233_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./hardware-back-button-a7eb8233.js */ 26292);
/* harmony import */ var _framework_delegate_56b467ad_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./framework-delegate-56b467ad.js */ 69245);
/* harmony import */ var _gesture_controller_314a54f6_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./gesture-controller-314a54f6.js */ 11970);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */














/**
 * iOS Loading Enter Animation
 */
const iosEnterAnimation = baseEl => {
  const baseAnimation = (0,_animation_8b25e105_js__WEBPACK_IMPORTED_MODULE_9__.c)();
  const backdropAnimation = (0,_animation_8b25e105_js__WEBPACK_IMPORTED_MODULE_9__.c)();
  const wrapperAnimation = (0,_animation_8b25e105_js__WEBPACK_IMPORTED_MODULE_9__.c)();
  backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 0.01, 'var(--backdrop-opacity)').beforeStyles({
    'pointer-events': 'none'
  }).afterClearStyles(['pointer-events']);
  wrapperAnimation.addElement(baseEl.querySelector('.loading-wrapper')).keyframes([{
    offset: 0,
    opacity: 0.01,
    transform: 'scale(1.1)'
  }, {
    offset: 1,
    opacity: 1,
    transform: 'scale(1)'
  }]);
  return baseAnimation.addElement(baseEl).easing('ease-in-out').duration(200).addAnimation([backdropAnimation, wrapperAnimation]);
};

/**
 * iOS Loading Leave Animation
 */
const iosLeaveAnimation = baseEl => {
  const baseAnimation = (0,_animation_8b25e105_js__WEBPACK_IMPORTED_MODULE_9__.c)();
  const backdropAnimation = (0,_animation_8b25e105_js__WEBPACK_IMPORTED_MODULE_9__.c)();
  const wrapperAnimation = (0,_animation_8b25e105_js__WEBPACK_IMPORTED_MODULE_9__.c)();
  backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 'var(--backdrop-opacity)', 0);
  wrapperAnimation.addElement(baseEl.querySelector('.loading-wrapper')).keyframes([{
    offset: 0,
    opacity: 0.99,
    transform: 'scale(1)'
  }, {
    offset: 1,
    opacity: 0,
    transform: 'scale(0.9)'
  }]);
  return baseAnimation.addElement(baseEl).easing('ease-in-out').duration(200).addAnimation([backdropAnimation, wrapperAnimation]);
};

/**
 * Md Loading Enter Animation
 */
const mdEnterAnimation = baseEl => {
  const baseAnimation = (0,_animation_8b25e105_js__WEBPACK_IMPORTED_MODULE_9__.c)();
  const backdropAnimation = (0,_animation_8b25e105_js__WEBPACK_IMPORTED_MODULE_9__.c)();
  const wrapperAnimation = (0,_animation_8b25e105_js__WEBPACK_IMPORTED_MODULE_9__.c)();
  backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 0.01, 'var(--backdrop-opacity)').beforeStyles({
    'pointer-events': 'none'
  }).afterClearStyles(['pointer-events']);
  wrapperAnimation.addElement(baseEl.querySelector('.loading-wrapper')).keyframes([{
    offset: 0,
    opacity: 0.01,
    transform: 'scale(1.1)'
  }, {
    offset: 1,
    opacity: 1,
    transform: 'scale(1)'
  }]);
  return baseAnimation.addElement(baseEl).easing('ease-in-out').duration(200).addAnimation([backdropAnimation, wrapperAnimation]);
};

/**
 * Md Loading Leave Animation
 */
const mdLeaveAnimation = baseEl => {
  const baseAnimation = (0,_animation_8b25e105_js__WEBPACK_IMPORTED_MODULE_9__.c)();
  const backdropAnimation = (0,_animation_8b25e105_js__WEBPACK_IMPORTED_MODULE_9__.c)();
  const wrapperAnimation = (0,_animation_8b25e105_js__WEBPACK_IMPORTED_MODULE_9__.c)();
  backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 'var(--backdrop-opacity)', 0);
  wrapperAnimation.addElement(baseEl.querySelector('.loading-wrapper')).keyframes([{
    offset: 0,
    opacity: 0.99,
    transform: 'scale(1)'
  }, {
    offset: 1,
    opacity: 0,
    transform: 'scale(0.9)'
  }]);
  return baseAnimation.addElement(baseEl).easing('ease-in-out').duration(200).addAnimation([backdropAnimation, wrapperAnimation]);
};
const loadingIosCss = ".sc-ion-loading-ios-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-ios-h{display:none}.loading-wrapper.sc-ion-loading-ios{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}ion-spinner.sc-ion-loading-ios{color:var(--spinner-color)}.sc-ion-loading-ios-h{--background:var(--ion-overlay-background-color, var(--ion-color-step-100, var(--ion-background-color-step-100, #f9f9f9)));--max-width:270px;--max-height:90%;--spinner-color:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666));--backdrop-opacity:var(--ion-backdrop-opacity, 0.3);color:var(--ion-text-color, #000);font-size:0.875rem}.loading-wrapper.sc-ion-loading-ios{border-radius:8px;-webkit-padding-start:34px;padding-inline-start:34px;-webkit-padding-end:34px;padding-inline-end:34px;padding-top:24px;padding-bottom:24px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.loading-translucent.sc-ion-loading-ios-h .loading-wrapper.sc-ion-loading-ios{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.loading-content.sc-ion-loading-ios{font-weight:bold}.loading-spinner.sc-ion-loading-ios+.loading-content.sc-ion-loading-ios{-webkit-margin-start:16px;margin-inline-start:16px}";
const IonLoadingIosStyle0 = loadingIosCss;
const loadingMdCss = ".sc-ion-loading-md-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-md-h{display:none}.loading-wrapper.sc-ion-loading-md{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}ion-spinner.sc-ion-loading-md{color:var(--spinner-color)}.sc-ion-loading-md-h{--background:var(--ion-color-step-50, var(--ion-background-color-step-50, #f2f2f2));--max-width:280px;--max-height:90%;--spinner-color:var(--ion-color-primary, #0054e9);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32);color:var(--ion-color-step-850, var(--ion-text-color-step-150, #262626));font-size:0.875rem}.loading-wrapper.sc-ion-loading-md{border-radius:2px;-webkit-padding-start:24px;padding-inline-start:24px;-webkit-padding-end:24px;padding-inline-end:24px;padding-top:24px;padding-bottom:24px;-webkit-box-shadow:0 16px 20px rgba(0, 0, 0, 0.4);box-shadow:0 16px 20px rgba(0, 0, 0, 0.4)}.loading-spinner.sc-ion-loading-md+.loading-content.sc-ion-loading-md{-webkit-margin-start:16px;margin-inline-start:16px}";
const IonLoadingMdStyle0 = loadingMdCss;
const Loading = class {
  constructor(hostRef) {
    (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.didPresent = (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.c)(this, "ionLoadingDidPresent", 7);
    this.willPresent = (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.c)(this, "ionLoadingWillPresent", 7);
    this.willDismiss = (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.c)(this, "ionLoadingWillDismiss", 7);
    this.didDismiss = (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.c)(this, "ionLoadingDidDismiss", 7);
    this.didPresentShorthand = (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.c)(this, "didPresent", 7);
    this.willPresentShorthand = (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.c)(this, "willPresent", 7);
    this.willDismissShorthand = (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.c)(this, "willDismiss", 7);
    this.didDismissShorthand = (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.c)(this, "didDismiss", 7);
    this.delegateController = (0,_overlays_d99dcb0a_js__WEBPACK_IMPORTED_MODULE_5__.d)(this);
    this.lockController = (0,_lock_controller_316928be_js__WEBPACK_IMPORTED_MODULE_4__.c)();
    this.triggerController = (0,_overlays_d99dcb0a_js__WEBPACK_IMPORTED_MODULE_5__.e)();
    this.customHTMLEnabled = _index_cfd9c1f2_js__WEBPACK_IMPORTED_MODULE_7__.c.get('innerHTMLTemplatesEnabled', _config_9898ed97_js__WEBPACK_IMPORTED_MODULE_2__.E);
    this.presented = false;
    this.onBackdropTap = () => {
      this.dismiss(undefined, _overlays_d99dcb0a_js__WEBPACK_IMPORTED_MODULE_5__.B);
    };
    this.overlayIndex = undefined;
    this.delegate = undefined;
    this.hasController = false;
    this.keyboardClose = true;
    this.enterAnimation = undefined;
    this.leaveAnimation = undefined;
    this.message = undefined;
    this.cssClass = undefined;
    this.duration = 0;
    this.backdropDismiss = false;
    this.showBackdrop = true;
    this.spinner = undefined;
    this.translucent = false;
    this.animated = true;
    this.htmlAttributes = undefined;
    this.isOpen = false;
    this.trigger = undefined;
  }
  onIsOpenChange(newValue, oldValue) {
    if (newValue === true && oldValue === false) {
      this.present();
    } else if (newValue === false && oldValue === true) {
      this.dismiss();
    }
  }
  triggerChanged() {
    const {
      trigger,
      el,
      triggerController
    } = this;
    if (trigger) {
      triggerController.addClickListener(el, trigger);
    }
  }
  connectedCallback() {
    (0,_overlays_d99dcb0a_js__WEBPACK_IMPORTED_MODULE_5__.j)(this.el);
    this.triggerChanged();
  }
  componentWillLoad() {
    var _a;
    if (this.spinner === undefined) {
      const mode = (0,_ionic_global_b26f573e_js__WEBPACK_IMPORTED_MODULE_8__.b)(this);
      this.spinner = _index_cfd9c1f2_js__WEBPACK_IMPORTED_MODULE_7__.c.get('loadingSpinner', _index_cfd9c1f2_js__WEBPACK_IMPORTED_MODULE_7__.c.get('spinner', mode === 'ios' ? 'lines' : 'crescent'));
    }
    if (!((_a = this.htmlAttributes) === null || _a === void 0 ? void 0 : _a.id)) {
      (0,_overlays_d99dcb0a_js__WEBPACK_IMPORTED_MODULE_5__.k)(this.el);
    }
  }
  componentDidLoad() {
    /**
     * If loading indicator was rendered with isOpen="true"
     * then we should open loading indicator immediately.
     */
    if (this.isOpen === true) {
      (0,_helpers_d94bc8ad_js__WEBPACK_IMPORTED_MODULE_3__.r)(() => this.present());
    }
    /**
     * When binding values in frameworks such as Angular
     * it is possible for the value to be set after the Web Component
     * initializes but before the value watcher is set up in Stencil.
     * As a result, the watcher callback may not be fired.
     * We work around this by manually calling the watcher
     * callback when the component has loaded and the watcher
     * is configured.
     */
    this.triggerChanged();
  }
  disconnectedCallback() {
    this.triggerController.removeClickListener();
  }
  /**
   * Present the loading overlay after it has been created.
   */
  present() {
    var _this = this;
    return (0,_Users_raja_Documents_officeProjects_Live_issues_Ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const unlock = yield _this.lockController.lock();
      yield _this.delegateController.attachViewToDom();
      yield (0,_overlays_d99dcb0a_js__WEBPACK_IMPORTED_MODULE_5__.f)(_this, 'loadingEnter', iosEnterAnimation, mdEnterAnimation);
      if (_this.duration > 0) {
        _this.durationTimeout = setTimeout(() => _this.dismiss(), _this.duration + 10);
      }
      unlock();
    })();
  }
  /**
   * Dismiss the loading overlay after it has been presented.
   *
   * @param data Any data to emit in the dismiss events.
   * @param role The role of the element that is dismissing the loading.
   * This can be useful in a button handler for determining which button was
   * clicked to dismiss the loading.
   * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
   *
   * This is a no-op if the overlay has not been presented yet. If you want
   * to remove an overlay from the DOM that was never presented, use the
   * [remove](https://developer.mozilla.org/en-US/docs/Web/API/Element/remove) method.
   */
  dismiss(data, role) {
    var _this2 = this;
    return (0,_Users_raja_Documents_officeProjects_Live_issues_Ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const unlock = yield _this2.lockController.lock();
      if (_this2.durationTimeout) {
        clearTimeout(_this2.durationTimeout);
      }
      const dismissed = yield (0,_overlays_d99dcb0a_js__WEBPACK_IMPORTED_MODULE_5__.g)(_this2, data, role, 'loadingLeave', iosLeaveAnimation, mdLeaveAnimation);
      if (dismissed) {
        _this2.delegateController.removeViewFromDom();
      }
      unlock();
      return dismissed;
    })();
  }
  /**
   * Returns a promise that resolves when the loading did dismiss.
   */
  onDidDismiss() {
    return (0,_overlays_d99dcb0a_js__WEBPACK_IMPORTED_MODULE_5__.h)(this.el, 'ionLoadingDidDismiss');
  }
  /**
   * Returns a promise that resolves when the loading will dismiss.
   */
  onWillDismiss() {
    return (0,_overlays_d99dcb0a_js__WEBPACK_IMPORTED_MODULE_5__.h)(this.el, 'ionLoadingWillDismiss');
  }
  renderLoadingMessage(msgId) {
    const {
      customHTMLEnabled,
      message
    } = this;
    if (customHTMLEnabled) {
      return (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
        class: "loading-content",
        id: msgId,
        innerHTML: (0,_config_9898ed97_js__WEBPACK_IMPORTED_MODULE_2__.a)(message)
      });
    }
    return (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "loading-content",
      id: msgId
    }, message);
  }
  render() {
    const {
      message,
      spinner,
      htmlAttributes,
      overlayIndex
    } = this;
    const mode = (0,_ionic_global_b26f573e_js__WEBPACK_IMPORTED_MODULE_8__.b)(this);
    const msgId = `loading-${overlayIndex}-msg`;
    /**
     * If the message is defined, use that as the label.
     * Otherwise, don't set aria-labelledby.
     */
    const ariaLabelledBy = message !== undefined ? msgId : null;
    return (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.e, Object.assign({
      key: 'd6066c8b56b1fe4b597a243a7dab191ef0d21286',
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": ariaLabelledBy,
      tabindex: "-1"
    }, htmlAttributes, {
      style: {
        zIndex: `${40000 + this.overlayIndex}`
      },
      onIonBackdropTap: this.onBackdropTap,
      class: Object.assign(Object.assign({}, (0,_theme_01f3f29c_js__WEBPACK_IMPORTED_MODULE_6__.g)(this.cssClass)), {
        [mode]: true,
        'overlay-hidden': true,
        'loading-translucent': this.translucent
      })
    }), (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-backdrop", {
      key: '2431eda00a2a3f510f5dfc39b7c7d47c056dfa3d',
      visible: this.showBackdrop,
      tappable: this.backdropDismiss
    }), (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      key: 'cf210aaf5e754e4eccdb49cf7ead4647b3f9b2d1',
      tabindex: "0",
      "aria-hidden": "true"
    }), (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      key: 'fa9375143d391656d70e181d25b952c77c2fc6ec',
      class: "loading-wrapper ion-overlay-wrapper"
    }, spinner && (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      key: '8e4a4ed994f7f62df86b03696ac95162df41f52d',
      class: "loading-spinner"
    }, (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-spinner", {
      key: 'e5b323c272d365853ba92bd211e390b4fd4751d2',
      name: spinner,
      "aria-hidden": "true"
    })), message !== undefined && this.renderLoadingMessage(msgId)), (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      key: 'cae35ec8c34800477bff3ebcec8010e632158233',
      tabindex: "0",
      "aria-hidden": "true"
    }));
  }
  get el() {
    return (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.f)(this);
  }
  static get watchers() {
    return {
      "isOpen": ["onIsOpenChange"],
      "trigger": ["triggerChanged"]
    };
  }
};
Loading.style = {
  ios: IonLoadingIosStyle0,
  md: IonLoadingMdStyle0
};


/***/ })

}]);
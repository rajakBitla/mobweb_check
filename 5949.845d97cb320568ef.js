"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[5949],{

/***/ 25949:
/*!**********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ion_item_option: () => (/* binding */ ItemOption),
/* harmony export */   ion_item_options: () => (/* binding */ ItemOptions),
/* harmony export */   ion_item_sliding: () => (/* binding */ ItemSliding)
/* harmony export */ });
/* harmony import */ var _Users_raja_Documents_officeProjects_Live_issues_Ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-527b9e34.js */ 96317);
/* harmony import */ var _theme_01f3f29c_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme-01f3f29c.js */ 80333);
/* harmony import */ var _ionic_global_b26f573e_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ionic-global-b26f573e.js */ 12508);
/* harmony import */ var _helpers_d94bc8ad_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers-d94bc8ad.js */ 92486);
/* harmony import */ var _index_9a17db3d_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index-9a17db3d.js */ 94493);
/* harmony import */ var _index_cfd9c1f2_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index-cfd9c1f2.js */ 8736);
/* harmony import */ var _watch_options_c2911ace_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./watch-options-c2911ace.js */ 2935);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */







const itemOptionIosCss = ":host{--background:var(--ion-color-primary, #0054e9);--color:var(--ion-color-primary-contrast, #fff);background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit)}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}.button-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-webkit-padding-start:0.7em;padding-inline-start:0.7em;-webkit-padding-end:0.7em;padding-inline-end:0.7em;padding-top:0;padding-bottom:0;display:inline-block;position:relative;width:100%;height:100%;border:0;outline:none;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-box-sizing:border-box;box-sizing:border-box}.button-inner{display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.horizontal-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%}::slotted(*){-ms-flex-negative:0;flex-shrink:0}::slotted([slot=start]){-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:5px;margin-inline-end:5px;margin-top:0;margin-bottom:0}::slotted([slot=end]){-webkit-margin-start:5px;margin-inline-start:5px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}::slotted([slot=icon-only]){padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px;margin-top:0;margin-bottom:0;min-width:0.9em;font-size:1.8em}:host(.item-option-expandable){-ms-flex-negative:0;flex-shrink:0;-webkit-transition-duration:0;transition-duration:0;-webkit-transition-property:none;transition-property:none;-webkit-transition-timing-function:cubic-bezier(0.65, 0.05, 0.36, 1);transition-timing-function:cubic-bezier(0.65, 0.05, 0.36, 1)}:host(.item-option-disabled){pointer-events:none}:host(.item-option-disabled) .button-native{cursor:default;opacity:0.5;pointer-events:none}:host{font-size:clamp(16px, 1rem, 35.2px)}:host(.ion-activated){background:var(--ion-color-primary-shade, #004acd)}:host(.ion-color.ion-activated){background:var(--ion-color-shade)}";
const IonItemOptionIosStyle0 = itemOptionIosCss;
const itemOptionMdCss = ":host{--background:var(--ion-color-primary, #0054e9);--color:var(--ion-color-primary-contrast, #fff);background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit)}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}.button-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-webkit-padding-start:0.7em;padding-inline-start:0.7em;-webkit-padding-end:0.7em;padding-inline-end:0.7em;padding-top:0;padding-bottom:0;display:inline-block;position:relative;width:100%;height:100%;border:0;outline:none;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-box-sizing:border-box;box-sizing:border-box}.button-inner{display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.horizontal-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%}::slotted(*){-ms-flex-negative:0;flex-shrink:0}::slotted([slot=start]){-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:5px;margin-inline-end:5px;margin-top:0;margin-bottom:0}::slotted([slot=end]){-webkit-margin-start:5px;margin-inline-start:5px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}::slotted([slot=icon-only]){padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px;margin-top:0;margin-bottom:0;min-width:0.9em;font-size:1.8em}:host(.item-option-expandable){-ms-flex-negative:0;flex-shrink:0;-webkit-transition-duration:0;transition-duration:0;-webkit-transition-property:none;transition-property:none;-webkit-transition-timing-function:cubic-bezier(0.65, 0.05, 0.36, 1);transition-timing-function:cubic-bezier(0.65, 0.05, 0.36, 1)}:host(.item-option-disabled){pointer-events:none}:host(.item-option-disabled) .button-native{cursor:default;opacity:0.5;pointer-events:none}:host{font-size:0.875rem;font-weight:500;text-transform:uppercase}";
const IonItemOptionMdStyle0 = itemOptionMdCss;
const ItemOption = class {
  constructor(hostRef) {
    (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.onClick = ev => {
      const el = ev.target.closest('ion-item-option');
      if (el) {
        ev.preventDefault();
      }
    };
    this.color = undefined;
    this.disabled = false;
    this.download = undefined;
    this.expandable = false;
    this.href = undefined;
    this.rel = undefined;
    this.target = undefined;
    this.type = 'button';
  }
  render() {
    const {
      disabled,
      expandable,
      href
    } = this;
    const TagType = href === undefined ? 'button' : 'a';
    const mode = (0,_ionic_global_b26f573e_js__WEBPACK_IMPORTED_MODULE_3__.b)(this);
    const attrs = TagType === 'button' ? {
      type: this.type
    } : {
      download: this.download,
      href: this.href,
      target: this.target
    };
    return (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.e, {
      key: '1b7708dd178dc2c9280652ca3da38c84ba7b767f',
      onClick: this.onClick,
      class: (0,_theme_01f3f29c_js__WEBPACK_IMPORTED_MODULE_2__.c)(this.color, {
        [mode]: true,
        'item-option-disabled': disabled,
        'item-option-expandable': expandable,
        'ion-activatable': true
      })
    }, (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.h)(TagType, Object.assign({
      key: 'd9f899f5425ad6b97071494485aa3ca90bc89d30'
    }, attrs, {
      class: "button-native",
      part: "native",
      disabled: disabled
    }), (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.h)("span", {
      key: 'adc2cf72b4363be9b9eeb3584723e2bfc862af20',
      class: "button-inner"
    }, (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", {
      key: 'e668fe8e655a74e6a35e979e0cd488506b962dbf',
      name: "top"
    }), (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      key: '2ddcdb92b6b19c3cc549a7aee2400d1a6eeb51f1',
      class: "horizontal-wrapper"
    }, (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", {
      key: '441f13df18b72e5ed6bb51b157722e065b5847d2',
      name: "start"
    }), (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", {
      key: '425d815874b49e1628880160d7175ed3ca36ca39',
      name: "icon-only"
    }), (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", {
      key: '27437d3fa3365b12bc030704e18481fdfb14aebb'
    }), (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", {
      key: 'bd39330771c7f85c6df10f7f9050335ee7f14ff0',
      name: "end"
    })), (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", {
      key: '440cb6dc7743d50b261d4bf61d2c24e24b89e58c',
      name: "bottom"
    })), mode === 'md' && (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-ripple-effect", {
      key: '29632941464bbb34551cf64961187643f62bf755'
    })));
  }
  get el() {
    return (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.f)(this);
  }
};
ItemOption.style = {
  ios: IonItemOptionIosStyle0,
  md: IonItemOptionMdStyle0
};
const itemOptionsIosCss = "ion-item-options{top:0;right:0;-ms-flex-pack:end;justify-content:flex-end;display:none;position:absolute;height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1}:host-context([dir=rtl]) ion-item-options{-ms-flex-pack:start;justify-content:flex-start}:host-context([dir=rtl]) ion-item-options:not(.item-options-end){right:auto;left:0;-ms-flex-pack:end;justify-content:flex-end}[dir=rtl] ion-item-options{-ms-flex-pack:start;justify-content:flex-start}[dir=rtl] ion-item-options:not(.item-options-end){right:auto;left:0;-ms-flex-pack:end;justify-content:flex-end}@supports selector(:dir(rtl)){ion-item-options:dir(rtl){-ms-flex-pack:start;justify-content:flex-start}ion-item-options:dir(rtl):not(.item-options-end){right:auto;left:0;-ms-flex-pack:end;justify-content:flex-end}}.item-options-start{right:auto;left:0;-ms-flex-pack:start;justify-content:flex-start}:host-context([dir=rtl]) .item-options-start{-ms-flex-pack:end;justify-content:flex-end}[dir=rtl] .item-options-start{-ms-flex-pack:end;justify-content:flex-end}@supports selector(:dir(rtl)){.item-options-start:dir(rtl){-ms-flex-pack:end;justify-content:flex-end}}[dir=ltr] .item-options-start ion-item-option:first-child,[dir=rtl] .item-options-start ion-item-option:last-child{padding-left:var(--ion-safe-area-left)}[dir=ltr] .item-options-end ion-item-option:last-child,[dir=rtl] .item-options-end ion-item-option:first-child{padding-right:var(--ion-safe-area-right)}:host-context([dir=rtl]) .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}[dir=rtl] .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}@supports selector(:dir(rtl)){.item-sliding-active-slide:dir(rtl).item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}}.item-sliding-active-slide ion-item-options{display:-ms-flexbox;display:flex;visibility:hidden}.item-sliding-active-slide.item-sliding-active-options-start .item-options-start,.item-sliding-active-slide.item-sliding-active-options-end ion-item-options:not(.item-options-start){width:100%;visibility:visible}.item-options-ios{border-bottom-width:0;border-bottom-style:solid;border-bottom-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, var(--ion-background-color-step-250, #c8c7cc))))}.item-options-ios.item-options-end{border-bottom-width:0.55px}.list-ios-lines-none .item-options-ios{border-bottom-width:0}.list-ios-lines-full .item-options-ios,.list-ios-lines-inset .item-options-ios.item-options-end{border-bottom-width:0.55px}";
const IonItemOptionsIosStyle0 = itemOptionsIosCss;
const itemOptionsMdCss = "ion-item-options{top:0;right:0;-ms-flex-pack:end;justify-content:flex-end;display:none;position:absolute;height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1}:host-context([dir=rtl]) ion-item-options{-ms-flex-pack:start;justify-content:flex-start}:host-context([dir=rtl]) ion-item-options:not(.item-options-end){right:auto;left:0;-ms-flex-pack:end;justify-content:flex-end}[dir=rtl] ion-item-options{-ms-flex-pack:start;justify-content:flex-start}[dir=rtl] ion-item-options:not(.item-options-end){right:auto;left:0;-ms-flex-pack:end;justify-content:flex-end}@supports selector(:dir(rtl)){ion-item-options:dir(rtl){-ms-flex-pack:start;justify-content:flex-start}ion-item-options:dir(rtl):not(.item-options-end){right:auto;left:0;-ms-flex-pack:end;justify-content:flex-end}}.item-options-start{right:auto;left:0;-ms-flex-pack:start;justify-content:flex-start}:host-context([dir=rtl]) .item-options-start{-ms-flex-pack:end;justify-content:flex-end}[dir=rtl] .item-options-start{-ms-flex-pack:end;justify-content:flex-end}@supports selector(:dir(rtl)){.item-options-start:dir(rtl){-ms-flex-pack:end;justify-content:flex-end}}[dir=ltr] .item-options-start ion-item-option:first-child,[dir=rtl] .item-options-start ion-item-option:last-child{padding-left:var(--ion-safe-area-left)}[dir=ltr] .item-options-end ion-item-option:last-child,[dir=rtl] .item-options-end ion-item-option:first-child{padding-right:var(--ion-safe-area-right)}:host-context([dir=rtl]) .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}[dir=rtl] .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}@supports selector(:dir(rtl)){.item-sliding-active-slide:dir(rtl).item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}}.item-sliding-active-slide ion-item-options{display:-ms-flexbox;display:flex;visibility:hidden}.item-sliding-active-slide.item-sliding-active-options-start .item-options-start,.item-sliding-active-slide.item-sliding-active-options-end ion-item-options:not(.item-options-start){width:100%;visibility:visible}.item-options-md{border-bottom-width:0;border-bottom-style:solid;border-bottom-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, rgba(0, 0, 0, 0.13)))))}.list-md-lines-none .item-options-md{border-bottom-width:0}.list-md-lines-full .item-options-md,.list-md-lines-inset .item-options-md.item-options-end{border-bottom-width:1px}";
const IonItemOptionsMdStyle0 = itemOptionsMdCss;
const ItemOptions = class {
  constructor(hostRef) {
    (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.ionSwipe = (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.c)(this, "ionSwipe", 7);
    this.side = 'end';
  }
  /** @internal */
  fireSwipeEvent() {
    var _this = this;
    return (0,_Users_raja_Documents_officeProjects_Live_issues_Ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.ionSwipe.emit({
        side: _this.side
      });
    })();
  }
  render() {
    const mode = (0,_ionic_global_b26f573e_js__WEBPACK_IMPORTED_MODULE_3__.b)(this);
    const isEnd = (0,_helpers_d94bc8ad_js__WEBPACK_IMPORTED_MODULE_4__.o)(this.side);
    return (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.e, {
      key: '7df4b71547524bf359c48e1b40ccbc44e850f632',
      class: {
        [mode]: true,
        // Used internally for styling
        [`item-options-${mode}`]: true,
        /**
         * Note: The "start" and "end" terms refer to the
         * direction ion-item-option instances within ion-item-options flow.
         * They do not refer to how ion-item-options flows within ion-item-sliding.
         * As a result, "item-options-start" means the ion-item-options container
         * always appears on the left, and "item-options-end" means the ion-item-options
         * container always appears on the right.
         */
        'item-options-start': !isEnd,
        'item-options-end': isEnd
      }
    });
  }
  get el() {
    return (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.f)(this);
  }
};
ItemOptions.style = {
  ios: IonItemOptionsIosStyle0,
  md: IonItemOptionsMdStyle0
};
const itemSlidingCss = "ion-item-sliding{display:block;position:relative;width:100%;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-item-sliding .item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.item-sliding-active-slide .item{position:relative;-webkit-transition:-webkit-transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);transition:-webkit-transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);transition:transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);transition:transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1), -webkit-transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);opacity:1;z-index:2;pointer-events:none;will-change:transform}.item-sliding-closing ion-item-options{pointer-events:none}.item-sliding-active-swipe-end .item-options-end .item-option-expandable{padding-left:100%;-ms-flex-order:1;order:1;-webkit-transition-duration:0.6s;transition-duration:0.6s;-webkit-transition-property:padding-left;transition-property:padding-left}:host-context([dir=rtl]) .item-sliding-active-swipe-end .item-options-end .item-option-expandable{-ms-flex-order:-1;order:-1}[dir=rtl] .item-sliding-active-swipe-end .item-options-end .item-option-expandable{-ms-flex-order:-1;order:-1}@supports selector(:dir(rtl)){.item-sliding-active-swipe-end .item-options-end .item-option-expandable:dir(rtl){-ms-flex-order:-1;order:-1}}.item-sliding-active-swipe-start .item-options-start .item-option-expandable{padding-right:100%;-ms-flex-order:-1;order:-1;-webkit-transition-duration:0.6s;transition-duration:0.6s;-webkit-transition-property:padding-right;transition-property:padding-right}:host-context([dir=rtl]) .item-sliding-active-swipe-start .item-options-start .item-option-expandable{-ms-flex-order:1;order:1}[dir=rtl] .item-sliding-active-swipe-start .item-options-start .item-option-expandable{-ms-flex-order:1;order:1}@supports selector(:dir(rtl)){.item-sliding-active-swipe-start .item-options-start .item-option-expandable:dir(rtl){-ms-flex-order:1;order:1}}";
const IonItemSlidingStyle0 = itemSlidingCss;
const SWIPE_MARGIN = 30;
const ELASTIC_FACTOR = 0.55;
let openSlidingItem;
const ItemSliding = class {
  constructor(hostRef) {
    (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.ionDrag = (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.c)(this, "ionDrag", 7);
    this.item = null;
    this.openAmount = 0;
    this.initialOpenAmount = 0;
    this.optsWidthRightSide = 0;
    this.optsWidthLeftSide = 0;
    this.sides = 0 /* ItemSide.None */;
    this.optsDirty = true;
    this.contentEl = null;
    this.initialContentScrollY = true;
    this.state = 2 /* SlidingState.Disabled */;
    this.disabled = false;
  }
  disabledChanged() {
    if (this.gesture) {
      this.gesture.enable(!this.disabled);
    }
  }
  connectedCallback() {
    var _this2 = this;
    return (0,_Users_raja_Documents_officeProjects_Live_issues_Ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        el
      } = _this2;
      _this2.item = el.querySelector('ion-item');
      _this2.contentEl = (0,_index_9a17db3d_js__WEBPACK_IMPORTED_MODULE_5__.f)(el);
      /**
       * The MutationObserver needs to be added before we
       * call updateOptions below otherwise we may miss
       * ion-item-option elements that are added to the DOM
       * while updateOptions is running and before the MutationObserver
       * has been initialized.
       */
      _this2.mutationObserver = (0,_watch_options_c2911ace_js__WEBPACK_IMPORTED_MODULE_7__.w)(el, 'ion-item-option', /*#__PURE__*/(0,_Users_raja_Documents_officeProjects_Live_issues_Ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        yield _this2.updateOptions();
      }));
      yield _this2.updateOptions();
      _this2.gesture = (yield Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./index-39782642.js */ 28607))).createGesture({
        el,
        gestureName: 'item-swipe',
        gesturePriority: 100,
        threshold: 5,
        canStart: ev => _this2.canStart(ev),
        onStart: () => _this2.onStart(),
        onMove: ev => _this2.onMove(ev),
        onEnd: ev => _this2.onEnd(ev)
      });
      _this2.disabledChanged();
    })();
  }
  disconnectedCallback() {
    if (this.gesture) {
      this.gesture.destroy();
      this.gesture = undefined;
    }
    this.item = null;
    this.leftOptions = this.rightOptions = undefined;
    if (openSlidingItem === this.el) {
      openSlidingItem = undefined;
    }
    if (this.mutationObserver) {
      this.mutationObserver.disconnect();
      this.mutationObserver = undefined;
    }
  }
  /**
   * Get the amount the item is open in pixels.
   */
  getOpenAmount() {
    return Promise.resolve(this.openAmount);
  }
  /**
   * Get the ratio of the open amount of the item compared to the width of the options.
   * If the number returned is positive, then the options on the right side are open.
   * If the number returned is negative, then the options on the left side are open.
   * If the absolute value of the number is greater than 1, the item is open more than
   * the width of the options.
   */
  getSlidingRatio() {
    return Promise.resolve(this.getSlidingRatioSync());
  }
  /**
   * Open the sliding item.
   *
   * @param side The side of the options to open. If a side is not provided, it will open the first set of options it finds within the item.
   */
  open(side) {
    var _this3 = this;
    return (0,_Users_raja_Documents_officeProjects_Live_issues_Ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a;
      /**
       * It is possible for the item to be added to the DOM
       * after the item-sliding component was created. As a result,
       * if this.item is null, then we should attempt to
       * query for the ion-item again.
       * However, if the item is already defined then
       * we do not query for it again.
       */
      const item = _this3.item = (_a = _this3.item) !== null && _a !== void 0 ? _a : _this3.el.querySelector('ion-item');
      if (item === null) {
        return;
      }
      const optionsToOpen = _this3.getOptions(side);
      if (!optionsToOpen) {
        return;
      }
      /**
       * If side is not set, we need to infer the side
       * so we know which direction to move the options
       */
      if (side === undefined) {
        side = optionsToOpen === _this3.leftOptions ? 'start' : 'end';
      }
      // In RTL we want to switch the sides
      side = (0,_helpers_d94bc8ad_js__WEBPACK_IMPORTED_MODULE_4__.o)(side) ? 'end' : 'start';
      const isStartOpen = _this3.openAmount < 0;
      const isEndOpen = _this3.openAmount > 0;
      /**
       * If a side is open and a user tries to
       * re-open the same side, we should not do anything
       */
      if (isStartOpen && optionsToOpen === _this3.leftOptions) {
        return;
      }
      if (isEndOpen && optionsToOpen === _this3.rightOptions) {
        return;
      }
      _this3.closeOpened();
      _this3.state = 4 /* SlidingState.Enabled */;
      requestAnimationFrame(() => {
        _this3.calculateOptsWidth();
        const width = side === 'end' ? _this3.optsWidthRightSide : -_this3.optsWidthLeftSide;
        openSlidingItem = _this3.el;
        _this3.setOpenAmount(width, false);
        _this3.state = side === 'end' ? 8 /* SlidingState.End */ : 16 /* SlidingState.Start */;
      });
    })();
  }
  /**
   * Close the sliding item. Items can also be closed from the [List](./list).
   */
  close() {
    var _this4 = this;
    return (0,_Users_raja_Documents_officeProjects_Live_issues_Ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.setOpenAmount(0, true);
    })();
  }
  /**
   * Close all of the sliding items in the list. Items can also be closed from the [List](./list).
   */
  closeOpened() {
    return (0,_Users_raja_Documents_officeProjects_Live_issues_Ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (openSlidingItem !== undefined) {
        openSlidingItem.close();
        openSlidingItem = undefined;
        return true;
      }
      return false;
    })();
  }
  /**
   * Given an optional side, return the ion-item-options element.
   *
   * @param side This side of the options to get. If a side is not provided it will
   * return the first one available.
   */
  getOptions(side) {
    if (side === undefined) {
      return this.leftOptions || this.rightOptions;
    } else if (side === 'start') {
      return this.leftOptions;
    } else {
      return this.rightOptions;
    }
  }
  updateOptions() {
    var _this5 = this;
    return (0,_Users_raja_Documents_officeProjects_Live_issues_Ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const options = _this5.el.querySelectorAll('ion-item-options');
      let sides = 0;
      // Reset left and right options in case they were removed
      _this5.leftOptions = _this5.rightOptions = undefined;
      for (let i = 0; i < options.length; i++) {
        const item = options.item(i);
        /**
         * We cannot use the componentOnReady helper
         * util here since we need to wait for all of these items
         * to be ready before we set `this.sides` and `this.optsDirty`.
         */
        // eslint-disable-next-line custom-rules/no-component-on-ready-method
        const option = item.componentOnReady !== undefined ? yield item.componentOnReady() : item;
        const side = (0,_helpers_d94bc8ad_js__WEBPACK_IMPORTED_MODULE_4__.o)(option.side) ? 'end' : 'start';
        if (side === 'start') {
          _this5.leftOptions = option;
          sides |= 1 /* ItemSide.Start */;
        } else {
          _this5.rightOptions = option;
          sides |= 2 /* ItemSide.End */;
        }
      }
      _this5.optsDirty = true;
      _this5.sides = sides;
    })();
  }
  canStart(gesture) {
    /**
     * If very close to start of the screen
     * do not open left side so swipe to go
     * back will still work.
     */
    const rtl = document.dir === 'rtl';
    const atEdge = rtl ? window.innerWidth - gesture.startX < 15 : gesture.startX < 15;
    if (atEdge) {
      return false;
    }
    const selected = openSlidingItem;
    if (selected && selected !== this.el) {
      this.closeOpened();
    }
    return !!(this.rightOptions || this.leftOptions);
  }
  onStart() {
    /**
     * We need to query for the ion-item
     * every time the gesture starts. Developers
     * may toggle ion-item elements via *ngIf.
     */
    this.item = this.el.querySelector('ion-item');
    const {
      contentEl
    } = this;
    if (contentEl) {
      this.initialContentScrollY = (0,_index_9a17db3d_js__WEBPACK_IMPORTED_MODULE_5__.d)(contentEl);
    }
    openSlidingItem = this.el;
    if (this.tmr !== undefined) {
      clearTimeout(this.tmr);
      this.tmr = undefined;
    }
    if (this.openAmount === 0) {
      this.optsDirty = true;
      this.state = 4 /* SlidingState.Enabled */;
    }
    this.initialOpenAmount = this.openAmount;
    if (this.item) {
      this.item.style.transition = 'none';
    }
  }
  onMove(gesture) {
    if (this.optsDirty) {
      this.calculateOptsWidth();
    }
    let openAmount = this.initialOpenAmount - gesture.deltaX;
    switch (this.sides) {
      case 2 /* ItemSide.End */:
        openAmount = Math.max(0, openAmount);
        break;
      case 1 /* ItemSide.Start */:
        openAmount = Math.min(0, openAmount);
        break;
      case 3 /* ItemSide.Both */:
        break;
      case 0 /* ItemSide.None */:
        return;
      default:
        (0,_index_cfd9c1f2_js__WEBPACK_IMPORTED_MODULE_6__.p)('[ion-item-sliding] - invalid ItemSideFlags value', this.sides);
        break;
    }
    let optsWidth;
    if (openAmount > this.optsWidthRightSide) {
      optsWidth = this.optsWidthRightSide;
      openAmount = optsWidth + (openAmount - optsWidth) * ELASTIC_FACTOR;
    } else if (openAmount < -this.optsWidthLeftSide) {
      optsWidth = -this.optsWidthLeftSide;
      openAmount = optsWidth + (openAmount - optsWidth) * ELASTIC_FACTOR;
    }
    this.setOpenAmount(openAmount, false);
  }
  onEnd(gesture) {
    const {
      contentEl,
      initialContentScrollY
    } = this;
    if (contentEl) {
      (0,_index_9a17db3d_js__WEBPACK_IMPORTED_MODULE_5__.r)(contentEl, initialContentScrollY);
    }
    const velocity = gesture.velocityX;
    let restingPoint = this.openAmount > 0 ? this.optsWidthRightSide : -this.optsWidthLeftSide;
    // Check if the drag didn't clear the buttons mid-point
    // and we aren't moving fast enough to swipe open
    const isResetDirection = this.openAmount > 0 === !(velocity < 0);
    const isMovingFast = Math.abs(velocity) > 0.3;
    const isOnCloseZone = Math.abs(this.openAmount) < Math.abs(restingPoint / 2);
    if (swipeShouldReset(isResetDirection, isMovingFast, isOnCloseZone)) {
      restingPoint = 0;
    }
    const state = this.state;
    this.setOpenAmount(restingPoint, true);
    if ((state & 32 /* SlidingState.SwipeEnd */) !== 0 && this.rightOptions) {
      this.rightOptions.fireSwipeEvent();
    } else if ((state & 64 /* SlidingState.SwipeStart */) !== 0 && this.leftOptions) {
      this.leftOptions.fireSwipeEvent();
    }
  }
  calculateOptsWidth() {
    this.optsWidthRightSide = 0;
    if (this.rightOptions) {
      this.rightOptions.style.display = 'flex';
      this.optsWidthRightSide = this.rightOptions.offsetWidth;
      this.rightOptions.style.display = '';
    }
    this.optsWidthLeftSide = 0;
    if (this.leftOptions) {
      this.leftOptions.style.display = 'flex';
      this.optsWidthLeftSide = this.leftOptions.offsetWidth;
      this.leftOptions.style.display = '';
    }
    this.optsDirty = false;
  }
  setOpenAmount(openAmount, isFinal) {
    if (this.tmr !== undefined) {
      clearTimeout(this.tmr);
      this.tmr = undefined;
    }
    if (!this.item) {
      return;
    }
    const {
      el
    } = this;
    const style = this.item.style;
    this.openAmount = openAmount;
    if (isFinal) {
      style.transition = '';
    }
    if (openAmount > 0) {
      this.state = openAmount >= this.optsWidthRightSide + SWIPE_MARGIN ? 8 /* SlidingState.End */ | 32 /* SlidingState.SwipeEnd */ : 8 /* SlidingState.End */;
    } else if (openAmount < 0) {
      this.state = openAmount <= -this.optsWidthLeftSide - SWIPE_MARGIN ? 16 /* SlidingState.Start */ | 64 /* SlidingState.SwipeStart */ : 16 /* SlidingState.Start */;
    } else {
      /**
       * The sliding options should not be
       * clickable while the item is closing.
       */
      el.classList.add('item-sliding-closing');
      /**
       * Item sliding cannot be interrupted
       * while closing the item. If it did,
       * it would allow the item to get into an
       * inconsistent state where multiple
       * items are then open at the same time.
       */
      if (this.gesture) {
        this.gesture.enable(false);
      }
      this.tmr = setTimeout(() => {
        this.state = 2 /* SlidingState.Disabled */;
        this.tmr = undefined;
        if (this.gesture) {
          this.gesture.enable(!this.disabled);
        }
        el.classList.remove('item-sliding-closing');
      }, 600);
      openSlidingItem = undefined;
      style.transform = '';
      return;
    }
    style.transform = `translate3d(${-openAmount}px,0,0)`;
    this.ionDrag.emit({
      amount: openAmount,
      ratio: this.getSlidingRatioSync()
    });
  }
  getSlidingRatioSync() {
    if (this.openAmount > 0) {
      return this.openAmount / this.optsWidthRightSide;
    } else if (this.openAmount < 0) {
      return this.openAmount / this.optsWidthLeftSide;
    } else {
      return 0;
    }
  }
  render() {
    const mode = (0,_ionic_global_b26f573e_js__WEBPACK_IMPORTED_MODULE_3__.b)(this);
    return (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.e, {
      key: 'f8aea4bb9802b111ef358cc6c172a635637ae1f8',
      class: {
        [mode]: true,
        'item-sliding-active-slide': this.state !== 2 /* SlidingState.Disabled */,
        'item-sliding-active-options-end': (this.state & 8 /* SlidingState.End */) !== 0,
        'item-sliding-active-options-start': (this.state & 16 /* SlidingState.Start */) !== 0,
        'item-sliding-active-swipe-end': (this.state & 32 /* SlidingState.SwipeEnd */) !== 0,
        'item-sliding-active-swipe-start': (this.state & 64 /* SlidingState.SwipeStart */) !== 0
      }
    });
  }
  get el() {
    return (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.f)(this);
  }
  static get watchers() {
    return {
      "disabled": ["disabledChanged"]
    };
  }
};
const swipeShouldReset = (isResetDirection, isMovingFast, isOnResetZone) => {
  // The logic required to know when the sliding item should close (openAmount=0)
  // depends on three booleans (isResetDirection, isMovingFast, isOnResetZone)
  // and it ended up being too complicated to be written manually without errors
  // so the truth table is attached below: (0=false, 1=true)
  // isResetDirection | isMovingFast | isOnResetZone || shouldClose
  //         0        |       0      |       0       ||    0
  //         0        |       0      |       1       ||    1
  //         0        |       1      |       0       ||    0
  //         0        |       1      |       1       ||    0
  //         1        |       0      |       0       ||    0
  //         1        |       0      |       1       ||    1
  //         1        |       1      |       0       ||    1
  //         1        |       1      |       1       ||    1
  // The resulting expression was generated by resolving the K-map (Karnaugh map):
  return !isMovingFast && isOnResetZone || isResetDirection && isMovingFast;
};
ItemSliding.style = IonItemSlidingStyle0;


/***/ })

}]);
"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[5887],{

/***/ 95887:
/*!*******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ion_split_pane: () => (/* binding */ SplitPane)
/* harmony export */ });
/* harmony import */ var _Users_raja_Documents_officeProjects_Live_issues_Ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-527b9e34.js */ 96317);
/* harmony import */ var _index_cfd9c1f2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-cfd9c1f2.js */ 8736);
/* harmony import */ var _ionic_global_b26f573e_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ionic-global-b26f573e.js */ 12508);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */



const splitPaneIosCss = ":host{--side-width:100%;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;contain:strict}:host(.split-pane-visible) ::slotted(.split-pane-main){left:0;right:0;top:0;bottom:0;position:relative;-ms-flex:1;flex:1;-webkit-box-shadow:none;box-shadow:none;overflow:hidden;z-index:0}::slotted(.split-pane-side:not(ion-menu)){display:none}:host{--border:0.55px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, var(--ion-background-color-step-250, #c8c7cc))));--side-min-width:270px;--side-max-width:28%}";
const IonSplitPaneIosStyle0 = splitPaneIosCss;
const splitPaneMdCss = ":host{--side-width:100%;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;contain:strict}:host(.split-pane-visible) ::slotted(.split-pane-main){left:0;right:0;top:0;bottom:0;position:relative;-ms-flex:1;flex:1;-webkit-box-shadow:none;box-shadow:none;overflow:hidden;z-index:0}::slotted(.split-pane-side:not(ion-menu)){display:none}:host{--border:1px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, rgba(0, 0, 0, 0.13)))));--side-min-width:270px;--side-max-width:28%}";
const IonSplitPaneMdStyle0 = splitPaneMdCss;

// TODO(FW-2832): types
const SPLIT_PANE_MAIN = 'split-pane-main';
const SPLIT_PANE_SIDE = 'split-pane-side';
const QUERY = {
  xs: '(min-width: 0px)',
  sm: '(min-width: 576px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 992px)',
  xl: '(min-width: 1200px)',
  never: ''
};
const SplitPane = class {
  constructor(hostRef) {
    (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.ionSplitPaneVisible = (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.c)(this, "ionSplitPaneVisible", 7);
    this.visible = false;
    this.contentId = undefined;
    this.disabled = false;
    this.when = QUERY['lg'];
  }
  visibleChanged(visible) {
    this.ionSplitPaneVisible.emit({
      visible
    });
  }
  /**
   * @internal
   */
  isVisible() {
    var _this = this;
    return (0,_Users_raja_Documents_officeProjects_Live_issues_Ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return Promise.resolve(_this.visible);
    })();
  }
  connectedCallback() {
    var _this2 = this;
    return (0,_Users_raja_Documents_officeProjects_Live_issues_Ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // TODO: connectedCallback is fired in CE build
      // before WC is defined. This needs to be fixed in Stencil.
      if (typeof customElements !== 'undefined' && customElements != null) {
        yield customElements.whenDefined('ion-split-pane');
      }
      _this2.styleMainElement();
      _this2.updateState();
    })();
  }
  disconnectedCallback() {
    if (this.rmL) {
      this.rmL();
      this.rmL = undefined;
    }
  }
  updateState() {
    if (this.rmL) {
      this.rmL();
      this.rmL = undefined;
    }
    // Check if the split-pane is disabled
    if (this.disabled) {
      this.visible = false;
      return;
    }
    // When query is a boolean
    const query = this.when;
    if (typeof query === 'boolean') {
      this.visible = query;
      return;
    }
    // When query is a string, let's find first if it is a shortcut
    const mediaQuery = QUERY[query] || query;
    // Media query is empty or null, we hide it
    if (mediaQuery.length === 0) {
      this.visible = false;
      return;
    }
    // Listen on media query
    const callback = q => {
      this.visible = q.matches;
    };
    const mediaList = window.matchMedia(mediaQuery);
    // TODO FW-5869
    mediaList.addListener(callback);
    this.rmL = () => mediaList.removeListener(callback);
    this.visible = mediaList.matches;
  }
  /**
   * Attempt to find the main content
   * element inside of the split pane.
   * If found, set it as the main node.
   *
   * We assume that the main node
   * is available in the DOM on split
   * pane load.
   */
  styleMainElement() {
    const contentId = this.contentId;
    const children = this.el.children;
    const nu = this.el.childElementCount;
    let foundMain = false;
    for (let i = 0; i < nu; i++) {
      const child = children[i];
      const isMain = contentId !== undefined && child.id === contentId;
      if (isMain) {
        if (foundMain) {
          (0,_index_cfd9c1f2_js__WEBPACK_IMPORTED_MODULE_2__.p)('[ion-split-pane] - Cannot have more than one main node.');
          return;
        } else {
          setPaneClass(child, isMain);
          foundMain = true;
        }
      }
    }
    if (!foundMain) {
      (0,_index_cfd9c1f2_js__WEBPACK_IMPORTED_MODULE_2__.p)('[ion-split-pane] - Does not have a specified main node.');
    }
  }
  render() {
    const mode = (0,_ionic_global_b26f573e_js__WEBPACK_IMPORTED_MODULE_3__.b)(this);
    return (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.e, {
      key: '098801b5a318e2fc6913fb0d9079b1552927b99b',
      class: {
        [mode]: true,
        // Used internally for styling
        [`split-pane-${mode}`]: true,
        'split-pane-visible': this.visible
      }
    }, (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", {
      key: '8cbc6a942ecba54fc3c62027d46917db067b65c8'
    }));
  }
  get el() {
    return (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.f)(this);
  }
  static get watchers() {
    return {
      "visible": ["visibleChanged"],
      "disabled": ["updateState"],
      "when": ["updateState"]
    };
  }
};
const setPaneClass = (el, isMain) => {
  let toAdd;
  let toRemove;
  if (isMain) {
    toAdd = SPLIT_PANE_MAIN;
    toRemove = SPLIT_PANE_SIDE;
  } else {
    toAdd = SPLIT_PANE_SIDE;
    toRemove = SPLIT_PANE_MAIN;
  }
  const classList = el.classList;
  classList.add(toAdd);
  classList.remove(toRemove);
};
SplitPane.style = {
  ios: IonSplitPaneIosStyle0,
  md: IonSplitPaneMdStyle0
};


/***/ })

}]);
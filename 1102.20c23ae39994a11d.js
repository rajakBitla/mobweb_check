"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[1102],{

/***/ 91102:
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ion_tab: () => (/* binding */ Tab),
/* harmony export */   ion_tabs: () => (/* binding */ Tabs)
/* harmony export */ });
/* harmony import */ var _Users_raja_Documents_officeProjects_Live_issues_Ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-527b9e34.js */ 96317);
/* harmony import */ var _framework_delegate_56b467ad_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./framework-delegate-56b467ad.js */ 69245);
/* harmony import */ var _index_cfd9c1f2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index-cfd9c1f2.js */ 8736);
/* harmony import */ var _helpers_d94bc8ad_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers-d94bc8ad.js */ 92486);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */




const tabCss = ":host(.tab-hidden){display:none !important}";
const IonTabStyle0 = tabCss;
const Tab = class {
  constructor(hostRef) {
    (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.loaded = false;
    this.active = false;
    this.delegate = undefined;
    this.tab = undefined;
    this.component = undefined;
  }
  componentWillLoad() {
    var _this = this;
    return (0,_Users_raja_Documents_officeProjects_Live_issues_Ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.active) {
        yield _this.setActive();
      }
    })();
  }
  /** Set the active component for the tab */
  setActive() {
    var _this2 = this;
    return (0,_Users_raja_Documents_officeProjects_Live_issues_Ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.prepareLazyLoaded();
      _this2.active = true;
    })();
  }
  changeActive(isActive) {
    if (isActive) {
      this.prepareLazyLoaded();
    }
  }
  prepareLazyLoaded() {
    if (!this.loaded && this.component != null) {
      this.loaded = true;
      try {
        return (0,_framework_delegate_56b467ad_js__WEBPACK_IMPORTED_MODULE_2__.a)(this.delegate, this.el, this.component, ['ion-page']);
      } catch (e) {
        (0,_index_cfd9c1f2_js__WEBPACK_IMPORTED_MODULE_3__.d)('[ion-tab] - Exception in prepareLazyLoaded:', e);
      }
    }
    return Promise.resolve(undefined);
  }
  render() {
    const {
      tab,
      active,
      component
    } = this;
    return (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.e, {
      key: 'c36c113e74e12b58459df9e3b546ad4856187e90',
      role: "tabpanel",
      "aria-hidden": !active ? 'true' : null,
      "aria-labelledby": `tab-button-${tab}`,
      class: {
        'ion-page': component === undefined,
        'tab-hidden': !active
      }
    }, (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", {
      key: '0d7821dac70ba7a12edfb3331988f3df1566cc1a'
    }));
  }
  get el() {
    return (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.f)(this);
  }
  static get watchers() {
    return {
      "active": ["changeActive"]
    };
  }
};
Tab.style = IonTabStyle0;
const tabsCss = ":host{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;contain:layout size style;z-index:0}.tabs-inner{position:relative;-ms-flex:1;flex:1;contain:layout size style}";
const IonTabsStyle0 = tabsCss;
const Tabs = class {
  constructor(hostRef) {
    (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.ionNavWillLoad = (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.c)(this, "ionNavWillLoad", 7);
    this.ionTabsWillChange = (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.c)(this, "ionTabsWillChange", 3);
    this.ionTabsDidChange = (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.c)(this, "ionTabsDidChange", 3);
    this.transitioning = false;
    this.onTabClicked = ev => {
      const {
        href,
        tab
      } = ev.detail;
      if (this.useRouter && href !== undefined) {
        const router = document.querySelector('ion-router');
        if (router) {
          router.push(href);
        }
      } else {
        this.select(tab);
      }
    };
    this.selectedTab = undefined;
    this.useRouter = false;
  }
  componentWillLoad() {
    var _this3 = this;
    return (0,_Users_raja_Documents_officeProjects_Live_issues_Ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this3.useRouter) {
        /**
         * JavaScript and StencilJS use `ion-router`, while
         * the other frameworks use `ion-router-outlet`.
         *
         * If either component is present then tabs will not use
         * a basic tab-based navigation. It will use the history
         * stack or URL updates associated with the router.
         */
        _this3.useRouter = (!!_this3.el.querySelector('ion-router-outlet') || !!document.querySelector('ion-router')) && !_this3.el.closest('[no-router]');
      }
      if (!_this3.useRouter) {
        const tabs = _this3.tabs;
        if (tabs.length > 0) {
          yield _this3.select(tabs[0]);
        }
      }
      _this3.ionNavWillLoad.emit();
    })();
  }
  componentWillRender() {
    const tabBar = this.el.querySelector('ion-tab-bar');
    if (tabBar) {
      const tab = this.selectedTab ? this.selectedTab.tab : undefined;
      tabBar.selectedTab = tab;
    }
  }
  /**
   * Select a tab by the value of its `tab` property or an element reference. This method is only available for vanilla JavaScript projects. The Angular, React, and Vue implementations of tabs are coupled to each framework's router.
   *
   * @param tab The tab instance to select. If passed a string, it should be the value of the tab's `tab` property.
   */
  select(tab) {
    var _this4 = this;
    return (0,_Users_raja_Documents_officeProjects_Live_issues_Ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const selectedTab = getTab(_this4.tabs, tab);
      if (!_this4.shouldSwitch(selectedTab)) {
        return false;
      }
      yield _this4.setActive(selectedTab);
      yield _this4.notifyRouter();
      _this4.tabSwitch();
      return true;
    })();
  }
  /**
   * Get a specific tab by the value of its `tab` property or an element reference. This method is only available for vanilla JavaScript projects. The Angular, React, and Vue implementations of tabs are coupled to each framework's router.
   *
   * @param tab The tab instance to select. If passed a string, it should be the value of the tab's `tab` property.
   */
  getTab(tab) {
    var _this5 = this;
    return (0,_Users_raja_Documents_officeProjects_Live_issues_Ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return getTab(_this5.tabs, tab);
    })();
  }
  /**
   * Get the currently selected tab. This method is only available for vanilla JavaScript projects. The Angular, React, and Vue implementations of tabs are coupled to each framework's router.
   */
  getSelected() {
    return Promise.resolve(this.selectedTab ? this.selectedTab.tab : undefined);
  }
  /** @internal */
  setRouteId(id) {
    var _this6 = this;
    return (0,_Users_raja_Documents_officeProjects_Live_issues_Ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const selectedTab = getTab(_this6.tabs, id);
      if (!_this6.shouldSwitch(selectedTab)) {
        return {
          changed: false,
          element: _this6.selectedTab
        };
      }
      yield _this6.setActive(selectedTab);
      return {
        changed: true,
        element: _this6.selectedTab,
        markVisible: () => _this6.tabSwitch()
      };
    })();
  }
  /** @internal */
  getRouteId() {
    var _this7 = this;
    return (0,_Users_raja_Documents_officeProjects_Live_issues_Ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a;
      const tabId = (_a = _this7.selectedTab) === null || _a === void 0 ? void 0 : _a.tab;
      return tabId !== undefined ? {
        id: tabId,
        element: _this7.selectedTab
      } : undefined;
    })();
  }
  setActive(selectedTab) {
    if (this.transitioning) {
      return Promise.reject('transitioning already happening');
    }
    this.transitioning = true;
    this.leavingTab = this.selectedTab;
    this.selectedTab = selectedTab;
    this.ionTabsWillChange.emit({
      tab: selectedTab.tab
    });
    selectedTab.active = true;
    return Promise.resolve();
  }
  tabSwitch() {
    const selectedTab = this.selectedTab;
    const leavingTab = this.leavingTab;
    this.leavingTab = undefined;
    this.transitioning = false;
    if (!selectedTab) {
      return;
    }
    if (leavingTab !== selectedTab) {
      if (leavingTab) {
        leavingTab.active = false;
      }
      this.ionTabsDidChange.emit({
        tab: selectedTab.tab
      });
    }
  }
  notifyRouter() {
    if (this.useRouter) {
      const router = document.querySelector('ion-router');
      if (router) {
        return router.navChanged('forward');
      }
    }
    return Promise.resolve(false);
  }
  shouldSwitch(selectedTab) {
    const leavingTab = this.selectedTab;
    return selectedTab !== undefined && selectedTab !== leavingTab && !this.transitioning;
  }
  get tabs() {
    return Array.from(this.el.querySelectorAll('ion-tab'));
  }
  render() {
    return (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.e, {
      key: '20b97196d78c1b3f3faf31618a8a2347e087f06b',
      onIonTabButtonClick: this.onTabClicked
    }, (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", {
      key: 'b0823fbae6e47743cfd12c376b365ad7e32cec7c',
      name: "top"
    }), (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      key: 'eaffd7e4d69ab9489a387e3bbb36e3bab72203a0',
      class: "tabs-inner"
    }, (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", {
      key: '20bb66a2937e3ec473aa59c4075ce581b5411677'
    })), (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", {
      key: '1529dd361f050f52074f51c73b3982ba827dc3a5',
      name: "bottom"
    }));
  }
  get el() {
    return (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.f)(this);
  }
};
const getTab = (tabs, tab) => {
  const tabEl = typeof tab === 'string' ? tabs.find(t => t.tab === tab) : tab;
  if (!tabEl) {
    (0,_index_cfd9c1f2_js__WEBPACK_IMPORTED_MODULE_3__.d)(`[ion-tabs] - Tab with id: "${tabEl}" does not exist`);
  }
  return tabEl;
};
Tabs.style = IonTabsStyle0;


/***/ })

}]);
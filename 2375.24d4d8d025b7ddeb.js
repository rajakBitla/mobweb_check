"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[2375],{

/***/ 32375:
/*!********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-accordion_2.entry.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ion_accordion: () => (/* binding */ Accordion),
/* harmony export */   ion_accordion_group: () => (/* binding */ AccordionGroup)
/* harmony export */ });
/* harmony import */ var _Users_raja_Documents_officeProjects_Live_issues_Ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-527b9e34.js */ 96317);
/* harmony import */ var _helpers_d94bc8ad_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-d94bc8ad.js */ 92486);
/* harmony import */ var _index_e2cf2ceb_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index-e2cf2ceb.js */ 23992);
/* harmony import */ var _index_cfd9c1f2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index-cfd9c1f2.js */ 8736);
/* harmony import */ var _ionic_global_b26f573e_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ionic-global-b26f573e.js */ 12508);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */





const accordionIosCss = ":host{display:block;position:relative;width:100%;background-color:var(--ion-background-color, #ffffff);overflow:hidden;z-index:0}:host(.accordion-expanding) ::slotted(ion-item[slot=header]),:host(.accordion-expanded) ::slotted(ion-item[slot=header]){--border-width:0px}:host(.accordion-animated){-webkit-transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}:host(.accordion-animated) #content{-webkit-transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}#content{overflow:hidden;will-change:max-height}:host(.accordion-collapsing) #content{max-height:0 !important}:host(.accordion-collapsed) #content{display:none}:host(.accordion-expanding) #content{max-height:0}:host(.accordion-expanding) #content-wrapper{overflow:auto}:host(.accordion-disabled) #header,:host(.accordion-readonly) #header,:host(.accordion-disabled) #content,:host(.accordion-readonly) #content{pointer-events:none}:host(.accordion-disabled) #header,:host(.accordion-disabled) #content{opacity:0.4}@media (prefers-reduced-motion: reduce){:host,#content{-webkit-transition:none !important;transition:none !important}}:host(.accordion-next) ::slotted(ion-item[slot=header]){--border-width:0.55px 0px 0.55px 0px}";
const IonAccordionIosStyle0 = accordionIosCss;
const accordionMdCss = ":host{display:block;position:relative;width:100%;background-color:var(--ion-background-color, #ffffff);overflow:hidden;z-index:0}:host(.accordion-expanding) ::slotted(ion-item[slot=header]),:host(.accordion-expanded) ::slotted(ion-item[slot=header]){--border-width:0px}:host(.accordion-animated){-webkit-transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}:host(.accordion-animated) #content{-webkit-transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}#content{overflow:hidden;will-change:max-height}:host(.accordion-collapsing) #content{max-height:0 !important}:host(.accordion-collapsed) #content{display:none}:host(.accordion-expanding) #content{max-height:0}:host(.accordion-expanding) #content-wrapper{overflow:auto}:host(.accordion-disabled) #header,:host(.accordion-readonly) #header,:host(.accordion-disabled) #content,:host(.accordion-readonly) #content{pointer-events:none}:host(.accordion-disabled) #header,:host(.accordion-disabled) #content{opacity:0.4}@media (prefers-reduced-motion: reduce){:host,#content{-webkit-transition:none !important;transition:none !important}}";
const IonAccordionMdStyle0 = accordionMdCss;
const Accordion = class {
  constructor(hostRef) {
    var _this = this;
    (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.updateListener = () => this.updateState(false);
    this.setItemDefaults = () => {
      const ionItem = this.getSlottedHeaderIonItem();
      if (!ionItem) {
        return;
      }
      /**
       * For a11y purposes, we make
       * the ion-item a button so users
       * can tab to it and use keyboard
       * navigation to get around.
       */
      ionItem.button = true;
      ionItem.detail = false;
      /**
       * By default, the lines in an
       * item should be full here, but
       * only do that if a user has
       * not explicitly overridden them
       */
      if (ionItem.lines === undefined) {
        ionItem.lines = 'full';
      }
    };
    this.getSlottedHeaderIonItem = () => {
      const {
        headerEl
      } = this;
      if (!headerEl) {
        return;
      }
      /**
       * Get the first ion-item
       * slotted in the header slot
       */
      const slot = headerEl.querySelector('slot');
      if (!slot) {
        return;
      }
      // This is not defined in unit tests
      if (slot.assignedElements === undefined) return;
      return slot.assignedElements().find(el => el.tagName === 'ION-ITEM');
    };
    this.setAria = (expanded = false) => {
      const ionItem = this.getSlottedHeaderIonItem();
      if (!ionItem) {
        return;
      }
      /**
       * Get the native <button> element inside of
       * ion-item because that is what will be focused
       */
      const root = (0,_helpers_d94bc8ad_js__WEBPACK_IMPORTED_MODULE_2__.g)(ionItem);
      const button = root.querySelector('button');
      if (!button) {
        return;
      }
      button.setAttribute('aria-expanded', `${expanded}`);
    };
    this.slotToggleIcon = () => {
      const ionItem = this.getSlottedHeaderIonItem();
      if (!ionItem) {
        return;
      }
      const {
        toggleIconSlot,
        toggleIcon
      } = this;
      /**
       * Check if there already is a toggle icon.
       * If so, do not add another one.
       */
      const existingToggleIcon = ionItem.querySelector('.ion-accordion-toggle-icon');
      if (existingToggleIcon) {
        return;
      }
      const iconEl = document.createElement('ion-icon');
      iconEl.slot = toggleIconSlot;
      iconEl.lazy = false;
      iconEl.classList.add('ion-accordion-toggle-icon');
      iconEl.icon = toggleIcon;
      iconEl.setAttribute('aria-hidden', 'true');
      ionItem.appendChild(iconEl);
    };
    this.expandAccordion = (initialUpdate = false) => {
      const {
        contentEl,
        contentElWrapper
      } = this;
      if (initialUpdate || contentEl === undefined || contentElWrapper === undefined) {
        this.state = 4 /* AccordionState.Expanded */;
        return;
      }
      if (this.state === 4 /* AccordionState.Expanded */) {
        return;
      }
      if (this.currentRaf !== undefined) {
        cancelAnimationFrame(this.currentRaf);
      }
      if (this.shouldAnimate()) {
        (0,_helpers_d94bc8ad_js__WEBPACK_IMPORTED_MODULE_2__.r)(() => {
          this.state = 8 /* AccordionState.Expanding */;
          this.currentRaf = (0,_helpers_d94bc8ad_js__WEBPACK_IMPORTED_MODULE_2__.r)(/*#__PURE__*/(0,_Users_raja_Documents_officeProjects_Live_issues_Ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            const contentHeight = contentElWrapper.offsetHeight;
            const waitForTransition = (0,_helpers_d94bc8ad_js__WEBPACK_IMPORTED_MODULE_2__.t)(contentEl, 2000);
            contentEl.style.setProperty('max-height', `${contentHeight}px`);
            yield waitForTransition;
            _this.state = 4 /* AccordionState.Expanded */;
            contentEl.style.removeProperty('max-height');
          }));
        });
      } else {
        this.state = 4 /* AccordionState.Expanded */;
      }
    };
    this.collapseAccordion = (initialUpdate = false) => {
      const {
        contentEl
      } = this;
      if (initialUpdate || contentEl === undefined) {
        this.state = 1 /* AccordionState.Collapsed */;
        return;
      }
      if (this.state === 1 /* AccordionState.Collapsed */) {
        return;
      }
      if (this.currentRaf !== undefined) {
        cancelAnimationFrame(this.currentRaf);
      }
      if (this.shouldAnimate()) {
        this.currentRaf = (0,_helpers_d94bc8ad_js__WEBPACK_IMPORTED_MODULE_2__.r)(/*#__PURE__*/(0,_Users_raja_Documents_officeProjects_Live_issues_Ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          const contentHeight = contentEl.offsetHeight;
          contentEl.style.setProperty('max-height', `${contentHeight}px`);
          (0,_helpers_d94bc8ad_js__WEBPACK_IMPORTED_MODULE_2__.r)(/*#__PURE__*/(0,_Users_raja_Documents_officeProjects_Live_issues_Ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            const waitForTransition = (0,_helpers_d94bc8ad_js__WEBPACK_IMPORTED_MODULE_2__.t)(contentEl, 2000);
            _this.state = 2 /* AccordionState.Collapsing */;
            yield waitForTransition;
            _this.state = 1 /* AccordionState.Collapsed */;
            contentEl.style.removeProperty('max-height');
          }));
        }));
      } else {
        this.state = 1 /* AccordionState.Collapsed */;
      }
    };
    /**
     * Helper function to determine if
     * something should animate.
     * If prefers-reduced-motion is set
     * then we should not animate, regardless
     * of what is set in the config.
     */
    this.shouldAnimate = () => {
      if (typeof window === 'undefined') {
        return false;
      }
      const prefersReducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        return false;
      }
      const animated = _index_cfd9c1f2_js__WEBPACK_IMPORTED_MODULE_4__.c.get('animated', true);
      if (!animated) {
        return false;
      }
      if (this.accordionGroupEl && !this.accordionGroupEl.animated) {
        return false;
      }
      return true;
    };
    this.updateState = /*#__PURE__*/(0,_Users_raja_Documents_officeProjects_Live_issues_Ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (initialUpdate = false) {
      const accordionGroup = _this.accordionGroupEl;
      const accordionValue = _this.value;
      if (!accordionGroup) {
        return;
      }
      const value = accordionGroup.value;
      const shouldExpand = Array.isArray(value) ? value.includes(accordionValue) : value === accordionValue;
      if (shouldExpand) {
        _this.expandAccordion(initialUpdate);
        _this.isNext = _this.isPrevious = false;
      } else {
        _this.collapseAccordion(initialUpdate);
        /**
         * When using popout or inset,
         * the collapsed accordion items
         * may need additional border radius
         * applied. Check to see if the
         * next or previous accordion is selected.
         */
        const nextAccordion = _this.getNextSibling();
        const nextAccordionValue = nextAccordion === null || nextAccordion === void 0 ? void 0 : nextAccordion.value;
        if (nextAccordionValue !== undefined) {
          _this.isPrevious = Array.isArray(value) ? value.includes(nextAccordionValue) : value === nextAccordionValue;
        }
        const previousAccordion = _this.getPreviousSibling();
        const previousAccordionValue = previousAccordion === null || previousAccordion === void 0 ? void 0 : previousAccordion.value;
        if (previousAccordionValue !== undefined) {
          _this.isNext = Array.isArray(value) ? value.includes(previousAccordionValue) : value === previousAccordionValue;
        }
      }
    });
    this.getNextSibling = () => {
      if (!this.el) {
        return;
      }
      const nextSibling = this.el.nextElementSibling;
      if ((nextSibling === null || nextSibling === void 0 ? void 0 : nextSibling.tagName) !== 'ION-ACCORDION') {
        return;
      }
      return nextSibling;
    };
    this.getPreviousSibling = () => {
      if (!this.el) {
        return;
      }
      const previousSibling = this.el.previousElementSibling;
      if ((previousSibling === null || previousSibling === void 0 ? void 0 : previousSibling.tagName) !== 'ION-ACCORDION') {
        return;
      }
      return previousSibling;
    };
    this.state = 1 /* AccordionState.Collapsed */;
    this.isNext = false;
    this.isPrevious = false;
    this.value = `ion-accordion-${accordionIds++}`;
    this.disabled = false;
    this.readonly = false;
    this.toggleIcon = _index_e2cf2ceb_js__WEBPACK_IMPORTED_MODULE_3__.l;
    this.toggleIconSlot = 'end';
  }
  valueChanged() {
    this.updateState();
  }
  connectedCallback() {
    var _a;
    const accordionGroupEl = this.accordionGroupEl = (_a = this.el) === null || _a === void 0 ? void 0 : _a.closest('ion-accordion-group');
    if (accordionGroupEl) {
      this.updateState(true);
      (0,_helpers_d94bc8ad_js__WEBPACK_IMPORTED_MODULE_2__.a)(accordionGroupEl, 'ionValueChange', this.updateListener);
    }
  }
  disconnectedCallback() {
    const accordionGroupEl = this.accordionGroupEl;
    if (accordionGroupEl) {
      (0,_helpers_d94bc8ad_js__WEBPACK_IMPORTED_MODULE_2__.b)(accordionGroupEl, 'ionValueChange', this.updateListener);
    }
  }
  componentDidLoad() {
    this.setItemDefaults();
    this.slotToggleIcon();
    /**
     * We need to wait a tick because we
     * just set ionItem.button = true and
     * the button has not have been rendered yet.
     */
    (0,_helpers_d94bc8ad_js__WEBPACK_IMPORTED_MODULE_2__.r)(() => {
      /**
       * Set aria label on button inside of ion-item
       * once the inner content has been rendered.
       */
      const expanded = this.state === 4 /* AccordionState.Expanded */ || this.state === 8 /* AccordionState.Expanding */;
      this.setAria(expanded);
    });
  }
  toggleExpanded() {
    const {
      accordionGroupEl,
      disabled,
      readonly,
      value,
      state
    } = this;
    if (disabled || readonly) return;
    if (accordionGroupEl) {
      /**
       * Because the accordion group may or may
       * not allow multiple accordions open, we
       * need to request the toggling of this
       * accordion and the accordion group will
       * make the decision on whether or not
       * to allow it.
       */
      const expand = state === 1 /* AccordionState.Collapsed */ || state === 2 /* AccordionState.Collapsing */;
      accordionGroupEl.requestAccordionToggle(value, expand);
    }
  }
  render() {
    const {
      disabled,
      readonly
    } = this;
    const mode = (0,_ionic_global_b26f573e_js__WEBPACK_IMPORTED_MODULE_5__.b)(this);
    const expanded = this.state === 4 /* AccordionState.Expanded */ || this.state === 8 /* AccordionState.Expanding */;
    const headerPart = expanded ? 'header expanded' : 'header';
    const contentPart = expanded ? 'content expanded' : 'content';
    this.setAria(expanded);
    return (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.e, {
      key: '073e1d02c18dcbc20c68648426e87c14750c031d',
      class: {
        [mode]: true,
        'accordion-expanding': this.state === 8 /* AccordionState.Expanding */,
        'accordion-expanded': this.state === 4 /* AccordionState.Expanded */,
        'accordion-collapsing': this.state === 2 /* AccordionState.Collapsing */,
        'accordion-collapsed': this.state === 1 /* AccordionState.Collapsed */,
        'accordion-next': this.isNext,
        'accordion-previous': this.isPrevious,
        'accordion-disabled': disabled,
        'accordion-readonly': readonly,
        'accordion-animated': this.shouldAnimate()
      }
    }, (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      key: '9b4cf326de8bb6b4033992903c0c1bfd7eea9bcc',
      onClick: () => this.toggleExpanded(),
      id: "header",
      part: headerPart,
      "aria-controls": "content",
      ref: headerEl => this.headerEl = headerEl
    }, (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", {
      key: '464c32a37f64655eacf4218284214f5f30b14a1e',
      name: "header"
    })), (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      key: '8bb52e6a62d7de0106b253201a89a32e79d9a594',
      id: "content",
      part: contentPart,
      role: "region",
      "aria-labelledby": "header",
      ref: contentEl => this.contentEl = contentEl
    }, (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      key: '1d9dfd952ad493754aaeea7a8f625b33c2dd90a0',
      id: "content-wrapper",
      ref: contentElWrapper => this.contentElWrapper = contentElWrapper
    }, (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", {
      key: '970dfbc55a612d739d0ca3b7b1a08e5c96d0c479',
      name: "content"
    }))));
  }
  static get delegatesFocus() {
    return true;
  }
  get el() {
    return (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.f)(this);
  }
  static get watchers() {
    return {
      "value": ["valueChanged"]
    };
  }
};
let accordionIds = 0;
Accordion.style = {
  ios: IonAccordionIosStyle0,
  md: IonAccordionMdStyle0
};
const accordionGroupIosCss = ":host{display:block}:host(.accordion-group-expand-inset){-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:16px;margin-bottom:16px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanding),:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanded){border-bottom:none}";
const IonAccordionGroupIosStyle0 = accordionGroupIosCss;
const accordionGroupMdCss = ":host{display:block}:host(.accordion-group-expand-inset){-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:16px;margin-bottom:16px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion){-webkit-box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanding),:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanded){margin-left:0;margin-right:0;margin-top:16px;margin-bottom:16px;border-radius:6px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-previous){border-end-end-radius:6px;border-end-start-radius:6px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-next){border-start-start-radius:6px;border-start-end-radius:6px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion):first-of-type{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}";
const IonAccordionGroupMdStyle0 = accordionGroupMdCss;
const AccordionGroup = class {
  constructor(hostRef) {
    (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.ionChange = (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.c)(this, "ionChange", 7);
    this.ionValueChange = (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.c)(this, "ionValueChange", 7);
    this.animated = true;
    this.multiple = undefined;
    this.value = undefined;
    this.disabled = false;
    this.readonly = false;
    this.expand = 'compact';
  }
  valueChanged() {
    const {
      value,
      multiple
    } = this;
    if (!multiple && Array.isArray(value)) {
      /**
       * We do some processing on the `value` array so
       * that it looks more like an array when logged to
       * the console.
       * Example given ['a', 'b']
       * Default toString() behavior: a,b
       * Custom behavior: ['a', 'b']
       */
      (0,_index_cfd9c1f2_js__WEBPACK_IMPORTED_MODULE_4__.p)(`[ion-accordion-group] - An array of values was passed, but multiple is "false". This is incorrect usage and may result in unexpected behaviors. To dismiss this warning, pass a string to the "value" property when multiple="false".

  Value Passed: [${value.map(v => `'${v}'`).join(', ')}]
`, this.el);
    }
    /**
     * Do not use `value` here as that will be
     * not account for the adjustment we make above.
     */
    this.ionValueChange.emit({
      value: this.value
    });
  }
  disabledChanged() {
    var _this2 = this;
    return (0,_Users_raja_Documents_officeProjects_Live_issues_Ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        disabled
      } = _this2;
      const accordions = yield _this2.getAccordions();
      for (const accordion of accordions) {
        accordion.disabled = disabled;
      }
    })();
  }
  readonlyChanged() {
    var _this3 = this;
    return (0,_Users_raja_Documents_officeProjects_Live_issues_Ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        readonly
      } = _this3;
      const accordions = yield _this3.getAccordions();
      for (const accordion of accordions) {
        accordion.readonly = readonly;
      }
    })();
  }
  onKeydown(ev) {
    var _this4 = this;
    return (0,_Users_raja_Documents_officeProjects_Live_issues_Ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const activeElement = document.activeElement;
      if (!activeElement) {
        return;
      }
      /**
       * Make sure focus is in the header, not the body, of the accordion. This ensures
       * that if there are any interactable elements in the body, their keyboard
       * interaction doesn't get stolen by the accordion. Example: using up/down keys
       * in ion-textarea.
       */
      const activeAccordionHeader = activeElement.closest('ion-accordion [slot="header"]');
      if (!activeAccordionHeader) {
        return;
      }
      const accordionEl = activeElement.tagName === 'ION-ACCORDION' ? activeElement : activeElement.closest('ion-accordion');
      if (!accordionEl) {
        return;
      }
      const closestGroup = accordionEl.closest('ion-accordion-group');
      if (closestGroup !== _this4.el) {
        return;
      }
      // If the active accordion is not in the current array of accordions, do not do anything
      const accordions = yield _this4.getAccordions();
      const startingIndex = accordions.findIndex(a => a === accordionEl);
      if (startingIndex === -1) {
        return;
      }
      let accordion;
      if (ev.key === 'ArrowDown') {
        accordion = _this4.findNextAccordion(accordions, startingIndex);
      } else if (ev.key === 'ArrowUp') {
        accordion = _this4.findPreviousAccordion(accordions, startingIndex);
      } else if (ev.key === 'Home') {
        accordion = accordions[0];
      } else if (ev.key === 'End') {
        accordion = accordions[accordions.length - 1];
      }
      if (accordion !== undefined && accordion !== activeElement) {
        accordion.focus();
      }
    })();
  }
  componentDidLoad() {
    var _this5 = this;
    return (0,_Users_raja_Documents_officeProjects_Live_issues_Ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this5.disabled) {
        _this5.disabledChanged();
      }
      if (_this5.readonly) {
        _this5.readonlyChanged();
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
      _this5.valueChanged();
    })();
  }
  /**
   * Sets the value property and emits ionChange.
   * This should only be called when the user interacts
   * with the accordion and not for any update
   * to the value property. The exception is when
   * the app sets the value of a single-select
   * accordion group to an array.
   */
  setValue(accordionValue) {
    const value = this.value = accordionValue;
    this.ionChange.emit({
      value
    });
  }
  /**
   * This method is used to ensure that the value
   * of ion-accordion-group is being set in a valid
   * way. This method should only be called in
   * response to a user generated action.
   * @internal
   */
  requestAccordionToggle(accordionValue, accordionExpand) {
    var _this6 = this;
    return (0,_Users_raja_Documents_officeProjects_Live_issues_Ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        multiple,
        value,
        readonly,
        disabled
      } = _this6;
      if (readonly || disabled) {
        return;
      }
      if (accordionExpand) {
        /**
         * If group accepts multiple values
         * check to see if value is already in
         * in values array. If not, add it
         * to the array.
         */
        if (multiple) {
          const groupValue = value !== null && value !== void 0 ? value : [];
          const processedValue = Array.isArray(groupValue) ? groupValue : [groupValue];
          const valueExists = processedValue.find(v => v === accordionValue);
          if (valueExists === undefined && accordionValue !== undefined) {
            _this6.setValue([...processedValue, accordionValue]);
          }
        } else {
          _this6.setValue(accordionValue);
        }
      } else {
        /**
         * If collapsing accordion, either filter the value
         * out of the values array or unset the value.
         */
        if (multiple) {
          const groupValue = value !== null && value !== void 0 ? value : [];
          const processedValue = Array.isArray(groupValue) ? groupValue : [groupValue];
          _this6.setValue(processedValue.filter(v => v !== accordionValue));
        } else {
          _this6.setValue(undefined);
        }
      }
    })();
  }
  findNextAccordion(accordions, startingIndex) {
    const nextAccordion = accordions[startingIndex + 1];
    if (nextAccordion === undefined) {
      return accordions[0];
    }
    return nextAccordion;
  }
  findPreviousAccordion(accordions, startingIndex) {
    const prevAccordion = accordions[startingIndex - 1];
    if (prevAccordion === undefined) {
      return accordions[accordions.length - 1];
    }
    return prevAccordion;
  }
  /**
   * @internal
   */
  getAccordions() {
    var _this7 = this;
    return (0,_Users_raja_Documents_officeProjects_Live_issues_Ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return Array.from(_this7.el.querySelectorAll(':scope > ion-accordion'));
    })();
  }
  render() {
    const {
      disabled,
      readonly,
      expand
    } = this;
    const mode = (0,_ionic_global_b26f573e_js__WEBPACK_IMPORTED_MODULE_5__.b)(this);
    return (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.e, {
      key: 'd1a79a93179474fbba66fcf11a92f4871dacc975',
      class: {
        [mode]: true,
        'accordion-group-disabled': disabled,
        'accordion-group-readonly': readonly,
        [`accordion-group-expand-${expand}`]: true
      },
      role: "presentation"
    }, (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", {
      key: 'e6b8954b686d1fbb4fc92adb07fddc97a24b0a31'
    }));
  }
  get el() {
    return (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_1__.f)(this);
  }
  static get watchers() {
    return {
      "value": ["valueChanged"],
      "disabled": ["disabledChanged"],
      "readonly": ["readonlyChanged"]
    };
  }
};
AccordionGroup.style = {
  ios: IonAccordionGroupIosStyle0,
  md: IonAccordionGroupMdStyle0
};


/***/ })

}]);
"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[770],{

/***/ 90770:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-select-modal.entry.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ion_select_modal: () => (/* binding */ SelectModal)
/* harmony export */ });
/* harmony import */ var _index_527b9e34_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-527b9e34.js */ 96317);
/* harmony import */ var _ionic_global_b26f573e_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ionic-global-b26f573e.js */ 12508);
/* harmony import */ var _overlays_d99dcb0a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./overlays-d99dcb0a.js */ 31933);
/* harmony import */ var _theme_01f3f29c_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme-01f3f29c.js */ 80333);
/* harmony import */ var _index_cfd9c1f2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index-cfd9c1f2.js */ 8736);
/* harmony import */ var _index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index-a5d50daf.js */ 28476);
/* harmony import */ var _helpers_d94bc8ad_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers-d94bc8ad.js */ 92486);
/* harmony import */ var _hardware_back_button_a7eb8233_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hardware-back-button-a7eb8233.js */ 26292);
/* harmony import */ var _framework_delegate_56b467ad_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./framework-delegate-56b467ad.js */ 69245);
/* harmony import */ var _gesture_controller_314a54f6_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./gesture-controller-314a54f6.js */ 11970);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */










const ionicSelectModalMdCss = ".sc-ion-select-modal-ionic-h{height:100%}ion-list.sc-ion-select-modal-ionic ion-radio.sc-ion-select-modal-ionic::part(container){display:none}ion-list.sc-ion-select-modal-ionic ion-radio.sc-ion-select-modal-ionic::part(label){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}ion-item.sc-ion-select-modal-ionic{--inner-border-width:0}.item-radio-checked.sc-ion-select-modal-ionic{--background:rgba(var(--ion-color-primary-rgb, 0, 84, 233), 0.08);--background-focused:var(--ion-color-primary, #0054e9);--background-focused-opacity:0.2;--background-hover:var(--ion-color-primary, #0054e9);--background-hover-opacity:0.12}.item-checkbox-checked.sc-ion-select-modal-ionic{--background-activated:var(--ion-item-color, var(--ion-text-color, #000));--background-focused:var(--ion-item-color, var(--ion-text-color, #000));--background-hover:var(--ion-item-color, var(--ion-text-color, #000));--color:var(--ion-color-primary, #0054e9)}";
const IonSelectModalIonicStyle0 = ionicSelectModalMdCss;
const selectModalIosCss = ".sc-ion-select-modal-ios-h{height:100%}ion-item.sc-ion-select-modal-ios{--inner-padding-end:0}ion-radio.sc-ion-select-modal-ios::after{bottom:0;position:absolute;width:calc(100% - 0.9375rem - 16px);border-width:0px 0px 0.55px 0px;border-style:solid;border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, var(--ion-background-color-step-250, #c8c7cc))));content:\"\"}ion-radio.sc-ion-select-modal-ios::after{inset-inline-start:calc(0.9375rem + 16px)}";
const IonSelectModalIosStyle0 = selectModalIosCss;
const selectModalMdCss = ".sc-ion-select-modal-md-h{height:100%}ion-list.sc-ion-select-modal-md ion-radio.sc-ion-select-modal-md::part(container){display:none}ion-list.sc-ion-select-modal-md ion-radio.sc-ion-select-modal-md::part(label){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}ion-item.sc-ion-select-modal-md{--inner-border-width:0}.item-radio-checked.sc-ion-select-modal-md{--background:rgba(var(--ion-color-primary-rgb, 0, 84, 233), 0.08);--background-focused:var(--ion-color-primary, #0054e9);--background-focused-opacity:0.2;--background-hover:var(--ion-color-primary, #0054e9);--background-hover-opacity:0.12}.item-checkbox-checked.sc-ion-select-modal-md{--background-activated:var(--ion-item-color, var(--ion-text-color, #000));--background-focused:var(--ion-item-color, var(--ion-text-color, #000));--background-hover:var(--ion-item-color, var(--ion-text-color, #000));--color:var(--ion-color-primary, #0054e9)}";
const IonSelectModalMdStyle0 = selectModalMdCss;
const SelectModal = class {
  constructor(hostRef) {
    (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.header = undefined;
    this.multiple = undefined;
    this.options = [];
  }
  closeModal() {
    const modal = this.el.closest('ion-modal');
    if (modal) {
      modal.dismiss();
    }
  }
  findOptionFromEvent(ev) {
    const {
      options
    } = this;
    return options.find(o => o.value === ev.target.value);
  }
  getValues(ev) {
    const {
      multiple,
      options
    } = this;
    if (multiple) {
      // this is a modal with checkboxes (multiple value select)
      // return an array of all the checked values
      return options.filter(o => o.checked).map(o => o.value);
    }
    // this is a modal with radio buttons (single value select)
    // return the value that was clicked, otherwise undefined
    const option = ev ? this.findOptionFromEvent(ev) : null;
    return option ? option.value : undefined;
  }
  callOptionHandler(ev) {
    const option = this.findOptionFromEvent(ev);
    const values = this.getValues(ev);
    if (option === null || option === void 0 ? void 0 : option.handler) {
      (0,_overlays_d99dcb0a_js__WEBPACK_IMPORTED_MODULE_2__.s)(option.handler, values);
    }
  }
  setChecked(ev) {
    const {
      multiple
    } = this;
    const option = this.findOptionFromEvent(ev);
    // this is a modal with checkboxes (multiple value select)
    // we need to set the checked value for this option
    if (multiple && option) {
      option.checked = ev.detail.checked;
    }
  }
  renderRadioOptions() {
    const checked = this.options.filter(o => o.checked).map(o => o.value)[0];
    return (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_0__.h)("ion-radio-group", {
      value: checked,
      onIonChange: ev => this.callOptionHandler(ev)
    }, this.options.map(option => (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_0__.h)("ion-item", {
      lines: "none",
      class: Object.assign({
        // TODO FW-4784
        'item-radio-checked': option.value === checked
      }, (0,_theme_01f3f29c_js__WEBPACK_IMPORTED_MODULE_3__.g)(option.cssClass))
    }, (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_0__.h)("ion-radio", {
      value: option.value,
      disabled: option.disabled,
      justify: "start",
      labelPlacement: "end",
      onClick: () => this.closeModal(),
      onKeyUp: ev => {
        if (ev.key === ' ') {
          /**
           * Selecting a radio option with keyboard navigation,
           * either through the Enter or Space keys, should
           * dismiss the modal.
           */
          this.closeModal();
        }
      }
    }, option.text))));
  }
  renderCheckboxOptions() {
    return this.options.map(option => (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_0__.h)("ion-item", {
      class: Object.assign({
        // TODO FW-4784
        'item-checkbox-checked': option.checked
      }, (0,_theme_01f3f29c_js__WEBPACK_IMPORTED_MODULE_3__.g)(option.cssClass))
    }, (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_0__.h)("ion-checkbox", {
      value: option.value,
      disabled: option.disabled,
      checked: option.checked,
      justify: "start",
      labelPlacement: "end",
      onIonChange: ev => {
        this.setChecked(ev);
        this.callOptionHandler(ev);
        // TODO FW-4784
        (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_0__.i)(this);
      }
    }, option.text)));
  }
  render() {
    return (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_0__.e, {
      key: '885198a9f21884e3bfb9bf0af53e0ee3ae37b231',
      class: (0,_ionic_global_b26f573e_js__WEBPACK_IMPORTED_MODULE_1__.b)(this)
    }, (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_0__.h)("ion-header", {
      key: 'd8b63726869747ac711e4fda78a50ce46f72970c'
    }, (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_0__.h)("ion-toolbar", {
      key: '9ab2a4c1480dd74eeae38d7b580a2e87fb71270e'
    }, this.header !== undefined && (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_0__.h)("ion-title", {
      key: '87a7034385ef57f55cefdd0371dbb66a64827290'
    }, this.header), (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_0__.h)("ion-buttons", {
      key: '0a35424ea13ca002abc9a43b6138730254f187d0',
      slot: "end"
    }, (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_0__.h)("ion-button", {
      key: '238bf40b47128d9aa995d14d9ff9ebcae4f79492',
      onClick: () => this.closeModal()
    }, "Close")))), (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_0__.h)("ion-content", {
      key: '4a256f3381f8cabbc7194337b8ae4aa1c3ab1066'
    }, (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_0__.h)("ion-list", {
      key: 'acd38fc52024632176467ed6a84106a454021544'
    }, this.multiple === true ? this.renderCheckboxOptions() : this.renderRadioOptions())));
  }
  get el() {
    return (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_0__.f)(this);
  }
};
SelectModal.style = {
  ionic: IonSelectModalIonicStyle0,
  ios: IonSelectModalIosStyle0,
  md: IonSelectModalMdStyle0
};


/***/ })

}]);
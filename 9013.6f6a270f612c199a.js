"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[9013],{

/***/ 89013:
/*!*****************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-picker-column-option.entry.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ion_picker_column_option: () => (/* binding */ PickerColumnOption)
/* harmony export */ });
/* harmony import */ var _index_527b9e34_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-527b9e34.js */ 96317);
/* harmony import */ var _helpers_d94bc8ad_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers-d94bc8ad.js */ 92486);
/* harmony import */ var _theme_01f3f29c_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme-01f3f29c.js */ 80333);
/* harmony import */ var _ionic_global_b26f573e_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ionic-global-b26f573e.js */ 12508);
/* harmony import */ var _index_cfd9c1f2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index-cfd9c1f2.js */ 8736);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */





const pickerColumnOptionIosCss = "button{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;width:100%;height:34px;border:0px;outline:none;background:transparent;color:inherit;font-family:var(--ion-font-family, inherit);font-size:inherit;line-height:34px;text-align:inherit;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;overflow:hidden}:host(.option-disabled){opacity:0.4}:host(.option-disabled) button{cursor:default}";
const IonPickerColumnOptionIosStyle0 = pickerColumnOptionIosCss;
const pickerColumnOptionMdCss = "button{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;width:100%;height:34px;border:0px;outline:none;background:transparent;color:inherit;font-family:var(--ion-font-family, inherit);font-size:inherit;line-height:34px;text-align:inherit;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;overflow:hidden}:host(.option-disabled){opacity:0.4}:host(.option-disabled) button{cursor:default}:host(.option-active){color:var(--ion-color-base)}";
const IonPickerColumnOptionMdStyle0 = pickerColumnOptionMdCss;
const PickerColumnOption = class {
  constructor(hostRef) {
    (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    /**
     * We keep track of the parent picker column
     * so we can update the value of it when
     * clicking an enable option.
     */
    this.pickerColumn = null;
    this.ariaLabel = null;
    this.disabled = false;
    this.value = undefined;
    this.color = 'primary';
  }
  /**
   * The aria-label of the option has changed after the
   * first render and needs to be updated within the component.
   *
   * @param ariaLbl The new aria-label value.
   */
  onAriaLabelChange(ariaLbl) {
    this.ariaLabel = ariaLbl;
  }
  componentWillLoad() {
    const inheritedAttributes = (0,_helpers_d94bc8ad_js__WEBPACK_IMPORTED_MODULE_1__.h)(this.el, ['aria-label']);
    /**
     * The initial value of `aria-label` needs to be set for
     * the first render.
          */
    this.ariaLabel = inheritedAttributes['aria-label'] || null;
  }
  connectedCallback() {
    this.pickerColumn = this.el.closest('ion-picker-column');
  }
  disconnectedCallback() {
    this.pickerColumn = null;
  }
  /**
   * The column options can load at any time
   * so the options needs to tell the
   * parent picker column when it is loaded
   * so the picker column can ensure it is
   * centered in the view.
   *
   * We intentionally run this for every
   * option. If we only ran this from
   * the selected option then if the newly
   * loaded options were not selected then
   * scrollActiveItemIntoView would not be called.
   */
  componentDidLoad() {
    const {
      pickerColumn
    } = this;
    if (pickerColumn !== null) {
      pickerColumn.scrollActiveItemIntoView();
    }
  }
  /**
   * When an option is clicked, update the
   * parent picker column value. This
   * component will handle centering the option
   * in the column view.
   */
  onClick() {
    const {
      pickerColumn
    } = this;
    if (pickerColumn !== null) {
      pickerColumn.setValue(this.value);
    }
  }
  render() {
    const {
      color,
      disabled,
      ariaLabel
    } = this;
    const mode = (0,_ionic_global_b26f573e_js__WEBPACK_IMPORTED_MODULE_3__.b)(this);
    return (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_0__.e, {
      key: 'c1353e99c2aa19c0e3ddbe433557ed18e72e1c66',
      class: (0,_theme_01f3f29c_js__WEBPACK_IMPORTED_MODULE_2__.c)(color, {
        [mode]: true,
        ['option-disabled']: disabled
      })
    }, (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", {
      key: 'b4ee62ecf7458a07a56e8aa494485766a87a3fcb',
      tabindex: "-1",
      "aria-label": ariaLabel,
      disabled: disabled,
      onClick: () => this.onClick()
    }, (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", {
      key: '9ab1e4700c27103b676670a4b3521c183c6ab83d'
    })));
  }
  get el() {
    return (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_0__.f)(this);
  }
  static get watchers() {
    return {
      "aria-label": ["onAriaLabelChange"]
    };
  }
};
PickerColumnOption.style = {
  ios: IonPickerColumnOptionIosStyle0,
  md: IonPickerColumnOptionMdStyle0
};


/***/ })

}]);
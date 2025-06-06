"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[2836],{

/***/ 2836:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-be190feb.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   startTapClick: () => (/* binding */ startTapClick)
/* harmony export */ });
/* harmony import */ var _index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-a5d50daf.js */ 28476);
/* harmony import */ var _helpers_d94bc8ad_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers-d94bc8ad.js */ 92486);
/* harmony import */ var _index_cfd9c1f2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-cfd9c1f2.js */ 8736);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */



const startTapClick = config => {
  if (_index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_0__.d === undefined) {
    return;
  }
  let lastActivated = 0;
  let activatableEle;
  let activeRipple;
  let activeDefer;
  const useRippleEffect = config.getBoolean('animated', true) && config.getBoolean('rippleEffect', true);
  const clearDefers = new WeakMap();
  const cancelActive = () => {
    if (activeDefer) clearTimeout(activeDefer);
    activeDefer = undefined;
    if (activatableEle) {
      removeActivated(false);
      activatableEle = undefined;
    }
  };
  const pointerDown = ev => {
    // Ignore right clicks
    if (activatableEle || ev.button === 2) {
      return;
    }
    setActivatedElement(getActivatableTarget(ev), ev);
  };
  const pointerUp = ev => {
    setActivatedElement(undefined, ev);
  };
  const setActivatedElement = (el, ev) => {
    // do nothing
    if (el && el === activatableEle) {
      return;
    }
    if (activeDefer) clearTimeout(activeDefer);
    activeDefer = undefined;
    const {
      x,
      y
    } = (0,_helpers_d94bc8ad_js__WEBPACK_IMPORTED_MODULE_1__.q)(ev);
    // deactivate selected
    if (activatableEle) {
      if (clearDefers.has(activatableEle)) {
        throw new Error('internal error');
      }
      if (!activatableEle.classList.contains(ACTIVATED)) {
        addActivated(activatableEle, x, y);
      }
      removeActivated(true);
    }
    // activate
    if (el) {
      const deferId = clearDefers.get(el);
      if (deferId) {
        clearTimeout(deferId);
        clearDefers.delete(el);
      }
      el.classList.remove(ACTIVATED);
      const callback = () => {
        addActivated(el, x, y);
        activeDefer = undefined;
      };
      if (isInstant(el)) {
        callback();
      } else {
        activeDefer = setTimeout(callback, ADD_ACTIVATED_DEFERS);
      }
    }
    activatableEle = el;
  };
  const addActivated = (el, x, y) => {
    lastActivated = Date.now();
    el.classList.add(ACTIVATED);
    if (!useRippleEffect) return;
    const rippleEffect = getRippleEffect(el);
    if (rippleEffect !== null) {
      removeRipple();
      activeRipple = rippleEffect.addRipple(x, y);
    }
  };
  const removeRipple = () => {
    if (activeRipple !== undefined) {
      activeRipple.then(remove => remove());
      activeRipple = undefined;
    }
  };
  const removeActivated = smooth => {
    removeRipple();
    const active = activatableEle;
    if (!active) {
      return;
    }
    const time = CLEAR_STATE_DEFERS - Date.now() + lastActivated;
    if (smooth && time > 0 && !isInstant(active)) {
      const deferId = setTimeout(() => {
        active.classList.remove(ACTIVATED);
        clearDefers.delete(active);
      }, CLEAR_STATE_DEFERS);
      clearDefers.set(active, deferId);
    } else {
      active.classList.remove(ACTIVATED);
    }
  };
  _index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_0__.d.addEventListener('ionGestureCaptured', cancelActive);
  _index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_0__.d.addEventListener('pointerdown', pointerDown, true);
  _index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_0__.d.addEventListener('pointerup', pointerUp, true);
  /**
   * Tap click effects such as the ripple effect should
   * not happen when scrolling. For example, if a user scrolls
   * the page but also happens to do a touchstart on a button
   * as part of the scroll, the ripple effect should not
   * be dispatched. The ripple effect should only happen
   * if the button is activated and the page is not scrolling.
   *
   * pointercancel is dispatched on a gesture when scrolling
   * starts, so this lets us avoid having to listen for
   * ion-content's scroll events.
   */
  _index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_0__.d.addEventListener('pointercancel', cancelActive, true);
};
// TODO(FW-2832): type
const getActivatableTarget = ev => {
  if (ev.composedPath !== undefined) {
    /**
     * composedPath returns EventTarget[]. However,
     * objects other than Element can be targets too.
     * For example, AudioContext can be a target. In this
     * case, we know that the event is a UIEvent so we
     * can assume that the path will contain either Element
     * or ShadowRoot.
     */
    const path = ev.composedPath();
    for (let i = 0; i < path.length - 2; i++) {
      const el = path[i];
      if (!(el instanceof ShadowRoot) && el.classList.contains('ion-activatable')) {
        return el;
      }
    }
  } else {
    return ev.target.closest('.ion-activatable');
  }
};
const isInstant = el => {
  return el.classList.contains('ion-activatable-instant');
};
const getRippleEffect = el => {
  if (el.shadowRoot) {
    const ripple = el.shadowRoot.querySelector('ion-ripple-effect');
    if (ripple) {
      return ripple;
    }
  }
  return el.querySelector('ion-ripple-effect');
};
const ACTIVATED = 'ion-activated';
const ADD_ACTIVATED_DEFERS = 100;
const CLEAR_STATE_DEFERS = 150;


/***/ })

}]);
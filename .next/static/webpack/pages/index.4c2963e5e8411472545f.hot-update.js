webpackHotUpdate_N_E("pages/index",{

/***/ "./util/library.js":
/*!*************************!*\
  !*** ./util/library.js ***!
  \*************************/
/*! exports provided: sum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sum", function() { return sum; });
var sum = function sum(key, props) {
  if (props.isGlobal == false) {
    switch (key) {
      case "Confirmed":
        return props.data[0].positif;

      case "Recovered":
        return props.data[0].sembuh;

      case "Deaths":
        return props.data[0].meninggal;

      case "Active":
        return props.data[0].dirawat;

      default:
        return 0;
    }
  } else {
    switch (key) {
      case "Confirmed":
        return props.data[0].positif;

      case "Recovered":
        return props.data[0].sembuh;

      case "Deaths":
        return props.data[0].meninggal;

      case "Active":
        return props.data[0].dirawat;

      default:
        return 0;
    }
  }
};

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbC9saWJyYXJ5LmpzIl0sIm5hbWVzIjpbInN1bSIsImtleSIsInByb3BzIiwiaXNHbG9iYWwiLCJkYXRhIiwicG9zaXRpZiIsInNlbWJ1aCIsIm1lbmluZ2dhbCIsImRpcmF3YXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQU8sSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sQ0FBVUMsR0FBVixFQUFlQyxLQUFmLEVBQXNCO0FBQ3ZDLE1BQUlBLEtBQUssQ0FBQ0MsUUFBTixJQUFrQixLQUF0QixFQUE2QjtBQUMzQixZQUFRRixHQUFSO0FBQ0UsV0FBSyxXQUFMO0FBQ0UsZUFBT0MsS0FBSyxDQUFDRSxJQUFOLENBQVcsQ0FBWCxFQUFjQyxPQUFyQjs7QUFDRixXQUFLLFdBQUw7QUFDRSxlQUFPSCxLQUFLLENBQUNFLElBQU4sQ0FBVyxDQUFYLEVBQWNFLE1BQXJCOztBQUNGLFdBQUssUUFBTDtBQUNFLGVBQU9KLEtBQUssQ0FBQ0UsSUFBTixDQUFXLENBQVgsRUFBY0csU0FBckI7O0FBQ0YsV0FBSyxRQUFMO0FBQ0UsZUFBT0wsS0FBSyxDQUFDRSxJQUFOLENBQVcsQ0FBWCxFQUFjSSxPQUFyQjs7QUFDRjtBQUNFLGVBQU8sQ0FBUDtBQVZKO0FBWUQsR0FiRCxNQWFPO0FBQ0wsWUFBUVAsR0FBUjtBQUNFLFdBQUssV0FBTDtBQUNFLGVBQU9DLEtBQUssQ0FBQ0UsSUFBTixDQUFXLENBQVgsRUFBY0MsT0FBckI7O0FBQ0YsV0FBSyxXQUFMO0FBQ0UsZUFBT0gsS0FBSyxDQUFDRSxJQUFOLENBQVcsQ0FBWCxFQUFjRSxNQUFyQjs7QUFDRixXQUFLLFFBQUw7QUFDRSxlQUFPSixLQUFLLENBQUNFLElBQU4sQ0FBVyxDQUFYLEVBQWNHLFNBQXJCOztBQUNGLFdBQUssUUFBTDtBQUNFLGVBQU9MLEtBQUssQ0FBQ0UsSUFBTixDQUFXLENBQVgsRUFBY0ksT0FBckI7O0FBQ0Y7QUFDRSxlQUFPLENBQVA7QUFWSjtBQVlEO0FBQ0YsQ0E1Qk0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNGMyOTYzZTVlODQxMTQ3MjU0NWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzdW0gPSBmdW5jdGlvbiAoa2V5LCBwcm9wcykge1xyXG4gIGlmIChwcm9wcy5pc0dsb2JhbCA9PSBmYWxzZSkge1xyXG4gICAgc3dpdGNoIChrZXkpIHtcclxuICAgICAgY2FzZSBcIkNvbmZpcm1lZFwiOlxyXG4gICAgICAgIHJldHVybiBwcm9wcy5kYXRhWzBdLnBvc2l0aWY7XHJcbiAgICAgIGNhc2UgXCJSZWNvdmVyZWRcIjpcclxuICAgICAgICByZXR1cm4gcHJvcHMuZGF0YVswXS5zZW1idWg7XHJcbiAgICAgIGNhc2UgXCJEZWF0aHNcIjpcclxuICAgICAgICByZXR1cm4gcHJvcHMuZGF0YVswXS5tZW5pbmdnYWw7XHJcbiAgICAgIGNhc2UgXCJBY3RpdmVcIjpcclxuICAgICAgICByZXR1cm4gcHJvcHMuZGF0YVswXS5kaXJhd2F0O1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBzd2l0Y2ggKGtleSkge1xyXG4gICAgICBjYXNlIFwiQ29uZmlybWVkXCI6XHJcbiAgICAgICAgcmV0dXJuIHByb3BzLmRhdGFbMF0ucG9zaXRpZjtcclxuICAgICAgY2FzZSBcIlJlY292ZXJlZFwiOlxyXG4gICAgICAgIHJldHVybiBwcm9wcy5kYXRhWzBdLnNlbWJ1aDtcclxuICAgICAgY2FzZSBcIkRlYXRoc1wiOlxyXG4gICAgICAgIHJldHVybiBwcm9wcy5kYXRhWzBdLm1lbmluZ2dhbDtcclxuICAgICAgY2FzZSBcIkFjdGl2ZVwiOlxyXG4gICAgICAgIHJldHVybiBwcm9wcy5kYXRhWzBdLmRpcmF3YXQ7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
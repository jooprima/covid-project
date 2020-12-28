webpackHotUpdate_N_E("pages/index",{

/***/ "./util/library.js":
/*!*************************!*\
  !*** ./util/library.js ***!
  \*************************/
/*! exports provided: sum, getAllMonth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sum", function() { return sum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllMonth", function() { return getAllMonth; });
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
        return props.data.reduce(function (sum, a) {
          return sum + a.attributes.Confirmed;
        }, 0);

      case "Recovered":
        return props.data.reduce(function (sum, a) {
          return sum + a.attributes.Recovered;
        }, 0);

      case "Deaths":
        return props.data.reduce(function (sum, a) {
          return sum + a.attributes.Deaths;
        }, 0);

      case "Active":
        return props.data.reduce(function (sum, a) {
          return sum + a.attributes.Active;
        }, 0);

      default:
        return 0;
    }
  }
};
var getAllMonth = function getAllMonth(props) {
  var monthEng = ["jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Des"];
  var nowDate = new Date();
  var day = null;
  var month = null;
  var year = null;
  var label = [];
  var positif = [];
  var sembuh = [];
  var meninggal = [];
  var active = [];
  var data = [];

  var _iterator = _createForOfIteratorHelper(props.statistik),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var value = _step.value;
      nowDate = new Date(value.Date);
      day = nowDate.getDate();
      month = nowDate.getMonth();
      year = nowDate.getFullYear();
      label.push(day + " " + monthEng[Math.abs(month)]);
      active.push(value.Active);
      sembuh.push(value.Recovered);
      meninggal.push(value.Deaths);
      positif.push(value.Confirmed);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  data = {
    label: label,
    active: active,
    sembuh: sembuh,
    meninggal: meninggal,
    positif: positif
  };
  return data;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbC9saWJyYXJ5LmpzIl0sIm5hbWVzIjpbInN1bSIsImtleSIsInByb3BzIiwiaXNHbG9iYWwiLCJkYXRhIiwicG9zaXRpZiIsInNlbWJ1aCIsIm1lbmluZ2dhbCIsImRpcmF3YXQiLCJyZWR1Y2UiLCJhIiwiYXR0cmlidXRlcyIsIkNvbmZpcm1lZCIsIlJlY292ZXJlZCIsIkRlYXRocyIsIkFjdGl2ZSIsImdldEFsbE1vbnRoIiwibW9udGhFbmciLCJub3dEYXRlIiwiRGF0ZSIsImRheSIsIm1vbnRoIiwieWVhciIsImxhYmVsIiwiYWN0aXZlIiwic3RhdGlzdGlrIiwidmFsdWUiLCJnZXREYXRlIiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsInB1c2giLCJNYXRoIiwiYWJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sQ0FBVUMsR0FBVixFQUFlQyxLQUFmLEVBQXNCO0FBQ3ZDLE1BQUlBLEtBQUssQ0FBQ0MsUUFBTixJQUFrQixLQUF0QixFQUE2QjtBQUMzQixZQUFRRixHQUFSO0FBQ0UsV0FBSyxXQUFMO0FBQ0UsZUFBT0MsS0FBSyxDQUFDRSxJQUFOLENBQVcsQ0FBWCxFQUFjQyxPQUFyQjs7QUFDRixXQUFLLFdBQUw7QUFDRSxlQUFPSCxLQUFLLENBQUNFLElBQU4sQ0FBVyxDQUFYLEVBQWNFLE1BQXJCOztBQUNGLFdBQUssUUFBTDtBQUNFLGVBQU9KLEtBQUssQ0FBQ0UsSUFBTixDQUFXLENBQVgsRUFBY0csU0FBckI7O0FBQ0YsV0FBSyxRQUFMO0FBQ0UsZUFBT0wsS0FBSyxDQUFDRSxJQUFOLENBQVcsQ0FBWCxFQUFjSSxPQUFyQjs7QUFDRjtBQUNFLGVBQU8sQ0FBUDtBQVZKO0FBWUQsR0FiRCxNQWFPO0FBQ0wsWUFBUVAsR0FBUjtBQUNFLFdBQUssV0FBTDtBQUNFLGVBQU9DLEtBQUssQ0FBQ0UsSUFBTixDQUFXSyxNQUFYLENBQWtCLFVBQUNULEdBQUQsRUFBTVUsQ0FBTixFQUFZO0FBQ25DLGlCQUFPVixHQUFHLEdBQUdVLENBQUMsQ0FBQ0MsVUFBRixDQUFhQyxTQUExQjtBQUNELFNBRk0sRUFFSixDQUZJLENBQVA7O0FBR0YsV0FBSyxXQUFMO0FBQ0UsZUFBT1YsS0FBSyxDQUFDRSxJQUFOLENBQVdLLE1BQVgsQ0FBa0IsVUFBQ1QsR0FBRCxFQUFNVSxDQUFOLEVBQVk7QUFDbkMsaUJBQU9WLEdBQUcsR0FBR1UsQ0FBQyxDQUFDQyxVQUFGLENBQWFFLFNBQTFCO0FBQ0QsU0FGTSxFQUVKLENBRkksQ0FBUDs7QUFHRixXQUFLLFFBQUw7QUFDRSxlQUFPWCxLQUFLLENBQUNFLElBQU4sQ0FBV0ssTUFBWCxDQUFrQixVQUFDVCxHQUFELEVBQU1VLENBQU4sRUFBWTtBQUNuQyxpQkFBT1YsR0FBRyxHQUFHVSxDQUFDLENBQUNDLFVBQUYsQ0FBYUcsTUFBMUI7QUFDRCxTQUZNLEVBRUosQ0FGSSxDQUFQOztBQUdGLFdBQUssUUFBTDtBQUNFLGVBQU9aLEtBQUssQ0FBQ0UsSUFBTixDQUFXSyxNQUFYLENBQWtCLFVBQUNULEdBQUQsRUFBTVUsQ0FBTixFQUFZO0FBQ25DLGlCQUFPVixHQUFHLEdBQUdVLENBQUMsQ0FBQ0MsVUFBRixDQUFhSSxNQUExQjtBQUNELFNBRk0sRUFFSixDQUZJLENBQVA7O0FBR0Y7QUFDRSxlQUFPLENBQVA7QUFsQko7QUFvQkQ7QUFDRixDQXBDTTtBQXNDQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFVZCxLQUFWLEVBQWlCO0FBQzFDLE1BQU1lLFFBQVEsR0FBRyxDQUNmLEtBRGUsRUFFZixLQUZlLEVBR2YsS0FIZSxFQUlmLEtBSmUsRUFLZixLQUxlLEVBTWYsS0FOZSxFQU9mLEtBUGUsRUFRZixLQVJlLEVBU2YsS0FUZSxFQVVmLEtBVmUsRUFXZixLQVhlLEVBWWYsS0FaZSxDQUFqQjtBQWNBLE1BQUlDLE9BQU8sR0FBRyxJQUFJQyxJQUFKLEVBQWQ7QUFDQSxNQUFJQyxHQUFHLEdBQUcsSUFBVjtBQUNBLE1BQUlDLEtBQUssR0FBRyxJQUFaO0FBQ0EsTUFBSUMsSUFBSSxHQUFHLElBQVg7QUFDQSxNQUFJQyxLQUFLLEdBQUcsRUFBWjtBQUNBLE1BQUlsQixPQUFPLEdBQUcsRUFBZDtBQUNBLE1BQUlDLE1BQU0sR0FBRyxFQUFiO0FBQ0EsTUFBSUMsU0FBUyxHQUFHLEVBQWhCO0FBQ0EsTUFBSWlCLE1BQU0sR0FBRyxFQUFiO0FBQ0EsTUFBSXBCLElBQUksR0FBRyxFQUFYOztBQXhCMEMsNkNBMEJ4QkYsS0FBSyxDQUFDdUIsU0ExQmtCO0FBQUE7O0FBQUE7QUEwQjFDLHdEQUFtQztBQUFBLFVBQTFCQyxLQUEwQjtBQUNqQ1IsYUFBTyxHQUFHLElBQUlDLElBQUosQ0FBU08sS0FBSyxDQUFDUCxJQUFmLENBQVY7QUFDQUMsU0FBRyxHQUFHRixPQUFPLENBQUNTLE9BQVIsRUFBTjtBQUNBTixXQUFLLEdBQUdILE9BQU8sQ0FBQ1UsUUFBUixFQUFSO0FBQ0FOLFVBQUksR0FBR0osT0FBTyxDQUFDVyxXQUFSLEVBQVA7QUFDQU4sV0FBSyxDQUFDTyxJQUFOLENBQVdWLEdBQUcsR0FBRyxHQUFOLEdBQVlILFFBQVEsQ0FBQ2MsSUFBSSxDQUFDQyxHQUFMLENBQVNYLEtBQVQsQ0FBRCxDQUEvQjtBQUNBRyxZQUFNLENBQUNNLElBQVAsQ0FBWUosS0FBSyxDQUFDWCxNQUFsQjtBQUNBVCxZQUFNLENBQUN3QixJQUFQLENBQVlKLEtBQUssQ0FBQ2IsU0FBbEI7QUFDQU4sZUFBUyxDQUFDdUIsSUFBVixDQUFlSixLQUFLLENBQUNaLE1BQXJCO0FBQ0FULGFBQU8sQ0FBQ3lCLElBQVIsQ0FBYUosS0FBSyxDQUFDZCxTQUFuQjtBQUNEO0FBcEN5QztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQXFDMUNSLE1BQUksR0FBRztBQUNMbUIsU0FBSyxFQUFFQSxLQURGO0FBRUxDLFVBQU0sRUFBRUEsTUFGSDtBQUdMbEIsVUFBTSxFQUFFQSxNQUhIO0FBSUxDLGFBQVMsRUFBRUEsU0FKTjtBQUtMRixXQUFPLEVBQUVBO0FBTEosR0FBUDtBQU9BLFNBQU9ELElBQVA7QUFDRCxDQTdDTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45MmIwZGRkODkyNjIzOWE3YmZmNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHN1bSA9IGZ1bmN0aW9uIChrZXksIHByb3BzKSB7XHJcbiAgaWYgKHByb3BzLmlzR2xvYmFsID09IGZhbHNlKSB7XHJcbiAgICBzd2l0Y2ggKGtleSkge1xyXG4gICAgICBjYXNlIFwiQ29uZmlybWVkXCI6XHJcbiAgICAgICAgcmV0dXJuIHByb3BzLmRhdGFbMF0ucG9zaXRpZjtcclxuICAgICAgY2FzZSBcIlJlY292ZXJlZFwiOlxyXG4gICAgICAgIHJldHVybiBwcm9wcy5kYXRhWzBdLnNlbWJ1aDtcclxuICAgICAgY2FzZSBcIkRlYXRoc1wiOlxyXG4gICAgICAgIHJldHVybiBwcm9wcy5kYXRhWzBdLm1lbmluZ2dhbDtcclxuICAgICAgY2FzZSBcIkFjdGl2ZVwiOlxyXG4gICAgICAgIHJldHVybiBwcm9wcy5kYXRhWzBdLmRpcmF3YXQ7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIHN3aXRjaCAoa2V5KSB7XHJcbiAgICAgIGNhc2UgXCJDb25maXJtZWRcIjpcclxuICAgICAgICByZXR1cm4gcHJvcHMuZGF0YS5yZWR1Y2UoKHN1bSwgYSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHN1bSArIGEuYXR0cmlidXRlcy5Db25maXJtZWQ7XHJcbiAgICAgICAgfSwgMCk7XHJcbiAgICAgIGNhc2UgXCJSZWNvdmVyZWRcIjpcclxuICAgICAgICByZXR1cm4gcHJvcHMuZGF0YS5yZWR1Y2UoKHN1bSwgYSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHN1bSArIGEuYXR0cmlidXRlcy5SZWNvdmVyZWQ7XHJcbiAgICAgICAgfSwgMCk7XHJcbiAgICAgIGNhc2UgXCJEZWF0aHNcIjpcclxuICAgICAgICByZXR1cm4gcHJvcHMuZGF0YS5yZWR1Y2UoKHN1bSwgYSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHN1bSArIGEuYXR0cmlidXRlcy5EZWF0aHM7XHJcbiAgICAgICAgfSwgMCk7XHJcbiAgICAgIGNhc2UgXCJBY3RpdmVcIjpcclxuICAgICAgICByZXR1cm4gcHJvcHMuZGF0YS5yZWR1Y2UoKHN1bSwgYSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHN1bSArIGEuYXR0cmlidXRlcy5BY3RpdmU7XHJcbiAgICAgICAgfSwgMCk7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEFsbE1vbnRoID0gZnVuY3Rpb24gKHByb3BzKSB7XHJcbiAgY29uc3QgbW9udGhFbmcgPSBbXHJcbiAgICBcImphblwiLFxyXG4gICAgXCJGZWJcIixcclxuICAgIFwiTWFyXCIsXHJcbiAgICBcIkFwclwiLFxyXG4gICAgXCJNYXlcIixcclxuICAgIFwiSnVuXCIsXHJcbiAgICBcIkp1bFwiLFxyXG4gICAgXCJBdWdcIixcclxuICAgIFwiU2VwXCIsXHJcbiAgICBcIk9jdFwiLFxyXG4gICAgXCJOb3ZcIixcclxuICAgIFwiRGVzXCIsXHJcbiAgXTtcclxuICBsZXQgbm93RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgbGV0IGRheSA9IG51bGw7XHJcbiAgbGV0IG1vbnRoID0gbnVsbDtcclxuICBsZXQgeWVhciA9IG51bGw7XHJcbiAgbGV0IGxhYmVsID0gW107XHJcbiAgbGV0IHBvc2l0aWYgPSBbXTtcclxuICBsZXQgc2VtYnVoID0gW107XHJcbiAgbGV0IG1lbmluZ2dhbCA9IFtdO1xyXG4gIGxldCBhY3RpdmUgPSBbXTtcclxuICBsZXQgZGF0YSA9IFtdO1xyXG5cclxuICBmb3IgKGxldCB2YWx1ZSBvZiBwcm9wcy5zdGF0aXN0aWspIHtcclxuICAgIG5vd0RhdGUgPSBuZXcgRGF0ZSh2YWx1ZS5EYXRlKTtcclxuICAgIGRheSA9IG5vd0RhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgbW9udGggPSBub3dEYXRlLmdldE1vbnRoKCk7XHJcbiAgICB5ZWFyID0gbm93RGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgbGFiZWwucHVzaChkYXkgKyBcIiBcIiArIG1vbnRoRW5nW01hdGguYWJzKG1vbnRoKV0pO1xyXG4gICAgYWN0aXZlLnB1c2godmFsdWUuQWN0aXZlKTtcclxuICAgIHNlbWJ1aC5wdXNoKHZhbHVlLlJlY292ZXJlZCk7XHJcbiAgICBtZW5pbmdnYWwucHVzaCh2YWx1ZS5EZWF0aHMpO1xyXG4gICAgcG9zaXRpZi5wdXNoKHZhbHVlLkNvbmZpcm1lZCk7XHJcbiAgfVxyXG4gIGRhdGEgPSB7XHJcbiAgICBsYWJlbDogbGFiZWwsXHJcbiAgICBhY3RpdmU6IGFjdGl2ZSxcclxuICAgIHNlbWJ1aDogc2VtYnVoLFxyXG4gICAgbWVuaW5nZ2FsOiBtZW5pbmdnYWwsXHJcbiAgICBwb3NpdGlmOiBwb3NpdGlmLFxyXG4gIH07XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
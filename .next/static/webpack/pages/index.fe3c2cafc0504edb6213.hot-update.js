webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Dashboard/Grafik.js":
/*!****************************************!*\
  !*** ./components/Dashboard/Grafik.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_joo_bootcamp_niomic_project_NextJs_covid_project_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-number-format */ "./node_modules/react-number-format/dist/react-number-format.es.js");



var _jsxFileName = "D:\\joo\\bootcamp\\niomic\\project\\NextJs\\covid-project\\components\\Dashboard\\Grafik.js",
    _this = undefined;





var _require = __webpack_require__(/*! ../../util/library */ "./util/library.js"),
    sum = _require.sum;

var Grafik = function Grafik(props) {
  var dataCovid = null;
  var data = null;

  if (!props.isGlobal) {
    var _ref;

    dataCovid = [2, 2, 2, 2, 4, 4, 6, 19, 27, 34];
    data = {
      labels: ["2 Mar", "3 Mar", "4 Mar", "5 Mar", "6 Mar", "7 Mar", "8 Mar", "9 Mar", "10 Mar", "11 Mar"],
      datasets: [(_ref = {
        label: "Jumlah Positif",
        fill: false,
        lineTension: 0.1,
        backGroundColor: "rgba(229,56,50,0.4)",
        borderColor: "rgba(229,56,56,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(229,56,56,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 10,
        pointHoverBackgroundColor: "rgba(229,56,56,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)"
      }, Object(D_joo_bootcamp_niomic_project_NextJs_covid_project_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "pointBorderWidth", 2), Object(D_joo_bootcamp_niomic_project_NextJs_covid_project_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "pointRadius", 10), Object(D_joo_bootcamp_niomic_project_NextJs_covid_project_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "data", dataCovid), _ref)]
    };
  }

  var dataPie = {
    labels: ["Positif", "Sembuh", "Meninggal"],
    datasets: [{
      data: [sum("Confirmed", props), sum("Recovered", props), sum("Deaths", props)],
      backgroundColor: ["#ff6384", "#36a2eb", "#ffce56"],
      hoverbackgroundColor: ["#ff6384", "#36a2eb", "#ffce56"]
    }]
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: "row mb-5",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "col-lg-12 col-md-12 col-sm-12 col-xl-12",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "card overflow-hidden bg-white",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "card-header",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h3", {
            className: "card-title",
            children: props.isGlobal ? "Statistik Virus Corona Di Dunia" : "Statistik Virus Corona Di Indonesia"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "card-body",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "chart-wrapper",
            children: props.isGlobal ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__["Pie"], {
              data: dataPie
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 17
            }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__["Line"], {
              data: data,
              width: 100,
              height: 50
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "row mt-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "col text-center",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h5", {
                className: "font-weight-normal mt-2",
                children: "POSITIF"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h3", {
                className: "mb-1",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_number_format__WEBPACK_IMPORTED_MODULE_4__["default"], {
                  value: sum("Confirmed", props),
                  displayType: "text",
                  thousandSeparator: ",",
                  decimalSeparator: ".",
                  defaultValue: 0
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 87,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                className: "mb-0 text-muted",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
                  className: "text-lg font-weight-700"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 96,
                  columnNumber: 19
                }, _this), "ORANG"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "col text-center",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h5", {
                className: "font-weight-normal mt-2",
                children: "SEMBUH"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h3", {
                className: "mb-1",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_number_format__WEBPACK_IMPORTED_MODULE_4__["default"], {
                  value: sum("Recovered", props),
                  displayType: "text",
                  thousandSeparator: ",",
                  decimalSeparator: ".",
                  defaultValue: 0
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 102,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                className: "mb-0 text-muted",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
                  className: "text-lg font-weight-700"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 111,
                  columnNumber: 19
                }, _this), "ORANG"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 110,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "col text-center",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h5", {
                className: "font-weight-normal mt-2",
                children: "MENINGGAL"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 115,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h3", {
                className: "mb-1",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_number_format__WEBPACK_IMPORTED_MODULE_4__["default"], {
                  value: sum("Deaths", props),
                  displayType: "text",
                  thousandSeparator: ",",
                  decimalSeparator: ".",
                  defaultValue: 0
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 117,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                className: "mb-0 text-muted",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
                  className: "text-lg font-weight-700"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 126,
                  columnNumber: 19
                }, _this), "ORANG"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 125,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 5
  }, _this);
};

_c = Grafik;
/* harmony default export */ __webpack_exports__["default"] = (Grafik);

var _c;

$RefreshReg$(_c, "Grafik");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EYXNoYm9hcmQvR3JhZmlrLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJzdW0iLCJHcmFmaWsiLCJwcm9wcyIsImRhdGFDb3ZpZCIsImRhdGEiLCJpc0dsb2JhbCIsImxhYmVscyIsImRhdGFzZXRzIiwibGFiZWwiLCJmaWxsIiwibGluZVRlbnNpb24iLCJiYWNrR3JvdW5kQ29sb3IiLCJib3JkZXJDb2xvciIsImJvcmRlckNhcFN0eWxlIiwiYm9yZGVyRGFzaCIsImJvcmRlckRhc2hPZmZzZXQiLCJib3JkZXJKb2luU3R5bGUiLCJwb2ludEJvcmRlckNvbG9yIiwicG9pbnRCYWNrZ3JvdW5kQ29sb3IiLCJwb2ludEJvcmRlcldpZHRoIiwicG9pbnRIb3ZlclJhZGl1cyIsInBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3IiLCJwb2ludEhvdmVyQm9yZGVyQ29sb3IiLCJkYXRhUGllIiwiYmFja2dyb3VuZENvbG9yIiwiaG92ZXJiYWNrZ3JvdW5kQ29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O2VBRWdCQSxtQkFBTyxDQUFDLDZDQUFELEM7SUFBZkMsRyxZQUFBQSxHOztBQUVSLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQsRUFBVztBQUN4QixNQUFJQyxTQUFTLEdBQUcsSUFBaEI7QUFDQSxNQUFJQyxJQUFJLEdBQUcsSUFBWDs7QUFFQSxNQUFJLENBQUNGLEtBQUssQ0FBQ0csUUFBWCxFQUFxQjtBQUFBOztBQUNuQkYsYUFBUyxHQUFHLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsRUFBdEIsRUFBMEIsRUFBMUIsRUFBOEIsRUFBOUIsQ0FBWjtBQUNBQyxRQUFJLEdBQUc7QUFDTEUsWUFBTSxFQUFFLENBQ04sT0FETSxFQUVO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QUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZGLGVBV0U7QUFBRyx5QkFBUyxFQUFDLGlCQUFiO0FBQUEsd0NBQ0U7QUFBTSwyQkFBUyxFQUFDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkEvQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBdUVELENBaElEOztLQUFNRCxNO0FBa0lTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mZTNjMmNhZmMwNTA0ZWRiNjIxMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMaW5lLCBQaWUgfSBmcm9tIFwicmVhY3QtY2hhcnRqcy0yXCI7XHJcbmltcG9ydCBOdW1iZXJGb3JtYXQgZnJvbSBcInJlYWN0LW51bWJlci1mb3JtYXRcIjtcclxuXHJcbmNvbnN0IHsgc3VtIH0gPSByZXF1aXJlKFwiLi4vLi4vdXRpbC9saWJyYXJ5XCIpO1xyXG5cclxuY29uc3QgR3JhZmlrID0gKHByb3BzKSA9PiB7XHJcbiAgbGV0IGRhdGFDb3ZpZCA9IG51bGw7XHJcbiAgbGV0IGRhdGEgPSBudWxsO1xyXG5cclxuICBpZiAoIXByb3BzLmlzR2xvYmFsKSB7XHJcbiAgICBkYXRhQ292aWQgPSBbMiwgMiwgMiwgMiwgNCwgNCwgNiwgMTksIDI3LCAzNF07XHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBsYWJlbHM6IFtcclxuICAgICAgICBcIjIgTWFyXCIsXHJcbiAgICAgICAgXCIzIE1hclwiLFxyXG4gICAgICAgIFwiNCBNYXJcIixcclxuICAgICAgICBcIjUgTWFyXCIsXHJcbiAgICAgICAgXCI2IE1hclwiLFxyXG4gICAgICAgIFwiNyBNYXJcIixcclxuICAgICAgICBcIjggTWFyXCIsXHJcbiAgICAgICAgXCI5IE1hclwiLFxyXG4gICAgICAgIFwiMTAgTWFyXCIsXHJcbiAgICAgICAgXCIxMSBNYXJcIixcclxuICAgICAgXSxcclxuICAgICAgZGF0YXNldHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogXCJKdW1sYWggUG9zaXRpZlwiLFxyXG4gICAgICAgICAgZmlsbDogZmFsc2UsXHJcbiAgICAgICAgICBsaW5lVGVuc2lvbjogMC4xLFxyXG4gICAgICAgICAgYmFja0dyb3VuZENvbG9yOiBcInJnYmEoMjI5LDU2LDUwLDAuNClcIixcclxuICAgICAgICAgIGJvcmRlckNvbG9yOiBcInJnYmEoMjI5LDU2LDU2LDEpXCIsXHJcbiAgICAgICAgICBib3JkZXJDYXBTdHlsZTogXCJidXR0XCIsXHJcbiAgICAgICAgICBib3JkZXJEYXNoOiBbXSxcclxuICAgICAgICAgIGJvcmRlckRhc2hPZmZzZXQ6IDAuMCxcclxuICAgICAgICAgIGJvcmRlckpvaW5TdHlsZTogXCJtaXRlclwiLFxyXG4gICAgICAgICAgcG9pbnRCb3JkZXJDb2xvcjogXCJyZ2JhKDIyOSw1Niw1NiwxKVwiLFxyXG4gICAgICAgICAgcG9pbnRCYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgICAgICAgcG9pbnRCb3JkZXJXaWR0aDogMSxcclxuICAgICAgICAgIHBvaW50SG92ZXJSYWRpdXM6IDEwLFxyXG4gICAgICAgICAgcG9pbnRIb3ZlckJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDIyOSw1Niw1NiwxKVwiLFxyXG4gICAgICAgICAgcG9pbnRIb3ZlckJvcmRlckNvbG9yOiBcInJnYmEoMjIwLDIyMCwyMjAsMSlcIixcclxuICAgICAgICAgIHBvaW50Qm9yZGVyV2lkdGg6IDIsXHJcbiAgICAgICAgICBwb2ludFJhZGl1czogMTAsXHJcbiAgICAgICAgICBkYXRhOiBkYXRhQ292aWQsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH07XHJcbiAgfVxyXG4gIGNvbnN0IGRhdGFQaWUgPSB7XHJcbiAgICBsYWJlbHM6IFtcIlBvc2l0aWZcIiwgXCJTZW1idWhcIiwgXCJNZW5pbmdnYWxcIl0sXHJcbiAgICBkYXRhc2V0czogW1xyXG4gICAgICB7XHJcbiAgICAgICAgZGF0YTogW1xyXG4gICAgICAgICAgc3VtKFwiQ29uZmlybWVkXCIsIHByb3BzKSxcclxuICAgICAgICAgIHN1bShcIlJlY292ZXJlZFwiLCBwcm9wcyksXHJcbiAgICAgICAgICBzdW0oXCJEZWF0aHNcIiwgcHJvcHMpLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXCIjZmY2Mzg0XCIsIFwiIzM2YTJlYlwiLCBcIiNmZmNlNTZcIl0sXHJcbiAgICAgICAgaG92ZXJiYWNrZ3JvdW5kQ29sb3I6IFtcIiNmZjYzODRcIiwgXCIjMzZhMmViXCIsIFwiI2ZmY2U1NlwiXSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItNVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMiBjb2wtbWQtMTIgY29sLXNtLTEyIGNvbC14bC0xMlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBvdmVyZmxvdy1oaWRkZW4gYmctd2hpdGVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5cclxuICAgICAgICAgICAgICB7cHJvcHMuaXNHbG9iYWxcclxuICAgICAgICAgICAgICAgID8gXCJTdGF0aXN0aWsgVmlydXMgQ29yb25hIERpIER1bmlhXCJcclxuICAgICAgICAgICAgICAgIDogXCJTdGF0aXN0aWsgVmlydXMgQ29yb25hIERpIEluZG9uZXNpYVwifVxyXG4gICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJ0LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICB7cHJvcHMuaXNHbG9iYWwgPyAoXHJcbiAgICAgICAgICAgICAgICA8UGllIGRhdGE9e2RhdGFQaWV9IC8+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxMaW5lIGRhdGE9e2RhdGF9IHdpZHRoPXsxMDB9IGhlaWdodD17NTB9IC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG10LTZcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LW5vcm1hbCBtdC0yXCI+UE9TSVRJRjwvaDU+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWItMVwiPlxyXG4gICAgICAgICAgICAgICAgICA8TnVtYmVyRm9ybWF0XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N1bShcIkNvbmZpcm1lZFwiLCBwcm9wcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheVR5cGU9e1widGV4dFwifVxyXG4gICAgICAgICAgICAgICAgICAgIHRob3VzYW5kU2VwYXJhdG9yPXtcIixcIn1cclxuICAgICAgICAgICAgICAgICAgICBkZWNpbWFsU2VwYXJhdG9yPXtcIi5cIn1cclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9ezB9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMCB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC13ZWlnaHQtNzAwXCI+PC9zcGFuPk9SQU5HXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ub3JtYWwgbXQtMlwiPlNFTUJVSDwvaDU+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWItMVwiPlxyXG4gICAgICAgICAgICAgICAgICA8TnVtYmVyRm9ybWF0XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N1bShcIlJlY292ZXJlZFwiLCBwcm9wcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheVR5cGU9e1widGV4dFwifVxyXG4gICAgICAgICAgICAgICAgICAgIHRob3VzYW5kU2VwYXJhdG9yPXtcIixcIn1cclxuICAgICAgICAgICAgICAgICAgICBkZWNpbWFsU2VwYXJhdG9yPXtcIi5cIn1cclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9ezB9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMCB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC13ZWlnaHQtNzAwXCI+PC9zcGFuPk9SQU5HXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ub3JtYWwgbXQtMlwiPk1FTklOR0dBTDwvaDU+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWItMVwiPlxyXG4gICAgICAgICAgICAgICAgICA8TnVtYmVyRm9ybWF0XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N1bShcIkRlYXRoc1wiLCBwcm9wcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheVR5cGU9e1widGV4dFwifVxyXG4gICAgICAgICAgICAgICAgICAgIHRob3VzYW5kU2VwYXJhdG9yPXtcIixcIn1cclxuICAgICAgICAgICAgICAgICAgICBkZWNpbWFsU2VwYXJhdG9yPXtcIi5cIn1cclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9ezB9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMCB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC13ZWlnaHQtNzAwXCI+PC9zcGFuPk9SQU5HXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdyYWZpaztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
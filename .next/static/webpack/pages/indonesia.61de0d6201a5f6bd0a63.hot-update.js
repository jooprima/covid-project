webpackHotUpdate_N_E("pages/indonesia",{

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
    sum = _require.sum,
    getAllMonth = _require.getAllMonth;

var Grafik = function Grafik(props) {
  var dataCovid = null;
  var data = null;

  if (!props.isGlobal) {
    var _ref, _ref2, _ref3;

    dataCovid = getAllMonth(props);
    data = {
      labels: dataCovid.label,
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
      }, Object(D_joo_bootcamp_niomic_project_NextJs_covid_project_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "pointBorderWidth", 2), Object(D_joo_bootcamp_niomic_project_NextJs_covid_project_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "pointRadius", 10), Object(D_joo_bootcamp_niomic_project_NextJs_covid_project_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "data", dataCovid.positif), _ref), (_ref2 = {
        label: "Jumlah Sembuh",
        fill: false,
        lineTension: 0.1,
        backGroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 10,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)"
      }, Object(D_joo_bootcamp_niomic_project_NextJs_covid_project_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, "pointBorderWidth", 2), Object(D_joo_bootcamp_niomic_project_NextJs_covid_project_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, "pointRadius", 10), Object(D_joo_bootcamp_niomic_project_NextJs_covid_project_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, "data", dataCovid.sembuh), _ref2), (_ref3 = {
        label: "Jumlah Meninggal",
        fill: false,
        lineTension: 0.1,
        backGroundColor: "rgba(0,0,0,0.4)",
        borderColor: "rgba(0,0,0,0,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(0,0,0,0,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 10,
        pointHoverBackgroundColor: "rgba(0,0,0,0,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)"
      }, Object(D_joo_bootcamp_niomic_project_NextJs_covid_project_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref3, "pointBorderWidth", 2), Object(D_joo_bootcamp_niomic_project_NextJs_covid_project_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref3, "pointRadius", 10), Object(D_joo_bootcamp_niomic_project_NextJs_covid_project_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref3, "data", dataCovid.positif), _ref3)]
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
            lineNumber: 98,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "card-body",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "chart-wrapper",
            children: props.isGlobal ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__["Pie"], {
              data: dataPie
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 17
            }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__["Line"], {
              data: data,
              width: 100,
              height: 50
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
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
                lineNumber: 114,
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
                  lineNumber: 116,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 115,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                className: "mb-0 text-muted",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
                  className: "text-lg font-weight-700"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 125,
                  columnNumber: 19
                }, _this), "ORANG"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 124,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "col text-center",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h5", {
                className: "font-weight-normal mt-2",
                children: "SEMBUH"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 129,
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
                  lineNumber: 131,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 130,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                className: "mb-0 text-muted",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
                  className: "text-lg font-weight-700"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 140,
                  columnNumber: 19
                }, _this), "ORANG"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 139,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "col text-center",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h5", {
                className: "font-weight-normal mt-2",
                children: "MENINGGAL"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 144,
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
                  lineNumber: 146,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 145,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                className: "mb-0 text-muted",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
                  className: "text-lg font-weight-700"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 155,
                  columnNumber: 19
                }, _this), "ORANG"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 154,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 94,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EYXNoYm9hcmQvR3JhZmlrLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJzdW0iLCJnZXRBbGxNb250aCIsIkdyYWZpayIsInByb3BzIiwiZGF0YUNvdmlkIiwiZGF0YSIsImlzR2xvYmFsIiwibGFiZWxzIiwibGFiZWwiLCJkYXRhc2V0cyIsImZpbGwiLCJsaW5lVGVuc2lvbiIsImJhY2tHcm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwiYm9yZGVyQ2FwU3R5bGUiLCJib3JkZXJEYXNoIiwiYm9yZGVyRGFzaE9mZnNldCIsImJvcmRlckpvaW5TdHlsZSIsInBvaW50Qm9yZGVyQ29sb3IiLCJwb2ludEJhY2tncm91bmRDb2xvciIsInBvaW50Qm9yZGVyV2lkdGgiLCJwb2ludEhvdmVyUmFkaXVzIiwicG9pbnRIb3ZlckJhY2tncm91bmRDb2xvciIsInBvaW50SG92ZXJCb3JkZXJDb2xvciIsInBvc2l0aWYiLCJzZW1idWgiLCJkYXRhUGllIiwiYmFja2dyb3VuZENvbG9yIiwiaG92ZXJiYWNrZ3JvdW5kQ29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O2VBRTZCQSxtQkFBTyxDQUFDLDZDQUFELEM7SUFBNUJDLEcsWUFBQUEsRztJQUFLQyxXLFlBQUFBLFc7O0FBRWIsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3hCLE1BQUlDLFNBQVMsR0FBRyxJQUFoQjtBQUNBLE1BQUlDLElBQUksR0FBRyxJQUFYOztBQUVBLE1BQUksQ0FBQ0YsS0FBSyxDQUFDRyxRQUFYLEVBQXFCO0FBQUE7O0FBQ25CRixhQUFTLEdBQUdILFdBQVcsQ0FBQ0UsS0FBRCxDQUF2QjtBQUNBRSxRQUFJLEdBQUc7QUFDTEUsWUFBTSxFQUFFSCxTQUFTLENBQUNJLEtBRGI7QUFFTEMsY0FBUSxFQUFFO0FBRU5ELGFBQUssRUFBRSxnQkFGRDtB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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQS9CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF1RUQsQ0E3SkQ7O0tBQU1ELE07QUErSlNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZG9uZXNpYS42MWRlMGQ2MjAxYTVmNmJkMGE2My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMaW5lLCBQaWUgfSBmcm9tIFwicmVhY3QtY2hhcnRqcy0yXCI7XHJcbmltcG9ydCBOdW1iZXJGb3JtYXQgZnJvbSBcInJlYWN0LW51bWJlci1mb3JtYXRcIjtcclxuXHJcbmNvbnN0IHsgc3VtLCBnZXRBbGxNb250aCB9ID0gcmVxdWlyZShcIi4uLy4uL3V0aWwvbGlicmFyeVwiKTtcclxuXHJcbmNvbnN0IEdyYWZpayA9IChwcm9wcykgPT4ge1xyXG4gIGxldCBkYXRhQ292aWQgPSBudWxsO1xyXG4gIGxldCBkYXRhID0gbnVsbDtcclxuXHJcbiAgaWYgKCFwcm9wcy5pc0dsb2JhbCkge1xyXG4gICAgZGF0YUNvdmlkID0gZ2V0QWxsTW9udGgocHJvcHMpO1xyXG4gICAgZGF0YSA9IHtcclxuICAgICAgbGFiZWxzOiBkYXRhQ292aWQubGFiZWwsXHJcbiAgICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwiSnVtbGFoIFBvc2l0aWZcIixcclxuICAgICAgICAgIGZpbGw6IGZhbHNlLFxyXG4gICAgICAgICAgbGluZVRlbnNpb246IDAuMSxcclxuICAgICAgICAgIGJhY2tHcm91bmRDb2xvcjogXCJyZ2JhKDIyOSw1Niw1MCwwLjQpXCIsXHJcbiAgICAgICAgICBib3JkZXJDb2xvcjogXCJyZ2JhKDIyOSw1Niw1NiwxKVwiLFxyXG4gICAgICAgICAgYm9yZGVyQ2FwU3R5bGU6IFwiYnV0dFwiLFxyXG4gICAgICAgICAgYm9yZGVyRGFzaDogW10sXHJcbiAgICAgICAgICBib3JkZXJEYXNoT2Zmc2V0OiAwLjAsXHJcbiAgICAgICAgICBib3JkZXJKb2luU3R5bGU6IFwibWl0ZXJcIixcclxuICAgICAgICAgIHBvaW50Qm9yZGVyQ29sb3I6IFwicmdiYSgyMjksNTYsNTYsMSlcIixcclxuICAgICAgICAgIHBvaW50QmFja2dyb3VuZENvbG9yOiBcIiNmZmZcIixcclxuICAgICAgICAgIHBvaW50Qm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICBwb2ludEhvdmVyUmFkaXVzOiAxMCxcclxuICAgICAgICAgIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyMjksNTYsNTYsMSlcIixcclxuICAgICAgICAgIHBvaW50SG92ZXJCb3JkZXJDb2xvcjogXCJyZ2JhKDIyMCwyMjAsMjIwLDEpXCIsXHJcbiAgICAgICAgICBwb2ludEJvcmRlcldpZHRoOiAyLFxyXG4gICAgICAgICAgcG9pbnRSYWRpdXM6IDEwLFxyXG4gICAgICAgICAgZGF0YTogZGF0YUNvdmlkLnBvc2l0aWYsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogXCJKdW1sYWggU2VtYnVoXCIsXHJcbiAgICAgICAgICBmaWxsOiBmYWxzZSxcclxuICAgICAgICAgIGxpbmVUZW5zaW9uOiAwLjEsXHJcbiAgICAgICAgICBiYWNrR3JvdW5kQ29sb3I6IFwicmdiYSg3NSwxOTIsMTkyLDAuNClcIixcclxuICAgICAgICAgIGJvcmRlckNvbG9yOiBcInJnYmEoNzUsMTkyLDE5MiwxKVwiLFxyXG4gICAgICAgICAgYm9yZGVyQ2FwU3R5bGU6IFwiYnV0dFwiLFxyXG4gICAgICAgICAgYm9yZGVyRGFzaDogW10sXHJcbiAgICAgICAgICBib3JkZXJEYXNoT2Zmc2V0OiAwLjAsXHJcbiAgICAgICAgICBib3JkZXJKb2luU3R5bGU6IFwibWl0ZXJcIixcclxuICAgICAgICAgIHBvaW50Qm9yZGVyQ29sb3I6IFwicmdiYSg3NSwxOTIsMTkyLDEpXCIsXHJcbiAgICAgICAgICBwb2ludEJhY2tncm91bmRDb2xvcjogXCIjZmZmXCIsXHJcbiAgICAgICAgICBwb2ludEJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgcG9pbnRIb3ZlclJhZGl1czogMTAsXHJcbiAgICAgICAgICBwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yOiBcInJnYmEoNzUsMTkyLDE5MiwxKVwiLFxyXG4gICAgICAgICAgcG9pbnRIb3ZlckJvcmRlckNvbG9yOiBcInJnYmEoMjIwLDIyMCwyMjAsMSlcIixcclxuICAgICAgICAgIHBvaW50Qm9yZGVyV2lkdGg6IDIsXHJcbiAgICAgICAgICBwb2ludFJhZGl1czogMTAsXHJcbiAgICAgICAgICBkYXRhOiBkYXRhQ292aWQuc2VtYnVoLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwiSnVtbGFoIE1lbmluZ2dhbFwiLFxyXG4gICAgICAgICAgZmlsbDogZmFsc2UsXHJcbiAgICAgICAgICBsaW5lVGVuc2lvbjogMC4xLFxyXG4gICAgICAgICAgYmFja0dyb3VuZENvbG9yOiBcInJnYmEoMCwwLDAsMC40KVwiLFxyXG4gICAgICAgICAgYm9yZGVyQ29sb3I6IFwicmdiYSgwLDAsMCwwLDEpXCIsXHJcbiAgICAgICAgICBib3JkZXJDYXBTdHlsZTogXCJidXR0XCIsXHJcbiAgICAgICAgICBib3JkZXJEYXNoOiBbXSxcclxuICAgICAgICAgIGJvcmRlckRhc2hPZmZzZXQ6IDAuMCxcclxuICAgICAgICAgIGJvcmRlckpvaW5TdHlsZTogXCJtaXRlclwiLFxyXG4gICAgICAgICAgcG9pbnRCb3JkZXJDb2xvcjogXCJyZ2JhKDAsMCwwLDAsMSlcIixcclxuICAgICAgICAgIHBvaW50QmFja2dyb3VuZENvbG9yOiBcIiNmZmZcIixcclxuICAgICAgICAgIHBvaW50Qm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICBwb2ludEhvdmVyUmFkaXVzOiAxMCxcclxuICAgICAgICAgIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgwLDAsMCwwLDEpXCIsXHJcbiAgICAgICAgICBwb2ludEhvdmVyQm9yZGVyQ29sb3I6IFwicmdiYSgyMjAsMjIwLDIyMCwxKVwiLFxyXG4gICAgICAgICAgcG9pbnRCb3JkZXJXaWR0aDogMixcclxuICAgICAgICAgIHBvaW50UmFkaXVzOiAxMCxcclxuICAgICAgICAgIGRhdGE6IGRhdGFDb3ZpZC5wb3NpdGlmLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9O1xyXG4gIH1cclxuICBjb25zdCBkYXRhUGllID0ge1xyXG4gICAgbGFiZWxzOiBbXCJQb3NpdGlmXCIsIFwiU2VtYnVoXCIsIFwiTWVuaW5nZ2FsXCJdLFxyXG4gICAgZGF0YXNldHM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGRhdGE6IFtcclxuICAgICAgICAgIHN1bShcIkNvbmZpcm1lZFwiLCBwcm9wcyksXHJcbiAgICAgICAgICBzdW0oXCJSZWNvdmVyZWRcIiwgcHJvcHMpLFxyXG4gICAgICAgICAgc3VtKFwiRGVhdGhzXCIsIHByb3BzKSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogW1wiI2ZmNjM4NFwiLCBcIiMzNmEyZWJcIiwgXCIjZmZjZTU2XCJdLFxyXG4gICAgICAgIGhvdmVyYmFja2dyb3VuZENvbG9yOiBbXCIjZmY2Mzg0XCIsIFwiIzM2YTJlYlwiLCBcIiNmZmNlNTZcIl0sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTVcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTIgY29sLW1kLTEyIGNvbC1zbS0xMiBjb2wteGwtMTJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgb3ZlcmZsb3ctaGlkZGVuIGJnLXdoaXRlXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAge3Byb3BzLmlzR2xvYmFsXHJcbiAgICAgICAgICAgICAgICA/IFwiU3RhdGlzdGlrIFZpcnVzIENvcm9uYSBEaSBEdW5pYVwiXHJcbiAgICAgICAgICAgICAgICA6IFwiU3RhdGlzdGlrIFZpcnVzIENvcm9uYSBEaSBJbmRvbmVzaWFcIn1cclxuICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFydC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAge3Byb3BzLmlzR2xvYmFsID8gKFxyXG4gICAgICAgICAgICAgICAgPFBpZSBkYXRhPXtkYXRhUGllfSAvPlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8TGluZSBkYXRhPXtkYXRhfSB3aWR0aD17MTAwfSBoZWlnaHQ9ezUwfSAvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtdC02XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ub3JtYWwgbXQtMlwiPlBPU0lUSUY8L2g1PlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1iLTFcIj5cclxuICAgICAgICAgICAgICAgICAgPE51bWJlckZvcm1hdFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdW0oXCJDb25maXJtZWRcIiwgcHJvcHMpfVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlUeXBlPXtcInRleHRcIn1cclxuICAgICAgICAgICAgICAgICAgICB0aG91c2FuZFNlcGFyYXRvcj17XCIsXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgZGVjaW1hbFNlcGFyYXRvcj17XCIuXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXswfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTAgdGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtd2VpZ2h0LTcwMFwiPjwvc3Bhbj5PUkFOR1xyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtbm9ybWFsIG10LTJcIj5TRU1CVUg8L2g1PlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1iLTFcIj5cclxuICAgICAgICAgICAgICAgICAgPE51bWJlckZvcm1hdFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdW0oXCJSZWNvdmVyZWRcIiwgcHJvcHMpfVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlUeXBlPXtcInRleHRcIn1cclxuICAgICAgICAgICAgICAgICAgICB0aG91c2FuZFNlcGFyYXRvcj17XCIsXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgZGVjaW1hbFNlcGFyYXRvcj17XCIuXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXswfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTAgdGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtd2VpZ2h0LTcwMFwiPjwvc3Bhbj5PUkFOR1xyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtbm9ybWFsIG10LTJcIj5NRU5JTkdHQUw8L2g1PlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1iLTFcIj5cclxuICAgICAgICAgICAgICAgICAgPE51bWJlckZvcm1hdFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdW0oXCJEZWF0aHNcIiwgcHJvcHMpfVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlUeXBlPXtcInRleHRcIn1cclxuICAgICAgICAgICAgICAgICAgICB0aG91c2FuZFNlcGFyYXRvcj17XCIsXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgZGVjaW1hbFNlcGFyYXRvcj17XCIuXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXswfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTAgdGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtd2VpZ2h0LTcwMFwiPjwvc3Bhbj5PUkFOR1xyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHcmFmaWs7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
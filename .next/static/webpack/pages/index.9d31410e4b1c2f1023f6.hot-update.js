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
    sum = _require.sum,
    getAllMonth = _require.getAllMonth;

var Grafik = function Grafik(props) {
  var dataCovid = null;
  var data = null;

  if (!props.isGlobal) {
    var _ref, _ref2, _ref3, _ref4;

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
        borderColor: "rgba(0,0,0,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(0,0,0,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 10,
        pointHoverBackgroundColor: "rgba(0,0,0,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)"
      }, Object(D_joo_bootcamp_niomic_project_NextJs_covid_project_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref3, "pointBorderWidth", 2), Object(D_joo_bootcamp_niomic_project_NextJs_covid_project_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref3, "pointRadius", 10), Object(D_joo_bootcamp_niomic_project_NextJs_covid_project_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref3, "data", dataCovid.meninggal), _ref3), (_ref4 = {
        label: "Jumlah Active",
        fill: false,
        lineTension: 0.1,
        backGroundColor: "rgba(232,243,16,0.4)",
        borderColor: "rgba(232,243,16,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(232,243,16,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 10,
        pointHoverBackgroundColor: "rgba(232,243,16,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)"
      }, Object(D_joo_bootcamp_niomic_project_NextJs_covid_project_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref4, "pointBorderWidth", 2), Object(D_joo_bootcamp_niomic_project_NextJs_covid_project_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref4, "pointRadius", 10), Object(D_joo_bootcamp_niomic_project_NextJs_covid_project_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref4, "data", dataCovid.active), _ref4)]
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
            lineNumber: 118,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "card-body",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "chart-wrapper",
            children: props.isGlobal ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__["Pie"], {
              data: dataPie
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 17
            }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__["Line"], {
              data: data,
              width: 100,
              height: 50
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
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
                lineNumber: 134,
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
                  lineNumber: 136,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 135,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                className: "mb-0 text-muted",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
                  className: "text-lg font-weight-700"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 145,
                  columnNumber: 19
                }, _this), "ORANG"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 144,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "col text-center",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h5", {
                className: "font-weight-normal mt-2",
                children: "SEMBUH"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 149,
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
                  lineNumber: 151,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 150,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                className: "mb-0 text-muted",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
                  className: "text-lg font-weight-700"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 160,
                  columnNumber: 19
                }, _this), "ORANG"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 159,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 148,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "col text-center",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h5", {
                className: "font-weight-normal mt-2",
                children: "MENINGGAL"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 164,
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
                  lineNumber: 166,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 165,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                className: "mb-0 text-muted",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
                  className: "text-lg font-weight-700"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 175,
                  columnNumber: 19
                }, _this), "ORANG"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 174,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 163,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 114,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EYXNoYm9hcmQvR3JhZmlrLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJzdW0iLCJnZXRBbGxNb250aCIsIkdyYWZpayIsInByb3BzIiwiZGF0YUNvdmlkIiwiZGF0YSIsImlzR2xvYmFsIiwibGFiZWxzIiwibGFiZWwiLCJkYXRhc2V0cyIsImZpbGwiLCJsaW5lVGVuc2lvbiIsImJhY2tHcm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwiYm9yZGVyQ2FwU3R5bGUiLCJib3JkZXJEYXNoIiwiYm9yZGVyRGFzaE9mZnNldCIsImJvcmRlckpvaW5TdHlsZSIsInBvaW50Qm9yZGVyQ29sb3IiLCJwb2ludEJhY2tncm91bmRDb2xvciIsInBvaW50Qm9yZGVyV2lkdGgiLCJwb2ludEhvdmVyUmFkaXVzIiwicG9pbnRIb3ZlckJhY2tncm91bmRDb2xvciIsInBvaW50SG92ZXJCb3JkZXJDb2xvciIsInBvc2l0aWYiLCJzZW1idWgiLCJtZW5pbmdnYWwiLCJhY3RpdmUiLCJkYXRhUGllIiwiYmFja2dyb3VuZENvbG9yIiwiaG92ZXJiYWNrZ3JvdW5kQ29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O2VBRTZCQSxtQkFBTyxDQUFDLDZDQUFELEM7SUFBNUJDLEcsWUFBQUEsRztJQUFLQyxXLFlBQUFBLFc7O0FBRWIsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3hCLE1BQUlDLFNBQVMsR0FBRyxJQUFoQjtBQUNBLE1BQUlDLElBQUksR0FBRyxJQUFYOztBQUVBLE1BQUksQ0FBQ0YsS0FBSyxDQUFDRyxRQUFYLEVBQXFCO0FBQUE7O0FBQ25CRixhQUFTLEdBQUdILFdBQVcsQ0FBQ0UsS0FBRCxDQUF2QjtBQUNBRSxRQUFJLEdBQUc7QUFDTEUsWUFBTSxFQUFFSCxTQUFTLENBQUNJLEtBRGI7QUFFTEMsY0FBUSxFQUFFO0FB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QUFLLHVCQUFTLEVBQUMsaUJBQWY7QUFBQSxzQ0FDRTtBQUFJLHlCQUFTLEVBQUMseUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFFRTtBQUFJLHlCQUFTLEVBQUMsTUFBZDtBQUFBLHVDQUNFLHFFQUFDLDJEQUFEO0FBQ0UsdUJBQUssRUFBRUgsR0FBRyxDQUFDLFFBQUQsRUFBV0csS0FBWCxDQURaO0FBRUUsNkJBQVcsRUFBRSxNQUZmO0FBR0UsbUNBQWlCLEVBQUUsR0FIckI7QUFJRSxrQ0FBZ0IsRUFBRSxHQUpwQjtBQUtFLDhCQUFZLEVBQUU7QUFMaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkYsZUFXRTtBQUFHLHlCQUFTLEVBQUMsaUJBQWI7QUFBQSx3Q0FDRTtBQUFNLDJCQUFTLEVBQUM7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQS9CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF1RUQsQ0FqTEQ7O0tBQU1ELE07QUFtTFNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjlkMzE0MTBlNGIxYzJmMTAyM2Y2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IExpbmUsIFBpZSB9IGZyb20gXCJyZWFjdC1jaGFydGpzLTJcIjtcclxuaW1wb3J0IE51bWJlckZvcm1hdCBmcm9tIFwicmVhY3QtbnVtYmVyLWZvcm1hdFwiO1xyXG5cclxuY29uc3QgeyBzdW0sIGdldEFsbE1vbnRoIH0gPSByZXF1aXJlKFwiLi4vLi4vdXRpbC9saWJyYXJ5XCIpO1xyXG5cclxuY29uc3QgR3JhZmlrID0gKHByb3BzKSA9PiB7XHJcbiAgbGV0IGRhdGFDb3ZpZCA9IG51bGw7XHJcbiAgbGV0IGRhdGEgPSBudWxsO1xyXG5cclxuICBpZiAoIXByb3BzLmlzR2xvYmFsKSB7XHJcbiAgICBkYXRhQ292aWQgPSBnZXRBbGxNb250aChwcm9wcyk7XHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBsYWJlbHM6IGRhdGFDb3ZpZC5sYWJlbCxcclxuICAgICAgZGF0YXNldHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogXCJKdW1sYWggUG9zaXRpZlwiLFxyXG4gICAgICAgICAgZmlsbDogZmFsc2UsXHJcbiAgICAgICAgICBsaW5lVGVuc2lvbjogMC4xLFxyXG4gICAgICAgICAgYmFja0dyb3VuZENvbG9yOiBcInJnYmEoMjI5LDU2LDUwLDAuNClcIixcclxuICAgICAgICAgIGJvcmRlckNvbG9yOiBcInJnYmEoMjI5LDU2LDU2LDEpXCIsXHJcbiAgICAgICAgICBib3JkZXJDYXBTdHlsZTogXCJidXR0XCIsXHJcbiAgICAgICAgICBib3JkZXJEYXNoOiBbXSxcclxuICAgICAgICAgIGJvcmRlckRhc2hPZmZzZXQ6IDAuMCxcclxuICAgICAgICAgIGJvcmRlckpvaW5TdHlsZTogXCJtaXRlclwiLFxyXG4gICAgICAgICAgcG9pbnRCb3JkZXJDb2xvcjogXCJyZ2JhKDIyOSw1Niw1NiwxKVwiLFxyXG4gICAgICAgICAgcG9pbnRCYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgICAgICAgcG9pbnRCb3JkZXJXaWR0aDogMSxcclxuICAgICAgICAgIHBvaW50SG92ZXJSYWRpdXM6IDEwLFxyXG4gICAgICAgICAgcG9pbnRIb3ZlckJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDIyOSw1Niw1NiwxKVwiLFxyXG4gICAgICAgICAgcG9pbnRIb3ZlckJvcmRlckNvbG9yOiBcInJnYmEoMjIwLDIyMCwyMjAsMSlcIixcclxuICAgICAgICAgIHBvaW50Qm9yZGVyV2lkdGg6IDIsXHJcbiAgICAgICAgICBwb2ludFJhZGl1czogMTAsXHJcbiAgICAgICAgICBkYXRhOiBkYXRhQ292aWQucG9zaXRpZixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiBcIkp1bWxhaCBTZW1idWhcIixcclxuICAgICAgICAgIGZpbGw6IGZhbHNlLFxyXG4gICAgICAgICAgbGluZVRlbnNpb246IDAuMSxcclxuICAgICAgICAgIGJhY2tHcm91bmRDb2xvcjogXCJyZ2JhKDc1LDE5MiwxOTIsMC40KVwiLFxyXG4gICAgICAgICAgYm9yZGVyQ29sb3I6IFwicmdiYSg3NSwxOTIsMTkyLDEpXCIsXHJcbiAgICAgICAgICBib3JkZXJDYXBTdHlsZTogXCJidXR0XCIsXHJcbiAgICAgICAgICBib3JkZXJEYXNoOiBbXSxcclxuICAgICAgICAgIGJvcmRlckRhc2hPZmZzZXQ6IDAuMCxcclxuICAgICAgICAgIGJvcmRlckpvaW5TdHlsZTogXCJtaXRlclwiLFxyXG4gICAgICAgICAgcG9pbnRCb3JkZXJDb2xvcjogXCJyZ2JhKDc1LDE5MiwxOTIsMSlcIixcclxuICAgICAgICAgIHBvaW50QmFja2dyb3VuZENvbG9yOiBcIiNmZmZcIixcclxuICAgICAgICAgIHBvaW50Qm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICBwb2ludEhvdmVyUmFkaXVzOiAxMCxcclxuICAgICAgICAgIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSg3NSwxOTIsMTkyLDEpXCIsXHJcbiAgICAgICAgICBwb2ludEhvdmVyQm9yZGVyQ29sb3I6IFwicmdiYSgyMjAsMjIwLDIyMCwxKVwiLFxyXG4gICAgICAgICAgcG9pbnRCb3JkZXJXaWR0aDogMixcclxuICAgICAgICAgIHBvaW50UmFkaXVzOiAxMCxcclxuICAgICAgICAgIGRhdGE6IGRhdGFDb3ZpZC5zZW1idWgsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogXCJKdW1sYWggTWVuaW5nZ2FsXCIsXHJcbiAgICAgICAgICBmaWxsOiBmYWxzZSxcclxuICAgICAgICAgIGxpbmVUZW5zaW9uOiAwLjEsXHJcbiAgICAgICAgICBiYWNrR3JvdW5kQ29sb3I6IFwicmdiYSgwLDAsMCwwLjQpXCIsXHJcbiAgICAgICAgICBib3JkZXJDb2xvcjogXCJyZ2JhKDAsMCwwLDEpXCIsXHJcbiAgICAgICAgICBib3JkZXJDYXBTdHlsZTogXCJidXR0XCIsXHJcbiAgICAgICAgICBib3JkZXJEYXNoOiBbXSxcclxuICAgICAgICAgIGJvcmRlckRhc2hPZmZzZXQ6IDAuMCxcclxuICAgICAgICAgIGJvcmRlckpvaW5TdHlsZTogXCJtaXRlclwiLFxyXG4gICAgICAgICAgcG9pbnRCb3JkZXJDb2xvcjogXCJyZ2JhKDAsMCwwLDEpXCIsXHJcbiAgICAgICAgICBwb2ludEJhY2tncm91bmRDb2xvcjogXCIjZmZmXCIsXHJcbiAgICAgICAgICBwb2ludEJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgcG9pbnRIb3ZlclJhZGl1czogMTAsXHJcbiAgICAgICAgICBwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yOiBcInJnYmEoMCwwLDAsMSlcIixcclxuICAgICAgICAgIHBvaW50SG92ZXJCb3JkZXJDb2xvcjogXCJyZ2JhKDIyMCwyMjAsMjIwLDEpXCIsXHJcbiAgICAgICAgICBwb2ludEJvcmRlcldpZHRoOiAyLFxyXG4gICAgICAgICAgcG9pbnRSYWRpdXM6IDEwLFxyXG4gICAgICAgICAgZGF0YTogZGF0YUNvdmlkLm1lbmluZ2dhbCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiBcIkp1bWxhaCBBY3RpdmVcIixcclxuICAgICAgICAgIGZpbGw6IGZhbHNlLFxyXG4gICAgICAgICAgbGluZVRlbnNpb246IDAuMSxcclxuICAgICAgICAgIGJhY2tHcm91bmRDb2xvcjogXCJyZ2JhKDIzMiwyNDMsMTYsMC40KVwiLFxyXG4gICAgICAgICAgYm9yZGVyQ29sb3I6IFwicmdiYSgyMzIsMjQzLDE2LDEpXCIsXHJcbiAgICAgICAgICBib3JkZXJDYXBTdHlsZTogXCJidXR0XCIsXHJcbiAgICAgICAgICBib3JkZXJEYXNoOiBbXSxcclxuICAgICAgICAgIGJvcmRlckRhc2hPZmZzZXQ6IDAuMCxcclxuICAgICAgICAgIGJvcmRlckpvaW5TdHlsZTogXCJtaXRlclwiLFxyXG4gICAgICAgICAgcG9pbnRCb3JkZXJDb2xvcjogXCJyZ2JhKDIzMiwyNDMsMTYsMSlcIixcclxuICAgICAgICAgIHBvaW50QmFja2dyb3VuZENvbG9yOiBcIiNmZmZcIixcclxuICAgICAgICAgIHBvaW50Qm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICBwb2ludEhvdmVyUmFkaXVzOiAxMCxcclxuICAgICAgICAgIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyMzIsMjQzLDE2LDEpXCIsXHJcbiAgICAgICAgICBwb2ludEhvdmVyQm9yZGVyQ29sb3I6IFwicmdiYSgyMjAsMjIwLDIyMCwxKVwiLFxyXG4gICAgICAgICAgcG9pbnRCb3JkZXJXaWR0aDogMixcclxuICAgICAgICAgIHBvaW50UmFkaXVzOiAxMCxcclxuICAgICAgICAgIGRhdGE6IGRhdGFDb3ZpZC5hY3RpdmUsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH07XHJcbiAgfVxyXG4gIGNvbnN0IGRhdGFQaWUgPSB7XHJcbiAgICBsYWJlbHM6IFtcIlBvc2l0aWZcIiwgXCJTZW1idWhcIiwgXCJNZW5pbmdnYWxcIl0sXHJcbiAgICBkYXRhc2V0czogW1xyXG4gICAgICB7XHJcbiAgICAgICAgZGF0YTogW1xyXG4gICAgICAgICAgc3VtKFwiQ29uZmlybWVkXCIsIHByb3BzKSxcclxuICAgICAgICAgIHN1bShcIlJlY292ZXJlZFwiLCBwcm9wcyksXHJcbiAgICAgICAgICBzdW0oXCJEZWF0aHNcIiwgcHJvcHMpLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXCIjZmY2Mzg0XCIsIFwiIzM2YTJlYlwiLCBcIiNmZmNlNTZcIl0sXHJcbiAgICAgICAgaG92ZXJiYWNrZ3JvdW5kQ29sb3I6IFtcIiNmZjYzODRcIiwgXCIjMzZhMmViXCIsIFwiI2ZmY2U1NlwiXSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItNVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMiBjb2wtbWQtMTIgY29sLXNtLTEyIGNvbC14bC0xMlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBvdmVyZmxvdy1oaWRkZW4gYmctd2hpdGVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5cclxuICAgICAgICAgICAgICB7cHJvcHMuaXNHbG9iYWxcclxuICAgICAgICAgICAgICAgID8gXCJTdGF0aXN0aWsgVmlydXMgQ29yb25hIERpIER1bmlhXCJcclxuICAgICAgICAgICAgICAgIDogXCJTdGF0aXN0aWsgVmlydXMgQ29yb25hIERpIEluZG9uZXNpYVwifVxyXG4gICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJ0LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICB7cHJvcHMuaXNHbG9iYWwgPyAoXHJcbiAgICAgICAgICAgICAgICA8UGllIGRhdGE9e2RhdGFQaWV9IC8+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxMaW5lIGRhdGE9e2RhdGF9IHdpZHRoPXsxMDB9IGhlaWdodD17NTB9IC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG10LTZcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LW5vcm1hbCBtdC0yXCI+UE9TSVRJRjwvaDU+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWItMVwiPlxyXG4gICAgICAgICAgICAgICAgICA8TnVtYmVyRm9ybWF0XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N1bShcIkNvbmZpcm1lZFwiLCBwcm9wcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheVR5cGU9e1widGV4dFwifVxyXG4gICAgICAgICAgICAgICAgICAgIHRob3VzYW5kU2VwYXJhdG9yPXtcIixcIn1cclxuICAgICAgICAgICAgICAgICAgICBkZWNpbWFsU2VwYXJhdG9yPXtcIi5cIn1cclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9ezB9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMCB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC13ZWlnaHQtNzAwXCI+PC9zcGFuPk9SQU5HXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ub3JtYWwgbXQtMlwiPlNFTUJVSDwvaDU+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWItMVwiPlxyXG4gICAgICAgICAgICAgICAgICA8TnVtYmVyRm9ybWF0XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N1bShcIlJlY292ZXJlZFwiLCBwcm9wcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheVR5cGU9e1widGV4dFwifVxyXG4gICAgICAgICAgICAgICAgICAgIHRob3VzYW5kU2VwYXJhdG9yPXtcIixcIn1cclxuICAgICAgICAgICAgICAgICAgICBkZWNpbWFsU2VwYXJhdG9yPXtcIi5cIn1cclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9ezB9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMCB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC13ZWlnaHQtNzAwXCI+PC9zcGFuPk9SQU5HXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ub3JtYWwgbXQtMlwiPk1FTklOR0dBTDwvaDU+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWItMVwiPlxyXG4gICAgICAgICAgICAgICAgICA8TnVtYmVyRm9ybWF0XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N1bShcIkRlYXRoc1wiLCBwcm9wcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheVR5cGU9e1widGV4dFwifVxyXG4gICAgICAgICAgICAgICAgICAgIHRob3VzYW5kU2VwYXJhdG9yPXtcIixcIn1cclxuICAgICAgICAgICAgICAgICAgICBkZWNpbWFsU2VwYXJhdG9yPXtcIi5cIn1cclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9ezB9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMCB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC13ZWlnaHQtNzAwXCI+PC9zcGFuPk9SQU5HXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdyYWZpaztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
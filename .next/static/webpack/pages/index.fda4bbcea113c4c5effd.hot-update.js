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
      data: [20000, 12000, 300],
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
            lineNumber: 65,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "card-body",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "chart-wrapper",
            children: props.isGlobal ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__["Pie"], {
              data: dataPie
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 17
            }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__["Line"], {
              data: data,
              width: 100,
              height: 50
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
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
                lineNumber: 81,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h3", {
                className: "mb-1",
                children: "20.000"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                className: "mb-0 text-muted",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
                  className: "text-lg font-weight-700"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 84,
                  columnNumber: 19
                }, _this), "ORANG"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "col text-center",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h5", {
                className: "font-weight-normal mt-2",
                children: "SEMBUH"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h3", {
                className: "mb-1",
                children: "12.000"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                className: "mb-0 text-muted",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
                  className: "text-lg font-weight-700"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 91,
                  columnNumber: 19
                }, _this), "ORANG"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "col text-center",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h5", {
                className: "font-weight-normal mt-2",
                children: "MENINGGAL"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h3", {
                className: "mb-1",
                children: "300"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                className: "mb-0 text-muted",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
                  className: "text-lg font-weight-700"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 98,
                  columnNumber: 19
                }, _this), "ORANG"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 61,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EYXNoYm9hcmQvR3JhZmlrLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJzdW0iLCJHcmFmaWsiLCJwcm9wcyIsImRhdGFDb3ZpZCIsImRhdGEiLCJpc0dsb2JhbCIsImxhYmVscyIsImRhdGFzZXRzIiwibGFiZWwiLCJmaWxsIiwibGluZVRlbnNpb24iLCJiYWNrR3JvdW5kQ29sb3IiLCJib3JkZXJDb2xvciIsImJvcmRlckNhcFN0eWxlIiwiYm9yZGVyRGFzaCIsImJvcmRlckRhc2hPZmZzZXQiLCJib3JkZXJKb2luU3R5bGUiLCJwb2ludEJvcmRlckNvbG9yIiwicG9pbnRCYWNrZ3JvdW5kQ29sb3IiLCJwb2ludEJvcmRlcldpZHRoIiwicG9pbnRIb3ZlclJhZGl1cyIsInBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3IiLCJwb2ludEhvdmVyQm9yZGVyQ29sb3IiLCJkYXRhUGllIiwiYmFja2dyb3VuZENvbG9yIiwiaG92ZXJiYWNrZ3JvdW5kQ29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O2VBRWdCQSxtQkFBTyxDQUFDLDZDQUFELEM7SUFBZkMsRyxZQUFBQSxHOztBQUVSLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQsRUFBVztBQUN4QixNQUFJQyxTQUFTLEdBQUcsSUFBaEI7QUFDQSxNQUFJQyxJQUFJLEdBQUcsSUFBWDs7QUFFQSxNQUFJLENBQUNGLEtBQUssQ0FBQ0csUUFBWCxFQUFxQjtBQUFBOztBQUNuQkYsYUFBUyxHQUFHLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsRUFBdEIsRUFBMEIsRUFBMUIsRUFBOEIsRUFBOUIsQ0FBWjtBQUNBQyxRQUFJLEdBQUc7QUFDTEUsWUFBTSxFQUFFLENBQ04sT0FETSxFQUVO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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZGLGVBR0U7QUFBRyx5QkFBUyxFQUFDLGlCQUFiO0FBQUEsd0NBQ0U7QUFBTSwyQkFBUyxFQUFDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFSRixlQWVFO0FBQUssdUJBQVMsRUFBQyxpQkFBZjtBQUFBLHNDQUNFO0FBQUkseUJBQVMsRUFBQyx5QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUVFO0FBQUkseUJBQVMsRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZGLGVBR0U7QUFBRyx5QkFBUyxFQUFDLGlCQUFiO0FBQUEsd0NBQ0U7QUFBTSwyQkFBUyxFQUFDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUErQ0QsQ0FwR0Q7O0tBQU1ILE07QUFzR1NBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmZkYTRiYmNlYTExM2M0YzVlZmZkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IExpbmUsIFBpZSB9IGZyb20gXCJyZWFjdC1jaGFydGpzLTJcIjtcclxuaW1wb3J0IE51bWJlckZvcm1hdCBmcm9tIFwicmVhY3QtbnVtYmVyLWZvcm1hdFwiO1xyXG5cclxuY29uc3QgeyBzdW0gfSA9IHJlcXVpcmUoXCIuLi8uLi91dGlsL2xpYnJhcnlcIik7XHJcblxyXG5jb25zdCBHcmFmaWsgPSAocHJvcHMpID0+IHtcclxuICBsZXQgZGF0YUNvdmlkID0gbnVsbDtcclxuICBsZXQgZGF0YSA9IG51bGw7XHJcblxyXG4gIGlmICghcHJvcHMuaXNHbG9iYWwpIHtcclxuICAgIGRhdGFDb3ZpZCA9IFsyLCAyLCAyLCAyLCA0LCA0LCA2LCAxOSwgMjcsIDM0XTtcclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIGxhYmVsczogW1xyXG4gICAgICAgIFwiMiBNYXJcIixcclxuICAgICAgICBcIjMgTWFyXCIsXHJcbiAgICAgICAgXCI0IE1hclwiLFxyXG4gICAgICAgIFwiNSBNYXJcIixcclxuICAgICAgICBcIjYgTWFyXCIsXHJcbiAgICAgICAgXCI3IE1hclwiLFxyXG4gICAgICAgIFwiOCBNYXJcIixcclxuICAgICAgICBcIjkgTWFyXCIsXHJcbiAgICAgICAgXCIxMCBNYXJcIixcclxuICAgICAgICBcIjExIE1hclwiLFxyXG4gICAgICBdLFxyXG4gICAgICBkYXRhc2V0czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiBcIkp1bWxhaCBQb3NpdGlmXCIsXHJcbiAgICAgICAgICBmaWxsOiBmYWxzZSxcclxuICAgICAgICAgIGxpbmVUZW5zaW9uOiAwLjEsXHJcbiAgICAgICAgICBiYWNrR3JvdW5kQ29sb3I6IFwicmdiYSgyMjksNTYsNTAsMC40KVwiLFxyXG4gICAgICAgICAgYm9yZGVyQ29sb3I6IFwicmdiYSgyMjksNTYsNTYsMSlcIixcclxuICAgICAgICAgIGJvcmRlckNhcFN0eWxlOiBcImJ1dHRcIixcclxuICAgICAgICAgIGJvcmRlckRhc2g6IFtdLFxyXG4gICAgICAgICAgYm9yZGVyRGFzaE9mZnNldDogMC4wLFxyXG4gICAgICAgICAgYm9yZGVySm9pblN0eWxlOiBcIm1pdGVyXCIsXHJcbiAgICAgICAgICBwb2ludEJvcmRlckNvbG9yOiBcInJnYmEoMjI5LDU2LDU2LDEpXCIsXHJcbiAgICAgICAgICBwb2ludEJhY2tncm91bmRDb2xvcjogXCIjZmZmXCIsXHJcbiAgICAgICAgICBwb2ludEJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgcG9pbnRIb3ZlclJhZGl1czogMTAsXHJcbiAgICAgICAgICBwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjI5LDU2LDU2LDEpXCIsXHJcbiAgICAgICAgICBwb2ludEhvdmVyQm9yZGVyQ29sb3I6IFwicmdiYSgyMjAsMjIwLDIyMCwxKVwiLFxyXG4gICAgICAgICAgcG9pbnRCb3JkZXJXaWR0aDogMixcclxuICAgICAgICAgIHBvaW50UmFkaXVzOiAxMCxcclxuICAgICAgICAgIGRhdGE6IGRhdGFDb3ZpZCxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfTtcclxuICB9XHJcbiAgY29uc3QgZGF0YVBpZSA9IHtcclxuICAgIGxhYmVsczogW1wiUG9zaXRpZlwiLCBcIlNlbWJ1aFwiLCBcIk1lbmluZ2dhbFwiXSxcclxuICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBkYXRhOiBbMjAwMDAsIDEyMDAwLCAzMDBdLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogW1wiI2ZmNjM4NFwiLCBcIiMzNmEyZWJcIiwgXCIjZmZjZTU2XCJdLFxyXG4gICAgICAgIGhvdmVyYmFja2dyb3VuZENvbG9yOiBbXCIjZmY2Mzg0XCIsIFwiIzM2YTJlYlwiLCBcIiNmZmNlNTZcIl0sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTVcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTIgY29sLW1kLTEyIGNvbC1zbS0xMiBjb2wteGwtMTJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgb3ZlcmZsb3ctaGlkZGVuIGJnLXdoaXRlXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAge3Byb3BzLmlzR2xvYmFsXHJcbiAgICAgICAgICAgICAgICA/IFwiU3RhdGlzdGlrIFZpcnVzIENvcm9uYSBEaSBEdW5pYVwiXHJcbiAgICAgICAgICAgICAgICA6IFwiU3RhdGlzdGlrIFZpcnVzIENvcm9uYSBEaSBJbmRvbmVzaWFcIn1cclxuICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFydC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAge3Byb3BzLmlzR2xvYmFsID8gKFxyXG4gICAgICAgICAgICAgICAgPFBpZSBkYXRhPXtkYXRhUGllfSAvPlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8TGluZSBkYXRhPXtkYXRhfSB3aWR0aD17MTAwfSBoZWlnaHQ9ezUwfSAvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtdC02XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ub3JtYWwgbXQtMlwiPlBPU0lUSUY8L2g1PlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1iLTFcIj4yMC4wMDA8L2gzPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMCB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC13ZWlnaHQtNzAwXCI+PC9zcGFuPk9SQU5HXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ub3JtYWwgbXQtMlwiPlNFTUJVSDwvaDU+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWItMVwiPjEyLjAwMDwvaDM+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0wIHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXdlaWdodC03MDBcIj48L3NwYW4+T1JBTkdcclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LW5vcm1hbCBtdC0yXCI+TUVOSU5HR0FMPC9oNT5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtYi0xXCI+MzAwPC9oMz5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTAgdGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtd2VpZ2h0LTcwMFwiPjwvc3Bhbj5PUkFOR1xyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHcmFmaWs7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
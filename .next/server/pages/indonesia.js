module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/indonesia.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Dashboard/CardStatus.js":
/*!********************************************!*\
  !*** ./components/Dashboard/CardStatus.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-number-format */ "react-number-format");
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_number_format__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\joo\\bootcamp\\niomic\\project\\NextJs\\covid-project\\components\\Dashboard\\CardStatus.js";


const {
  sum
} = __webpack_require__(/*! ../../util/library */ "./util/library.js");

const CardStatus = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "row mt-3 ml-1 mr-1 mb-2",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "col-sm-12 col-md-6 col-lg-6 col-xl-3",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "card bg-danger img-card box-primary-shadow birder",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "card-body",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "d-flex",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "text-white",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "text-white mb-0",
                children: "TOTAL POSITIF"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 13,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                className: "mb-0 number-font",
                children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_number_format__WEBPACK_IMPORTED_MODULE_1___default.a, {
                  value: sum("Confirmed", props),
                  displayType: "text",
                  thousandSeparator: ",",
                  decimalSeparator: ".",
                  defaultValue: 0
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 16,
                  columnNumber: 19
                }, undefined), " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 14,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "text-white mb-0",
                children: "ORANG"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 24,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 12,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "ml-auto",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "images/positif.png",
                width: "50",
                height: "50",
                alt: "postif"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 27,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "col-sm-12 col-md-6 col-lg-6 col-xl-3",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "card bg-success img-card box-primary-shadow birder",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "card-body",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "d-flex",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "text-white",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "text-white mb-0",
                children: "TOTAL SEMBUH"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                className: "mb-0 number-font",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_number_format__WEBPACK_IMPORTED_MODULE_1___default.a, {
                  value: sum("Recovered", props),
                  displayType: "text",
                  thousandSeparator: ",",
                  decimalSeparator: ".",
                  defaultValue: 0
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 45,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "text-white mb-0",
                children: "ORANG"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "ml-auto",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "images/sembuh.png",
                width: "50",
                height: "50",
                alt: "postif"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "col-sm-12 col-md-6 col-lg-6 col-xl-3",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "card bg-secondary img-card box-primary-shadow birder",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "card-body",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "d-flex",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "text-white",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "text-white mb-0",
                children: "TOTAL MENINGGAL"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                className: "mb-0 number-font",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_number_format__WEBPACK_IMPORTED_MODULE_1___default.a, {
                  value: sum("Deaths", props),
                  displayType: "text",
                  thousandSeparator: ",",
                  decimalSeparator: ".",
                  defaultValue: 0
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 74,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "text-white mb-0",
                children: "ORANG"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "ml-auto",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "images/meninggal.png",
                width: "50",
                height: "50",
                alt: "postif"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "col-sm-12 col-md-6 col-lg-6 col-xl-3",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "card bg-info img-card box-primary-shadow birder",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "card-body",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "d-flex",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "text-white",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "text-white mb-0",
                children: "TOTAL ACTIVE"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                className: "mb-0 number-font",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_number_format__WEBPACK_IMPORTED_MODULE_1___default.a, {
                  value: sum("Active", props),
                  displayType: "text",
                  thousandSeparator: ",",
                  decimalSeparator: ".",
                  defaultValue: 0
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 103,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "text-white mb-0",
                children: "ORANG"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "ml-auto",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "images/active1.png",
                width: "50",
                height: "50",
                alt: "postif"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (CardStatus);

/***/ }),

/***/ "./components/Dashboard/Grafik.js":
/*!****************************************!*\
  !*** ./components/Dashboard/Grafik.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-chartjs-2 */ "react-chartjs-2");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-number-format */ "react-number-format");
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_number_format__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "D:\\joo\\bootcamp\\niomic\\project\\NextJs\\covid-project\\components\\Dashboard\\Grafik.js";




const {
  sum,
  getAllMonth
} = __webpack_require__(/*! ../../util/library */ "./util/library.js");

const Grafik = props => {
  let dataCovid = null;
  let data = null;

  if (!props.isGlobal) {
    dataCovid = getAllMonth(props);
    data = {
      labels: dataCovid.label,
      datasets: [{
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
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointBorderWidth: 2,
        pointRadius: 10,
        data: dataCovid.positif
      }, {
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
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointBorderWidth: 2,
        pointRadius: 10,
        data: dataCovid.sembuh
      }, {
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
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointBorderWidth: 2,
        pointRadius: 10,
        data: dataCovid.meninggal
      }, {
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
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointBorderWidth: 2,
        pointRadius: 10,
        data: dataCovid.active
      }]
    };
  }

  const dataPie = {
    labels: ["Positif", "Sembuh", "Meninggal"],
    datasets: [{
      data: [sum("Confirmed", props), sum("Recovered", props), sum("Deaths", props)],
      backgroundColor: ["#ff6384", "#36a2eb", "#ffce56"],
      hoverbackgroundColor: ["#ff6384", "#36a2eb", "#ffce56"]
    }]
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "row mb-5",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "col-lg-12 col-md-12 col-sm-12 col-xl-12",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "card overflow-hidden bg-white",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "card-header",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            className: "card-title",
            children: props.isGlobal ? "Statistik Virus Corona Di Dunia" : "Statistik Virus Corona Di Indonesia"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "card-body",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "chart-wrapper",
            children: props.isGlobal ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__["Pie"], {
              data: dataPie
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 17
            }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__["Line"], {
              data: data,
              width: 100,
              height: 50
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row mt-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col text-center",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                className: "font-weight-normal mt-2",
                children: "POSITIF"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 134,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                className: "mb-1",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_number_format__WEBPACK_IMPORTED_MODULE_3___default.a, {
                  value: sum("Confirmed", props),
                  displayType: "text",
                  thousandSeparator: ",",
                  decimalSeparator: ".",
                  defaultValue: 0
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 136,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 135,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "mb-0 text-muted",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "text-lg font-weight-700"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 145,
                  columnNumber: 19
                }, undefined), "ORANG"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 144,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col text-center",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                className: "font-weight-normal mt-2",
                children: "SEMBUH"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 149,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                className: "mb-1",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_number_format__WEBPACK_IMPORTED_MODULE_3___default.a, {
                  value: sum("Recovered", props),
                  displayType: "text",
                  thousandSeparator: ",",
                  decimalSeparator: ".",
                  defaultValue: 0
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 151,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 150,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "mb-0 text-muted",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "text-lg font-weight-700"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 160,
                  columnNumber: 19
                }, undefined), "ORANG"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 159,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 148,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col text-center",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                className: "font-weight-normal mt-2",
                children: "MENINGGAL"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 164,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                className: "mb-1",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_number_format__WEBPACK_IMPORTED_MODULE_3___default.a, {
                  value: sum("Deaths", props),
                  displayType: "text",
                  thousandSeparator: ",",
                  decimalSeparator: ".",
                  defaultValue: 0
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 166,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 165,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "mb-0 text-muted",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "text-lg font-weight-700"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 175,
                  columnNumber: 19
                }, undefined), "ORANG"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 174,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 163,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 114,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Grafik);

/***/ }),

/***/ "./components/Dashboard/IndexPage.js":
/*!*******************************************!*\
  !*** ./components/Dashboard/IndexPage.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layout_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Layout/Header */ "./components/Layout/Header.js");
/* harmony import */ var _Layout_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Layout/Footer */ "./components/Layout/Footer.js");
/* harmony import */ var _CardStatus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CardStatus */ "./components/Dashboard/CardStatus.js");
/* harmony import */ var _Grafik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Grafik */ "./components/Dashboard/Grafik.js");
/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Table */ "./components/Dashboard/Table.js");

var _jsxFileName = "D:\\joo\\bootcamp\\niomic\\project\\NextJs\\covid-project\\components\\Dashboard\\IndexPage.js";






function IndexPage(props) {
  const contentStyle = {
    minHeight: "90vh",
    top: "56px",
    backgroundColor: "#f1f1f9",
    overflowX: "hidden"
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    style: {
      backgroundColor: "#f1f1f9"
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Layout_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container content position-relative",
      style: contentStyle,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "row",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-12 d-flex justify-content-center text-center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "mt-5 h2",
            children: "NIOMIC Kawal Covid19"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-12 d-flex justify-content-center text-center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "mt-3 f18",
            children: "Website Pemantauan Terkini Kasus Covid19"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CardStatus__WEBPACK_IMPORTED_MODULE_3__["default"], {
        isGlobal: props.isGlobal,
        data: props.data ? props.data : null
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Grafik__WEBPACK_IMPORTED_MODULE_4__["default"], {
        isGlobal: props.isGlobal,
        data: props.data ? props.data : null,
        statistik: props.statistik ? props.statistik : null
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Table__WEBPACK_IMPORTED_MODULE_5__["default"], {
        isGlobal: props.isGlobal,
        data: props.data ? props.data : null,
        provinsi: props.provinsi
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Layout_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
      rightContent: "",
      leftContent: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "ml-2 font-weight-bold ",
        children: "Niomic-Tech @2020 All Right Reserved"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ }),

/***/ "./components/Dashboard/Table.js":
/*!***************************************!*\
  !*** ./components/Dashboard/Table.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-number-format */ "react-number-format");
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_number_format__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\joo\\bootcamp\\niomic\\project\\NextJs\\covid-project\\components\\Dashboard\\Table.js";


const Table = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "row mb-5",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "col-sm-12 col-md-12 col col-lg-12 col-xl-14",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "card",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "card-header",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            className: "card-title",
            children: props.isGlobal ? "Data Kasus Virus Corona Di Dunia" : "Data Kasus Virus Corona Di Indonesia"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 9,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "card-body",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "table-responsive",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
              className: "table table-bordered table-hover mb-0 text-nowrap",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    children: "No."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 20,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    children: props.isGlobal ? "Negara" : "Provinsi"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 21,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    children: "Positif"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 22,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    children: "sembuh"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 23,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    children: "Meninggal"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 24,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 19,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 18,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
                children: props.isGlobal ? props.data && props.data.map((item, index) => {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      children: index + 1
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 33,
                      columnNumber: 29
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      children: item.attributes.Country_Region
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 34,
                      columnNumber: 29
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_number_format__WEBPACK_IMPORTED_MODULE_1___default.a, {
                        value: item.attributes.Confirmed,
                        displayType: "text",
                        thousandSeparator: ",",
                        decimalSeparator: ".",
                        defaultValue: 0
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 37,
                        columnNumber: 31
                      }, undefined), " "]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 35,
                      columnNumber: 29
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_number_format__WEBPACK_IMPORTED_MODULE_1___default.a, {
                        value: item.attributes.Recovered,
                        displayType: "text",
                        thousandSeparator: ",",
                        decimalSeparator: ".",
                        defaultValue: 0
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 46,
                        columnNumber: 31
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 45,
                      columnNumber: 29
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_number_format__WEBPACK_IMPORTED_MODULE_1___default.a, {
                        value: item.attributes.Deaths,
                        displayType: "text",
                        thousandSeparator: ",",
                        decimalSeparator: ".",
                        defaultValue: 0
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 55,
                        columnNumber: 31
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 54,
                      columnNumber: 29
                    }, undefined)]
                  }, index, true, {
                    fileName: _jsxFileName,
                    lineNumber: 32,
                    columnNumber: 27
                  }, undefined);
                }) : props.provinsi && props.provinsi.map((item, index) => {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      children: index + 1
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 70,
                      columnNumber: 29
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      children: item.attributes.Provinsi
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 71,
                      columnNumber: 29
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_number_format__WEBPACK_IMPORTED_MODULE_1___default.a, {
                        value: item.attributes.Kasus_Posi,
                        displayType: "text",
                        thousandSeparator: ",",
                        decimalSeparator: ".",
                        defaultValue: 0
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 74,
                        columnNumber: 31
                      }, undefined), " "]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 72,
                      columnNumber: 29
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_number_format__WEBPACK_IMPORTED_MODULE_1___default.a, {
                        value: item.attributes.Kasus_Semb,
                        displayType: "text",
                        thousandSeparator: ",",
                        decimalSeparator: ".",
                        defaultValue: 0
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 83,
                        columnNumber: 31
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 82,
                      columnNumber: 29
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_number_format__WEBPACK_IMPORTED_MODULE_1___default.a, {
                        value: item.attributes.Kasus_Meni,
                        displayType: "text",
                        thousandSeparator: ",",
                        decimalSeparator: ".",
                        defaultValue: 0
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 92,
                        columnNumber: 31
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 91,
                      columnNumber: 29
                    }, undefined)]
                  }, index, true, {
                    fileName: _jsxFileName,
                    lineNumber: 69,
                    columnNumber: 27
                  }, undefined);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 27,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Table);

/***/ }),

/***/ "./components/Layout/Footer.js":
/*!*************************************!*\
  !*** ./components/Layout/Footer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\joo\\bootcamp\\niomic\\project\\NextJs\\covid-project\\components\\Layout\\Footer.js";


const Footer = props => {
  if (!props.leftContent && !props.rightContent) {
    return null;
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
    className: "main-footer clearfix fixed-bottom bg-white border-top",
    children: [props.rightContent && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "float-right d-one d-sm-inline",
      style: {
        color: "#6c757d"
      },
      children: props.rightContent
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }, undefined), props.leftContent && props.leftContent]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined);
};

Footer.PropTypes = {
  leftContent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element,
  rightContent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Layout/Header.js":
/*!*************************************!*\
  !*** ./components/Layout/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_Head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/Head */ "next/Head");
/* harmony import */ var next_Head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_Head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Nav */ "react-bootstrap/Nav");
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "D:\\joo\\bootcamp\\niomic\\project\\NextJs\\covid-project\\components\\Layout\\Header.js";




const Header = props => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_Head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Niomic Kawal Covid"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
      className: "main-header navbar navbar-expand navbar-light navbar-white fixed-top border-bottom",
      style: {
        backgroundColor: "white"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        className: "navbar-nav",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "nav-item",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "nav-link",
            "data-widget": "pushmenu",
            href: "#",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "images/niomic-logo.png",
              style: {
                width: "100px"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "ml-auto hidden-sm-down",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default.a, {
            variant: "pills",
            defaultActiveKey: router.pathname == "/" ? "link-0" : "link-1",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default.a.Link, {
                eventKey: "link-0",
                href: "/",
                children: "Global"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 31,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default.a.Link, {
                eventKey: "link-1",
                href: "/indonesia",
                children: "Indonesia"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 36,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./config.json":
/*!*********************!*\
  !*** ./config.json ***!
  \*********************/
/*! exports provided: app, kawal-corona, global-api, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"app\":{\"version\":\"1.0\"},\"kawal-corona\":{\"base_url\":\"https://api.kawalcorona.com\",\"indonesia\":\"/indonesia\",\"provinsi\":\"/provinsi\"},\"global-api\":{\"base_url\":\"https://api.covid19api.com\",\"total_live\":\"/total/dayone/country\"}}");

/***/ }),

/***/ "./pages/indonesia.js":
/*!****************************!*\
  !*** ./pages/indonesia.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Dashboard_IndexPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Dashboard/IndexPage */ "./components/Dashboard/IndexPage.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "D:\\joo\\bootcamp\\niomic\\project\\NextJs\\covid-project\\pages\\indonesia.js";




const config = __webpack_require__(/*! ../config.json */ "./config.json");

class Indonesia extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  static async getInitialProps() {
    const data = await isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default()(`${config["kawal-corona"].base_url}/indonesia`);
    const items = await data.json();
    const province = await isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default()(`${config["kawal-corona"].base_url}/indonesia/provinsi`);
    const itemProvince = await province.json();
    const stat = await isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default()(`${config["global-api"].base_url}${config["global-api"].total_live}/indonesia`);
    const statData = await stat.json();
    return {
      items,
      statData,
      itemProvince
    };
  }

  render() {
    const {
      items,
      statData,
      itemProvince
    } = this.props;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Dashboard_IndexPage__WEBPACK_IMPORTED_MODULE_2__["default"], {
      isGlobal: false,
      data: items,
      statistik: statData,
      provinsi: itemProvince
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Indonesia);

/***/ }),

/***/ "./util/library.js":
/*!*************************!*\
  !*** ./util/library.js ***!
  \*************************/
/*! exports provided: sum, getAllMonth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sum", function() { return sum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllMonth", function() { return getAllMonth; });
const sum = function (key, props) {
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
        return props.data.reduce((sum, a) => {
          return sum + a.attributes.Confirmed;
        }, 0);

      case "Recovered":
        return props.data.reduce((sum, a) => {
          return sum + a.attributes.Recovered;
        }, 0);

      case "Deaths":
        return props.data.reduce((sum, a) => {
          return sum + a.attributes.Deaths;
        }, 0);

      case "Active":
        return props.data.reduce((sum, a) => {
          return sum + a.attributes.Active;
        }, 0);

      default:
        return 0;
    }
  }
};
const getAllMonth = function (props) {
  const monthEng = ["jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Des"];
  let nowDate = new Date();
  let day = null;
  let month = null;
  let year = null;
  let label = [];
  let positif = [];
  let sembuh = [];
  let meninggal = [];
  let active = [];
  let data = [];

  for (let value of props.statistik) {
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

  data = {
    label: label,
    active: active,
    sembuh: sembuh,
    meninggal: meninggal,
    positif: positif
  };
  return data;
};

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "next/Head":
/*!****************************!*\
  !*** external "next/Head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/Head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap/Nav":
/*!**************************************!*\
  !*** external "react-bootstrap/Nav" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Nav");

/***/ }),

/***/ "react-chartjs-2":
/*!**********************************!*\
  !*** external "react-chartjs-2" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-chartjs-2");

/***/ }),

/***/ "react-number-format":
/*!**************************************!*\
  !*** external "react-number-format" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-number-format");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EYXNoYm9hcmQvQ2FyZFN0YXR1cy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Rhc2hib2FyZC9HcmFmaWsuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EYXNoYm9hcmQvSW5kZXhQYWdlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGFzaGJvYXJkL1RhYmxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0L0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kb25lc2lhLmpzIiwid2VicGFjazovLy8uL3V0aWwvbGlicmFyeS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLWZldGNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9IZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvTmF2XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtY2hhcnRqcy0yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtbnVtYmVyLWZvcm1hdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbInN1bSIsInJlcXVpcmUiLCJDYXJkU3RhdHVzIiwicHJvcHMiLCJnZXRBbGxNb250aCIsIkdyYWZpayIsImRhdGFDb3ZpZCIsImRhdGEiLCJpc0dsb2JhbCIsImxhYmVscyIsImxhYmVsIiwiZGF0YXNldHMiLCJmaWxsIiwibGluZVRlbnNpb24iLCJiYWNrR3JvdW5kQ29sb3IiLCJib3JkZXJDb2xvciIsImJvcmRlckNhcFN0eWxlIiwiYm9yZGVyRGFzaCIsImJvcmRlckRhc2hPZmZzZXQiLCJib3JkZXJKb2luU3R5bGUiLCJwb2ludEJvcmRlckNvbG9yIiwicG9pbnRCYWNrZ3JvdW5kQ29sb3IiLCJwb2ludEJvcmRlcldpZHRoIiwicG9pbnRIb3ZlclJhZGl1cyIsInBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3IiLCJwb2ludEhvdmVyQm9yZGVyQ29sb3IiLCJwb2ludFJhZGl1cyIsInBvc2l0aWYiLCJzZW1idWgiLCJtZW5pbmdnYWwiLCJhY3RpdmUiLCJkYXRhUGllIiwiYmFja2dyb3VuZENvbG9yIiwiaG92ZXJiYWNrZ3JvdW5kQ29sb3IiLCJJbmRleFBhZ2UiLCJjb250ZW50U3R5bGUiLCJtaW5IZWlnaHQiLCJ0b3AiLCJvdmVyZmxvd1giLCJzdGF0aXN0aWsiLCJwcm92aW5zaSIsIlRhYmxlIiwibWFwIiwiaXRlbSIsImluZGV4IiwiYXR0cmlidXRlcyIsIkNvdW50cnlfUmVnaW9uIiwiQ29uZmlybWVkIiwiUmVjb3ZlcmVkIiwiRGVhdGhzIiwiUHJvdmluc2kiLCJLYXN1c19Qb3NpIiwiS2FzdXNfU2VtYiIsIkthc3VzX01lbmkiLCJGb290ZXIiLCJsZWZ0Q29udGVudCIsInJpZ2h0Q29udGVudCIsImNvbG9yIiwiUHJvcFR5cGVzIiwiZWxlbWVudCIsInN0cmluZyIsIkhlYWRlciIsInJvdXRlciIsInVzZVJvdXRlciIsIndpZHRoIiwicGF0aG5hbWUiLCJjb25maWciLCJJbmRvbmVzaWEiLCJSZWFjdCIsIkNvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsImZldGNoIiwiYmFzZV91cmwiLCJpdGVtcyIsImpzb24iLCJwcm92aW5jZSIsIml0ZW1Qcm92aW5jZSIsInN0YXQiLCJ0b3RhbF9saXZlIiwic3RhdERhdGEiLCJyZW5kZXIiLCJrZXkiLCJkaXJhd2F0IiwicmVkdWNlIiwiYSIsIkFjdGl2ZSIsIm1vbnRoRW5nIiwibm93RGF0ZSIsIkRhdGUiLCJkYXkiLCJtb250aCIsInllYXIiLCJ2YWx1ZSIsImdldERhdGUiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwicHVzaCIsIk1hdGgiLCJhYnMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBOztBQUVBLE1BQU07QUFBRUE7QUFBRixJQUFVQyxtQkFBTyxDQUFDLDZDQUFELENBQXZCOztBQUVBLE1BQU1DLFVBQVUsR0FBSUMsS0FBRCxJQUFXO0FBQzVCLHNCQUNFO0FBQUssYUFBUyxFQUFDLHlCQUFmO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUMsc0NBQWY7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsbURBQWY7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUMsV0FBZjtBQUFBLGlDQUNFO0FBQUsscUJBQVMsRUFBQyxR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QUNrRSxJQUFQLENBQVlKLEtBQUssQ0FBQ1AsTUFBbEI7QUFDQXpELFVBQU0sQ0FBQ29FLElBQVAsQ0FBWUosS0FBSyxDQUFDNUMsU0FBbEI7QUFDQW5CLGFBQVMsQ0FBQ21FLElBQVYsQ0FBZUosS0FBSyxDQUFDM0MsTUFBckI7QUFDQXRCLFdBQU8sQ0FBQ3FFLElBQVIsQ0FBYUosS0FBSyxDQUFDN0MsU0FBbkI7QUFDRDs7QUFDRHhDLE1BQUksR0FBRztBQUNMRyxTQUFLLEVBQUVBLEtBREY7QUFFTG9CLFVBQU0sRUFBRUEsTUFGSDtBQUdMRixVQUFNLEVBQUVBLE1BSEg7QUFJTEMsYUFBUyxFQUFFQSxTQUpOO0FBS0xGLFdBQU8sRUFBRUE7QUFMSixHQUFQO0FBT0EsU0FBT3BCLElBQVA7QUFDRCxDQTdDTSxDOzs7Ozs7Ozs7OztBQ3RDUCw2Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9pbmRvbmVzaWEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZG9uZXNpYS5qc1wiKTtcbiIsImltcG9ydCBOdW1iZXJGb3JtYXQgZnJvbSBcInJlYWN0LW51bWJlci1mb3JtYXRcIjtcclxuXHJcbmNvbnN0IHsgc3VtIH0gPSByZXF1aXJlKFwiLi4vLi4vdXRpbC9saWJyYXJ5XCIpO1xyXG5cclxuY29uc3QgQ2FyZFN0YXR1cyA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtdC0zIG1sLTEgbXItMSBtYi0yXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy02IGNvbC14bC0zXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGJnLWRhbmdlciBpbWctY2FyZCBib3gtcHJpbWFyeS1zaGFkb3cgYmlyZGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBtYi0wXCI+VE9UQUwgUE9TSVRJRjwvcD5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtYi0wIG51bWJlci1mb250XCI+XHJcbiAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgPE51bWJlckZvcm1hdFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdW0oXCJDb25maXJtZWRcIiwgcHJvcHMpfVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlUeXBlPXtcInRleHRcIn1cclxuICAgICAgICAgICAgICAgICAgICB0aG91c2FuZFNlcGFyYXRvcj17XCIsXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgZGVjaW1hbFNlcGFyYXRvcj17XCIuXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXswfVxyXG4gICAgICAgICAgICAgICAgICAvPntcIiBcIn1cclxuICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIG1iLTBcIj5PUkFORzwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLWF1dG9cIj5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiaW1hZ2VzL3Bvc2l0aWYucG5nXCJcclxuICAgICAgICAgICAgICAgICAgd2lkdGg9XCI1MFwiXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjUwXCJcclxuICAgICAgICAgICAgICAgICAgYWx0PVwicG9zdGlmXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNiBjb2wteGwtM1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBiZy1zdWNjZXNzIGltZy1jYXJkIGJveC1wcmltYXJ5LXNoYWRvdyBiaXJkZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIG1iLTBcIj5UT1RBTCBTRU1CVUg8L3A+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibWItMCBudW1iZXItZm9udFwiPlxyXG4gICAgICAgICAgICAgICAgICA8TnVtYmVyRm9ybWF0XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N1bShcIlJlY292ZXJlZFwiLCBwcm9wcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheVR5cGU9e1widGV4dFwifVxyXG4gICAgICAgICAgICAgICAgICAgIHRob3VzYW5kU2VwYXJhdG9yPXtcIixcIn1cclxuICAgICAgICAgICAgICAgICAgICBkZWNpbWFsU2VwYXJhdG9yPXtcIi5cIn1cclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9ezB9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBtYi0wXCI+T1JBTkc8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cImltYWdlcy9zZW1idWgucG5nXCJcclxuICAgICAgICAgICAgICAgICAgd2lkdGg9XCI1MFwiXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjUwXCJcclxuICAgICAgICAgICAgICAgICAgYWx0PVwicG9zdGlmXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNiBjb2wteGwtM1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBiZy1zZWNvbmRhcnkgaW1nLWNhcmQgYm94LXByaW1hcnktc2hhZG93IGJpcmRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXhcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgbWItMFwiPlRPVEFMIE1FTklOR0dBTDwvcD5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtYi0wIG51bWJlci1mb250XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxOdW1iZXJGb3JtYXRcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3VtKFwiRGVhdGhzXCIsIHByb3BzKX1cclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5VHlwZT17XCJ0ZXh0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhvdXNhbmRTZXBhcmF0b3I9e1wiLFwifVxyXG4gICAgICAgICAgICAgICAgICAgIGRlY2ltYWxTZXBhcmF0b3I9e1wiLlwifVxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17MH1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIG1iLTBcIj5PUkFORzwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLWF1dG9cIj5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiaW1hZ2VzL21lbmluZ2dhbC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD1cIjUwXCJcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNTBcIlxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJwb3N0aWZcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy02IGNvbC14bC0zXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGJnLWluZm8gaW1nLWNhcmQgYm94LXByaW1hcnktc2hhZG93IGJpcmRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXhcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgbWItMFwiPlRPVEFMIEFDVElWRTwvcD5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtYi0wIG51bWJlci1mb250XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxOdW1iZXJGb3JtYXRcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3VtKFwiQWN0aXZlXCIsIHByb3BzKX1cclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5VHlwZT17XCJ0ZXh0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhvdXNhbmRTZXBhcmF0b3I9e1wiLFwifVxyXG4gICAgICAgICAgICAgICAgICAgIGRlY2ltYWxTZXBhcmF0b3I9e1wiLlwifVxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17MH1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIG1iLTBcIj5PUkFORzwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLWF1dG9cIj5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiaW1hZ2VzL2FjdGl2ZTEucG5nXCJcclxuICAgICAgICAgICAgICAgICAgd2lkdGg9XCI1MFwiXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjUwXCJcclxuICAgICAgICAgICAgICAgICAgYWx0PVwicG9zdGlmXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRTdGF0dXM7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTGluZSwgUGllIH0gZnJvbSBcInJlYWN0LWNoYXJ0anMtMlwiO1xyXG5pbXBvcnQgTnVtYmVyRm9ybWF0IGZyb20gXCJyZWFjdC1udW1iZXItZm9ybWF0XCI7XHJcblxyXG5jb25zdCB7IHN1bSwgZ2V0QWxsTW9udGggfSA9IHJlcXVpcmUoXCIuLi8uLi91dGlsL2xpYnJhcnlcIik7XHJcblxyXG5jb25zdCBHcmFmaWsgPSAocHJvcHMpID0+IHtcclxuICBsZXQgZGF0YUNvdmlkID0gbnVsbDtcclxuICBsZXQgZGF0YSA9IG51bGw7XHJcblxyXG4gIGlmICghcHJvcHMuaXNHbG9iYWwpIHtcclxuICAgIGRhdGFDb3ZpZCA9IGdldEFsbE1vbnRoKHByb3BzKTtcclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIGxhYmVsczogZGF0YUNvdmlkLmxhYmVsLFxyXG4gICAgICBkYXRhc2V0czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiBcIkp1bWxhaCBQb3NpdGlmXCIsXHJcbiAgICAgICAgICBmaWxsOiBmYWxzZSxcclxuICAgICAgICAgIGxpbmVUZW5zaW9uOiAwLjEsXHJcbiAgICAgICAgICBiYWNrR3JvdW5kQ29sb3I6IFwicmdiYSgyMjksNTYsNTAsMC40KVwiLFxyXG4gICAgICAgICAgYm9yZGVyQ29sb3I6IFwicmdiYSgyMjksNTYsNTYsMSlcIixcclxuICAgICAgICAgIGJvcmRlckNhcFN0eWxlOiBcImJ1dHRcIixcclxuICAgICAgICAgIGJvcmRlckRhc2g6IFtdLFxyXG4gICAgICAgICAgYm9yZGVyRGFzaE9mZnNldDogMC4wLFxyXG4gICAgICAgICAgYm9yZGVySm9pblN0eWxlOiBcIm1pdGVyXCIsXHJcbiAgICAgICAgICBwb2ludEJvcmRlckNvbG9yOiBcInJnYmEoMjI5LDU2LDU2LDEpXCIsXHJcbiAgICAgICAgICBwb2ludEJhY2tncm91bmRDb2xvcjogXCIjZmZmXCIsXHJcbiAgICAgICAgICBwb2ludEJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgcG9pbnRIb3ZlclJhZGl1czogMTAsXHJcbiAgICAgICAgICBwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjI5LDU2LDU2LDEpXCIsXHJcbiAgICAgICAgICBwb2ludEhvdmVyQm9yZGVyQ29sb3I6IFwicmdiYSgyMjAsMjIwLDIyMCwxKVwiLFxyXG4gICAgICAgICAgcG9pbnRCb3JkZXJXaWR0aDogMixcclxuICAgICAgICAgIHBvaW50UmFkaXVzOiAxMCxcclxuICAgICAgICAgIGRhdGE6IGRhdGFDb3ZpZC5wb3NpdGlmLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwiSnVtbGFoIFNlbWJ1aFwiLFxyXG4gICAgICAgICAgZmlsbDogZmFsc2UsXHJcbiAgICAgICAgICBsaW5lVGVuc2lvbjogMC4xLFxyXG4gICAgICAgICAgYmFja0dyb3VuZENvbG9yOiBcInJnYmEoNzUsMTkyLDE5MiwwLjQpXCIsXHJcbiAgICAgICAgICBib3JkZXJDb2xvcjogXCJyZ2JhKDc1LDE5MiwxOTIsMSlcIixcclxuICAgICAgICAgIGJvcmRlckNhcFN0eWxlOiBcImJ1dHRcIixcclxuICAgICAgICAgIGJvcmRlckRhc2g6IFtdLFxyXG4gICAgICAgICAgYm9yZGVyRGFzaE9mZnNldDogMC4wLFxyXG4gICAgICAgICAgYm9yZGVySm9pblN0eWxlOiBcIm1pdGVyXCIsXHJcbiAgICAgICAgICBwb2ludEJvcmRlckNvbG9yOiBcInJnYmEoNzUsMTkyLDE5MiwxKVwiLFxyXG4gICAgICAgICAgcG9pbnRCYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgICAgICAgcG9pbnRCb3JkZXJXaWR0aDogMSxcclxuICAgICAgICAgIHBvaW50SG92ZXJSYWRpdXM6IDEwLFxyXG4gICAgICAgICAgcG9pbnRIb3ZlckJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDc1LDE5MiwxOTIsMSlcIixcclxuICAgICAgICAgIHBvaW50SG92ZXJCb3JkZXJDb2xvcjogXCJyZ2JhKDIyMCwyMjAsMjIwLDEpXCIsXHJcbiAgICAgICAgICBwb2ludEJvcmRlcldpZHRoOiAyLFxyXG4gICAgICAgICAgcG9pbnRSYWRpdXM6IDEwLFxyXG4gICAgICAgICAgZGF0YTogZGF0YUNvdmlkLnNlbWJ1aCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiBcIkp1bWxhaCBNZW5pbmdnYWxcIixcclxuICAgICAgICAgIGZpbGw6IGZhbHNlLFxyXG4gICAgICAgICAgbGluZVRlbnNpb246IDAuMSxcclxuICAgICAgICAgIGJhY2tHcm91bmRDb2xvcjogXCJyZ2JhKDAsMCwwLDAuNClcIixcclxuICAgICAgICAgIGJvcmRlckNvbG9yOiBcInJnYmEoMCwwLDAsMSlcIixcclxuICAgICAgICAgIGJvcmRlckNhcFN0eWxlOiBcImJ1dHRcIixcclxuICAgICAgICAgIGJvcmRlckRhc2g6IFtdLFxyXG4gICAgICAgICAgYm9yZGVyRGFzaE9mZnNldDogMC4wLFxyXG4gICAgICAgICAgYm9yZGVySm9pblN0eWxlOiBcIm1pdGVyXCIsXHJcbiAgICAgICAgICBwb2ludEJvcmRlckNvbG9yOiBcInJnYmEoMCwwLDAsMSlcIixcclxuICAgICAgICAgIHBvaW50QmFja2dyb3VuZENvbG9yOiBcIiNmZmZcIixcclxuICAgICAgICAgIHBvaW50Qm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICBwb2ludEhvdmVyUmFkaXVzOiAxMCxcclxuICAgICAgICAgIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgwLDAsMCwxKVwiLFxyXG4gICAgICAgICAgcG9pbnRIb3ZlckJvcmRlckNvbG9yOiBcInJnYmEoMjIwLDIyMCwyMjAsMSlcIixcclxuICAgICAgICAgIHBvaW50Qm9yZGVyV2lkdGg6IDIsXHJcbiAgICAgICAgICBwb2ludFJhZGl1czogMTAsXHJcbiAgICAgICAgICBkYXRhOiBkYXRhQ292aWQubWVuaW5nZ2FsLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwiSnVtbGFoIEFjdGl2ZVwiLFxyXG4gICAgICAgICAgZmlsbDogZmFsc2UsXHJcbiAgICAgICAgICBsaW5lVGVuc2lvbjogMC4xLFxyXG4gICAgICAgICAgYmFja0dyb3VuZENvbG9yOiBcInJnYmEoMjMyLDI0MywxNiwwLjQpXCIsXHJcbiAgICAgICAgICBib3JkZXJDb2xvcjogXCJyZ2JhKDIzMiwyNDMsMTYsMSlcIixcclxuICAgICAgICAgIGJvcmRlckNhcFN0eWxlOiBcImJ1dHRcIixcclxuICAgICAgICAgIGJvcmRlckRhc2g6IFtdLFxyXG4gICAgICAgICAgYm9yZGVyRGFzaE9mZnNldDogMC4wLFxyXG4gICAgICAgICAgYm9yZGVySm9pblN0eWxlOiBcIm1pdGVyXCIsXHJcbiAgICAgICAgICBwb2ludEJvcmRlckNvbG9yOiBcInJnYmEoMjMyLDI0MywxNiwxKVwiLFxyXG4gICAgICAgICAgcG9pbnRCYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgICAgICAgcG9pbnRCb3JkZXJXaWR0aDogMSxcclxuICAgICAgICAgIHBvaW50SG92ZXJSYWRpdXM6IDEwLFxyXG4gICAgICAgICAgcG9pbnRIb3ZlckJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDIzMiwyNDMsMTYsMSlcIixcclxuICAgICAgICAgIHBvaW50SG92ZXJCb3JkZXJDb2xvcjogXCJyZ2JhKDIyMCwyMjAsMjIwLDEpXCIsXHJcbiAgICAgICAgICBwb2ludEJvcmRlcldpZHRoOiAyLFxyXG4gICAgICAgICAgcG9pbnRSYWRpdXM6IDEwLFxyXG4gICAgICAgICAgZGF0YTogZGF0YUNvdmlkLmFjdGl2ZSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfTtcclxuICB9XHJcbiAgY29uc3QgZGF0YVBpZSA9IHtcclxuICAgIGxhYmVsczogW1wiUG9zaXRpZlwiLCBcIlNlbWJ1aFwiLCBcIk1lbmluZ2dhbFwiXSxcclxuICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBkYXRhOiBbXHJcbiAgICAgICAgICBzdW0oXCJDb25maXJtZWRcIiwgcHJvcHMpLFxyXG4gICAgICAgICAgc3VtKFwiUmVjb3ZlcmVkXCIsIHByb3BzKSxcclxuICAgICAgICAgIHN1bShcIkRlYXRoc1wiLCBwcm9wcyksXHJcbiAgICAgICAgXSxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcIiNmZjYzODRcIiwgXCIjMzZhMmViXCIsIFwiI2ZmY2U1NlwiXSxcclxuICAgICAgICBob3ZlcmJhY2tncm91bmRDb2xvcjogW1wiI2ZmNjM4NFwiLCBcIiMzNmEyZWJcIiwgXCIjZmZjZTU2XCJdLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi01XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyIGNvbC1tZC0xMiBjb2wtc20tMTIgY29sLXhsLTEyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIG92ZXJmbG93LWhpZGRlbiBiZy13aGl0ZVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPlxyXG4gICAgICAgICAgICAgIHtwcm9wcy5pc0dsb2JhbFxyXG4gICAgICAgICAgICAgICAgPyBcIlN0YXRpc3RpayBWaXJ1cyBDb3JvbmEgRGkgRHVuaWFcIlxyXG4gICAgICAgICAgICAgICAgOiBcIlN0YXRpc3RpayBWaXJ1cyBDb3JvbmEgRGkgSW5kb25lc2lhXCJ9XHJcbiAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcnQtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgIHtwcm9wcy5pc0dsb2JhbCA/IChcclxuICAgICAgICAgICAgICAgIDxQaWUgZGF0YT17ZGF0YVBpZX0gLz5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPExpbmUgZGF0YT17ZGF0YX0gd2lkdGg9ezEwMH0gaGVpZ2h0PXs1MH0gLz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXQtNlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtbm9ybWFsIG10LTJcIj5QT1NJVElGPC9oNT5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtYi0xXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxOdW1iZXJGb3JtYXRcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3VtKFwiQ29uZmlybWVkXCIsIHByb3BzKX1cclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5VHlwZT17XCJ0ZXh0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhvdXNhbmRTZXBhcmF0b3I9e1wiLFwifVxyXG4gICAgICAgICAgICAgICAgICAgIGRlY2ltYWxTZXBhcmF0b3I9e1wiLlwifVxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17MH1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0wIHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXdlaWdodC03MDBcIj48L3NwYW4+T1JBTkdcclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LW5vcm1hbCBtdC0yXCI+U0VNQlVIPC9oNT5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtYi0xXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxOdW1iZXJGb3JtYXRcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3VtKFwiUmVjb3ZlcmVkXCIsIHByb3BzKX1cclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5VHlwZT17XCJ0ZXh0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhvdXNhbmRTZXBhcmF0b3I9e1wiLFwifVxyXG4gICAgICAgICAgICAgICAgICAgIGRlY2ltYWxTZXBhcmF0b3I9e1wiLlwifVxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17MH1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0wIHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXdlaWdodC03MDBcIj48L3NwYW4+T1JBTkdcclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LW5vcm1hbCBtdC0yXCI+TUVOSU5HR0FMPC9oNT5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtYi0xXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxOdW1iZXJGb3JtYXRcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3VtKFwiRGVhdGhzXCIsIHByb3BzKX1cclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5VHlwZT17XCJ0ZXh0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhvdXNhbmRTZXBhcmF0b3I9e1wiLFwifVxyXG4gICAgICAgICAgICAgICAgICAgIGRlY2ltYWxTZXBhcmF0b3I9e1wiLlwifVxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17MH1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0wIHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXdlaWdodC03MDBcIj48L3NwYW4+T1JBTkdcclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR3JhZmlrO1xyXG4iLCJpbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9MYXlvdXQvSGVhZGVyXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL0xheW91dC9Gb290ZXJcIjtcclxuaW1wb3J0IENhcmRTdGF0dXMgZnJvbSBcIi4vQ2FyZFN0YXR1c1wiO1xyXG5pbXBvcnQgR3JhZmlrIGZyb20gXCIuL0dyYWZpa1wiO1xyXG5pbXBvcnQgVGFibGUgZnJvbSBcIi4vVGFibGVcIjtcclxuXHJcbmZ1bmN0aW9uIEluZGV4UGFnZShwcm9wcykge1xyXG4gIGNvbnN0IGNvbnRlbnRTdHlsZSA9IHtcclxuICAgIG1pbkhlaWdodDogXCI5MHZoXCIsXHJcbiAgICB0b3A6IFwiNTZweFwiLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNmMWYxZjlcIixcclxuICAgIG92ZXJmbG93WDogXCJoaWRkZW5cIixcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2YxZjFmOVwiIH19PlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNvbnRlbnQgcG9zaXRpb24tcmVsYXRpdmVcIiBzdHlsZT17Y29udGVudFN0eWxlfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtNSBoMlwiPk5JT01JQyBLYXdhbCBDb3ZpZDE5PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0zIGYxOFwiPldlYnNpdGUgUGVtYW50YXVhbiBUZXJraW5pIEthc3VzIENvdmlkMTk8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Q2FyZFN0YXR1c1xyXG4gICAgICAgICAgaXNHbG9iYWw9e3Byb3BzLmlzR2xvYmFsfVxyXG4gICAgICAgICAgZGF0YT17cHJvcHMuZGF0YSA/IHByb3BzLmRhdGEgOiBudWxsfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEdyYWZpa1xyXG4gICAgICAgICAgaXNHbG9iYWw9e3Byb3BzLmlzR2xvYmFsfVxyXG4gICAgICAgICAgZGF0YT17cHJvcHMuZGF0YSA/IHByb3BzLmRhdGEgOiBudWxsfVxyXG4gICAgICAgICAgc3RhdGlzdGlrPXtwcm9wcy5zdGF0aXN0aWsgPyBwcm9wcy5zdGF0aXN0aWsgOiBudWxsfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFRhYmxlXHJcbiAgICAgICAgICBpc0dsb2JhbD17cHJvcHMuaXNHbG9iYWx9XHJcbiAgICAgICAgICBkYXRhPXtwcm9wcy5kYXRhID8gcHJvcHMuZGF0YSA6IG51bGx9XHJcbiAgICAgICAgICBwcm92aW5zaT17cHJvcHMucHJvdmluc2l9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxGb290ZXJcclxuICAgICAgICByaWdodENvbnRlbnQ9e1wiXCJ9XHJcbiAgICAgICAgbGVmdENvbnRlbnQ9e1xyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC0yIGZvbnQtd2VpZ2h0LWJvbGQgXCI+XHJcbiAgICAgICAgICAgIE5pb21pYy1UZWNoIEAyMDIwIEFsbCBSaWdodCBSZXNlcnZlZFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlO1xyXG4iLCJpbXBvcnQgTnVtYmVyRm9ybWF0IGZyb20gXCJyZWFjdC1udW1iZXItZm9ybWF0XCI7XHJcblxyXG5jb25zdCBUYWJsZSA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi01XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEyIGNvbC1tZC0xMiBjb2wgY29sLWxnLTEyIGNvbC14bC0xNFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPlxyXG4gICAgICAgICAgICAgIHtwcm9wcy5pc0dsb2JhbFxyXG4gICAgICAgICAgICAgICAgPyBcIkRhdGEgS2FzdXMgVmlydXMgQ29yb25hIERpIER1bmlhXCJcclxuICAgICAgICAgICAgICAgIDogXCJEYXRhIEthc3VzIFZpcnVzIENvcm9uYSBEaSBJbmRvbmVzaWFcIn1cclxuICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZS1yZXNwb25zaXZlXCI+XHJcbiAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLWJvcmRlcmVkIHRhYmxlLWhvdmVyIG1iLTAgdGV4dC1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5Oby48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD57cHJvcHMuaXNHbG9iYWwgPyBcIk5lZ2FyYVwiIDogXCJQcm92aW5zaVwifTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPlBvc2l0aWY8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5zZW1idWg8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5NZW5pbmdnYWw8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAge3Byb3BzLmlzR2xvYmFsXHJcbiAgICAgICAgICAgICAgICAgICAgPyBwcm9wcy5kYXRhICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5kYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2luZGV4ICsgMX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpdGVtLmF0dHJpYnV0ZXMuQ291bnRyeV9SZWdpb259PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TnVtYmVyRm9ybWF0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2l0ZW0uYXR0cmlidXRlcy5Db25maXJtZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheVR5cGU9e1widGV4dFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRob3VzYW5kU2VwYXJhdG9yPXtcIixcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFsU2VwYXJhdG9yPXtcIi5cIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE51bWJlckZvcm1hdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpdGVtLmF0dHJpYnV0ZXMuUmVjb3ZlcmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlUeXBlPXtcInRleHRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aG91c2FuZFNlcGFyYXRvcj17XCIsXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbFNlcGFyYXRvcj17XCIuXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE51bWJlckZvcm1hdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpdGVtLmF0dHJpYnV0ZXMuRGVhdGhzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlUeXBlPXtcInRleHRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aG91c2FuZFNlcGFyYXRvcj17XCIsXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbFNlcGFyYXRvcj17XCIuXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICA6IHByb3BzLnByb3ZpbnNpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5wcm92aW5zaS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpbmRleCArIDF9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5hdHRyaWJ1dGVzLlByb3ZpbnNpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE51bWJlckZvcm1hdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpdGVtLmF0dHJpYnV0ZXMuS2FzdXNfUG9zaX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5VHlwZT17XCJ0ZXh0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhvdXNhbmRTZXBhcmF0b3I9e1wiLFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2ltYWxTZXBhcmF0b3I9e1wiLlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TnVtYmVyRm9ybWF0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2l0ZW0uYXR0cmlidXRlcy5LYXN1c19TZW1ifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlUeXBlPXtcInRleHRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aG91c2FuZFNlcGFyYXRvcj17XCIsXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbFNlcGFyYXRvcj17XCIuXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE51bWJlckZvcm1hdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpdGVtLmF0dHJpYnV0ZXMuS2FzdXNfTWVuaX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5VHlwZT17XCJ0ZXh0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhvdXNhbmRTZXBhcmF0b3I9e1wiLFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2ltYWxTZXBhcmF0b3I9e1wiLlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWJsZTtcclxuIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5cclxuY29uc3QgRm9vdGVyID0gKHByb3BzKSA9PiB7XHJcbiAgaWYgKCFwcm9wcy5sZWZ0Q29udGVudCAmJiAhcHJvcHMucmlnaHRDb250ZW50KSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cIm1haW4tZm9vdGVyIGNsZWFyZml4IGZpeGVkLWJvdHRvbSBiZy13aGl0ZSBib3JkZXItdG9wXCI+XHJcbiAgICAgIHtwcm9wcy5yaWdodENvbnRlbnQgJiYgKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0IGQtb25lIGQtc20taW5saW5lXCJcclxuICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcIiM2Yzc1N2RcIiB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtwcm9wcy5yaWdodENvbnRlbnR9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICAgIHtwcm9wcy5sZWZ0Q29udGVudCAmJiBwcm9wcy5sZWZ0Q29udGVudH1cclxuICAgIDwvZm9vdGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5Gb290ZXIuUHJvcFR5cGVzID0ge1xyXG4gIGxlZnRDb250ZW50OiBQcm9wVHlwZXMuZWxlbWVudCxcclxuICByaWdodENvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XHJcbiIsImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L0hlYWRcIjtcclxuaW1wb3J0IE5hdiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL05hdlwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IEhlYWRlciA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+TmlvbWljIEthd2FsIENvdmlkPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8bmF2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwibWFpbi1oZWFkZXIgbmF2YmFyIG5hdmJhci1leHBhbmQgbmF2YmFyLWxpZ2h0IG5hdmJhci13aGl0ZSBmaXhlZC10b3AgYm9yZGVyLWJvdHRvbVwiXHJcbiAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2XCI+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBkYXRhLXdpZGdldD1cInB1c2htZW51XCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9uaW9taWMtbG9nby5wbmdcIiBzdHlsZT17eyB3aWR0aDogXCIxMDBweFwiIH19IC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtYXV0byBoaWRkZW4tc20tZG93blwiPlxyXG4gICAgICAgICAgICA8TmF2XHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cInBpbGxzXCJcclxuICAgICAgICAgICAgICBkZWZhdWx0QWN0aXZlS2V5PXtyb3V0ZXIucGF0aG5hbWUgPT0gXCIvXCIgPyBcImxpbmstMFwiIDogXCJsaW5rLTFcIn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxOYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgIDxOYXYuTGluayBldmVudEtleT1cImxpbmstMFwiIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgIEdsb2JhbFxyXG4gICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICA8L05hdi5JdGVtPlxyXG4gICAgICAgICAgICAgIDxOYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgIDxOYXYuTGluayBldmVudEtleT1cImxpbmstMVwiIGhyZWY9XCIvaW5kb25lc2lhXCI+XHJcbiAgICAgICAgICAgICAgICAgIEluZG9uZXNpYVxyXG4gICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICA8L05hdi5JdGVtPlxyXG4gICAgICAgICAgICA8L05hdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L25hdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEluZGV4UGFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9EYXNoYm9hcmQvSW5kZXhQYWdlXCI7XHJcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy1mZXRjaFwiO1xyXG5cclxuY29uc3QgY29uZmlnID0gcmVxdWlyZShcIi4uL2NvbmZpZy5qc29uXCIpO1xyXG5cclxuY2xhc3MgSW5kb25lc2lhIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKGAke2NvbmZpZ1tcImthd2FsLWNvcm9uYVwiXS5iYXNlX3VybH0vaW5kb25lc2lhYCk7XHJcbiAgICBjb25zdCBpdGVtcyA9IGF3YWl0IGRhdGEuanNvbigpO1xyXG4gICAgY29uc3QgcHJvdmluY2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgYCR7Y29uZmlnW1wia2F3YWwtY29yb25hXCJdLmJhc2VfdXJsfS9pbmRvbmVzaWEvcHJvdmluc2lgXHJcbiAgICApO1xyXG4gICAgY29uc3QgaXRlbVByb3ZpbmNlID0gYXdhaXQgcHJvdmluY2UuanNvbigpO1xyXG4gICAgY29uc3Qgc3RhdCA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBgJHtjb25maWdbXCJnbG9iYWwtYXBpXCJdLmJhc2VfdXJsfSR7Y29uZmlnW1wiZ2xvYmFsLWFwaVwiXS50b3RhbF9saXZlfS9pbmRvbmVzaWFgXHJcbiAgICApO1xyXG4gICAgY29uc3Qgc3RhdERhdGEgPSBhd2FpdCBzdGF0Lmpzb24oKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGl0ZW1zLFxyXG4gICAgICBzdGF0RGF0YSxcclxuICAgICAgaXRlbVByb3ZpbmNlLFxyXG4gICAgfTtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBpdGVtcywgc3RhdERhdGEsIGl0ZW1Qcm92aW5jZSB9ID0gdGhpcy5wcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxJbmRleFBhZ2VcclxuICAgICAgICBpc0dsb2JhbD17ZmFsc2V9XHJcbiAgICAgICAgZGF0YT17aXRlbXN9XHJcbiAgICAgICAgc3RhdGlzdGlrPXtzdGF0RGF0YX1cclxuICAgICAgICBwcm92aW5zaT17aXRlbVByb3ZpbmNlfVxyXG4gICAgICAvPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZG9uZXNpYTtcclxuIiwiZXhwb3J0IGNvbnN0IHN1bSA9IGZ1bmN0aW9uIChrZXksIHByb3BzKSB7XHJcbiAgaWYgKHByb3BzLmlzR2xvYmFsID09IGZhbHNlKSB7XHJcbiAgICBzd2l0Y2ggKGtleSkge1xyXG4gICAgICBjYXNlIFwiQ29uZmlybWVkXCI6XHJcbiAgICAgICAgcmV0dXJuIHByb3BzLmRhdGFbMF0ucG9zaXRpZjtcclxuICAgICAgY2FzZSBcIlJlY292ZXJlZFwiOlxyXG4gICAgICAgIHJldHVybiBwcm9wcy5kYXRhWzBdLnNlbWJ1aDtcclxuICAgICAgY2FzZSBcIkRlYXRoc1wiOlxyXG4gICAgICAgIHJldHVybiBwcm9wcy5kYXRhWzBdLm1lbmluZ2dhbDtcclxuICAgICAgY2FzZSBcIkFjdGl2ZVwiOlxyXG4gICAgICAgIHJldHVybiBwcm9wcy5kYXRhWzBdLmRpcmF3YXQ7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIHN3aXRjaCAoa2V5KSB7XHJcbiAgICAgIGNhc2UgXCJDb25maXJtZWRcIjpcclxuICAgICAgICByZXR1cm4gcHJvcHMuZGF0YS5yZWR1Y2UoKHN1bSwgYSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHN1bSArIGEuYXR0cmlidXRlcy5Db25maXJtZWQ7XHJcbiAgICAgICAgfSwgMCk7XHJcbiAgICAgIGNhc2UgXCJSZWNvdmVyZWRcIjpcclxuICAgICAgICByZXR1cm4gcHJvcHMuZGF0YS5yZWR1Y2UoKHN1bSwgYSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHN1bSArIGEuYXR0cmlidXRlcy5SZWNvdmVyZWQ7XHJcbiAgICAgICAgfSwgMCk7XHJcbiAgICAgIGNhc2UgXCJEZWF0aHNcIjpcclxuICAgICAgICByZXR1cm4gcHJvcHMuZGF0YS5yZWR1Y2UoKHN1bSwgYSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHN1bSArIGEuYXR0cmlidXRlcy5EZWF0aHM7XHJcbiAgICAgICAgfSwgMCk7XHJcbiAgICAgIGNhc2UgXCJBY3RpdmVcIjpcclxuICAgICAgICByZXR1cm4gcHJvcHMuZGF0YS5yZWR1Y2UoKHN1bSwgYSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHN1bSArIGEuYXR0cmlidXRlcy5BY3RpdmU7XHJcbiAgICAgICAgfSwgMCk7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEFsbE1vbnRoID0gZnVuY3Rpb24gKHByb3BzKSB7XHJcbiAgY29uc3QgbW9udGhFbmcgPSBbXHJcbiAgICBcImphblwiLFxyXG4gICAgXCJGZWJcIixcclxuICAgIFwiTWFyXCIsXHJcbiAgICBcIkFwclwiLFxyXG4gICAgXCJNYXlcIixcclxuICAgIFwiSnVuXCIsXHJcbiAgICBcIkp1bFwiLFxyXG4gICAgXCJBdWdcIixcclxuICAgIFwiU2VwXCIsXHJcbiAgICBcIk9jdFwiLFxyXG4gICAgXCJOb3ZcIixcclxuICAgIFwiRGVzXCIsXHJcbiAgXTtcclxuICBsZXQgbm93RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgbGV0IGRheSA9IG51bGw7XHJcbiAgbGV0IG1vbnRoID0gbnVsbDtcclxuICBsZXQgeWVhciA9IG51bGw7XHJcbiAgbGV0IGxhYmVsID0gW107XHJcbiAgbGV0IHBvc2l0aWYgPSBbXTtcclxuICBsZXQgc2VtYnVoID0gW107XHJcbiAgbGV0IG1lbmluZ2dhbCA9IFtdO1xyXG4gIGxldCBhY3RpdmUgPSBbXTtcclxuICBsZXQgZGF0YSA9IFtdO1xyXG5cclxuICBmb3IgKGxldCB2YWx1ZSBvZiBwcm9wcy5zdGF0aXN0aWspIHtcclxuICAgIG5vd0RhdGUgPSBuZXcgRGF0ZSh2YWx1ZS5EYXRlKTtcclxuICAgIGRheSA9IG5vd0RhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgbW9udGggPSBub3dEYXRlLmdldE1vbnRoKCk7XHJcbiAgICB5ZWFyID0gbm93RGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgbGFiZWwucHVzaChkYXkgKyBcIiBcIiArIG1vbnRoRW5nW01hdGguYWJzKG1vbnRoKV0pO1xyXG4gICAgYWN0aXZlLnB1c2godmFsdWUuQWN0aXZlKTtcclxuICAgIHNlbWJ1aC5wdXNoKHZhbHVlLlJlY292ZXJlZCk7XHJcbiAgICBtZW5pbmdnYWwucHVzaCh2YWx1ZS5EZWF0aHMpO1xyXG4gICAgcG9zaXRpZi5wdXNoKHZhbHVlLkNvbmZpcm1lZCk7XHJcbiAgfVxyXG4gIGRhdGEgPSB7XHJcbiAgICBsYWJlbDogbGFiZWwsXHJcbiAgICBhY3RpdmU6IGFjdGl2ZSxcclxuICAgIHNlbWJ1aDogc2VtYnVoLFxyXG4gICAgbWVuaW5nZ2FsOiBtZW5pbmdnYWwsXHJcbiAgICBwb3NpdGlmOiBwb3NpdGlmLFxyXG4gIH07XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtZmV0Y2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9IZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL05hdlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1jaGFydGpzLTJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbnVtYmVyLWZvcm1hdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==
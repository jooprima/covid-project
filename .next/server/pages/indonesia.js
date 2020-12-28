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
        isGlobal: props.isGlobal
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
        lineNumber: 41,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
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
            lineNumber: 7,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 6,
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
                    lineNumber: 18,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    children: props.isGlobal ? "Negara" : "Provinsi"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 19,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    children: "Positif"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 20,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    children: "sembuh"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 21,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                    children: "Meninggal"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 22,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 17,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 16,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
                children: props.isGlobal ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    children: "1."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 28,
                    columnNumber: 23
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    children: "United States"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 29,
                    columnNumber: 23
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    children: "3.000.000"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 30,
                    columnNumber: 23
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    children: "1.000.000"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 31,
                    columnNumber: 23
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    children: "250.000"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 32,
                    columnNumber: 23
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 27,
                  columnNumber: 21
                }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    children: "1."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 36,
                    columnNumber: 23
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    children: "Jawa Timur"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 37,
                    columnNumber: 23
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    children: "10.000"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 38,
                    columnNumber: 23
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    children: "3.000"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 39,
                    columnNumber: 23
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    children: "400"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 40,
                    columnNumber: 23
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 35,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 25,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 5,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
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
    const stat = await isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default()(`${config["global-api"].base_url}${config["global-api"].total_live}/indonesia`);
    const statData = await stat.json();
    return {
      items,
      statData
    };
  }

  render() {
    const {
      items,
      statData
    } = this.props;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Dashboard_IndexPage__WEBPACK_IMPORTED_MODULE_2__["default"], {
      isGlobal: false,
      data: items,
      statistik: statData
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 12
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EYXNoYm9hcmQvQ2FyZFN0YXR1cy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Rhc2hib2FyZC9HcmFmaWsuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EYXNoYm9hcmQvSW5kZXhQYWdlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGFzaGJvYXJkL1RhYmxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0L0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kb25lc2lhLmpzIiwid2VicGFjazovLy8uL3V0aWwvbGlicmFyeS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLWZldGNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9IZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvTmF2XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtY2hhcnRqcy0yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtbnVtYmVyLWZvcm1hdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbInN1bSIsInJlcXVpcmUiLCJDYXJkU3RhdHVzIiwicHJvcHMiLCJnZXRBbGxNb250aCIsIkdyYWZpayIsImRhdGFDb3ZpZCIsImRhdGEiLCJpc0dsb2JhbCIsImxhYmVscyIsImxhYmVsIiwiZGF0YXNldHMiLCJmaWxsIiwibGluZVRlbnNpb24iLCJiYWNrR3JvdW5kQ29sb3IiLCJib3JkZXJDb2xvciIsImJvcmRlckNhcFN0eWxlIiwiYm9yZGVyRGFzaCIsImJvcmRlckRhc2hPZmZzZXQiLCJib3JkZXJKb2luU3R5bGUiLCJwb2ludEJvcmRlckNvbG9yIiwicG9pbnRCYWNrZ3JvdW5kQ29sb3IiLCJwb2ludEJvcmRlcldpZHRoIiwicG9pbnRIb3ZlclJhZGl1cyIsInBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3IiLCJwb2ludEhvdmVyQm9yZGVyQ29sb3IiLCJwb2ludFJhZGl1cyIsInBvc2l0aWYiLCJzZW1idWgiLCJtZW5pbmdnYWwiLCJhY3RpdmUiLCJkYXRhUGllIiwiYmFja2dyb3VuZENvbG9yIiwiaG92ZXJiYWNrZ3JvdW5kQ29sb3IiLCJJbmRleFBhZ2UiLCJjb250ZW50U3R5bGUiLCJtaW5IZWlnaHQiLCJ0b3AiLCJvdmVyZmxvd1giLCJzdGF0aXN0aWsiLCJUYWJsZSIsIkZvb3RlciIsImxlZnRDb250ZW50IiwicmlnaHRDb250ZW50IiwiY29sb3IiLCJQcm9wVHlwZXMiLCJlbGVtZW50Iiwic3RyaW5nIiwiSGVhZGVyIiwicm91dGVyIiwidXNlUm91dGVyIiwid2lkdGgiLCJwYXRobmFtZSIsImNvbmZpZyIsIkluZG9uZXNpYSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiZmV0Y2giLCJiYXNlX3VybCIsIml0ZW1zIiwianNvbiIsInN0YXQiLCJ0b3RhbF9saXZlIiwic3RhdERhdGEiLCJyZW5kZXIiLCJrZXkiLCJkaXJhd2F0IiwicmVkdWNlIiwiYSIsImF0dHJpYnV0ZXMiLCJDb25maXJtZWQiLCJSZWNvdmVyZWQiLCJEZWF0aHMiLCJBY3RpdmUiLCJtb250aEVuZyIsIm5vd0RhdGUiLCJEYXRlIiwiZGF5IiwibW9udGgiLCJ5ZWFyIiwidmFsdWUiLCJnZXREYXRlIiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsInB1c2giLCJNYXRoIiwiYWJzIl0sIm1hcHBpbmdzIjoiOztRQUFB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LEtBQUssQ0FBQ1QsU0FBbEI7QUFDQTNDLGFBQVMsQ0FBQ3dELElBQVYsQ0FBZUosS0FBSyxDQUFDUixNQUFyQjtBQUNBOUMsV0FBTyxDQUFDMEQsSUFBUixDQUFhSixLQUFLLENBQUNWLFNBQW5CO0FBQ0Q7O0FBQ0RoRSxNQUFJLEdBQUc7QUFDTEcsU0FBSyxFQUFFQSxLQURGO0FBRUxvQixVQUFNLEVBQUVBLE1BRkg7QUFHTEYsVUFBTSxFQUFFQSxNQUhIO0FBSUxDLGFBQVMsRUFBRUEsU0FKTjtBQUtMRixXQUFPLEVBQUVBO0FBTEosR0FBUDtBQU9BLFNBQU9wQixJQUFQO0FBQ0QsQ0E3Q00sQzs7Ozs7Ozs7Ozs7QUN0Q1AsNkM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvaW5kb25lc2lhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRvbmVzaWEuanNcIik7XG4iLCJpbXBvcnQgTnVtYmVyRm9ybWF0IGZyb20gXCJyZWFjdC1udW1iZXItZm9ybWF0XCI7XHJcblxyXG5jb25zdCB7IHN1bSB9ID0gcmVxdWlyZShcIi4uLy4uL3V0aWwvbGlicmFyeVwiKTtcclxuXHJcbmNvbnN0IENhcmRTdGF0dXMgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXQtMyBtbC0xIG1yLTEgbWItMlwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNiBjb2wteGwtM1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBiZy1kYW5nZXIgaW1nLWNhcmQgYm94LXByaW1hcnktc2hhZG93IGJpcmRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXhcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgbWItMFwiPlRPVEFMIFBPU0lUSUY8L3A+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibWItMCBudW1iZXItZm9udFwiPlxyXG4gICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDxOdW1iZXJGb3JtYXRcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3VtKFwiQ29uZmlybWVkXCIsIHByb3BzKX1cclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5VHlwZT17XCJ0ZXh0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhvdXNhbmRTZXBhcmF0b3I9e1wiLFwifVxyXG4gICAgICAgICAgICAgICAgICAgIGRlY2ltYWxTZXBhcmF0b3I9e1wiLlwifVxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17MH1cclxuICAgICAgICAgICAgICAgICAgLz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBtYi0wXCI+T1JBTkc8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cImltYWdlcy9wb3NpdGlmLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNTBcIlxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI1MFwiXHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cInBvc3RpZlwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTYgY29sLXhsLTNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgYmctc3VjY2VzcyBpbWctY2FyZCBib3gtcHJpbWFyeS1zaGFkb3cgYmlyZGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBtYi0wXCI+VE9UQUwgU0VNQlVIPC9wPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm1iLTAgbnVtYmVyLWZvbnRcIj5cclxuICAgICAgICAgICAgICAgICAgPE51bWJlckZvcm1hdFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdW0oXCJSZWNvdmVyZWRcIiwgcHJvcHMpfVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlUeXBlPXtcInRleHRcIn1cclxuICAgICAgICAgICAgICAgICAgICB0aG91c2FuZFNlcGFyYXRvcj17XCIsXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgZGVjaW1hbFNlcGFyYXRvcj17XCIuXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXswfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgbWItMFwiPk9SQU5HPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9XCJpbWFnZXMvc2VtYnVoLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNTBcIlxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI1MFwiXHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cInBvc3RpZlwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTYgY29sLXhsLTNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgYmctc2Vjb25kYXJ5IGltZy1jYXJkIGJveC1wcmltYXJ5LXNoYWRvdyBiaXJkZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIG1iLTBcIj5UT1RBTCBNRU5JTkdHQUw8L3A+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibWItMCBudW1iZXItZm9udFwiPlxyXG4gICAgICAgICAgICAgICAgICA8TnVtYmVyRm9ybWF0XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N1bShcIkRlYXRoc1wiLCBwcm9wcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheVR5cGU9e1widGV4dFwifVxyXG4gICAgICAgICAgICAgICAgICAgIHRob3VzYW5kU2VwYXJhdG9yPXtcIixcIn1cclxuICAgICAgICAgICAgICAgICAgICBkZWNpbWFsU2VwYXJhdG9yPXtcIi5cIn1cclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9ezB9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBtYi0wXCI+T1JBTkc8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cImltYWdlcy9tZW5pbmdnYWwucG5nXCJcclxuICAgICAgICAgICAgICAgICAgd2lkdGg9XCI1MFwiXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjUwXCJcclxuICAgICAgICAgICAgICAgICAgYWx0PVwicG9zdGlmXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNiBjb2wteGwtM1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBiZy1pbmZvIGltZy1jYXJkIGJveC1wcmltYXJ5LXNoYWRvdyBiaXJkZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIG1iLTBcIj5UT1RBTCBBQ1RJVkU8L3A+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibWItMCBudW1iZXItZm9udFwiPlxyXG4gICAgICAgICAgICAgICAgICA8TnVtYmVyRm9ybWF0XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N1bShcIkFjdGl2ZVwiLCBwcm9wcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheVR5cGU9e1widGV4dFwifVxyXG4gICAgICAgICAgICAgICAgICAgIHRob3VzYW5kU2VwYXJhdG9yPXtcIixcIn1cclxuICAgICAgICAgICAgICAgICAgICBkZWNpbWFsU2VwYXJhdG9yPXtcIi5cIn1cclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9ezB9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBtYi0wXCI+T1JBTkc8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cImltYWdlcy9hY3RpdmUxLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNTBcIlxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI1MFwiXHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cInBvc3RpZlwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkU3RhdHVzO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IExpbmUsIFBpZSB9IGZyb20gXCJyZWFjdC1jaGFydGpzLTJcIjtcclxuaW1wb3J0IE51bWJlckZvcm1hdCBmcm9tIFwicmVhY3QtbnVtYmVyLWZvcm1hdFwiO1xyXG5cclxuY29uc3QgeyBzdW0sIGdldEFsbE1vbnRoIH0gPSByZXF1aXJlKFwiLi4vLi4vdXRpbC9saWJyYXJ5XCIpO1xyXG5cclxuY29uc3QgR3JhZmlrID0gKHByb3BzKSA9PiB7XHJcbiAgbGV0IGRhdGFDb3ZpZCA9IG51bGw7XHJcbiAgbGV0IGRhdGEgPSBudWxsO1xyXG5cclxuICBpZiAoIXByb3BzLmlzR2xvYmFsKSB7XHJcbiAgICBkYXRhQ292aWQgPSBnZXRBbGxNb250aChwcm9wcyk7XHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBsYWJlbHM6IGRhdGFDb3ZpZC5sYWJlbCxcclxuICAgICAgZGF0YXNldHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogXCJKdW1sYWggUG9zaXRpZlwiLFxyXG4gICAgICAgICAgZmlsbDogZmFsc2UsXHJcbiAgICAgICAgICBsaW5lVGVuc2lvbjogMC4xLFxyXG4gICAgICAgICAgYmFja0dyb3VuZENvbG9yOiBcInJnYmEoMjI5LDU2LDUwLDAuNClcIixcclxuICAgICAgICAgIGJvcmRlckNvbG9yOiBcInJnYmEoMjI5LDU2LDU2LDEpXCIsXHJcbiAgICAgICAgICBib3JkZXJDYXBTdHlsZTogXCJidXR0XCIsXHJcbiAgICAgICAgICBib3JkZXJEYXNoOiBbXSxcclxuICAgICAgICAgIGJvcmRlckRhc2hPZmZzZXQ6IDAuMCxcclxuICAgICAgICAgIGJvcmRlckpvaW5TdHlsZTogXCJtaXRlclwiLFxyXG4gICAgICAgICAgcG9pbnRCb3JkZXJDb2xvcjogXCJyZ2JhKDIyOSw1Niw1NiwxKVwiLFxyXG4gICAgICAgICAgcG9pbnRCYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgICAgICAgcG9pbnRCb3JkZXJXaWR0aDogMSxcclxuICAgICAgICAgIHBvaW50SG92ZXJSYWRpdXM6IDEwLFxyXG4gICAgICAgICAgcG9pbnRIb3ZlckJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDIyOSw1Niw1NiwxKVwiLFxyXG4gICAgICAgICAgcG9pbnRIb3ZlckJvcmRlckNvbG9yOiBcInJnYmEoMjIwLDIyMCwyMjAsMSlcIixcclxuICAgICAgICAgIHBvaW50Qm9yZGVyV2lkdGg6IDIsXHJcbiAgICAgICAgICBwb2ludFJhZGl1czogMTAsXHJcbiAgICAgICAgICBkYXRhOiBkYXRhQ292aWQucG9zaXRpZixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiBcIkp1bWxhaCBTZW1idWhcIixcclxuICAgICAgICAgIGZpbGw6IGZhbHNlLFxyXG4gICAgICAgICAgbGluZVRlbnNpb246IDAuMSxcclxuICAgICAgICAgIGJhY2tHcm91bmRDb2xvcjogXCJyZ2JhKDc1LDE5MiwxOTIsMC40KVwiLFxyXG4gICAgICAgICAgYm9yZGVyQ29sb3I6IFwicmdiYSg3NSwxOTIsMTkyLDEpXCIsXHJcbiAgICAgICAgICBib3JkZXJDYXBTdHlsZTogXCJidXR0XCIsXHJcbiAgICAgICAgICBib3JkZXJEYXNoOiBbXSxcclxuICAgICAgICAgIGJvcmRlckRhc2hPZmZzZXQ6IDAuMCxcclxuICAgICAgICAgIGJvcmRlckpvaW5TdHlsZTogXCJtaXRlclwiLFxyXG4gICAgICAgICAgcG9pbnRCb3JkZXJDb2xvcjogXCJyZ2JhKDc1LDE5MiwxOTIsMSlcIixcclxuICAgICAgICAgIHBvaW50QmFja2dyb3VuZENvbG9yOiBcIiNmZmZcIixcclxuICAgICAgICAgIHBvaW50Qm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICBwb2ludEhvdmVyUmFkaXVzOiAxMCxcclxuICAgICAgICAgIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSg3NSwxOTIsMTkyLDEpXCIsXHJcbiAgICAgICAgICBwb2ludEhvdmVyQm9yZGVyQ29sb3I6IFwicmdiYSgyMjAsMjIwLDIyMCwxKVwiLFxyXG4gICAgICAgICAgcG9pbnRCb3JkZXJXaWR0aDogMixcclxuICAgICAgICAgIHBvaW50UmFkaXVzOiAxMCxcclxuICAgICAgICAgIGRhdGE6IGRhdGFDb3ZpZC5zZW1idWgsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogXCJKdW1sYWggTWVuaW5nZ2FsXCIsXHJcbiAgICAgICAgICBmaWxsOiBmYWxzZSxcclxuICAgICAgICAgIGxpbmVUZW5zaW9uOiAwLjEsXHJcbiAgICAgICAgICBiYWNrR3JvdW5kQ29sb3I6IFwicmdiYSgwLDAsMCwwLjQpXCIsXHJcbiAgICAgICAgICBib3JkZXJDb2xvcjogXCJyZ2JhKDAsMCwwLDEpXCIsXHJcbiAgICAgICAgICBib3JkZXJDYXBTdHlsZTogXCJidXR0XCIsXHJcbiAgICAgICAgICBib3JkZXJEYXNoOiBbXSxcclxuICAgICAgICAgIGJvcmRlckRhc2hPZmZzZXQ6IDAuMCxcclxuICAgICAgICAgIGJvcmRlckpvaW5TdHlsZTogXCJtaXRlclwiLFxyXG4gICAgICAgICAgcG9pbnRCb3JkZXJDb2xvcjogXCJyZ2JhKDAsMCwwLDEpXCIsXHJcbiAgICAgICAgICBwb2ludEJhY2tncm91bmRDb2xvcjogXCIjZmZmXCIsXHJcbiAgICAgICAgICBwb2ludEJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgcG9pbnRIb3ZlclJhZGl1czogMTAsXHJcbiAgICAgICAgICBwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yOiBcInJnYmEoMCwwLDAsMSlcIixcclxuICAgICAgICAgIHBvaW50SG92ZXJCb3JkZXJDb2xvcjogXCJyZ2JhKDIyMCwyMjAsMjIwLDEpXCIsXHJcbiAgICAgICAgICBwb2ludEJvcmRlcldpZHRoOiAyLFxyXG4gICAgICAgICAgcG9pbnRSYWRpdXM6IDEwLFxyXG4gICAgICAgICAgZGF0YTogZGF0YUNvdmlkLm1lbmluZ2dhbCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiBcIkp1bWxhaCBBY3RpdmVcIixcclxuICAgICAgICAgIGZpbGw6IGZhbHNlLFxyXG4gICAgICAgICAgbGluZVRlbnNpb246IDAuMSxcclxuICAgICAgICAgIGJhY2tHcm91bmRDb2xvcjogXCJyZ2JhKDIzMiwyNDMsMTYsMC40KVwiLFxyXG4gICAgICAgICAgYm9yZGVyQ29sb3I6IFwicmdiYSgyMzIsMjQzLDE2LDEpXCIsXHJcbiAgICAgICAgICBib3JkZXJDYXBTdHlsZTogXCJidXR0XCIsXHJcbiAgICAgICAgICBib3JkZXJEYXNoOiBbXSxcclxuICAgICAgICAgIGJvcmRlckRhc2hPZmZzZXQ6IDAuMCxcclxuICAgICAgICAgIGJvcmRlckpvaW5TdHlsZTogXCJtaXRlclwiLFxyXG4gICAgICAgICAgcG9pbnRCb3JkZXJDb2xvcjogXCJyZ2JhKDIzMiwyNDMsMTYsMSlcIixcclxuICAgICAgICAgIHBvaW50QmFja2dyb3VuZENvbG9yOiBcIiNmZmZcIixcclxuICAgICAgICAgIHBvaW50Qm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICBwb2ludEhvdmVyUmFkaXVzOiAxMCxcclxuICAgICAgICAgIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyMzIsMjQzLDE2LDEpXCIsXHJcbiAgICAgICAgICBwb2ludEhvdmVyQm9yZGVyQ29sb3I6IFwicmdiYSgyMjAsMjIwLDIyMCwxKVwiLFxyXG4gICAgICAgICAgcG9pbnRCb3JkZXJXaWR0aDogMixcclxuICAgICAgICAgIHBvaW50UmFkaXVzOiAxMCxcclxuICAgICAgICAgIGRhdGE6IGRhdGFDb3ZpZC5hY3RpdmUsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH07XHJcbiAgfVxyXG4gIGNvbnN0IGRhdGFQaWUgPSB7XHJcbiAgICBsYWJlbHM6IFtcIlBvc2l0aWZcIiwgXCJTZW1idWhcIiwgXCJNZW5pbmdnYWxcIl0sXHJcbiAgICBkYXRhc2V0czogW1xyXG4gICAgICB7XHJcbiAgICAgICAgZGF0YTogW1xyXG4gICAgICAgICAgc3VtKFwiQ29uZmlybWVkXCIsIHByb3BzKSxcclxuICAgICAgICAgIHN1bShcIlJlY292ZXJlZFwiLCBwcm9wcyksXHJcbiAgICAgICAgICBzdW0oXCJEZWF0aHNcIiwgcHJvcHMpLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXCIjZmY2Mzg0XCIsIFwiIzM2YTJlYlwiLCBcIiNmZmNlNTZcIl0sXHJcbiAgICAgICAgaG92ZXJiYWNrZ3JvdW5kQ29sb3I6IFtcIiNmZjYzODRcIiwgXCIjMzZhMmViXCIsIFwiI2ZmY2U1NlwiXSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItNVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMiBjb2wtbWQtMTIgY29sLXNtLTEyIGNvbC14bC0xMlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBvdmVyZmxvdy1oaWRkZW4gYmctd2hpdGVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5cclxuICAgICAgICAgICAgICB7cHJvcHMuaXNHbG9iYWxcclxuICAgICAgICAgICAgICAgID8gXCJTdGF0aXN0aWsgVmlydXMgQ29yb25hIERpIER1bmlhXCJcclxuICAgICAgICAgICAgICAgIDogXCJTdGF0aXN0aWsgVmlydXMgQ29yb25hIERpIEluZG9uZXNpYVwifVxyXG4gICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJ0LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICB7cHJvcHMuaXNHbG9iYWwgPyAoXHJcbiAgICAgICAgICAgICAgICA8UGllIGRhdGE9e2RhdGFQaWV9IC8+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxMaW5lIGRhdGE9e2RhdGF9IHdpZHRoPXsxMDB9IGhlaWdodD17NTB9IC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG10LTZcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LW5vcm1hbCBtdC0yXCI+UE9TSVRJRjwvaDU+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWItMVwiPlxyXG4gICAgICAgICAgICAgICAgICA8TnVtYmVyRm9ybWF0XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N1bShcIkNvbmZpcm1lZFwiLCBwcm9wcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheVR5cGU9e1widGV4dFwifVxyXG4gICAgICAgICAgICAgICAgICAgIHRob3VzYW5kU2VwYXJhdG9yPXtcIixcIn1cclxuICAgICAgICAgICAgICAgICAgICBkZWNpbWFsU2VwYXJhdG9yPXtcIi5cIn1cclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9ezB9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMCB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC13ZWlnaHQtNzAwXCI+PC9zcGFuPk9SQU5HXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ub3JtYWwgbXQtMlwiPlNFTUJVSDwvaDU+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWItMVwiPlxyXG4gICAgICAgICAgICAgICAgICA8TnVtYmVyRm9ybWF0XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N1bShcIlJlY292ZXJlZFwiLCBwcm9wcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheVR5cGU9e1widGV4dFwifVxyXG4gICAgICAgICAgICAgICAgICAgIHRob3VzYW5kU2VwYXJhdG9yPXtcIixcIn1cclxuICAgICAgICAgICAgICAgICAgICBkZWNpbWFsU2VwYXJhdG9yPXtcIi5cIn1cclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9ezB9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMCB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC13ZWlnaHQtNzAwXCI+PC9zcGFuPk9SQU5HXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ub3JtYWwgbXQtMlwiPk1FTklOR0dBTDwvaDU+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWItMVwiPlxyXG4gICAgICAgICAgICAgICAgICA8TnVtYmVyRm9ybWF0XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N1bShcIkRlYXRoc1wiLCBwcm9wcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheVR5cGU9e1widGV4dFwifVxyXG4gICAgICAgICAgICAgICAgICAgIHRob3VzYW5kU2VwYXJhdG9yPXtcIixcIn1cclxuICAgICAgICAgICAgICAgICAgICBkZWNpbWFsU2VwYXJhdG9yPXtcIi5cIn1cclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9ezB9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMCB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC13ZWlnaHQtNzAwXCI+PC9zcGFuPk9SQU5HXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdyYWZpaztcclxuIiwiaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vTGF5b3V0L0hlYWRlclwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9MYXlvdXQvRm9vdGVyXCI7XHJcbmltcG9ydCBDYXJkU3RhdHVzIGZyb20gXCIuL0NhcmRTdGF0dXNcIjtcclxuaW1wb3J0IEdyYWZpayBmcm9tIFwiLi9HcmFmaWtcIjtcclxuaW1wb3J0IFRhYmxlIGZyb20gXCIuL1RhYmxlXCI7XHJcblxyXG5mdW5jdGlvbiBJbmRleFBhZ2UocHJvcHMpIHtcclxuICBjb25zdCBjb250ZW50U3R5bGUgPSB7XHJcbiAgICBtaW5IZWlnaHQ6IFwiOTB2aFwiLFxyXG4gICAgdG9wOiBcIjU2cHhcIixcclxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjZjFmMWY5XCIsXHJcbiAgICBvdmVyZmxvd1g6IFwiaGlkZGVuXCIsXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiNmMWYxZjlcIiB9fT5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjb250ZW50IHBvc2l0aW9uLXJlbGF0aXZlXCIgc3R5bGU9e2NvbnRlbnRTdHlsZX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTUgaDJcIj5OSU9NSUMgS2F3YWwgQ292aWQxOTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMyBmMThcIj5XZWJzaXRlIFBlbWFudGF1YW4gVGVya2luaSBLYXN1cyBDb3ZpZDE5PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPENhcmRTdGF0dXNcclxuICAgICAgICAgIGlzR2xvYmFsPXtwcm9wcy5pc0dsb2JhbH1cclxuICAgICAgICAgIGRhdGE9e3Byb3BzLmRhdGEgPyBwcm9wcy5kYXRhIDogbnVsbH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxHcmFmaWtcclxuICAgICAgICAgIGlzR2xvYmFsPXtwcm9wcy5pc0dsb2JhbH1cclxuICAgICAgICAgIGRhdGE9e3Byb3BzLmRhdGEgPyBwcm9wcy5kYXRhIDogbnVsbH1cclxuICAgICAgICAgIHN0YXRpc3Rpaz17cHJvcHMuc3RhdGlzdGlrID8gcHJvcHMuc3RhdGlzdGlrIDogbnVsbH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxUYWJsZSBpc0dsb2JhbD17cHJvcHMuaXNHbG9iYWx9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Rm9vdGVyXHJcbiAgICAgICAgcmlnaHRDb250ZW50PXtcIlwifVxyXG4gICAgICAgIGxlZnRDb250ZW50PXtcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtMiBmb250LXdlaWdodC1ib2xkIFwiPlxyXG4gICAgICAgICAgICBOaW9taWMtVGVjaCBAMjAyMCBBbGwgUmlnaHQgUmVzZXJ2ZWRcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZTtcclxuIiwiY29uc3QgVGFibGUgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItNVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMiBjb2wtbWQtMTIgY29sIGNvbC1sZy0xMiBjb2wteGwtMTRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5cclxuICAgICAgICAgICAgICB7cHJvcHMuaXNHbG9iYWxcclxuICAgICAgICAgICAgICAgID8gXCJEYXRhIEthc3VzIFZpcnVzIENvcm9uYSBEaSBEdW5pYVwiXHJcbiAgICAgICAgICAgICAgICA6IFwiRGF0YSBLYXN1cyBWaXJ1cyBDb3JvbmEgRGkgSW5kb25lc2lhXCJ9XHJcbiAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtcmVzcG9uc2l2ZVwiPlxyXG4gICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1ib3JkZXJlZCB0YWJsZS1ob3ZlciBtYi0wIHRleHQtbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+Tm8uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+e3Byb3BzLmlzR2xvYmFsID8gXCJOZWdhcmFcIiA6IFwiUHJvdmluc2lcIn08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5Qb3NpdGlmPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+c2VtYnVoPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+TWVuaW5nZ2FsPC90aD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgIHtwcm9wcy5pc0dsb2JhbCA/IChcclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+MS48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPlVuaXRlZCBTdGF0ZXM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPjMuMDAwLjAwMDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+MS4wMDAuMDAwPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD4yNTAuMDAwPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD4xLjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+SmF3YSBUaW11cjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+MTAuMDAwPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD4zLjAwMDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+NDAwPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWJsZTtcclxuIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5cclxuY29uc3QgRm9vdGVyID0gKHByb3BzKSA9PiB7XHJcbiAgaWYgKCFwcm9wcy5sZWZ0Q29udGVudCAmJiAhcHJvcHMucmlnaHRDb250ZW50KSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cIm1haW4tZm9vdGVyIGNsZWFyZml4IGZpeGVkLWJvdHRvbSBiZy13aGl0ZSBib3JkZXItdG9wXCI+XHJcbiAgICAgIHtwcm9wcy5yaWdodENvbnRlbnQgJiYgKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0IGQtb25lIGQtc20taW5saW5lXCJcclxuICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcIiM2Yzc1N2RcIiB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtwcm9wcy5yaWdodENvbnRlbnR9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICAgIHtwcm9wcy5sZWZ0Q29udGVudCAmJiBwcm9wcy5sZWZ0Q29udGVudH1cclxuICAgIDwvZm9vdGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5Gb290ZXIuUHJvcFR5cGVzID0ge1xyXG4gIGxlZnRDb250ZW50OiBQcm9wVHlwZXMuZWxlbWVudCxcclxuICByaWdodENvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XHJcbiIsImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L0hlYWRcIjtcclxuaW1wb3J0IE5hdiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL05hdlwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IEhlYWRlciA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+TmlvbWljIEthd2FsIENvdmlkPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8bmF2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwibWFpbi1oZWFkZXIgbmF2YmFyIG5hdmJhci1leHBhbmQgbmF2YmFyLWxpZ2h0IG5hdmJhci13aGl0ZSBmaXhlZC10b3AgYm9yZGVyLWJvdHRvbVwiXHJcbiAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2XCI+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBkYXRhLXdpZGdldD1cInB1c2htZW51XCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9uaW9taWMtbG9nby5wbmdcIiBzdHlsZT17eyB3aWR0aDogXCIxMDBweFwiIH19IC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtYXV0byBoaWRkZW4tc20tZG93blwiPlxyXG4gICAgICAgICAgICA8TmF2XHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cInBpbGxzXCJcclxuICAgICAgICAgICAgICBkZWZhdWx0QWN0aXZlS2V5PXtyb3V0ZXIucGF0aG5hbWUgPT0gXCIvXCIgPyBcImxpbmstMFwiIDogXCJsaW5rLTFcIn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxOYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgIDxOYXYuTGluayBldmVudEtleT1cImxpbmstMFwiIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgIEdsb2JhbFxyXG4gICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICA8L05hdi5JdGVtPlxyXG4gICAgICAgICAgICAgIDxOYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgIDxOYXYuTGluayBldmVudEtleT1cImxpbmstMVwiIGhyZWY9XCIvaW5kb25lc2lhXCI+XHJcbiAgICAgICAgICAgICAgICAgIEluZG9uZXNpYVxyXG4gICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICA8L05hdi5JdGVtPlxyXG4gICAgICAgICAgICA8L05hdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L25hdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEluZGV4UGFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9EYXNoYm9hcmQvSW5kZXhQYWdlXCI7XHJcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy1mZXRjaFwiO1xyXG5cclxuY29uc3QgY29uZmlnID0gcmVxdWlyZShcIi4uL2NvbmZpZy5qc29uXCIpO1xyXG5cclxuY2xhc3MgSW5kb25lc2lhIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKGAke2NvbmZpZ1tcImthd2FsLWNvcm9uYVwiXS5iYXNlX3VybH0vaW5kb25lc2lhYCk7XHJcbiAgICBjb25zdCBpdGVtcyA9IGF3YWl0IGRhdGEuanNvbigpO1xyXG4gICAgY29uc3Qgc3RhdCA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBgJHtjb25maWdbXCJnbG9iYWwtYXBpXCJdLmJhc2VfdXJsfSR7Y29uZmlnW1wiZ2xvYmFsLWFwaVwiXS50b3RhbF9saXZlfS9pbmRvbmVzaWFgXHJcbiAgICApO1xyXG4gICAgY29uc3Qgc3RhdERhdGEgPSBhd2FpdCBzdGF0Lmpzb24oKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGl0ZW1zLFxyXG4gICAgICBzdGF0RGF0YSxcclxuICAgIH07XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgaXRlbXMsIHN0YXREYXRhIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgcmV0dXJuIDxJbmRleFBhZ2UgaXNHbG9iYWw9e2ZhbHNlfSBkYXRhPXtpdGVtc30gc3RhdGlzdGlrPXtzdGF0RGF0YX0gLz47XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRvbmVzaWE7XHJcbiIsImV4cG9ydCBjb25zdCBzdW0gPSBmdW5jdGlvbiAoa2V5LCBwcm9wcykge1xyXG4gIGlmIChwcm9wcy5pc0dsb2JhbCA9PSBmYWxzZSkge1xyXG4gICAgc3dpdGNoIChrZXkpIHtcclxuICAgICAgY2FzZSBcIkNvbmZpcm1lZFwiOlxyXG4gICAgICAgIHJldHVybiBwcm9wcy5kYXRhWzBdLnBvc2l0aWY7XHJcbiAgICAgIGNhc2UgXCJSZWNvdmVyZWRcIjpcclxuICAgICAgICByZXR1cm4gcHJvcHMuZGF0YVswXS5zZW1idWg7XHJcbiAgICAgIGNhc2UgXCJEZWF0aHNcIjpcclxuICAgICAgICByZXR1cm4gcHJvcHMuZGF0YVswXS5tZW5pbmdnYWw7XHJcbiAgICAgIGNhc2UgXCJBY3RpdmVcIjpcclxuICAgICAgICByZXR1cm4gcHJvcHMuZGF0YVswXS5kaXJhd2F0O1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBzd2l0Y2ggKGtleSkge1xyXG4gICAgICBjYXNlIFwiQ29uZmlybWVkXCI6XHJcbiAgICAgICAgcmV0dXJuIHByb3BzLmRhdGEucmVkdWNlKChzdW0sIGEpID0+IHtcclxuICAgICAgICAgIHJldHVybiBzdW0gKyBhLmF0dHJpYnV0ZXMuQ29uZmlybWVkO1xyXG4gICAgICAgIH0sIDApO1xyXG4gICAgICBjYXNlIFwiUmVjb3ZlcmVkXCI6XHJcbiAgICAgICAgcmV0dXJuIHByb3BzLmRhdGEucmVkdWNlKChzdW0sIGEpID0+IHtcclxuICAgICAgICAgIHJldHVybiBzdW0gKyBhLmF0dHJpYnV0ZXMuUmVjb3ZlcmVkO1xyXG4gICAgICAgIH0sIDApO1xyXG4gICAgICBjYXNlIFwiRGVhdGhzXCI6XHJcbiAgICAgICAgcmV0dXJuIHByb3BzLmRhdGEucmVkdWNlKChzdW0sIGEpID0+IHtcclxuICAgICAgICAgIHJldHVybiBzdW0gKyBhLmF0dHJpYnV0ZXMuRGVhdGhzO1xyXG4gICAgICAgIH0sIDApO1xyXG4gICAgICBjYXNlIFwiQWN0aXZlXCI6XHJcbiAgICAgICAgcmV0dXJuIHByb3BzLmRhdGEucmVkdWNlKChzdW0sIGEpID0+IHtcclxuICAgICAgICAgIHJldHVybiBzdW0gKyBhLmF0dHJpYnV0ZXMuQWN0aXZlO1xyXG4gICAgICAgIH0sIDApO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRBbGxNb250aCA9IGZ1bmN0aW9uIChwcm9wcykge1xyXG4gIGNvbnN0IG1vbnRoRW5nID0gW1xyXG4gICAgXCJqYW5cIixcclxuICAgIFwiRmViXCIsXHJcbiAgICBcIk1hclwiLFxyXG4gICAgXCJBcHJcIixcclxuICAgIFwiTWF5XCIsXHJcbiAgICBcIkp1blwiLFxyXG4gICAgXCJKdWxcIixcclxuICAgIFwiQXVnXCIsXHJcbiAgICBcIlNlcFwiLFxyXG4gICAgXCJPY3RcIixcclxuICAgIFwiTm92XCIsXHJcbiAgICBcIkRlc1wiLFxyXG4gIF07XHJcbiAgbGV0IG5vd0RhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gIGxldCBkYXkgPSBudWxsO1xyXG4gIGxldCBtb250aCA9IG51bGw7XHJcbiAgbGV0IHllYXIgPSBudWxsO1xyXG4gIGxldCBsYWJlbCA9IFtdO1xyXG4gIGxldCBwb3NpdGlmID0gW107XHJcbiAgbGV0IHNlbWJ1aCA9IFtdO1xyXG4gIGxldCBtZW5pbmdnYWwgPSBbXTtcclxuICBsZXQgYWN0aXZlID0gW107XHJcbiAgbGV0IGRhdGEgPSBbXTtcclxuXHJcbiAgZm9yIChsZXQgdmFsdWUgb2YgcHJvcHMuc3RhdGlzdGlrKSB7XHJcbiAgICBub3dEYXRlID0gbmV3IERhdGUodmFsdWUuRGF0ZSk7XHJcbiAgICBkYXkgPSBub3dEYXRlLmdldERhdGUoKTtcclxuICAgIG1vbnRoID0gbm93RGF0ZS5nZXRNb250aCgpO1xyXG4gICAgeWVhciA9IG5vd0RhdGUuZ2V0RnVsbFllYXIoKTtcclxuICAgIGxhYmVsLnB1c2goZGF5ICsgXCIgXCIgKyBtb250aEVuZ1tNYXRoLmFicyhtb250aCldKTtcclxuICAgIGFjdGl2ZS5wdXNoKHZhbHVlLkFjdGl2ZSk7XHJcbiAgICBzZW1idWgucHVzaCh2YWx1ZS5SZWNvdmVyZWQpO1xyXG4gICAgbWVuaW5nZ2FsLnB1c2godmFsdWUuRGVhdGhzKTtcclxuICAgIHBvc2l0aWYucHVzaCh2YWx1ZS5Db25maXJtZWQpO1xyXG4gIH1cclxuICBkYXRhID0ge1xyXG4gICAgbGFiZWw6IGxhYmVsLFxyXG4gICAgYWN0aXZlOiBhY3RpdmUsXHJcbiAgICBzZW1idWg6IHNlbWJ1aCxcclxuICAgIG1lbmluZ2dhbDogbWVuaW5nZ2FsLFxyXG4gICAgcG9zaXRpZjogcG9zaXRpZixcclxuICB9O1xyXG4gIHJldHVybiBkYXRhO1xyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc29tb3JwaGljLWZldGNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvSGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC9OYXZcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtY2hhcnRqcy0yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW51bWJlci1mb3JtYXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=
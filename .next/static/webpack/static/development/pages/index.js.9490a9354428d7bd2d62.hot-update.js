webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Homepage/TrendingServices.jsx":
/*!**************************************************!*\
  !*** ./components/Homepage/TrendingServices.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AppContext */ "./components/AppContext.jsx");
/* harmony import */ var _ServiceSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ServiceSlider */ "./components/Homepage/ServiceSlider.jsx");
var _jsxFileName = "/Users/sonjoydatta/Desktop/sheba/components/Homepage/TrendingServices.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function TrendingServices(props) {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_AppContext__WEBPACK_IMPORTED_MODULE_2__["default"]),
      trending = _useContext.trending;

  if (trending.length > 0) {
    return __jsx("div", {
      className: "TrendingServices",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 7
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 11
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 13
      }
    }, "pp", __jsx(_ServiceSlider__WEBPACK_IMPORTED_MODULE_3__["default"], {
      data: trending,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 15
      }
    })))));
  } else return null;
}

/* harmony default export */ __webpack_exports__["default"] = (TrendingServices);

/***/ })

})
//# sourceMappingURL=index.js.9490a9354428d7bd2d62.hot-update.js.map
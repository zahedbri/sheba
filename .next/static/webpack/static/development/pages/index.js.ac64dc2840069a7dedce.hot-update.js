webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Homepage/HeroBanner.jsx":
/*!********************************************!*\
  !*** ./components/Homepage/HeroBanner.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");
/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../AppContext */ "./components/AppContext.jsx");
/* harmony import */ var _HeroSearch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HeroSearch */ "./components/Homepage/HeroSearch.jsx");
var _jsxFileName = "/Users/sonjoydatta/Desktop/sheba/components/Homepage/HeroBanner.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function HeroBanner(props) {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_AppContext__WEBPACK_IMPORTED_MODULE_3__["default"]),
      searchOptions = _useContext.searchOptions;

  return __jsx("div", {
    className: "HeroBanner",
    style: {
      backgroundImage: 'url(./static/images/hero-banner.jpg)'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "HeroBanner-Warp",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: "HeroBanner-Heading",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, "Your Personal Assistant"), __jsx("h3", {
    className: "HeroBanner-SubHeading",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, "One-stop solution for your services. Order any service, anytime."), __jsx("div", {
    className: "HeroBanner-Actions",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx(_HeroSearch__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (HeroBanner);

/***/ }),

/***/ "./components/Homepage/HeroSearch.jsx":
/*!********************************************!*\
  !*** ./components/Homepage/HeroSearch.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/sonjoydatta/Desktop/sheba/components/Homepage/HeroSearch.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function HeroSearch(props) {
  return __jsx("div", {
    className: "HeroSearch",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "HeroSearch-LocationPicker",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx(Button, {
    type: "button",
    className: "HeroSearch-LocationPicker__Btn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx(Image, {
    src: "./static/images/location-icon.svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }), " Gulshan")), __jsx("div", {
    className: "HeroSearch-Search",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx(Select, {
    className: "HeroSelect",
    classNamePrefix: "HeroSelect",
    placeholder: "Find your service here e.g. AC, Car, Facial\u2026",
    options: searchOptions,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }), __jsx(Button, {
    variant: "primary",
    className: "HeroSearch-Search__Btn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx("i", {
    className: "material-icons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 10
    }
  }, "search"))));
}

/* harmony default export */ __webpack_exports__["default"] = (HeroSearch);

/***/ })

})
//# sourceMappingURL=index.js.ac64dc2840069a7dedce.hot-update.js.map
webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Header/SearchFilter.jsx":
/*!********************************************!*\
  !*** ./components/Header/SearchFilter.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AppContext */ "./components/AppContext.jsx");
/* harmony import */ var _Homepage_HeroSearch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Homepage/HeroSearch */ "./components/Homepage/HeroSearch.jsx");
var _jsxFileName = "/Users/sonjoydatta/Desktop/sheba/components/Header/SearchFilter.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function SearchFilter(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      height = _useState[0],
      setHeight = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setHeight(window.pageYOffset);
    console.log(height);
  }, []);

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_AppContext__WEBPACK_IMPORTED_MODULE_1__["default"]),
      isMobile = _useContext.isMobile;

  if (isMobile) {
    return null;
  }

  return __jsx(_Homepage_HeroSearch__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 10
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (SearchFilter);

/***/ })

})
//# sourceMappingURL=index.js.b1ff9f0ea97b15b882a8.hot-update.js.map
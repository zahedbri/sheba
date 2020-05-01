webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Homepage/HighDemand.jsx":
/*!********************************************!*\
  !*** ./components/Homepage/HighDemand.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AppContext */ "./components/AppContext.jsx");
/* harmony import */ var _ServiceSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ServiceSlider */ "./components/Homepage/ServiceSlider.jsx");
var _jsxFileName = "/Users/sonjoydatta/Desktop/sheba/components/Homepage/HighDemand.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function HighDemand(props) {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_AppContext__WEBPACK_IMPORTED_MODULE_2__["default"]),
      trending = _useContext.trending;

  if (trending.length > 0) {
    return __jsx("div", {
      className: "HighDemand",
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
    }, __jsx("h2", {
      className: "HighDemand-Heading",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 15
      }
    }, "Current High Demand Services"), __jsx(_ServiceSlider__WEBPACK_IMPORTED_MODULE_3__["default"], {
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

/* harmony default export */ __webpack_exports__["default"] = (HighDemand);

/***/ }),

/***/ "./components/Homepage/index.jsx":
/*!***************************************!*\
  !*** ./components/Homepage/index.jsx ***!
  \***************************************/
/*! exports provided: HeroBanner, FeaturedCategories, HighDemand, TrendingServices, HappyService, Counter, ServiceProcess, Testimonial, AppDownload, RequestService, OfficeSolution, BecomePartner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HeroBanner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeroBanner */ "./components/Homepage/HeroBanner.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeroBanner", function() { return _HeroBanner__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _FeaturedCategories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeaturedCategories */ "./components/Homepage/FeaturedCategories.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeaturedCategories", function() { return _FeaturedCategories__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _HighDemand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HighDemand */ "./components/Homepage/HighDemand.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HighDemand", function() { return _HighDemand__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _TrendingServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TrendingServices */ "./components/Homepage/TrendingServices.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TrendingServices", function() { return _TrendingServices__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _HappyService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HappyService */ "./components/Homepage/HappyService.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HappyService", function() { return _HappyService__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _Counter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Counter */ "./components/Homepage/Counter.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Counter", function() { return _Counter__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _ServiceProcess__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ServiceProcess */ "./components/Homepage/ServiceProcess.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceProcess", function() { return _ServiceProcess__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _Testimonial__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Testimonial */ "./components/Homepage/Testimonial.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Testimonial", function() { return _Testimonial__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _AppDownload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AppDownload */ "./components/Homepage/AppDownload.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppDownload", function() { return _AppDownload__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _RequestService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./RequestService */ "./components/Homepage/RequestService.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RequestService", function() { return _RequestService__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _OfficeSolution__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./OfficeSolution */ "./components/Homepage/OfficeSolution.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OfficeSolution", function() { return _OfficeSolution__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _BecomePartner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./BecomePartner */ "./components/Homepage/BecomePartner.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BecomePartner", function() { return _BecomePartner__WEBPACK_IMPORTED_MODULE_11__["default"]; });














/***/ })

})
//# sourceMappingURL=index.js.cf8e4f0c8cfcdbcfd85c.hot-update.js.map
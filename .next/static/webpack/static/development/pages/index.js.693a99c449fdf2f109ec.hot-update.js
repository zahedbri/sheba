webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Homepage/ServiceSlider.jsx":
/*!***********************************************!*\
  !*** ./components/Homepage/ServiceSlider.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/Users/sonjoydatta/Desktop/sheba/components/Homepage/ServiceSlider.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ServiceSlider(props) {
  var _this = this;

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  var services = props.data;
  return __jsx("div", {
    className: "ServiceSlider",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx(Slider, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, settings, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }), services.map(function (service) {
    return __jsx("div", {
      key: service.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }
    }, "pp");
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (ServiceSlider);

/***/ }),

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
/* harmony import */ var _ServiceSlider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ServiceSlider */ "./components/Homepage/ServiceSlider.jsx");
var _jsxFileName = "/Users/sonjoydatta/Desktop/sheba/components/Homepage/TrendingServices.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function TrendingServices(props) {
  return __jsx("div", {
    className: "TrendingServices",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (TrendingServices);

/***/ })

})
//# sourceMappingURL=index.js.693a99c449fdf2f109ec.hot-update.js.map
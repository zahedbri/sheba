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
/* harmony import */ var _HeroSearch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeroSearch */ "./components/Homepage/HeroSearch.jsx");
var _jsxFileName = "/Users/sonjoydatta/Desktop/sheba/components/Homepage/HeroBanner.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var scrollToRef = function scrollToRef(ref) {
  return window.scrollTo(0, ref.current.offsetTop);
};

function HeroBanner(props) {
  var myRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var executeScroll = function executeScroll() {
    return scrollToRef(myRef);
  };

  console.log(executeScroll);
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
    ref: myRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx(_HeroSearch__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (HeroBanner);

/***/ })

})
//# sourceMappingURL=index.js.c5f4c35d0bf2b855a55b.hot-update.js.map
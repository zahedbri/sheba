webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Homepage/Testimonial.jsx":
/*!*********************************************!*\
  !*** ./components/Homepage/Testimonial.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AppContext */ "./components/AppContext.jsx");
/* harmony import */ var _TestimonialSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TestimonialSlider */ "./components/Homepage/TestimonialSlider.jsx");
var _jsxFileName = "/Users/sonjoydatta/Desktop/sheba/components/Homepage/Testimonial.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Testimonial(props) {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_AppContext__WEBPACK_IMPORTED_MODULE_2__["default"]),
      testimonials = _useContext.testimonials;

  if (testimonials.length > 0) {
    return __jsx("div", {
      className: "Testimonial",
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
      md: 12,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 13
      }
    }, __jsx("p", {
      className: "RegularParagraph",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 15
      }
    }, "Some happy faces"), __jsx("h3", {
      className: "SectionHeading",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 15
      }
    }, "Real Happy Customers, Real Stories")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      md: 12,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }
    }, __jsx(_TestimonialSlider__WEBPACK_IMPORTED_MODULE_3__["default"], {
      data: testimonials,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 15
      }
    })))));
  }

  return null;
}

/* harmony default export */ __webpack_exports__["default"] = (Testimonial);

/***/ })

})
//# sourceMappingURL=index.js.22fc0c26c39139b2efcd.hot-update.js.map
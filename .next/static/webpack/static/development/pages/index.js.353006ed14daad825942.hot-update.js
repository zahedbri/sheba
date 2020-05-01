webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Homepage/FeaturedCategoriesMobile.jsx":
/*!**********************************************************!*\
  !*** ./components/Homepage/FeaturedCategoriesMobile.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AppContext */ "./components/AppContext.jsx");
var _jsxFileName = "/Users/sonjoydatta/Desktop/sheba/components/Homepage/FeaturedCategoriesMobile.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function FeaturedCategoriesMobile(props) {
  var _this = this;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_AppContext__WEBPACK_IMPORTED_MODULE_2__["default"]),
      categories = _useContext.categories;

  if (categories.length > 0) {
    return __jsx("div", {
      className: "FeaturedCategoriesMobile",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 7
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 11
      }
    }, categories.map(function (category) {
      return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: 3,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 17
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Image"], {
        fluid: true,
        alt: category.title,
        className: "FeaturedCategoriesMobile-Image",
        src: "./static/images/categories/".concat(category.image),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 19
        }
      }), __jsx("h5", {
        className: "FeaturedCategoriesMobile-Title",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 19
        }
      }, category.title));
    }))));
  }

  return null;
}

/* harmony default export */ __webpack_exports__["default"] = (FeaturedCategoriesMobile);

/***/ })

})
//# sourceMappingURL=index.js.353006ed14daad825942.hot-update.js.map
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) { var name; }

  return WithRouterWrapper;
}

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cMU6");


/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "IZS3":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "O/hg":
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cMU6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__("IZS3");

// CONCATENATED MODULE: ./components/Loader/PageLoader.jsx

var __jsx = external_react_default.a.createElement;


function PageLoader() {
  return __jsx("div", {
    className: "PageLoader"
  }, __jsx("div", {
    className: "d-flex justify-content-center align-items-center w-100 h-100"
  }, __jsx("div", {
    className: "PageLoader-Loader shadow"
  }, __jsx(external_react_bootstrap_["Image"], {
    fluid: true,
    src: "./static/images/loader.png"
  }))));
}

/* harmony default export */ var Loader_PageLoader = (PageLoader);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./components/AppContext.jsx

const AppContext = Object(external_react_["createContext"])();
/* harmony default export */ var components_AppContext = (AppContext);
// EXTERNAL MODULE: external "react-select"
var external_react_select_ = __webpack_require__("vtRj");
var external_react_select_default = /*#__PURE__*/__webpack_require__.n(external_react_select_);

// CONCATENATED MODULE: ./components/Homepage/HeroSearch.jsx

var HeroSearch_jsx = external_react_default.a.createElement;





function HeroSearch(props) {
  const {
    searchOptions
  } = Object(external_react_["useContext"])(components_AppContext);
  return HeroSearch_jsx("div", {
    className: "HeroSearch"
  }, HeroSearch_jsx("div", {
    className: "HeroSearch-LocationPicker"
  }, HeroSearch_jsx(external_react_bootstrap_["Button"], {
    type: "button",
    className: "HeroSearch-LocationPicker__Btn"
  }, HeroSearch_jsx(external_react_bootstrap_["Image"], {
    src: "./static/images/location-icon.svg"
  }), " Gulshan")), HeroSearch_jsx("div", {
    className: "HeroSearch-Search"
  }, HeroSearch_jsx(external_react_select_default.a, {
    className: "HeroSelect",
    classNamePrefix: "HeroSelect",
    placeholder: "Find your service here e.g. AC, Car, Facial\u2026",
    options: searchOptions
  }), HeroSearch_jsx(external_react_bootstrap_["Button"], {
    variant: "primary",
    className: "HeroSearch-Search__Btn"
  }, HeroSearch_jsx("i", {
    className: "material-icons"
  }, "search"))));
}

/* harmony default export */ var Homepage_HeroSearch = (HeroSearch);
// CONCATENATED MODULE: ./components/Header/SearchFilter.jsx

var SearchFilter_jsx = external_react_default.a.createElement;





function SearchFilter(props) {
  const {
    isMobile
  } = Object(external_react_["useContext"])(components_AppContext);
  const {
    0: scrollY,
    1: setScrollY
  } = Object(external_react_["useState"])(0);

  function scrollHeight() {
    setScrollY(window.pageYOffset);
  }

  Object(external_react_["useEffect"])(() => {
    function watchScroll() {
      window.addEventListener('scroll', scrollHeight);
    }

    watchScroll();
    return () => {
      window.removeEventListener('scroll', scrollHeight);
    };
  });

  if (isMobile) {
    return SearchFilter_jsx("div", {
      className: "MobileSearch"
    }, SearchFilter_jsx(external_react_bootstrap_["Button"], {
      variant: "primary"
    }, SearchFilter_jsx("i", {
      className: "material-icons"
    }, "search")), SearchFilter_jsx(external_react_bootstrap_["Button"], {
      variant: "primary"
    }, SearchFilter_jsx(external_react_bootstrap_["Image"], {
      src: "./static/images/location-icon.svg"
    })));
  }

  if (scrollY > 321) return SearchFilter_jsx(Homepage_HeroSearch, null);
  return null;
}

/* harmony default export */ var Header_SearchFilter = (SearchFilter);
// CONCATENATED MODULE: ./components/Header/Navigation.jsx

var Navigation_jsx = external_react_default.a.createElement;





function Navigation() {
  const {
    isMobile
  } = Object(external_react_["useContext"])(components_AppContext);
  return Navigation_jsx(external_react_["Fragment"], null, Navigation_jsx(external_react_bootstrap_["Navbar"].Toggle, {
    "aria-controls": "basic-navbar-nav"
  }), Navigation_jsx(external_react_bootstrap_["Navbar"].Collapse, {
    id: "basic-navbar-nav"
  }, Navigation_jsx(external_react_bootstrap_["Nav"], {
    className: "ml-auto"
  }, isMobile ? Navigation_jsx(external_react_["Fragment"], null, Navigation_jsx(link_default.a, {
    href: "!#"
  }, Navigation_jsx("a", {
    className: "nav-link"
  }, "Home")), Navigation_jsx(link_default.a, {
    href: "!#"
  }, Navigation_jsx("a", {
    className: "nav-link"
  }, "All Service")), Navigation_jsx(link_default.a, {
    href: "!#"
  }, Navigation_jsx("a", {
    className: "nav-link"
  }, "Service Orders")), Navigation_jsx(link_default.a, {
    href: "!#"
  }, Navigation_jsx("a", {
    className: "nav-link"
  }, "Login"))) : Navigation_jsx(external_react_["Fragment"], null, Navigation_jsx(link_default.a, {
    href: "!#"
  }, Navigation_jsx("a", {
    className: "nav-link"
  }, "All Service")), Navigation_jsx(link_default.a, {
    href: "!#"
  }, Navigation_jsx("a", {
    className: "nav-link"
  }, "Login"))))));
}

/* harmony default export */ var Header_Navigation = (Navigation);
// CONCATENATED MODULE: ./components/Header/Header.jsx

var Header_jsx = external_react_default.a.createElement;





function Header(props) {
  return Header_jsx("div", {
    className: "bg-white shadow-sm fixed-top"
  }, Header_jsx(external_react_bootstrap_["Container"], null, Header_jsx(external_react_bootstrap_["Row"], null, Header_jsx(external_react_bootstrap_["Col"], null, Header_jsx(external_react_bootstrap_["Navbar"], {
    bg: "white",
    expand: "md",
    className: "pl-0 pr-0"
  }, Header_jsx(link_default.a, {
    href: "/"
  }, Header_jsx("a", {
    className: "navbar-brand"
  }, Header_jsx(external_react_bootstrap_["Image"], {
    fluid: true,
    src: "./static/images/logo.png"
  }))), Header_jsx(Header_SearchFilter, null), Header_jsx(Header_Navigation, null))))));
}

/* harmony default export */ var Header_Header = (Header);
// CONCATENATED MODULE: ./components/Footer/Footer.jsx

var Footer_jsx = external_react_default.a.createElement;





function Footer() {
  const {
    isMobile
  } = Object(external_react_["useContext"])(components_AppContext);
  return Footer_jsx("div", {
    className: "Footer-Widget"
  }, Footer_jsx(external_react_bootstrap_["Container"], null, Footer_jsx(external_react_bootstrap_["Row"], null, Footer_jsx(external_react_bootstrap_["Col"], {
    md: 8
  }, Footer_jsx(external_react_bootstrap_["Row"], null, Footer_jsx(external_react_bootstrap_["Col"], {
    md: 6,
    lg: 4
  }, Footer_jsx("h5", {
    className: "Footer-Widget__Heading"
  }, "Contact"), Footer_jsx("p", {
    className: "mb-1"
  }, "16516"), Footer_jsx("p", {
    className: "mb-2"
  }, "info@sheba.xyz"), Footer_jsx("p", {
    className: "mb-5 mb-md-0"
  }, "House #63 (1st Floor)", Footer_jsx("br", null), "Road #04, Block-C", Footer_jsx("br", null), "Banani, Dhaka 1213")), !isMobile && Footer_jsx(external_react_["Fragment"], null, Footer_jsx(external_react_bootstrap_["Col"], {
    md: 3,
    lg: 4
  }, Footer_jsx("div", {
    className: "d-none d-md-block"
  }, Footer_jsx("h5", {
    className: "Footer-Widget__Heading"
  }, "Other pages"), Footer_jsx("ul", {
    className: "Footer-Widget__Links"
  }, Footer_jsx("li", null, Footer_jsx(link_default.a, {
    href: "!#"
  }, Footer_jsx("a", null, "Blog"))), Footer_jsx("li", null, Footer_jsx(link_default.a, {
    href: "!#"
  }, Footer_jsx("a", null, "Terms of use"))), Footer_jsx("li", null, Footer_jsx(link_default.a, {
    href: "!#"
  }, Footer_jsx("a", null, "Privacy Policy")))))), Footer_jsx(external_react_bootstrap_["Col"], {
    md: 3,
    lg: 4
  }, Footer_jsx("div", {
    className: "d-none d-md-block"
  }, Footer_jsx("h5", {
    className: "Footer-Widget__Heading"
  }, "Company"), Footer_jsx("ul", {
    className: "Footer-Widget__Links"
  }, Footer_jsx("li", null, Footer_jsx(link_default.a, {
    href: "!#"
  }, Footer_jsx("a", null, "sManager"))), Footer_jsx("li", null, Footer_jsx(link_default.a, {
    href: "!#"
  }, Footer_jsx("a", null, "sBusiness"))), Footer_jsx("li", null, Footer_jsx(link_default.a, {
    href: "!#"
  }, Footer_jsx("a", null, "sDelivery"))), Footer_jsx("li", null, Footer_jsx(link_default.a, {
    href: "!#"
  }, Footer_jsx("a", null, "sBondhu"))))))))), Footer_jsx(external_react_bootstrap_["Col"], {
    md: 4
  }, Footer_jsx("div", {
    className: "text-md-right"
  }, Footer_jsx("h5", {
    className: "Footer-Widget__Heading"
  }, "Download our app"), Footer_jsx("p", null, "Tackle your to-do list wherever you are with our mobile app & make your life easy."), Footer_jsx(external_react_bootstrap_["Row"], null, Footer_jsx(external_react_bootstrap_["Col"], {
    className: "pr-1"
  }, Footer_jsx("a", {
    href: "!#"
  }, Footer_jsx(external_react_bootstrap_["Image"], {
    fluid: true,
    src: "./static/images/app-store.png"
  }))), Footer_jsx(external_react_bootstrap_["Col"], {
    className: "pl-1"
  }, Footer_jsx("a", {
    href: "!#"
  }, Footer_jsx(external_react_bootstrap_["Image"], {
    fluid: true,
    src: "./static/images/play-store.png"
  })))), Footer_jsx("ul", {
    className: "Footer-Widget__SocialLinks"
  }, Footer_jsx("li", null, Footer_jsx("a", {
    href: "!#"
  }, Footer_jsx(external_react_bootstrap_["Image"], {
    src: "./static/images/facebook.svg"
  }))), Footer_jsx("li", null, Footer_jsx("a", {
    href: "!#"
  }, Footer_jsx(external_react_bootstrap_["Image"], {
    src: "./static/images/linkedin.svg"
  }))), Footer_jsx("li", null, Footer_jsx("a", {
    href: "!#"
  }, Footer_jsx(external_react_bootstrap_["Image"], {
    src: "./static/images/instagram.svg"
  })))))))));
}

/* harmony default export */ var Footer_Footer = (Footer);
// CONCATENATED MODULE: ./components/Footer/Copyright.jsx

var Copyright_jsx = external_react_default.a.createElement;


function Copyright() {
  return Copyright_jsx("div", {
    className: "Footer-Copyright"
  }, Copyright_jsx(external_react_bootstrap_["Container"], null, Copyright_jsx(external_react_bootstrap_["Row"], null, Copyright_jsx(external_react_bootstrap_["Col"], null, Copyright_jsx("p", {
    className: "text-center mb-0"
  }, "Copyright \xA9 ", new Date().getFullYear(), " Sheba Platform Limited | All Rights Reserved"), Copyright_jsx("p", {
    className: "text-center text-secondary mb-0"
  }, "Please not, this is a rebuilt website of sheba.xyz using the different technologies and it is developed for as a project work. It was not built for selling purposes. Developed by Sonjoy Datta. ", Copyright_jsx("a", {
    href: "https://www.linkedin.com/in/sonjoydatta",
    target: "_blank"
  }, "LinkdIn"), " | ", Copyright_jsx("a", {
    href: "https://github.com/sonjoydatta",
    target: "_blank"
  }, "GitHub"))))));
}

/* harmony default export */ var Footer_Copyright = (Copyright);
// CONCATENATED MODULE: ./components/Layout.jsx

var Layout_jsx = external_react_default.a.createElement;





function Layout(props) {
  return Layout_jsx("div", {
    className: "PageWrapper"
  }, Layout_jsx(head_default.a, null, Layout_jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
  }), Layout_jsx("title", null, "Sheba Marketplace"), Layout_jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    charset: "UTF-8",
    href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
  }), Layout_jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
  })), Layout_jsx("header", {
    className: "Header"
  }, Layout_jsx(Header_Header, null)), Layout_jsx("main", {
    className: "Main"
  }, props.children), Layout_jsx("footer", {
    className: "Footer"
  }, Layout_jsx(Footer_Footer, null), Layout_jsx(Footer_Copyright, null)));
}

/* harmony default export */ var components_Layout = (Layout);
// CONCATENATED MODULE: ./components/index.jsx


// CONCATENATED MODULE: ./utils/index.jsx
const handleNumbersOnly = e => {
  let flag;

  if (e.keyCode === 8 || e.keyCode === 9 || e.keyCode === 16 && e.keyCode >= 9 || e.keyCode === 37 || e.keyCode === 39 || e.keyCode === 46 || e.keyCode >= 48 && e.keyCode <= 57 || e.keyCode >= 96 && e.keyCode <= 105) {
    flag = false;
  } else {
    flag = true;
  }

  if (flag) {
    e.preventDefault();
  }
};
const getYouTubeId = url => {
  let ID = '';
  url = url.replace(/(>|<)/gi, '').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);

  if (url[2] !== undefined) {
    ID = url[2].split(/[^0-9a-z_\-]/i);
    ID = ID[0];
  } else {
    ID = '';
  }

  return ID;
};
const isMobileAgent = userAgent => {
  let isMobile = Boolean(userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i));
  return isMobile;
};
// CONCATENATED MODULE: ./components/Homepage/HeroBanner.jsx

var HeroBanner_jsx = external_react_default.a.createElement;


function HeroBanner(props) {
  return HeroBanner_jsx("div", {
    className: "HeroBanner",
    style: {
      backgroundImage: 'url(./static/images/hero-banner.jpg)'
    }
  }, HeroBanner_jsx("div", {
    className: "HeroBanner-Warp"
  }, HeroBanner_jsx("h1", {
    className: "HeroBanner-Heading"
  }, "Your Personal Assistant"), HeroBanner_jsx("h3", {
    className: "HeroBanner-SubHeading"
  }, "One-stop solution for your services. Order any service, anytime."), HeroBanner_jsx("div", {
    className: "HeroBanner-Actions"
  }, HeroBanner_jsx(Homepage_HeroSearch, null))));
}

/* harmony default export */ var Homepage_HeroBanner = (HeroBanner);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__("O/hg");
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);

// CONCATENATED MODULE: ./components/Homepage/FeaturedCategories.jsx

var FeaturedCategories_jsx = external_react_default.a.createElement;





function FeaturedCategories(props) {
  const {
    categories
  } = Object(external_react_["useContext"])(components_AppContext);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [{
      breakpoint: 991,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      }
    }]
  };

  if (categories.length > 0) {
    return FeaturedCategories_jsx("div", {
      className: "FeaturedCategories"
    }, FeaturedCategories_jsx(external_react_bootstrap_["Container"], null, FeaturedCategories_jsx(external_react_bootstrap_["Row"], null, FeaturedCategories_jsx(external_react_bootstrap_["Col"], null, FeaturedCategories_jsx("div", {
      className: "FeaturedCategories-BoxWarp"
    }, FeaturedCategories_jsx(external_react_slick_default.a, settings, categories.map(category => FeaturedCategories_jsx("div", {
      key: category.id
    }, FeaturedCategories_jsx(external_react_bootstrap_["Button"], {
      className: "FeaturedCategories-Item"
    }, FeaturedCategories_jsx(external_react_bootstrap_["Image"], {
      fluid: true,
      alt: category.title,
      className: "FeaturedCategories-Item__Image",
      src: `./static/images/categories/${category.image}`
    }), FeaturedCategories_jsx("p", {
      className: "FeaturedCategories-Item__Title"
    }, category.title)))), FeaturedCategories_jsx("div", null, FeaturedCategories_jsx(external_react_bootstrap_["Button"], {
      className: "FeaturedCategories-Item"
    }, FeaturedCategories_jsx(external_react_bootstrap_["Image"], {
      fluid: true,
      alt: "All Services",
      className: "FeaturedCategories-Item__Image",
      src: "./static/images/categories/07.svg"
    }), FeaturedCategories_jsx("p", {
      className: "FeaturedCategories-Item__Title"
    }, "All Services")))))))));
  }

  return null;
}

/* harmony default export */ var Homepage_FeaturedCategories = (FeaturedCategories);
// CONCATENATED MODULE: ./components/Homepage/FeaturedCategoriesMobile.jsx

var FeaturedCategoriesMobile_jsx = external_react_default.a.createElement;




function FeaturedCategoriesMobile(props) {
  const {
    categories
  } = Object(external_react_["useContext"])(components_AppContext);

  if (categories.length > 0) {
    return FeaturedCategoriesMobile_jsx("div", {
      className: "FeaturedCategoriesMobile"
    }, FeaturedCategoriesMobile_jsx(external_react_bootstrap_["Container"], null, FeaturedCategoriesMobile_jsx(external_react_bootstrap_["Row"], null, categories.map(category => FeaturedCategoriesMobile_jsx(external_react_bootstrap_["Col"], {
      xs: 3,
      key: category.id
    }, FeaturedCategoriesMobile_jsx(external_react_bootstrap_["Image"], {
      fluid: true,
      alt: category.title,
      className: "FeaturedCategoriesMobile-Image",
      src: `./static/images/categories/${category.image}`
    }), FeaturedCategoriesMobile_jsx("h5", {
      className: "FeaturedCategoriesMobile-Title"
    }, category.title))), FeaturedCategoriesMobile_jsx(external_react_bootstrap_["Col"], {
      xs: 3
    }, FeaturedCategoriesMobile_jsx("span", {
      className: "FeaturedCategoriesMobile-ViewAll"
    }, "4+"), FeaturedCategoriesMobile_jsx("h5", {
      className: "FeaturedCategoriesMobile-Title"
    }, "View All")))));
  }

  return null;
}

/* harmony default export */ var Homepage_FeaturedCategoriesMobile = (FeaturedCategoriesMobile);
// CONCATENATED MODULE: ./components/Homepage/ServiceSlider.jsx

var ServiceSlider_jsx = external_react_default.a.createElement;




function ServiceSlider(props) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [{
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }]
  };
  const services = props.data;
  return ServiceSlider_jsx("div", {
    className: "ServiceSlider"
  }, ServiceSlider_jsx(external_react_slick_default.a, settings, services.map(service => ServiceSlider_jsx("div", {
    key: service.id
  }, ServiceSlider_jsx("div", {
    className: "ServiceSlider-Warp"
  }, ServiceSlider_jsx(link_default.a, {
    href: "!#"
  }, ServiceSlider_jsx("a", {
    className: "ServiceSlider-Item"
  }, ServiceSlider_jsx(external_react_bootstrap_["Image"], {
    fluid: true,
    alt: service.title,
    className: "ServiceSlider-Item__Image shadow-sm",
    src: `./static/images/services/${service.image}`
  }), ServiceSlider_jsx("p", {
    className: "ServiceSlider-Item__Title"
  }, service.title))))))));
}

/* harmony default export */ var Homepage_ServiceSlider = (ServiceSlider);
// CONCATENATED MODULE: ./components/Homepage/HighDemand.jsx

var HighDemand_jsx = external_react_default.a.createElement;





function HighDemand(props) {
  const {
    highDemand
  } = Object(external_react_["useContext"])(components_AppContext);

  if (highDemand.length > 0) {
    return HighDemand_jsx("div", {
      className: "HighDemand"
    }, HighDemand_jsx(external_react_bootstrap_["Container"], null, HighDemand_jsx(external_react_bootstrap_["Row"], null, HighDemand_jsx(external_react_bootstrap_["Col"], null, HighDemand_jsx("h2", {
      className: "HighDemand-Heading"
    }, "Current High Demand Services"), HighDemand_jsx(Homepage_ServiceSlider, {
      data: highDemand
    })))));
  }

  return null;
}

/* harmony default export */ var Homepage_HighDemand = (HighDemand);
// CONCATENATED MODULE: ./components/Homepage/TrendingServices.jsx

var TrendingServices_jsx = external_react_default.a.createElement;





function TrendingServices(props) {
  const {
    trending
  } = Object(external_react_["useContext"])(components_AppContext);

  if (trending.length > 0) {
    return TrendingServices_jsx("div", {
      className: "TrendingServices"
    }, TrendingServices_jsx(external_react_bootstrap_["Container"], null, TrendingServices_jsx(external_react_bootstrap_["Row"], null, TrendingServices_jsx(external_react_bootstrap_["Col"], null, TrendingServices_jsx("h2", {
      className: "TrendingServices-Heading"
    }, "Trending"), TrendingServices_jsx(Homepage_ServiceSlider, {
      data: trending
    })))));
  }

  return null;
}

/* harmony default export */ var Homepage_TrendingServices = (TrendingServices);
// CONCATENATED MODULE: ./components/Homepage/HappyService.jsx

var HappyService_jsx = external_react_default.a.createElement;


function BoxItem(props) {
  return HappyService_jsx(external_react_bootstrap_["Col"], {
    xs: 6
  }, HappyService_jsx("div", {
    className: "HappyService-BoxWarp"
  }, HappyService_jsx(external_react_bootstrap_["Image"], {
    fluid: true,
    src: `./static/images/${props.icon}`,
    className: "pr-3"
  }), HappyService_jsx("div", {
    className: "HappyService-BoxTitle"
  }, props.title)));
}

function HappyService(props) {
  return HappyService_jsx("div", {
    className: "HappyService"
  }, HappyService_jsx(external_react_bootstrap_["Container"], null, HappyService_jsx(external_react_bootstrap_["Row"], null, HappyService_jsx(external_react_bootstrap_["Col"], {
    md: 12
  }, HappyService_jsx("p", {
    className: "RegularParagraph"
  }, "Why choose Us"), HappyService_jsx("h3", {
    className: "SectionHeading"
  }, "Happiness Guarantee")), HappyService_jsx(external_react_bootstrap_["Col"], {
    md: 12
  }, HappyService_jsx(external_react_bootstrap_["Row"], null, HappyService_jsx(external_react_bootstrap_["Col"], {
    lg: 5
  }, HappyService_jsx(external_react_bootstrap_["Row"], {
    className: "align-items-center"
  }, HappyService_jsx(BoxItem, {
    title: "Background Checked",
    icon: "usp-1.svg"
  }), HappyService_jsx(BoxItem, {
    title: "24/7 Support",
    icon: "usp-2.svg"
  }), HappyService_jsx(BoxItem, {
    title: "Expert Professional",
    icon: "usp-3.svg"
  }), HappyService_jsx(BoxItem, {
    title: "Rework Assurance",
    icon: "usp-4.svg"
  }))), HappyService_jsx(external_react_bootstrap_["Col"], {
    lg: 7
  }, HappyService_jsx("div", {
    className: "HappyService-Banner"
  }, HappyService_jsx(external_react_bootstrap_["Image"], {
    fluid: true,
    src: "./static/images/happiness-banner.jpg"
  }))))))));
}

/* harmony default export */ var Homepage_HappyService = (HappyService);
// CONCATENATED MODULE: ./components/Homepage/Counter.jsx

var Counter_jsx = external_react_default.a.createElement;




function Counter(props) {
  const {
    counters
  } = Object(external_react_["useContext"])(components_AppContext);

  if (counters.length > 0) {
    return Counter_jsx("div", {
      className: "Counter"
    }, Counter_jsx(external_react_bootstrap_["Container"], null, Counter_jsx(external_react_bootstrap_["Row"], null, counters.map(counter => Counter_jsx(external_react_bootstrap_["Col"], {
      md: 4,
      key: counter.id
    }, Counter_jsx("div", {
      className: "Counter-Warp"
    }, Counter_jsx("h2", {
      className: "Counter-Number"
    }, counter.count, " +"), Counter_jsx("p", {
      className: "Counter-Title"
    }, counter.title)))))));
  }

  return null;
}

/* harmony default export */ var Homepage_Counter = (Counter);
// CONCATENATED MODULE: ./components/Modal/VideoPlayer.jsx

var VideoPlayer_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function VideoPlayer(props) {
  const {
    videoUrl
  } = props,
        rest = _objectWithoutProperties(props, ["videoUrl"]);

  const videoId = getYouTubeId(videoUrl);
  return VideoPlayer_jsx(external_react_bootstrap_["Modal"], _extends({}, rest, {
    size: "lg",
    backdropClassName: "VideoIframe-Backdrop",
    dialogClassName: "VideoIframe",
    "aria-labelledby": "VideoPlayerModal",
    centered: true
  }), VideoPlayer_jsx(external_react_bootstrap_["Modal"].Header, {
    closeButton: true
  }), VideoPlayer_jsx(external_react_bootstrap_["Modal"].Body, null, videoId ? VideoPlayer_jsx("iframe", {
    width: "100%",
    height: "100%",
    className: "shadow",
    src: `https://www.youtube.com/embed/${videoId}?controls=0&autoplay=1`,
    frameBorder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true
  }) : null));
}

/* harmony default export */ var Modal_VideoPlayer = (VideoPlayer);
// CONCATENATED MODULE: ./components/Homepage/ServiceProcess.jsx

var ServiceProcess_jsx = external_react_default.a.createElement;




function ServiceProcess(props) {
  const {
    0: modalShow,
    1: setModalShow
  } = Object(external_react_["useState"])(false);
  return ServiceProcess_jsx("div", {
    className: "ServiceProcess"
  }, ServiceProcess_jsx(external_react_bootstrap_["Container"], null, ServiceProcess_jsx(external_react_bootstrap_["Row"], null, ServiceProcess_jsx(external_react_bootstrap_["Col"], {
    md: 12
  }, ServiceProcess_jsx("p", {
    className: "RegularParagraph"
  }, "How it works"), ServiceProcess_jsx("h3", {
    className: "SectionHeading"
  }, "Easiest way to get a service")), ServiceProcess_jsx(external_react_bootstrap_["Col"], {
    md: 12
  }, ServiceProcess_jsx(external_react_bootstrap_["Row"], null, ServiceProcess_jsx(external_react_bootstrap_["Col"], {
    md: 6
  }, ServiceProcess_jsx("div", {
    className: "ServiceProcess-Banner ServiceProcess-Banner__Video d-flex justify-content-center align-items-center mb-4 mb-md-0",
    style: {
      backgroundImage: 'url(./static/images/process-thumbnail.jpg)'
    },
    onClick: () => setModalShow(true)
  }, ServiceProcess_jsx(external_react_bootstrap_["Image"], {
    src: "./static/images/play-btn.svg",
    className: "ServiceProcess-Banner__Video--PlayBtn"
  })), ServiceProcess_jsx(Modal_VideoPlayer, {
    show: modalShow,
    onHide: () => setModalShow(false),
    videoUrl: "https://youtu.be/OMW0BfVYSOI"
  })), ServiceProcess_jsx(external_react_bootstrap_["Col"], {
    md: 6
  }, ServiceProcess_jsx("ul", {
    className: "ServiceProcess-List"
  }, ServiceProcess_jsx("li", {
    className: "ServiceProcess-List__Step"
  }, ServiceProcess_jsx("span", null, "1"), ServiceProcess_jsx("h4", {
    className: "ServiceProcess-List__Step--Header"
  }, "Select the Service"), ServiceProcess_jsx("p", {
    className: "ServiceProcess-List__Step--Text"
  }, "Pick the service you are looking for- from the website or the app.")), ServiceProcess_jsx("li", {
    className: "ServiceProcess-List__Step"
  }, ServiceProcess_jsx("span", null, "2"), ServiceProcess_jsx("h4", {
    className: "ServiceProcess-List__Step--Header"
  }, "Pick your schedule"), ServiceProcess_jsx("p", {
    className: "ServiceProcess-List__Step--Text"
  }, "Pick your convenient date and time to avail the service. Pick the service provider based on their rating.")), ServiceProcess_jsx("li", {
    className: "ServiceProcess-List__Step"
  }, ServiceProcess_jsx("span", null, "3"), ServiceProcess_jsx("h4", {
    className: "ServiceProcess-List__Step--Header"
  }, "Place Your Order & Relax"), ServiceProcess_jsx("p", {
    className: "ServiceProcess-List__Step--Text"
  }, "Review and place the order. Now just sit back and relax. We\u2019ll assign the expert service provider\u2019s schedule for you.")))))))));
}

/* harmony default export */ var Homepage_ServiceProcess = (ServiceProcess);
// CONCATENATED MODULE: ./components/Homepage/TestimonialSlider.jsx

var TestimonialSlider_jsx = external_react_default.a.createElement;





function TestimonialSlider(props) {
  const {
    0: modal,
    1: setModal
  } = Object(external_react_["useState"])({
    isActive: false,
    slug: ''
  });
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const testimonials = props.data;
  return TestimonialSlider_jsx("div", {
    className: "Testimonial-Slider"
  }, TestimonialSlider_jsx(external_react_slick_default.a, settings, testimonials.map(testimonial => TestimonialSlider_jsx("div", {
    key: testimonial.id
  }, TestimonialSlider_jsx(external_react_bootstrap_["Row"], null, TestimonialSlider_jsx(external_react_bootstrap_["Col"], {
    md: 6
  }, TestimonialSlider_jsx("div", {
    className: "Testimonial-Slider__InnerBox d-flex align-items-center h-100"
  }, TestimonialSlider_jsx("div", {
    className: "d-block"
  }, TestimonialSlider_jsx("p", {
    className: "Testimonial-Comment"
  }, testimonial.comment), TestimonialSlider_jsx("p", {
    className: "Testimonial-Comment__Client"
  }, "- ", testimonial.name), TestimonialSlider_jsx("p", {
    className: "Testimonial-Comment__Profession"
  }, testimonial.profession)))), TestimonialSlider_jsx(external_react_bootstrap_["Col"], {
    md: 6
  }, testimonial.video !== '' && testimonial.video !== null ? TestimonialSlider_jsx("div", {
    className: "Testimonial-Banner Testimonial-Banner__Video d-flex justify-content-center align-items-center",
    style: {
      backgroundImage: `url(./static/images/testimonials/${testimonial.image})`
    },
    onClick: () => setModal({
      isActive: true,
      slug: testimonial.video
    })
  }, TestimonialSlider_jsx(external_react_bootstrap_["Image"], {
    src: "./static/images/play-btn.svg",
    className: "Testimonial-Banner__Video--PlayBtn"
  })) : TestimonialSlider_jsx("div", {
    className: "Testimonial-Banner d-flex justify-content-center align-items-center",
    style: {
      backgroundImage: `url(./static/images/testimonials/${testimonial.image})`
    }
  })))))), TestimonialSlider_jsx(Modal_VideoPlayer, {
    show: modal.isActive,
    onHide: () => setModal({
      isActive: false,
      slug: ''
    }),
    videoUrl: modal.slug
  }));
}

/* harmony default export */ var Homepage_TestimonialSlider = (TestimonialSlider);
// CONCATENATED MODULE: ./components/Homepage/Testimonial.jsx

var Testimonial_jsx = external_react_default.a.createElement;





function Testimonial(props) {
  const {
    testimonials
  } = Object(external_react_["useContext"])(components_AppContext);

  if (testimonials.length > 0) {
    return Testimonial_jsx("div", {
      className: "Testimonial"
    }, Testimonial_jsx(external_react_bootstrap_["Container"], null, Testimonial_jsx(external_react_bootstrap_["Row"], null, Testimonial_jsx(external_react_bootstrap_["Col"], {
      md: 12
    }, Testimonial_jsx("p", {
      className: "RegularParagraph"
    }, "Some happy faces"), Testimonial_jsx("h3", {
      className: "SectionHeading"
    }, "Real Happy Customers, Real Stories")), Testimonial_jsx(external_react_bootstrap_["Col"], {
      md: 12
    }, Testimonial_jsx(Homepage_TestimonialSlider, {
      data: testimonials
    })))));
  }

  return null;
}

/* harmony default export */ var Homepage_Testimonial = (Testimonial);
// CONCATENATED MODULE: ./components/Homepage/AppDownload.jsx

var AppDownload_jsx = external_react_default.a.createElement;




function AppDownload() {
  const {
    0: number,
    1: setNumber
  } = Object(external_react_["useState"])('');

  const handleMessage = () => {
    console.log(number);
  };

  return AppDownload_jsx("div", {
    className: "AppDownload"
  }, AppDownload_jsx(external_react_bootstrap_["Container"], null, AppDownload_jsx(external_react_bootstrap_["Row"], null, AppDownload_jsx(external_react_bootstrap_["Col"], {
    md: 5
  }, AppDownload_jsx(external_react_bootstrap_["Image"], {
    fluid: true,
    src: "./static/images/app-banner.jpg"
  })), AppDownload_jsx(external_react_bootstrap_["Col"], {
    md: 7
  }, AppDownload_jsx("div", {
    className: "d-flex align-items-center w-100 h-100"
  }, AppDownload_jsx("div", {
    className: "h-auto d-inline-block"
  }, AppDownload_jsx("p", {
    className: "RegularParagraph"
  }, "Download our app"), AppDownload_jsx("h3", {
    className: "SectionHeading mb-3"
  }, "Any Service, Any Time, Anywhere."), AppDownload_jsx("p", {
    className: "DefaultParagraph"
  }, "Give us your mobile number. You\u2019ll get an SMS with the app download link."), AppDownload_jsx("div", {
    className: "AppDownload-SendApp"
  }, AppDownload_jsx(external_react_bootstrap_["Form"].Group, {
    controlId: "formBasicEmail"
  }, AppDownload_jsx(external_react_bootstrap_["Form"].Label, {
    className: "sr-only"
  }, "Phone number"), AppDownload_jsx(external_react_bootstrap_["InputGroup"], null, AppDownload_jsx(external_react_bootstrap_["Form"].Control, {
    size: "lg",
    type: "text",
    maxLength: 11,
    placeholder: "Type your mobile number",
    onKeyDown: handleNumbersOnly,
    onChange: e => setNumber(e.target.value)
  }), AppDownload_jsx(external_react_bootstrap_["InputGroup"].Prepend, null, AppDownload_jsx(external_react_bootstrap_["Button"], {
    size: "lg",
    variant: "primary",
    disabled: number.length < 11,
    onClick: handleMessage
  }, "Get the app"))))), AppDownload_jsx("div", {
    className: "d-block w-100 mt-4"
  }, AppDownload_jsx("a", {
    href: "!#",
    className: "mr-3"
  }, AppDownload_jsx(external_react_bootstrap_["Image"], {
    fluid: true,
    src: "./static/images/app-store.png",
    className: "AppDownload-AppIcon"
  })), AppDownload_jsx("a", {
    href: "!#"
  }, AppDownload_jsx(external_react_bootstrap_["Image"], {
    fluid: true,
    src: "./static/images/play-store.png",
    className: "AppDownload-AppIcon"
  })))))))));
}

/* harmony default export */ var Homepage_AppDownload = (AppDownload);
// CONCATENATED MODULE: ./components/Homepage/RequestService.jsx

var RequestService_jsx = external_react_default.a.createElement;


function RequestService() {
  return RequestService_jsx("div", {
    className: "RequestService"
  }, RequestService_jsx(external_react_bootstrap_["Container"], null, RequestService_jsx(external_react_bootstrap_["Row"], null, RequestService_jsx(external_react_bootstrap_["Col"], {
    md: 8
  }, RequestService_jsx("h3", {
    className: "RequestService-Heading"
  }, "Can\u2019t find your desired service? Let us know 24/7 in 16516."), RequestService_jsx("div", {
    className: "mt-3"
  }, RequestService_jsx(external_react_bootstrap_["Button"], {
    variant: "primary",
    className: "BtnRegularFont mr-3"
  }, "Request a Service"), RequestService_jsx("a", {
    href: "!#",
    className: "btn btn-outline-primary BtnRegularFont"
  }, RequestService_jsx("i", {
    className: "material-icons RequestService-CallIcon"
  }, "call"), " Call 16516"))), RequestService_jsx(external_react_bootstrap_["Col"], {
    md: 4
  }, RequestService_jsx(external_react_bootstrap_["Image"], {
    fluid: true,
    className: "RequestService-Banner",
    src: "./static/images/service-banner.png",
    alt: "Request service"
  })))));
}

/* harmony default export */ var Homepage_RequestService = (RequestService);
// CONCATENATED MODULE: ./components/Homepage/OfficeSolution.jsx

var OfficeSolution_jsx = external_react_default.a.createElement;



function OfficeSolution(props) {
  return OfficeSolution_jsx("div", {
    className: "OfficeSolution"
  }, OfficeSolution_jsx(external_react_bootstrap_["Container"], null, OfficeSolution_jsx(external_react_bootstrap_["Row"], null, OfficeSolution_jsx(external_react_bootstrap_["Col"], {
    md: 6
  }, OfficeSolution_jsx(external_react_bootstrap_["Image"], {
    fluid: true,
    src: "./static/images/service-banner.jpg",
    className: "rounded"
  })), OfficeSolution_jsx(external_react_bootstrap_["Col"], {
    md: 6
  }, OfficeSolution_jsx("p", {
    className: "RegularParagraph"
  }, "Manage office"), OfficeSolution_jsx("h3", {
    className: "SectionHeading"
  }, "Get Service for Your Office"), OfficeSolution_jsx("p", {
    className: "DefaultParagraph"
  }, "Sheba.xyz for business helps your office to get the necessary services, from the online platform- on a monthly basis."), OfficeSolution_jsx("ul", {
    className: "OfficeSolution-SectionList"
  }, OfficeSolution_jsx("li", null, OfficeSolution_jsx("i", {
    className: "material-icons"
  }, "done"), " Order Office Support"), OfficeSolution_jsx("li", null, OfficeSolution_jsx("i", {
    className: "material-icons"
  }, "done"), " Procure Online"), OfficeSolution_jsx("li", null, OfficeSolution_jsx("i", {
    className: "material-icons"
  }, "done"), " Manage Office")), OfficeSolution_jsx(link_default.a, {
    href: "!#"
  }, OfficeSolution_jsx("a", {
    className: "btn btn-outline-primary btn-lg BtnRegularFont"
  }, "Visit sBusiness"))))));
}

/* harmony default export */ var Homepage_OfficeSolution = (OfficeSolution);
// CONCATENATED MODULE: ./components/Homepage/BecomePartner.jsx

var BecomePartner_jsx = external_react_default.a.createElement;



function BecomePartner(props) {
  return BecomePartner_jsx("div", {
    className: "BecomePartner"
  }, BecomePartner_jsx(external_react_bootstrap_["Container"], null, BecomePartner_jsx(external_react_bootstrap_["Row"], null, BecomePartner_jsx(external_react_bootstrap_["Col"], {
    md: 6
  }, BecomePartner_jsx("p", {
    className: "RegularParagraph"
  }, "Manage business"), BecomePartner_jsx("h3", {
    className: "SectionHeading"
  }, "Manage Business, Through Fingertips."), BecomePartner_jsx("p", {
    className: "DefaultParagraph"
  }, "sManager is the complete business solution for the MSMEs in Bangladesh which is designed to work as a smart business assistant."), BecomePartner_jsx("ul", {
    className: "BecomePartner-SectionList"
  }, BecomePartner_jsx("li", null, BecomePartner_jsx("i", {
    className: "material-icons"
  }, "done"), " Track Sales & Dues"), BecomePartner_jsx("li", null, BecomePartner_jsx("i", {
    className: "material-icons"
  }, "done"), " Digital Collection"), BecomePartner_jsx("li", null, BecomePartner_jsx("i", {
    className: "material-icons"
  }, "done"), " Micro-loan for Business Growth")), BecomePartner_jsx(link_default.a, {
    href: "!#"
  }, BecomePartner_jsx("a", {
    className: "btn btn-outline-primary btn-lg BtnRegularFont"
  }, "Visit sManager"))), BecomePartner_jsx(external_react_bootstrap_["Col"], {
    md: 6
  }, BecomePartner_jsx(external_react_bootstrap_["Image"], {
    fluid: true,
    src: "./static/images/partner-banner.jpg",
    className: "rounded"
  })))));
}

/* harmony default export */ var Homepage_BecomePartner = (BecomePartner);
// CONCATENATED MODULE: ./components/Homepage/index.jsx













// CONCATENATED MODULE: ./pages/index.jsx

var pages_jsx = external_react_default.a.createElement;






function Homepage(props) {
  const {
    0: isLoaded,
    1: setIsLoaded
  } = Object(external_react_["useState"])(false);
  Object(external_react_["useEffect"])(() => {
    let timer = setTimeout(() => setIsLoaded(true), 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return pages_jsx(components_AppContext.Provider, {
    value: {
      isMobile: props.isMobile,
      searchOptions: [{
        value: 1,
        label: 'AC Repair Services'
      }, {
        value: 2,
        label: 'Home Cleaning'
      }, {
        value: 3,
        label: 'Beauty Salon Service for Woman'
      }, {
        value: 4,
        label: 'Sheba Groceries'
      }, {
        value: 5,
        label: 'Health Checkup & Lab Test'
      }],
      categories: [{
        id: 1,
        title: 'Grocery',
        image: '01.png'
      }, {
        id: 2,
        title: 'Emergency Services',
        image: '02.png'
      }, {
        id: 3,
        title: 'Cleaning & Pest Control',
        image: '03.png'
      }, {
        id: 4,
        title: 'Beauty & Salon',
        image: '04.png'
      }, {
        id: 5,
        title: 'Shifting',
        image: '05.png'
      }, {
        id: 6,
        title: 'Appliance Repair',
        image: '06.png'
      }, {
        id: 7,
        title: 'Electric and Plumbing',
        image: '08.svg'
      }],
      highDemand: [{
        id: 1,
        title: 'Hire a Cleaner',
        image: '06.jpg'
      }, {
        id: 2,
        title: 'AC Repair Services',
        image: '01.jpg'
      }, {
        id: 3,
        title: 'Beauty Salon Service for Woman',
        image: '03.jpg'
      }, {
        id: 4,
        title: 'Plumbing & Sanitary Services',
        image: '07.jpg'
      }, {
        id: 5,
        title: 'Electricians for Electrical Service',
        image: '08.jpg'
      }, {
        id: 6,
        title: 'Home Cleaning',
        image: '02.jpg'
      }, {
        id: 7,
        title: 'House Shifting Services',
        image: '09.jpg'
      }, {
        id: 8,
        title: 'Laptop Servicing',
        image: '10.jpg'
      }, {
        id: 9,
        title: 'Bosontokalin Offer @349 Tk',
        image: '11.jpeg'
      }, {
        id: 10,
        title: 'Exclusive Winter Package for Laundry & Dry Wash',
        image: '12.jpg'
      }],
      trending: [{
        id: 1,
        title: 'AC Repair Services',
        image: '01.jpg'
      }, {
        id: 2,
        title: 'Home Cleaning',
        image: '02.jpg'
      }, {
        id: 3,
        title: 'Beauty Salon Service for Woman',
        image: '03.jpg'
      }, {
        id: 4,
        title: 'Sheba Groceries',
        image: '04.jpg'
      }, {
        id: 5,
        title: 'Health Checkup & Lab Test',
        image: '05.png'
      }],
      counters: [{
        id: 1,
        title: 'Service Providers',
        count: '15,000'
      }, {
        id: 2,
        title: 'Order Served',
        count: '1,00,000'
      }, {
        id: 3,
        title: '5 Star Received',
        count: '76,000'
      }],
      testimonials: [{
        id: 1,
        comment: 'Such service platforms are available in other countries. I’ve personally used those when I was abroad. I’m very pleased that such a portal is available here in Bangladesh as well. Thank you Sheba.xyz.',
        name: 'Zabeen Yusuf Nur',
        profession: 'IT Consultant, Australia',
        image: '01.jpg',
        video: 'https://www.youtube.com/watch?v=Ey0ESUxWTL0'
      }, {
        id: 2,
        comment: 'It was my marriage and wasn’t getting schedule from any beauty parlor. So, I downloaded Sheba.xyz app and found that it has all of my requirements. The beautician arrived in time and was really amazing. Thank you.',
        name: 'Zeba Fariba',
        profession: 'Management Trainee',
        image: '02.jpg',
        video: 'https://youtu.be/_1juTr9E46U'
      }]
    }
  }, isLoaded ? pages_jsx(components_Layout, null, pages_jsx("div", {
    className: "Homepage"
  }, props.isMobile ? pages_jsx(Homepage_FeaturedCategoriesMobile, null) : pages_jsx(external_react_["Fragment"], null, pages_jsx(Homepage_HeroBanner, null), pages_jsx(Homepage_FeaturedCategories, null), pages_jsx(Homepage_HighDemand, null), pages_jsx(Homepage_TrendingServices, null), pages_jsx(Homepage_HappyService, null), pages_jsx(Homepage_Counter, null)), pages_jsx(Homepage_ServiceProcess, null), pages_jsx(Homepage_Testimonial, null), !props.isMobile && pages_jsx(external_react_["Fragment"], null, pages_jsx(Homepage_AppDownload, null), pages_jsx(Homepage_RequestService, null), pages_jsx(Homepage_OfficeSolution, null), pages_jsx(Homepage_BecomePartner, null)))) : pages_jsx(Loader_PageLoader, null));
}

Homepage.getInitialProps = ({
  req
}) => {
  let userAgent;

  if (req) {
    userAgent = req.headers['user-agent'];
  } else {
    userAgent = navigator.userAgent;
  }

  let isMobile = isMobileAgent(userAgent);
  return {
    isMobile
  };
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (Homepage);

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _url = __webpack_require__("bzos");

var _utils = __webpack_require__("kYf9");

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _router2 = __webpack_require__("elyg");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (false) {}
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (false) { var exact, PropTypes, warn; }

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");

const mitt_1 = __importDefault(__webpack_require__("dZ6Y"));

const utils_1 = __webpack_require__("g/15");

const is_dynamic_1 = __webpack_require__("/jkW");

const route_matcher_1 = __webpack_require__("gguc");

const route_regex_1 = __webpack_require__("YTqd");

const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  true && this.sdc[pathname] ? Promise.resolve(this.sdc[pathname]) : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (false) {}

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (false) {}

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {}

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (false) {} // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "vtRj":
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });
webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Header/Dropdown/index.js":
/*!*********************************************!*\
  !*** ./components/Header/Dropdown/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _DropdownMainItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DropdownMainItem */ "./components/Header/DropdownMainItem/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _DropdownSecondaryItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../DropdownSecondaryItem */ "./components/Header/DropdownSecondaryItem/index.js");

var _jsxFileName = "/Users/perbaltzar/GitHub/SGN-Project/nextjs/components/Header/Dropdown/index.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\ndisplay: ", ";\njustify-content: center;\nalign-items: center;\nflex-direction: column;\nwidth: 100%;\nheight: 100vh;\nbackground: #EFEFEF;\n\n.Dropdown-Main-Item {\n    display: flex;\n    justify-content: center;\n    align-items: flex-end;\n    flex-direction: column;\n    width: 100%;\n}\n\n.Dropdown-Main-Item hr {\n    color: #808080;\n    width: 90%;\n    border: 1px solid #808080;\n    margin-right: 0;\n}\n.Dropdown-Secondary-Item {\n    margin-top: 20%;\n}\n\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var DropdownStyle = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject(), function (props) {
  return props.isClicked ? "none" : "flex; position: absolute; ";
});

var Dropdown = function Dropdown(_ref) {
  var isClicked = _ref.isClicked;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DropdownStyle, {
    isClicked: isClicked,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    className: "Dropdown-Main-Item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_DropdownMainItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
    isClicked: isClicked,
    text: "About",
    link: "branches",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_DropdownMainItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
    isClicked: isClicked,
    text: "Events",
    link: "hje",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_DropdownMainItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
    isClicked: isClicked,
    text: "Member",
    link: "hje",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_DropdownMainItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
    isClicked: isClicked,
    text: "Make a change",
    link: "hje",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    className: "Dropdown-Secondary-Item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_DropdownSecondaryItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
    text: "Language",
    link: "hje",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_DropdownSecondaryItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
    text: "Accessability",
    link: "hje",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_DropdownSecondaryItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
    text: "Help",
    link: "hje",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  })));
};

Dropdown.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (Dropdown);

/***/ })

})
//# sourceMappingURL=index.js.6bdf86bb32f31dd1dd43.hot-update.js.map
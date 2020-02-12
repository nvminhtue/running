webpackHotUpdate("main",{

/***/ "./src/asset/fonts/firaCode.ttf":
false,

/***/ "./src/asset/fonts/index.js":
false,

/***/ "./src/components/MainForm.js":
/*!************************************!*\
  !*** ./src/components/MainForm.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _asset_images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../asset/images */ "./src/asset/images/index.js");
var _jsxFileName = "/Users/nvminhtue/Home-Practicing/ReactJS/running/src/components/MainForm.js";



const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  justify-content: center;
  position: absolute;
  z-index: 2;
  height: 85%;
  width: 85%;
  border-radius: 8px;
  background: rgba(195, 227, 212, 0.3);
`;
const Title = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1`
    margin-top: 20px;
    font-family: "FiraCode-Retina"
`;
const LeftImage = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img`
    width: 100%;
    align-self: center;
`;
const Part = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
    display: flex;
    align-content: center;
    justify-content: center;
    ${props => props.portion && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
        width: ${props.portion}
    `}
`;
/* harmony default export */ __webpack_exports__["default"] = (() => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Part, {
  portion: '40%',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LeftImage, {
  src: _asset_images__WEBPACK_IMPORTED_MODULE_2__["mainRunning"],
  alt: "aaa",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Part, {
  portion: '60%',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42
  },
  __self: undefined
}, "RUN FOR YOUR LIFE"))));

/***/ })

})
//# sourceMappingURL=main.f5d53e52e77c78b55796.hot-update.js.map
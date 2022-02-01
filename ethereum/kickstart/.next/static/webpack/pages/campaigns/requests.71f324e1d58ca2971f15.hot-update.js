webpackHotUpdate_N_E("pages/campaigns/requests",{

/***/ "./components/RequestRow.js":
/*!**********************************!*\
  !*** ./components/RequestRow.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Raj_Documents_ethereum_kickstart_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Raj_Documents_ethereum_kickstart_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Raj_Documents_ethereum_kickstart_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Raj_Documents_ethereum_kickstart_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_Raj_Documents_ethereum_kickstart_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_Raj_Documents_ethereum_kickstart_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_Raj_Documents_ethereum_kickstart_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var C_Users_Raj_Documents_ethereum_kickstart_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_Raj_Documents_ethereum_kickstart_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_Raj_Documents_ethereum_kickstart_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_Users_Raj_Documents_ethereum_kickstart_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../ethereum/campaign */ "./ethereum/campaign.js");










var _jsxFileName = "C:\\Users\\Raj\\Documents\\ethereum\\kickstart\\components\\RequestRow.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(C_Users_Raj_Documents_ethereum_kickstart_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(C_Users_Raj_Documents_ethereum_kickstart_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(C_Users_Raj_Documents_ethereum_kickstart_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var RequestRow = /*#__PURE__*/function (_Component) {
  Object(C_Users_Raj_Documents_ethereum_kickstart_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(RequestRow, _Component);

  var _super = _createSuper(RequestRow);

  function RequestRow() {
    var _this;

    Object(C_Users_Raj_Documents_ethereum_kickstart_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, RequestRow);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(C_Users_Raj_Documents_ethereum_kickstart_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(C_Users_Raj_Documents_ethereum_kickstart_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onApprove", /*#__PURE__*/Object(C_Users_Raj_Documents_ethereum_kickstart_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Raj_Documents_ethereum_kickstart_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var campaign;
      return C_Users_Raj_Documents_ethereum_kickstart_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              campaign = Object(_ethereum_campaign__WEBPACK_IMPORTED_MODULE_13__["default"])(_this.props.address);

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    return _this;
  }

  Object(C_Users_Raj_Documents_ethereum_kickstart_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(RequestRow, [{
    key: "render",
    value: function render() {
      var Row = semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Table"].Row,
          Cell = semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Table"].Cell;
      var _this$props = this.props,
          id = _this$props.id,
          request = _this$props.request,
          approversCount = _this$props.approversCount;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Row, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cell, {
          children: id
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cell, {
          children: request.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cell, {
          children: _ethereum_web3__WEBPACK_IMPORTED_MODULE_12__["default"].utils.fromWei(request.value)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cell, {
          children: request.recipient
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cell, {
          children: [request.approvalCount, "/", approversCount]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cell, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Button"], {
            color: "green",
            basic: true,
            onClick: this.onApprove,
            children: " Approve"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }, this);
    }
  }]);

  return RequestRow;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (RequestRow);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXF1ZXN0Um93LmpzIl0sIm5hbWVzIjpbIlJlcXVlc3RSb3ciLCJjYW1wYWlnbiIsIkNhbXBhaWduIiwicHJvcHMiLCJhZGRyZXNzIiwiUm93IiwiVGFibGUiLCJDZWxsIiwiaWQiLCJyZXF1ZXN0IiwiYXBwcm92ZXJzQ291bnQiLCJkZXNjcmlwdGlvbiIsIndlYjMiLCJ1dGlscyIsImZyb21XZWkiLCJ2YWx1ZSIsInJlY2lwaWVudCIsImFwcHJvdmFsQ291bnQiLCJvbkFwcHJvdmUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLFU7Ozs7Ozs7Ozs7Ozs7Ozs7OHFCQUNVO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNGQyxzQkFERSxHQUNTQyxtRUFBUSxDQUFDLE1BQUtDLEtBQUwsQ0FBV0MsT0FBWixDQURqQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLOzs7Ozs7OzZCQUdIO0FBQUEsVUFDRUMsR0FERixHQUNlQyx3REFEZixDQUNFRCxHQURGO0FBQUEsVUFDT0UsSUFEUCxHQUNlRCx3REFEZixDQUNPQyxJQURQO0FBQUEsd0JBRWlDLEtBQUtKLEtBRnRDO0FBQUEsVUFFRUssRUFGRixlQUVFQSxFQUZGO0FBQUEsVUFFTUMsT0FGTixlQUVNQSxPQUZOO0FBQUEsVUFFZUMsY0FGZixlQUVlQSxjQUZmO0FBR0wsMEJBQ0kscUVBQUMsR0FBRDtBQUFBLGdDQUNJLHFFQUFDLElBQUQ7QUFBQSxvQkFBT0Y7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUkscUVBQUMsSUFBRDtBQUFBLG9CQUFPQyxPQUFPLENBQUNFO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSixlQUdJLHFFQUFDLElBQUQ7QUFBQSxvQkFBT0MsdURBQUksQ0FBQ0MsS0FBTCxDQUFXQyxPQUFYLENBQW1CTCxPQUFPLENBQUNNLEtBQTNCO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFISixlQUlJLHFFQUFDLElBQUQ7QUFBQSxvQkFBT04sT0FBTyxDQUFDTztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkosZUFLSSxxRUFBQyxJQUFEO0FBQUEscUJBQU9QLE9BQU8sQ0FBQ1EsYUFBZixPQUErQlAsY0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxKLGVBTUkscUVBQUMsSUFBRDtBQUFBLGlDQUNJLHFFQUFDLHlEQUFEO0FBQVEsaUJBQUssRUFBQyxPQUFkO0FBQXNCLGlCQUFLLE1BQTNCO0FBQTRCLG1CQUFPLEVBQUUsS0FBS1EsU0FBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKO0FBWUg7Ozs7RUFuQm9CQyxnRDs7QUFxQlZuQix5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYW1wYWlnbnMvcmVxdWVzdHMuNzFmMzI0ZTFkNThjYTI5NzFmMTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgVGFibGUsIEJ1dHRvbiB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IHdlYjMgZnJvbSBcIi4uL2V0aGVyZXVtL3dlYjNcIjtcclxuaW1wb3J0IENhbXBhaWduIGZyb20gXCIuLi9ldGhlcmV1bS9jYW1wYWlnblwiO1xyXG5cclxuY2xhc3MgUmVxdWVzdFJvdyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBvbkFwcHJvdmUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2FtcGFpZ24gPSBDYW1wYWlnbih0aGlzLnByb3BzLmFkZHJlc3MpXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge1JvdywgQ2VsbH0gPSBUYWJsZTtcclxuICAgICAgICBjb25zdCB7aWQsIHJlcXVlc3QsIGFwcHJvdmVyc0NvdW50fSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDZWxsPntpZH08L0NlbGw+XHJcbiAgICAgICAgICAgICAgICA8Q2VsbD57cmVxdWVzdC5kZXNjcmlwdGlvbn08L0NlbGw+XHJcbiAgICAgICAgICAgICAgICA8Q2VsbD57d2ViMy51dGlscy5mcm9tV2VpKHJlcXVlc3QudmFsdWUpfTwvQ2VsbD5cclxuICAgICAgICAgICAgICAgIDxDZWxsPntyZXF1ZXN0LnJlY2lwaWVudH08L0NlbGw+XHJcbiAgICAgICAgICAgICAgICA8Q2VsbD57cmVxdWVzdC5hcHByb3ZhbENvdW50fS97YXBwcm92ZXJzQ291bnR9PC9DZWxsPlxyXG4gICAgICAgICAgICAgICAgPENlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cImdyZWVuXCIgYmFzaWMgb25DbGljaz17dGhpcy5vbkFwcHJvdmV9PiBBcHByb3ZlPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0NlbGw+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdFJvdzsiXSwic291cmNlUm9vdCI6IiJ9
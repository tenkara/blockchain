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
      var campaign, accounts;
      return C_Users_Raj_Documents_ethereum_kickstart_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              campaign = Object(_ethereum_campaign__WEBPACK_IMPORTED_MODULE_13__["default"])(_this.props.address);
              _context.next = 3;
              return _ethereum_web3__WEBPACK_IMPORTED_MODULE_12__["default"].eth.getAccounts();

            case 3:
              accounts = _context.sent;
              _context.next = 6;
              return campaign.methods.approveRequest(_this.props.id).send({
                from: accounts[0]
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    Object(C_Users_Raj_Documents_ethereum_kickstart_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(C_Users_Raj_Documents_ethereum_kickstart_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onFinalize", /*#__PURE__*/Object(C_Users_Raj_Documents_ethereum_kickstart_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Raj_Documents_ethereum_kickstart_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
      var campaign, accounts;
      return C_Users_Raj_Documents_ethereum_kickstart_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              campaign = Object(_ethereum_campaign__WEBPACK_IMPORTED_MODULE_13__["default"])(_this.props.address);
              _context2.next = 3;
              return _ethereum_web3__WEBPACK_IMPORTED_MODULE_12__["default"].eth.getAccounts();

            case 3:
              accounts = _context2.sent;
              _context2.next = 6;
              return campaign.methods.finalizeRequest(_this.props.id).send({
                from: accounts[0]
              });

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
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
      var readyToFinalize = request.approvalCount > approversCount / 2;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Row, {
        disabled: request.complete,
        positive: readyToFinalize,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cell, {
          children: id
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cell, {
          children: request.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cell, {
          children: _ethereum_web3__WEBPACK_IMPORTED_MODULE_12__["default"].utils.fromWei(request.value)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cell, {
          children: request.recipient
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cell, {
          children: [request.approvalCount, "/", approversCount]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cell, {
          children: request.complete ? null : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Button"], {
            color: "green",
            basic: true,
            onClick: this.onApprove,
            children: "Approve"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cell, {
          children: request.complete ? null : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Button"], {
            color: "teal",
            basic: true,
            onClick: this.onFinalize,
            children: "Finalize"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXF1ZXN0Um93LmpzIl0sIm5hbWVzIjpbIlJlcXVlc3RSb3ciLCJjYW1wYWlnbiIsIkNhbXBhaWduIiwicHJvcHMiLCJhZGRyZXNzIiwid2ViMyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiYXBwcm92ZVJlcXVlc3QiLCJpZCIsInNlbmQiLCJmcm9tIiwiZmluYWxpemVSZXF1ZXN0IiwiUm93IiwiVGFibGUiLCJDZWxsIiwicmVxdWVzdCIsImFwcHJvdmVyc0NvdW50IiwicmVhZHlUb0ZpbmFsaXplIiwiYXBwcm92YWxDb3VudCIsImNvbXBsZXRlIiwiZGVzY3JpcHRpb24iLCJ1dGlscyIsImZyb21XZWkiLCJ2YWx1ZSIsInJlY2lwaWVudCIsIm9uQXBwcm92ZSIsIm9uRmluYWxpemUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLFU7Ozs7Ozs7Ozs7Ozs7Ozs7OHFCQUNVO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNGQyxzQkFERSxHQUNTQyxtRUFBUSxDQUFDLE1BQUtDLEtBQUwsQ0FBV0MsT0FBWixDQURqQjtBQUFBO0FBQUEscUJBRWVDLHVEQUFJLENBQUNDLEdBQUwsQ0FBU0MsV0FBVCxFQUZmOztBQUFBO0FBRUZDLHNCQUZFO0FBQUE7QUFBQSxxQkFHRlAsUUFBUSxDQUFDUSxPQUFULENBQWlCQyxjQUFqQixDQUFnQyxNQUFLUCxLQUFMLENBQVdRLEVBQTNDLEVBQStDQyxJQUEvQyxDQUFvRDtBQUN0REMsb0JBQUksRUFBRUwsUUFBUSxDQUFDLENBQUQ7QUFEd0MsZUFBcEQsQ0FIRTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLOzsrcUJBUUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0hQLHNCQURHLEdBQ1FDLG1FQUFRLENBQUMsTUFBS0MsS0FBTCxDQUFXQyxPQUFaLENBRGhCO0FBQUE7QUFBQSxxQkFFY0MsdURBQUksQ0FBQ0MsR0FBTCxDQUFTQyxXQUFULEVBRmQ7O0FBQUE7QUFFSEMsc0JBRkc7QUFBQTtBQUFBLHFCQUdIUCxRQUFRLENBQUNRLE9BQVQsQ0FBaUJLLGVBQWpCLENBQWlDLE1BQUtYLEtBQUwsQ0FBV1EsRUFBNUMsRUFBZ0RDLElBQWhELENBQXFEO0FBQ3ZEQyxvQkFBSSxFQUFFTCxRQUFRLENBQUMsQ0FBRDtBQUR5QyxlQUFyRCxDQUhHOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEs7Ozs7Ozs7NkJBUUo7QUFBQSxVQUNFTyxHQURGLEdBQ2VDLHdEQURmLENBQ0VELEdBREY7QUFBQSxVQUNPRSxJQURQLEdBQ2VELHdEQURmLENBQ09DLElBRFA7QUFBQSx3QkFFaUMsS0FBS2QsS0FGdEM7QUFBQSxVQUVFUSxFQUZGLGVBRUVBLEVBRkY7QUFBQSxVQUVNTyxPQUZOLGVBRU1BLE9BRk47QUFBQSxVQUVlQyxjQUZmLGVBRWVBLGNBRmY7QUFHTCxVQUFNQyxlQUFlLEdBQUdGLE9BQU8sQ0FBQ0csYUFBUixHQUF3QkYsY0FBYyxHQUFHLENBQWpFO0FBRUEsMEJBQ0kscUVBQUMsR0FBRDtBQUFLLGdCQUFRLEVBQUVELE9BQU8sQ0FBQ0ksUUFBdkI7QUFBaUMsZ0JBQVEsRUFBRUYsZUFBM0M7QUFBQSxnQ0FDSSxxRUFBQyxJQUFEO0FBQUEsb0JBQU9UO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJLHFFQUFDLElBQUQ7QUFBQSxvQkFBT08sT0FBTyxDQUFDSztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkosZUFHSSxxRUFBQyxJQUFEO0FBQUEsb0JBQU9sQix1REFBSSxDQUFDbUIsS0FBTCxDQUFXQyxPQUFYLENBQW1CUCxPQUFPLENBQUNRLEtBQTNCO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFISixlQUlJLHFFQUFDLElBQUQ7QUFBQSxvQkFBT1IsT0FBTyxDQUFDUztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkosZUFLSSxxRUFBQyxJQUFEO0FBQUEscUJBQU9ULE9BQU8sQ0FBQ0csYUFBZixPQUErQkYsY0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxKLGVBTUkscUVBQUMsSUFBRDtBQUFBLG9CQUNLRCxPQUFPLENBQUNJLFFBQVIsR0FBbUIsSUFBbkIsZ0JBQ0cscUVBQUMseURBQUQ7QUFBUSxpQkFBSyxFQUFDLE9BQWQ7QUFBc0IsaUJBQUssTUFBM0I7QUFBNEIsbUJBQU8sRUFBRSxLQUFLTSxTQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTkosZUFXSSxxRUFBQyxJQUFEO0FBQUEsb0JBQ0tWLE9BQU8sQ0FBQ0ksUUFBUixHQUFtQixJQUFuQixnQkFDRCxxRUFBQyx5REFBRDtBQUFRLGlCQUFLLEVBQUMsTUFBZDtBQUFxQixpQkFBSyxNQUExQjtBQUEyQixtQkFBTyxFQUFFLEtBQUtPLFVBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESjtBQW1CSDs7OztFQXpDb0JDLGdEOztBQTJDVjlCLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy5kZTM1NDZkOGU2NzhmMWJhNjRhZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBUYWJsZSwgQnV0dG9uIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgd2ViMyBmcm9tIFwiLi4vZXRoZXJldW0vd2ViM1wiO1xyXG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSBcIi4uL2V0aGVyZXVtL2NhbXBhaWduXCI7XHJcblxyXG5jbGFzcyBSZXF1ZXN0Um93IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIG9uQXBwcm92ZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCBjYW1wYWlnbiA9IENhbXBhaWduKHRoaXMucHJvcHMuYWRkcmVzcyk7XHJcbiAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgICAgIGF3YWl0IGNhbXBhaWduLm1ldGhvZHMuYXBwcm92ZVJlcXVlc3QodGhpcy5wcm9wcy5pZCkuc2VuZCh7XHJcbiAgICAgICAgICAgIGZyb206IGFjY291bnRzWzBdXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIG9uRmluYWxpemUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2FtcGFpZ24gPSBDYW1wYWlnbih0aGlzLnByb3BzLmFkZHJlc3MpO1xyXG4gICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgICAgICBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLmZpbmFsaXplUmVxdWVzdCh0aGlzLnByb3BzLmlkKS5zZW5kKHtcclxuICAgICAgICAgICAgZnJvbTogYWNjb3VudHNbMF1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHtSb3csIENlbGx9ID0gVGFibGU7XHJcbiAgICAgICAgY29uc3Qge2lkLCByZXF1ZXN0LCBhcHByb3ZlcnNDb3VudH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IHJlYWR5VG9GaW5hbGl6ZSA9IHJlcXVlc3QuYXBwcm92YWxDb3VudCA+IGFwcHJvdmVyc0NvdW50IC8gMjtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFJvdyBkaXNhYmxlZD17cmVxdWVzdC5jb21wbGV0ZX0gcG9zaXRpdmU9e3JlYWR5VG9GaW5hbGl6ZX0+XHJcbiAgICAgICAgICAgICAgICA8Q2VsbD57aWR9PC9DZWxsPlxyXG4gICAgICAgICAgICAgICAgPENlbGw+e3JlcXVlc3QuZGVzY3JpcHRpb259PC9DZWxsPlxyXG4gICAgICAgICAgICAgICAgPENlbGw+e3dlYjMudXRpbHMuZnJvbVdlaShyZXF1ZXN0LnZhbHVlKX08L0NlbGw+XHJcbiAgICAgICAgICAgICAgICA8Q2VsbD57cmVxdWVzdC5yZWNpcGllbnR9PC9DZWxsPlxyXG4gICAgICAgICAgICAgICAgPENlbGw+e3JlcXVlc3QuYXBwcm92YWxDb3VudH0ve2FwcHJvdmVyc0NvdW50fTwvQ2VsbD5cclxuICAgICAgICAgICAgICAgIDxDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgIHtyZXF1ZXN0LmNvbXBsZXRlID8gbnVsbDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwiZ3JlZW5cIiBiYXNpYyBvbkNsaWNrPXt0aGlzLm9uQXBwcm92ZX0+QXBwcm92ZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICl9ICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvQ2VsbD5cclxuICAgICAgICAgICAgICAgIDxDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgIHtyZXF1ZXN0LmNvbXBsZXRlID8gbnVsbDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJ0ZWFsXCIgYmFzaWMgb25DbGljaz17dGhpcy5vbkZpbmFsaXplfT5GaW5hbGl6ZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L0NlbGw+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdFJvdzsiXSwic291cmNlUm9vdCI6IiJ9
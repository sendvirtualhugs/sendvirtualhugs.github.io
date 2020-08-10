webpackHotUpdate_N_E("pages/index",{

/***/ "./components/SendHug.tsx":
/*!********************************!*\
  !*** ./components/SendHug.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Component; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.js\");\nvar _jsxFileName = \"/home/bcko/github/sendvirtualhugs.github.io/components/SendHug.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\nvar Section = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].section.withConfig({\n  displayName: \"SendHug__Section\",\n  componentId: \"bz2eix-0\"\n})([\"background-image:url(\\\"/assets/images/writing-letters.jpg\\\");background-repeat:no-repeat;width:100%;height:100%;background-size:cover;text-align:center;\"]);\n_c = Section;\nvar Heading = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"SendHug__Heading\",\n  componentId: \"bz2eix-1\"\n})([\"font-size:40px;font-weight:bold;text-transform:uppercase;padding-bottom:40px;padding-top:40px;\"]);\n_c2 = Heading;\nfunction Component() {\n  _s();\n\n  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_2__[\"useForm\"])(),\n      register = _useForm.register,\n      handleSubmit = _useForm.handleSubmit;\n\n  function onSubmit(data) {\n    var diaryString = data.diary;\n    var diaryWords = diaryString.split(\" \");\n    var firstPersonWords = [\"i\", \"i'm\", \"my\", \"me\", \"mine\", \"mine.\", \"me.\"];\n\n    for (var _i = 0, _firstPersonWords = firstPersonWords; _i < _firstPersonWords.length; _i++) {\n      var firstPersonWord = _firstPersonWords[_i];\n\n      var _iterator = _createForOfIteratorHelper(diaryWords),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var diaryWord = _step.value;\n\n          if (diaryWord.toLowerCase() === firstPersonWord) {\n            alert(\"the word \".concat(diaryWord, \" is included! Shall we try using your pronouns or your own name?\"));\n          }\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n    }\n  }\n\n  return __jsx(Section, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 5\n    }\n  }, __jsx(Heading, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 9\n    }\n  }, \"Send Virtual Hugs\"), __jsx(\"form\", {\n    onSubmit: handleSubmit(onSubmit),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }\n  }, \"Name: \", __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 15\n    }\n  }), __jsx(\"input\", {\n    type: \"text\",\n    name: \"name\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 9\n    }\n  }), __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 41\n    }\n  }), \"Email: \", __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 16\n    }\n  }), __jsx(\"input\", {\n    type: \"text\",\n    name: \"mail\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 9\n    }\n  }), __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    type: \"submit\",\n    value: \"Send Virtual Hugs\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 9\n    }\n  })));\n}\n\n_s(Component, \"zkd3JmxRK/AmyiWtSfciHeYO5Zk=\", false, function () {\n  return [react_hook_form__WEBPACK_IMPORTED_MODULE_2__[\"useForm\"]];\n});\n\n_c3 = Component;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Section\");\n$RefreshReg$(_c2, \"Heading\");\n$RefreshReg$(_c3, \"Component\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZW5kSHVnLnRzeD9jZGI0Il0sIm5hbWVzIjpbIlNlY3Rpb24iLCJzdHlsZWQiLCJzZWN0aW9uIiwiSGVhZGluZyIsImRpdiIsIkNvbXBvbmVudCIsInVzZUZvcm0iLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsIm9uU3VibWl0IiwiZGF0YSIsImRpYXJ5U3RyaW5nIiwiZGlhcnkiLCJkaWFyeVdvcmRzIiwic3BsaXQiLCJmaXJzdFBlcnNvbldvcmRzIiwiZmlyc3RQZXJzb25Xb3JkIiwiZGlhcnlXb3JkIiwidG9Mb3dlckNhc2UiLCJhbGVydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxPQUFPLEdBQUdDLHlEQUFNLENBQUNDLE9BQVY7QUFBQTtBQUFBO0FBQUEsZ0tBQWI7S0FBTUYsTztBQVNOLElBQU1HLE9BQU8sR0FBR0YseURBQU0sQ0FBQ0csR0FBVjtBQUFBO0FBQUE7QUFBQSxzR0FBYjtNQUFNRCxPO0FBUVMsU0FBU0UsU0FBVCxHQUFxQjtBQUFBOztBQUFBLGlCQUNDQywrREFBTyxFQURSO0FBQUEsTUFDMUJDLFFBRDBCLFlBQzFCQSxRQUQwQjtBQUFBLE1BQ2hCQyxZQURnQixZQUNoQkEsWUFEZ0I7O0FBR2xDLFdBQVNDLFFBQVQsQ0FBa0JDLElBQWxCLEVBQTZCO0FBQzNCLFFBQU1DLFdBQVcsR0FBR0QsSUFBSSxDQUFDRSxLQUF6QjtBQUNBLFFBQU1DLFVBQVUsR0FBR0YsV0FBVyxDQUFDRyxLQUFaLENBQWtCLEdBQWxCLENBQW5CO0FBQ0EsUUFBTUMsZ0JBQWdCLEdBQUcsQ0FBQyxHQUFELEVBQU0sS0FBTixFQUFhLElBQWIsRUFBbUIsSUFBbkIsRUFBeUIsTUFBekIsRUFBaUMsT0FBakMsRUFBMEMsS0FBMUMsQ0FBekI7O0FBRUEseUNBQThCQSxnQkFBOUIsdUNBQWdEO0FBQTNDLFVBQU1DLGVBQWUsd0JBQXJCOztBQUEyQyxpREFDdEJILFVBRHNCO0FBQUE7O0FBQUE7QUFDOUMsNERBQW9DO0FBQUEsY0FBekJJLFNBQXlCOztBQUNsQyxjQUFJQSxTQUFTLENBQUNDLFdBQVYsT0FBNEJGLGVBQWhDLEVBQWlEO0FBQy9DRyxpQkFBSyxvQkFBYUYsU0FBYixzRUFBTDtBQUNEO0FBQ0Y7QUFMNkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU0vQztBQUNGOztBQUVELFNBQ0UsTUFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESixFQUVFO0FBQU0sWUFBUSxFQUFFVCxZQUFZLENBQUNDLFFBQUQsQ0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUNRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEUixFQUVFO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFBbUIsUUFBSSxFQUFDLE1BQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUVrQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRmxDLGFBR1M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhULEVBSUU7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixRQUFJLEVBQUMsTUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLEVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLEVBTUU7QUFBTyxRQUFJLEVBQUMsUUFBWjtBQUFxQixTQUFLLEVBQUMsbUJBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORixDQUZGLENBREY7QUFhRDs7R0E5QnVCSixTO1VBQ2FDLHVEOzs7TUFEYkQsUyIsImZpbGUiOiIuL2NvbXBvbmVudHMvU2VuZEh1Zy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcblxuY29uc3QgU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy93cml0aW5nLWxldHRlcnMuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5gO1xuXG5jb25zdCBIZWFkaW5nID0gc3R5bGVkLmRpdmBcbiAgZm9udC1zaXplOiA0MHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29tcG9uZW50KCkge1xuICBjb25zdCB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQgfSA9IHVzZUZvcm0oKTtcblxuICBmdW5jdGlvbiBvblN1Ym1pdChkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBkaWFyeVN0cmluZyA9IGRhdGEuZGlhcnk7XG4gICAgY29uc3QgZGlhcnlXb3JkcyA9IGRpYXJ5U3RyaW5nLnNwbGl0KFwiIFwiKTtcbiAgICBjb25zdCBmaXJzdFBlcnNvbldvcmRzID0gW1wiaVwiLCBcImknbVwiLCBcIm15XCIsIFwibWVcIiwgXCJtaW5lXCIsIFwibWluZS5cIiwgXCJtZS5cIl07XG5cbiAgICBmb3IgKGNvbnN0IGZpcnN0UGVyc29uV29yZCBvZiBmaXJzdFBlcnNvbldvcmRzKSB7XG4gICAgICBmb3IgKGNvbnN0IGRpYXJ5V29yZCBvZiBkaWFyeVdvcmRzKSB7XG4gICAgICAgIGlmIChkaWFyeVdvcmQudG9Mb3dlckNhc2UoKSA9PT0gZmlyc3RQZXJzb25Xb3JkKSB7XG4gICAgICAgICAgYWxlcnQoYHRoZSB3b3JkICR7ZGlhcnlXb3JkfSBpcyBpbmNsdWRlZCEgU2hhbGwgd2UgdHJ5IHVzaW5nIHlvdXIgcHJvbm91bnMgb3IgeW91ciBvd24gbmFtZT9gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFNlY3Rpb24+XG4gICAgICAgIDxIZWFkaW5nPlNlbmQgVmlydHVhbCBIdWdzPC9IZWFkaW5nPlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxuICAgICAgICBOYW1lOiA8YnIvPiAgICBcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIi8+PGJyLz5cbiAgICAgICAgRW1haWw6IDxici8+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJtYWlsXCIvPlxuICAgICAgICA8YnIvPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU2VuZCBWaXJ0dWFsIEh1Z3NcIi8+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9TZWN0aW9uPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SendHug.tsx\n");

/***/ })

})
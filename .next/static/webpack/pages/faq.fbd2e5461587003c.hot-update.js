"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/faq",{

/***/ "./pages/faq.js":
/*!**********************!*\
  !*** ./pages/faq.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FAQPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/Link */ \"./src/components/Link/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction FAQPage() {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var FAQ_API_URL = \"https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json\";\n        fetch(FAQ_API_URL).then(function(respostadoServidor) {\n            return respostadoServidor.json();\n        }).then(function(resposta) {\n            console.log(resposta);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Alura Cases - P\\xe1ginas de Perguntas FAQ\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Matheus Menecucci\\\\Desktop\\\\01-NEXTJS-COURSE\\\\pages\\\\faq.js\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                href: \"/\",\n                children: \"Ir para a home\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Matheus Menecucci\\\\Desktop\\\\01-NEXTJS-COURSE\\\\pages\\\\faq.js\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Matheus Menecucci\\\\Desktop\\\\01-NEXTJS-COURSE\\\\pages\\\\faq.js\",\n        lineNumber: 19,\n        columnNumber: 9\n    }, this);\n}\n_s(FAQPage, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = FAQPage;\nvar _c;\n$RefreshReg$(_c, \"FAQPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9mYXEuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7O0FBQWtDO0FBQ1E7QUFFM0IsU0FBU0UsT0FBTyxHQUFHOztJQUU5QkYsZ0RBQVMsQ0FBQyxXQUFLO1FBQ1gsSUFBTUcsV0FBVyxHQUFHLG1KQUFtSjtRQUN2S0MsS0FBSyxDQUFDRCxXQUFXLENBQUMsQ0FDakJFLElBQUksQ0FBQyxTQUFDQyxrQkFBa0IsRUFBSztZQUMxQixPQUFPQSxrQkFBa0IsQ0FBQ0MsSUFBSSxFQUFFLENBQUM7UUFDckMsQ0FBQyxDQUFDLENBQ0RGLElBQUksQ0FBQyxTQUFDRyxRQUFRLEVBQUk7WUFDZkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLFFBQVEsQ0FBQyxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRU4scUJBQ0ksOERBQUNHLEtBQUc7OzBCQUNBLDhEQUFDQyxJQUFFOzBCQUFDLDJDQUFzQzs7Ozs7b0JBQUs7MEJBQy9DLDhEQUFDWCw0REFBSTtnQkFBQ1ksSUFBSSxFQUFDLEdBQUc7MEJBQUMsZ0JBRWY7Ozs7O29CQUFPOzs7Ozs7WUFDTCxDQUNUO0FBQ0wsQ0FBQztHQXJCdUJYLE9BQU87QUFBUEEsS0FBQUEsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9mYXEuanM/ZjQ0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9MaW5rJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZBUVBhZ2UoKSB7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+e1xyXG4gICAgICAgIGNvbnN0IEZBUV9BUElfVVJMID0gJ2h0dHBzOi8vZ2lzdC5naXRodWJ1c2VyY29udGVudC5jb20vb21hcmlvc291dG8vMGNlYWI1NGJkZDgxODJjYmQxYTQ1NDlkMzI5NDVjMWEvcmF3LzU3OGFkMWU4ZTUyOTZmYTA0OGUzZTdmZjZiMzE3Zjc0OTdiMzFhZDkvYWx1cmEtY2FzZXMtZmFxLmpzb24nO1xyXG4gICAgICAgIGZldGNoKEZBUV9BUElfVVJMKVxyXG4gICAgICAgIC50aGVuKChyZXNwb3N0YWRvU2Vydmlkb3IpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3Bvc3RhZG9TZXJ2aWRvci5qc29uKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzcG9zdGEpID0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb3N0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFtdKTsgXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDE+QWx1cmEgQ2FzZXMgLSBQw6FnaW5hcyBkZSBQZXJndW50YXMgRkFRPC9oMT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgIElyIHBhcmEgYSBob21lXHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwiTGluayIsIkZBUVBhZ2UiLCJGQVFfQVBJX1VSTCIsImZldGNoIiwidGhlbiIsInJlc3Bvc3RhZG9TZXJ2aWRvciIsImpzb24iLCJyZXNwb3N0YSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJoMSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/faq.js\n"));

/***/ })

});
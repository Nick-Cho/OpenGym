"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/user/profile",{

/***/ "./components/forms/PostForm.js":
/*!**************************************!*\
  !*** ./components/forms/PostForm.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-quill/dist/quill.snow.css */ \"./node_modules/react-quill/dist/quill.snow.css\");\n/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n // ES6\nvar ReactQuill = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(function() {\n    return __webpack_require__.e(/*! import() */ \"node_modules_react-quill_lib_index_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! react-quill */ \"./node_modules/react-quill/lib/index.js\", 23));\n}, {\n    loadableGenerated: {\n        webpack: function() {\n            return [\n                /*require.resolve*/(/*! react-quill */ \"./node_modules/react-quill/lib/index.js\")\n            ];\n        },\n        modules: [\n            \"..\\\\components\\\\forms\\\\PostForm.js -> \" + \"react-quill\"\n        ]\n    },\n    ssr: false\n}); //Must use dynamic import for react quill because it doesn't have server side functionality\n_c = ReactQuill;\nfunction PostForm(param) {\n    var content = param.content, setContent = param.setContent, postSubmit = param.postSubmit, handleImage = param.handleImage, loading = param.loading, image = param.image;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"card bg-dark \",\n        __source: {\n            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\forms\\\\PostForm.js\",\n            lineNumber: 9,\n            columnNumber: 3\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"card-body pb-3\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\forms\\\\PostForm.js\",\n                    lineNumber: 10,\n                    columnNumber: 5\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"form\", {\n                    className: \"form-group\",\n                    onSubmit: postSubmit,\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\forms\\\\PostForm.js\",\n                        lineNumber: 11,\n                        columnNumber: 7\n                    },\n                    __self: this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ReactQuill, {\n                        theme: \"snow\",\n                        value: content,\n                        onChange: function(e) {\n                            return setContent(e);\n                        },\n                        className: \"form-control\",\n                        placeholder: \"\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\forms\\\\PostForm.js\",\n                            lineNumber: 12,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    })\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"card-footer d-flex justify-content-between text-muted \",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\forms\\\\PostForm.js\",\n                    lineNumber: 22,\n                    columnNumber: 5\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                        onClick: postSubmit,\n                        className: \"btn btn-dark btn-sm mt-1 text-lgiht\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\forms\\\\PostForm.js\",\n                            lineNumber: 23,\n                            columnNumber: 7\n                        },\n                        __self: this,\n                        children: \"Post\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"label\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\forms\\\\PostForm.js\",\n                            lineNumber: 25,\n                            columnNumber: 7\n                        },\n                        __self: this,\n                        children: [\n                            image && image.url ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_3__.Avatar, {\n                                size: 30,\n                                src: image.url,\n                                className: \"mt-1\",\n                                style: {\n                                    cursor: \"pointer\"\n                                },\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\forms\\\\PostForm.js\",\n                                    lineNumber: 27,\n                                    columnNumber: 11\n                                },\n                                __self: this\n                            }) : loading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.LoadingOutlined, {\n                                className: \"mt-2\",\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\forms\\\\PostForm.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 11\n                                },\n                                __self: this\n                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.CameraOutlined, {\n                                className: \"mt-2\",\n                                style: {\n                                    cursor: \"pointer\"\n                                },\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\forms\\\\PostForm.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 12\n                                },\n                                __self: this\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                                onChange: handleImage,\n                                type: \"file\",\n                                accept: \"images/*\",\n                                hidden: true,\n                                style: {\n                                    cursor: \"pointer\"\n                                },\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\forms\\\\PostForm.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 9\n                                },\n                                __self: this\n                            })\n                        ]\n                    })\n                ]\n            })\n        ]\n    }));\n}\n_c1 = PostForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostForm);\nvar _c, _c1;\n$RefreshReg$(_c, \"ReactQuill\");\n$RefreshReg$(_c1, \"PostForm\");\n\n\n;\r\n    var _a, _b;\r\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n    // to extract CSS. For backwards compatibility, we need to check we're in a\r\n    // browser context before continuing.\r\n    if (typeof self !== 'undefined' &&\r\n        // AMP / No-JS mode does not inject these helpers:\r\n        '$RefreshHelpers$' in self) {\r\n        var currentExports = module.__proto__.exports;\r\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n        // This cannot happen in MainTemplate because the exports mismatch between\r\n        // templating and execution.\r\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n        // A module can be accepted automatically based on its exports, e.g. when\r\n        // it is a Refresh Boundary.\r\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n            // Save the previous exports on update so we can compare the boundary\r\n            // signatures.\r\n            module.hot.dispose(function (data) {\r\n                data.prevExports = currentExports;\r\n            });\r\n            // Unconditionally accept an update to this module, we'll check if it's\r\n            // still a Refresh Boundary later.\r\n            module.hot.accept();\r\n            // This field is set when the previous version of this module was a\r\n            // Refresh Boundary, letting us know we need to check for invalidation or\r\n            // enqueue an update.\r\n            if (prevExports !== null) {\r\n                // A boundary can become ineligible if its exports are incompatible\r\n                // with the previous exports.\r\n                //\r\n                // For example, if you add/remove/change exports, we'll want to\r\n                // re-execute the importing modules, and force those components to\r\n                // re-render. Similarly, if you convert a class component to a\r\n                // function, we want to invalidate the boundary.\r\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                    module.hot.invalidate();\r\n                }\r\n                else {\r\n                    self.$RefreshHelpers$.scheduleUpdate();\r\n                }\r\n            }\r\n        }\r\n        else {\r\n            // Since we just executed the code for the module, it's possible that the\r\n            // new exports made it ineligible for being a boundary.\r\n            // We only care about the case when we were _previously_ a boundary,\r\n            // because we already accepted this update (accidental side effect).\r\n            var isNoLongerABoundary = prevExports !== null;\r\n            if (isNoLongerABoundary) {\r\n                module.hot.invalidate();\r\n            }\r\n        }\r\n    }\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Zvcm1zL1Bvc3RGb3JtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTRCO0FBQ007QUFFK0I7QUFDdkIsQ0FBTTtBQUZoRCxHQUFLLENBQUNJLFVBQVUsR0FBR0gsbURBQU8sQ0FBQyxRQUFRO0lBQUpJLE1BQU0sQ0FBTkEsc01BQW9COzs7Ozs7Ozs7Ozs7SUFBSUMsR0FBRyxFQUFFLEtBQUs7R0FBSSxDQUEyRjtLQUExSkYsVUFBVTtTQUlQRyxRQUFRLENBQUMsS0FBOEQsRUFBRSxDQUFDO1FBQWhFQyxPQUFPLEdBQVIsS0FBOEQsQ0FBN0RBLE9BQU8sRUFBRUMsVUFBVSxHQUFwQixLQUE4RCxDQUFwREEsVUFBVSxFQUFFQyxVQUFVLEdBQWhDLEtBQThELENBQXhDQSxVQUFVLEVBQUVDLFdBQVcsR0FBN0MsS0FBOEQsQ0FBNUJBLFdBQVcsRUFBRUMsT0FBTyxHQUF0RCxLQUE4RCxDQUFmQSxPQUFPLEVBQUVDLEtBQUssR0FBN0QsS0FBOEQsQ0FBTkEsS0FBSztJQUM3RSxNQUFNLHVFQUNMQyxDQUFHO1FBQUNDLFNBQVMsRUFBRyxDQUFnQjs7Ozs7Ozs7aUZBQzlCRCxDQUFHO2dCQUFDQyxTQUFTLEVBQUcsQ0FBZ0I7Ozs7Ozs7K0ZBQzlCQyxDQUFJO29CQUFDRCxTQUFTLEVBQUcsQ0FBWTtvQkFBQ0UsUUFBUSxFQUFJUCxVQUFVOzs7Ozs7O21HQUNsRE4sVUFBVTt3QkFDVGMsS0FBSyxFQUFHLENBQU07d0JBQ2RDLEtBQUssRUFBSVgsT0FBTzt3QkFDaEJZLFFBQVEsRUFBSSxRQUFRLENBQVBDLENBQUM7NEJBQUtaLE1BQU0sQ0FBTkEsVUFBVSxDQUFDWSxDQUFDOzt3QkFDL0JOLFNBQVMsRUFBRyxDQUFjO3dCQUMxQk8sV0FBVyxFQUFHLENBQUU7Ozs7Ozs7Ozs7a0ZBS3JCUixDQUFHO2dCQUFDQyxTQUFTLEVBQUcsQ0FBd0Q7Ozs7Ozs7O3lGQUN0RVEsQ0FBTTt3QkFBQ0MsT0FBTyxFQUFJZCxVQUFVO3dCQUFFSyxTQUFTLEVBQUcsQ0FBcUM7Ozs7Ozs7a0NBQUMsQ0FBSTs7MEZBRXBGVSxDQUFLOzs7Ozs7Ozs0QkFDSFosS0FBSyxJQUFJQSxLQUFLLENBQUNhLEdBQUcsd0VBQ2hCMUIsd0NBQU07Z0NBQUMyQixJQUFJLEVBQUksRUFBRTtnQ0FBRUMsR0FBRyxFQUFJZixLQUFLLENBQUNhLEdBQUc7Z0NBQUVYLFNBQVMsRUFBRyxDQUFNO2dDQUFDYyxLQUFLLEVBQUksQ0FBQ0M7b0NBQUFBLE1BQU0sRUFBRSxDQUFTO2dDQUFBLENBQUM7Ozs7Ozs7aUNBRXJGbEIsT0FBTyx3RUFDTlQsOERBQWU7Z0NBQUNZLFNBQVMsRUFBRyxDQUFNOzs7Ozs7O3NHQUVqQ2IsNkRBQWM7Z0NBQUNhLFNBQVMsRUFBRyxDQUFNO2dDQUFDYyxLQUFLLEVBQUksQ0FBQ0M7b0NBQUFBLE1BQU0sRUFBRSxDQUFTO2dDQUFBLENBQUM7Ozs7Ozs7O2lHQUVqRUMsQ0FBSztnQ0FBQ1gsUUFBUSxFQUFJVCxXQUFXO2dDQUFFcUIsSUFBSSxFQUFHLENBQU07Z0NBQUNDLE1BQU0sRUFBRyxDQUFVO2dDQUFDQyxNQUFNO2dDQUFDTCxLQUFLLEVBQUksQ0FBQ0M7b0NBQUFBLE1BQU0sRUFBRSxDQUFTO2dDQUFBLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FBSzdHLENBQUM7TUFoQ1F2QixRQUFRO0FBa0NqQiwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZm9ybXMvUG9zdEZvcm0uanM/ODNlMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0F2YXRhcn0gZnJvbSAgJ2FudGQnO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCJcclxuY29uc3QgUmVhY3RRdWlsbCA9IGR5bmFtaWMoKCk9PmltcG9ydCgncmVhY3QtcXVpbGwnKSwge3NzcjogZmFsc2V9KTsgLy9NdXN0IHVzZSBkeW5hbWljIGltcG9ydCBmb3IgcmVhY3QgcXVpbGwgYmVjYXVzZSBpdCBkb2Vzbid0IGhhdmUgc2VydmVyIHNpZGUgZnVuY3Rpb25hbGl0eVxyXG5pbXBvcnQge0NhbWVyYU91dGxpbmVkLCBMb2FkaW5nT3V0bGluZWR9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5pbXBvcnQgJ3JlYWN0LXF1aWxsL2Rpc3QvcXVpbGwuc25vdy5jc3MnOyAvLyBFUzZcclxuXHJcbmZ1bmN0aW9uIFBvc3RGb3JtKHtjb250ZW50LCBzZXRDb250ZW50LCBwb3N0U3VibWl0LCBoYW5kbGVJbWFnZSwgbG9hZGluZywgaW1hZ2V9KSB7XHJcbiAgcmV0dXJuKCBcclxuICA8ZGl2IGNsYXNzTmFtZSA9IFwiY2FyZCBiZy1kYXJrICBcIj5cclxuICAgIDxkaXYgY2xhc3NOYW1lID0gXCJjYXJkLWJvZHkgcGItM1wiPlxyXG4gICAgICA8Zm9ybSBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXBcIiBvblN1Ym1pdCA9IHtwb3N0U3VibWl0fT5cclxuICAgICAgICA8UmVhY3RRdWlsbFxyXG4gICAgICAgICAgdGhlbWUgPSBcInNub3dcIlxyXG4gICAgICAgICAgdmFsdWUgPSB7Y29udGVudH1cclxuICAgICAgICAgIG9uQ2hhbmdlID0geyhlKSA9PiBzZXRDb250ZW50KGUpfVxyXG4gICAgICAgICAgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXIgPSBcIlwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgIFxyXG4gICAgPGRpdiBjbGFzc05hbWUgPSBcImNhcmQtZm9vdGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiB0ZXh0LW11dGVkIFwiPlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2sgPSB7cG9zdFN1Ym1pdH0gY2xhc3NOYW1lID0gXCJidG4gYnRuLWRhcmsgYnRuLXNtIG10LTEgdGV4dC1sZ2lodFwiPlBvc3Q8L2J1dHRvbj5cclxuICAgICAgXHJcbiAgICAgIDxsYWJlbD5cclxuICAgICAgICB7aW1hZ2UgJiYgaW1hZ2UudXJsID8gKFxyXG4gICAgICAgICAgPEF2YXRhciBzaXplID0gezMwfSBzcmMgPSB7aW1hZ2UudXJsfSBjbGFzc05hbWUgPSBcIm10LTFcIiBzdHlsZSA9IHt7Y3Vyc29yOiBcInBvaW50ZXJcIn19Lz5cclxuICAgICAgICApOlxyXG4gICAgICAgICAgbG9hZGluZyA/IChcclxuICAgICAgICAgIDxMb2FkaW5nT3V0bGluZWQgY2xhc3NOYW1lID0gXCJtdC0yXCIvPlxyXG4gICAgICAgICAgKTpcclxuICAgICAgICAgICg8Q2FtZXJhT3V0bGluZWQgY2xhc3NOYW1lID0gXCJtdC0yXCIgc3R5bGUgPSB7e2N1cnNvcjogXCJwb2ludGVyXCJ9fS8+KVxyXG4gICAgICAgIH1cclxuICAgICAgICA8aW5wdXQgb25DaGFuZ2UgPSB7aGFuZGxlSW1hZ2V9IHR5cGUgPSBcImZpbGVcIiBhY2NlcHQgPSBcImltYWdlcy8qXCIgaGlkZGVuIHN0eWxlID0ge3tjdXJzb3I6IFwicG9pbnRlclwifX0vPlxyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Rm9ybTtcclxuIl0sIm5hbWVzIjpbIkF2YXRhciIsImR5bmFtaWMiLCJDYW1lcmFPdXRsaW5lZCIsIkxvYWRpbmdPdXRsaW5lZCIsIlJlYWN0UXVpbGwiLCJpbXBvcnQiLCJzc3IiLCJQb3N0Rm9ybSIsImNvbnRlbnQiLCJzZXRDb250ZW50IiwicG9zdFN1Ym1pdCIsImhhbmRsZUltYWdlIiwibG9hZGluZyIsImltYWdlIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsIm9uU3VibWl0IiwidGhlbWUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwib25DbGljayIsImxhYmVsIiwidXJsIiwic2l6ZSIsInNyYyIsInN0eWxlIiwiY3Vyc29yIiwiaW5wdXQiLCJ0eXBlIiwiYWNjZXB0IiwiaGlkZGVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/forms/PostForm.js\n");

/***/ })

});
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-quill/dist/quill.snow.css */ \"./node_modules/react-quill/dist/quill.snow.css\");\n/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n // ES6\nvar ReactQuill = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(function() {\n    return __webpack_require__.e(/*! import() */ \"node_modules_react-quill_lib_index_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! react-quill */ \"./node_modules/react-quill/lib/index.js\", 23));\n}, {\n    loadableGenerated: {\n        webpack: function() {\n            return [\n                /*require.resolve*/(/*! react-quill */ \"./node_modules/react-quill/lib/index.js\")\n            ];\n        },\n        modules: [\n            \"..\\\\components\\\\forms\\\\PostForm.js -> \" + \"react-quill\"\n        ]\n    },\n    ssr: false\n}); //Must use dynamic import for react quill because it doesn't have server side functionality\n_c = ReactQuill;\nfunction PostForm(param) {\n    var content = param.content, setContent = param.setContent, postSubmit = param.postSubmit, handleImage = param.handleImage, loading = param.loading, image = param.image;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"card bg-dark \",\n        __source: {\n            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\forms\\\\PostForm.js\",\n            lineNumber: 9,\n            columnNumber: 3\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"card-body pb-3\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\forms\\\\PostForm.js\",\n                    lineNumber: 10,\n                    columnNumber: 5\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"form\", {\n                    className: \"form-group\",\n                    onSubmit: postSubmit,\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\forms\\\\PostForm.js\",\n                        lineNumber: 11,\n                        columnNumber: 7\n                    },\n                    __self: this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ReactQuill, {\n                        theme: \"snow\",\n                        value: content,\n                        onChange: function(e) {\n                            return setContent(e);\n                        },\n                        className: \"form-control bg-dark text-light\",\n                        placeholder: \"\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\forms\\\\PostForm.js\",\n                            lineNumber: 12,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    })\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"card-footer d-flex justify-content-between text-muted \",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\forms\\\\PostForm.js\",\n                    lineNumber: 22,\n                    columnNumber: 5\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                        onClick: postSubmit,\n                        className: \"btn btn-dark btn-md mt-1\",\n                        style: {\n                            border: \"2px solid white\"\n                        },\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\forms\\\\PostForm.js\",\n                            lineNumber: 23,\n                            columnNumber: 7\n                        },\n                        __self: this,\n                        children: \"Post\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"label\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\forms\\\\PostForm.js\",\n                            lineNumber: 25,\n                            columnNumber: 7\n                        },\n                        __self: this,\n                        children: [\n                            image && image.url ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_3__.Avatar, {\n                                size: 30,\n                                src: image.url,\n                                className: \"mt-1\",\n                                style: {\n                                    cursor: \"pointer\"\n                                },\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\forms\\\\PostForm.js\",\n                                    lineNumber: 27,\n                                    columnNumber: 11\n                                },\n                                __self: this\n                            }) : loading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.LoadingOutlined, {\n                                className: \"mt-2\",\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\forms\\\\PostForm.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 11\n                                },\n                                __self: this\n                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.CameraOutlined, {\n                                className: \"mt-2\",\n                                style: {\n                                    cursor: \"pointer\"\n                                },\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\forms\\\\PostForm.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 12\n                                },\n                                __self: this\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                                onChange: handleImage,\n                                type: \"file\",\n                                accept: \"images/*\",\n                                hidden: true,\n                                style: {\n                                    cursor: \"pointer\"\n                                },\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\forms\\\\PostForm.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 9\n                                },\n                                __self: this\n                            })\n                        ]\n                    })\n                ]\n            })\n        ]\n    }));\n}\n_c1 = PostForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostForm);\nvar _c, _c1;\n$RefreshReg$(_c, \"ReactQuill\");\n$RefreshReg$(_c1, \"PostForm\");\n\n\n;\r\n    var _a, _b;\r\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n    // to extract CSS. For backwards compatibility, we need to check we're in a\r\n    // browser context before continuing.\r\n    if (typeof self !== 'undefined' &&\r\n        // AMP / No-JS mode does not inject these helpers:\r\n        '$RefreshHelpers$' in self) {\r\n        var currentExports = module.__proto__.exports;\r\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n        // This cannot happen in MainTemplate because the exports mismatch between\r\n        // templating and execution.\r\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n        // A module can be accepted automatically based on its exports, e.g. when\r\n        // it is a Refresh Boundary.\r\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n            // Save the previous exports on update so we can compare the boundary\r\n            // signatures.\r\n            module.hot.dispose(function (data) {\r\n                data.prevExports = currentExports;\r\n            });\r\n            // Unconditionally accept an update to this module, we'll check if it's\r\n            // still a Refresh Boundary later.\r\n            module.hot.accept();\r\n            // This field is set when the previous version of this module was a\r\n            // Refresh Boundary, letting us know we need to check for invalidation or\r\n            // enqueue an update.\r\n            if (prevExports !== null) {\r\n                // A boundary can become ineligible if its exports are incompatible\r\n                // with the previous exports.\r\n                //\r\n                // For example, if you add/remove/change exports, we'll want to\r\n                // re-execute the importing modules, and force those components to\r\n                // re-render. Similarly, if you convert a class component to a\r\n                // function, we want to invalidate the boundary.\r\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                    module.hot.invalidate();\r\n                }\r\n                else {\r\n                    self.$RefreshHelpers$.scheduleUpdate();\r\n                }\r\n            }\r\n        }\r\n        else {\r\n            // Since we just executed the code for the module, it's possible that the\r\n            // new exports made it ineligible for being a boundary.\r\n            // We only care about the case when we were _previously_ a boundary,\r\n            // because we already accepted this update (accidental side effect).\r\n            var isNoLongerABoundary = prevExports !== null;\r\n            if (isNoLongerABoundary) {\r\n                module.hot.invalidate();\r\n            }\r\n        }\r\n    }\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Zvcm1zL1Bvc3RGb3JtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTRCO0FBQ007QUFFK0I7QUFDdkIsQ0FBTTtBQUZoRCxHQUFLLENBQUNJLFVBQVUsR0FBR0gsbURBQU8sQ0FBQyxRQUFRO0lBQUpJLE1BQU0sQ0FBTkEsc01BQW9COzs7Ozs7Ozs7Ozs7SUFBSUMsR0FBRyxFQUFFLEtBQUs7R0FBSSxDQUEyRjtLQUExSkYsVUFBVTtTQUlQRyxRQUFRLENBQUMsS0FBOEQsRUFBRSxDQUFDO1FBQWhFQyxPQUFPLEdBQVIsS0FBOEQsQ0FBN0RBLE9BQU8sRUFBRUMsVUFBVSxHQUFwQixLQUE4RCxDQUFwREEsVUFBVSxFQUFFQyxVQUFVLEdBQWhDLEtBQThELENBQXhDQSxVQUFVLEVBQUVDLFdBQVcsR0FBN0MsS0FBOEQsQ0FBNUJBLFdBQVcsRUFBRUMsT0FBTyxHQUF0RCxLQUE4RCxDQUFmQSxPQUFPLEVBQUVDLEtBQUssR0FBN0QsS0FBOEQsQ0FBTkEsS0FBSztJQUM3RSxNQUFNLHVFQUNMQyxDQUFHO1FBQUNDLFNBQVMsRUFBRyxDQUFnQjs7Ozs7Ozs7aUZBQzlCRCxDQUFHO2dCQUFDQyxTQUFTLEVBQUcsQ0FBZ0I7Ozs7Ozs7K0ZBQzlCQyxDQUFJO29CQUFDRCxTQUFTLEVBQUcsQ0FBWTtvQkFBQ0UsUUFBUSxFQUFJUCxVQUFVOzs7Ozs7O21HQUNsRE4sVUFBVTt3QkFDVGMsS0FBSyxFQUFHLENBQU07d0JBQ2RDLEtBQUssRUFBSVgsT0FBTzt3QkFDaEJZLFFBQVEsRUFBSSxRQUFRLENBQVBDLENBQUM7NEJBQUtaLE1BQU0sQ0FBTkEsVUFBVSxDQUFDWSxDQUFDOzt3QkFDL0JOLFNBQVMsRUFBRyxDQUFpQzt3QkFDN0NPLFdBQVcsRUFBRyxDQUFFOzs7Ozs7Ozs7O2tGQUtyQlIsQ0FBRztnQkFBQ0MsU0FBUyxFQUFHLENBQXdEOzs7Ozs7Ozt5RkFDdEVRLENBQU07d0JBQUNDLE9BQU8sRUFBSWQsVUFBVTt3QkFBRUssU0FBUyxFQUFHLENBQTBCO3dCQUFDVSxLQUFLLEVBQUksQ0FBQ0M7NEJBQUFBLE1BQU0sRUFBRSxDQUFpQjt3QkFBQSxDQUFDOzs7Ozs7O2tDQUFFLENBQUk7OzBGQUUvR0MsQ0FBSzs7Ozs7Ozs7NEJBQ0hkLEtBQUssSUFBSUEsS0FBSyxDQUFDZSxHQUFHLHdFQUNoQjVCLHdDQUFNO2dDQUFDNkIsSUFBSSxFQUFJLEVBQUU7Z0NBQUVDLEdBQUcsRUFBSWpCLEtBQUssQ0FBQ2UsR0FBRztnQ0FBRWIsU0FBUyxFQUFHLENBQU07Z0NBQUNVLEtBQUssRUFBSSxDQUFDTTtvQ0FBQUEsTUFBTSxFQUFFLENBQVM7Z0NBQUEsQ0FBQzs7Ozs7OztpQ0FFckZuQixPQUFPLHdFQUNOVCw4REFBZTtnQ0FBQ1ksU0FBUyxFQUFHLENBQU07Ozs7Ozs7c0dBRWpDYiw2REFBYztnQ0FBQ2EsU0FBUyxFQUFHLENBQU07Z0NBQUNVLEtBQUssRUFBSSxDQUFDTTtvQ0FBQUEsTUFBTSxFQUFFLENBQVM7Z0NBQUEsQ0FBQzs7Ozs7Ozs7aUdBRWpFQyxDQUFLO2dDQUFDWixRQUFRLEVBQUlULFdBQVc7Z0NBQUVzQixJQUFJLEVBQUcsQ0FBTTtnQ0FBQ0MsTUFBTSxFQUFHLENBQVU7Z0NBQUNDLE1BQU07Z0NBQUNWLEtBQUssRUFBSSxDQUFDTTtvQ0FBQUEsTUFBTSxFQUFFLENBQVM7Z0NBQUEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUFLN0csQ0FBQztNQWhDUXhCLFFBQVE7QUFrQ2pCLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3Jtcy9Qb3N0Rm9ybS5qcz84M2UyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXZhdGFyfSBmcm9tICAnYW50ZCc7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIlxyXG5jb25zdCBSZWFjdFF1aWxsID0gZHluYW1pYygoKT0+aW1wb3J0KCdyZWFjdC1xdWlsbCcpLCB7c3NyOiBmYWxzZX0pOyAvL011c3QgdXNlIGR5bmFtaWMgaW1wb3J0IGZvciByZWFjdCBxdWlsbCBiZWNhdXNlIGl0IGRvZXNuJ3QgaGF2ZSBzZXJ2ZXIgc2lkZSBmdW5jdGlvbmFsaXR5XHJcbmltcG9ydCB7Q2FtZXJhT3V0bGluZWQsIExvYWRpbmdPdXRsaW5lZH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcbmltcG9ydCAncmVhY3QtcXVpbGwvZGlzdC9xdWlsbC5zbm93LmNzcyc7IC8vIEVTNlxyXG5cclxuZnVuY3Rpb24gUG9zdEZvcm0oe2NvbnRlbnQsIHNldENvbnRlbnQsIHBvc3RTdWJtaXQsIGhhbmRsZUltYWdlLCBsb2FkaW5nLCBpbWFnZX0pIHtcclxuICByZXR1cm4oIFxyXG4gIDxkaXYgY2xhc3NOYW1lID0gXCJjYXJkIGJnLWRhcmsgIFwiPlxyXG4gICAgPGRpdiBjbGFzc05hbWUgPSBcImNhcmQtYm9keSBwYi0zXCI+XHJcbiAgICAgIDxmb3JtIGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cFwiIG9uU3VibWl0ID0ge3Bvc3RTdWJtaXR9PlxyXG4gICAgICAgIDxSZWFjdFF1aWxsXHJcbiAgICAgICAgICB0aGVtZSA9IFwic25vd1wiXHJcbiAgICAgICAgICB2YWx1ZSA9IHtjb250ZW50fVxyXG4gICAgICAgICAgb25DaGFuZ2UgPSB7KGUpID0+IHNldENvbnRlbnQoZSl9XHJcbiAgICAgICAgICBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbCBiZy1kYXJrIHRleHQtbGlnaHRcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXIgPSBcIlwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgIFxyXG4gICAgPGRpdiBjbGFzc05hbWUgPSBcImNhcmQtZm9vdGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiB0ZXh0LW11dGVkIFwiPlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2sgPSB7cG9zdFN1Ym1pdH0gY2xhc3NOYW1lID0gXCJidG4gYnRuLWRhcmsgYnRuLW1kIG10LTFcIiBzdHlsZSA9IHt7Ym9yZGVyOiBcIjJweCBzb2xpZCB3aGl0ZVwifX0+UG9zdDwvYnV0dG9uPlxyXG4gICAgICBcclxuICAgICAgPGxhYmVsPlxyXG4gICAgICAgIHtpbWFnZSAmJiBpbWFnZS51cmwgPyAoXHJcbiAgICAgICAgICA8QXZhdGFyIHNpemUgPSB7MzB9IHNyYyA9IHtpbWFnZS51cmx9IGNsYXNzTmFtZSA9IFwibXQtMVwiIHN0eWxlID0ge3tjdXJzb3I6IFwicG9pbnRlclwifX0vPlxyXG4gICAgICAgICk6XHJcbiAgICAgICAgICBsb2FkaW5nID8gKFxyXG4gICAgICAgICAgPExvYWRpbmdPdXRsaW5lZCBjbGFzc05hbWUgPSBcIm10LTJcIi8+XHJcbiAgICAgICAgICApOlxyXG4gICAgICAgICAgKDxDYW1lcmFPdXRsaW5lZCBjbGFzc05hbWUgPSBcIm10LTJcIiBzdHlsZSA9IHt7Y3Vyc29yOiBcInBvaW50ZXJcIn19Lz4pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDxpbnB1dCBvbkNoYW5nZSA9IHtoYW5kbGVJbWFnZX0gdHlwZSA9IFwiZmlsZVwiIGFjY2VwdCA9IFwiaW1hZ2VzLypcIiBoaWRkZW4gc3R5bGUgPSB7e2N1cnNvcjogXCJwb2ludGVyXCJ9fS8+XHJcbiAgICAgIDwvbGFiZWw+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RGb3JtO1xyXG4iXSwibmFtZXMiOlsiQXZhdGFyIiwiZHluYW1pYyIsIkNhbWVyYU91dGxpbmVkIiwiTG9hZGluZ091dGxpbmVkIiwiUmVhY3RRdWlsbCIsImltcG9ydCIsInNzciIsIlBvc3RGb3JtIiwiY29udGVudCIsInNldENvbnRlbnQiLCJwb3N0U3VibWl0IiwiaGFuZGxlSW1hZ2UiLCJsb2FkaW5nIiwiaW1hZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJ0aGVtZSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJvbkNsaWNrIiwic3R5bGUiLCJib3JkZXIiLCJsYWJlbCIsInVybCIsInNpemUiLCJzcmMiLCJjdXJzb3IiLCJpbnB1dCIsInR5cGUiLCJhY2NlcHQiLCJoaWRkZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/forms/PostForm.js\n");

/***/ })

});
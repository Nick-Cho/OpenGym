"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/index */ \"./context/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Nav() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_index__WEBPACK_IMPORTED_MODULE_3__.UserContext), state = ref[0], setState = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), currPage = ref1[0], setCurrPage = ref1[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        //Only updating if we are in client mode of nextjs\n         true && setCurrPage(window.location.pathname);\n        console.log(\"state on reload:\", state);\n    }, [\n         true && window.location.pathname\n    ]);\n    var logout = function() {\n        window.localStorage.removeItem(\"auth\");\n        setState(null); //resetting user information\n        // console.log(state);\n        router.push(\"/login\");\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"nav\", {\n        className: \"nav d-flex justify-content-left p-3\",\n        style: {\n            backgroundColor: \"black\"\n        },\n        __source: {\n            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n            lineNumber: 28,\n            columnNumber: 3\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n                    lineNumber: 29,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"a\", {\n                    className: \"nav-link text-light \".concat(currPage === \"/\" && \"active\"),\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_5__.Avatar, {\n                            src: \"/images/logo.png\",\n                            className: \"mr-2\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n                                lineNumber: 31,\n                                columnNumber: 11\n                            },\n                            __self: this\n                        }),\n                        \" Home\"\n                    ]\n                })\n            }),\n            state ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    className: \"dropdown\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    },\n                    __self: this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                            className: \"btn dropdown-toggle text-light\",\n                            type: \"button\",\n                            id: \"dropdownMenuButton1\",\n                            \"data-bs-toggle\": \"dropdown\",\n                            \"aria-expanded\": \"false\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n                                lineNumber: 40,\n                                columnNumber: 13\n                            },\n                            __self: this,\n                            children: state.user && state.user.first_name\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"ul\", {\n                            className: \"dropdown-menu\",\n                            \"aria-labelledby\": \"dropdownMenuButton1\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            },\n                            __self: this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n                                        lineNumber: 44,\n                                        columnNumber: 15\n                                    },\n                                    __self: this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/user/profile\",\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n                                            lineNumber: 45,\n                                            columnNumber: 17\n                                        },\n                                        __self: this,\n                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                            className: \"nav-link dropdown-item  \".concat(currPage === \"/user/profile\" && \"active\"),\n                                            __source: {\n                                                fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n                                                lineNumber: 46,\n                                                columnNumber: 19\n                                            },\n                                            __self: this,\n                                            children: \"Profile\"\n                                        })\n                                    })\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n                                        lineNumber: 50,\n                                        columnNumber: 16\n                                    },\n                                    __self: this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/user/editProfile\",\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n                                            lineNumber: 51,\n                                            columnNumber: 17\n                                        },\n                                        __self: this,\n                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                            className: \"nav-link dropdown-item  \".concat(currPage === \"/user/editProfile\" && \"active\"),\n                                            __source: {\n                                                fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n                                                lineNumber: 52,\n                                                columnNumber: 19\n                                            },\n                                            __self: this,\n                                            children: \"Update Profile\"\n                                        })\n                                    })\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 15\n                                    },\n                                    __self: this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                        onClick: logout,\n                                        className: \"dropdown-item nav-link\",\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n                                            lineNumber: 55,\n                                            columnNumber: 19\n                                        },\n                                        __self: this,\n                                        children: \" Logout \"\n                                    })\n                                })\n                            ]\n                        })\n                    ]\n                })\n            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/login\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n                            lineNumber: 63,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                            className: \"nav-link text-light \".concat(currPage === \"/login\" && \"active\"),\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n                                lineNumber: 64,\n                                columnNumber: 11\n                            },\n                            __self: this,\n                            children: \"Login\"\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/register\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n                            lineNumber: 66,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                            className: \"nav-link text-light \".concat(currPage === \"/register\" && \"active\"),\n                            style: {\n                                borderRadius: '10px'\n                            },\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\social-network-app\\\\client\\\\components\\\\Nav.js\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            },\n                            __self: this,\n                            children: \"Register\"\n                        })\n                    })\n                ]\n            })\n        ]\n    }));\n}\n_s(Nav, \"zcOYs/u4nDmFWqRhxPg97UdUhWc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\nvar _c;\n$RefreshReg$(_c, \"Nav\");\n\n\n;\r\n    var _a, _b;\r\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n    // to extract CSS. For backwards compatibility, we need to check we're in a\r\n    // browser context before continuing.\r\n    if (typeof self !== 'undefined' &&\r\n        // AMP / No-JS mode does not inject these helpers:\r\n        '$RefreshHelpers$' in self) {\r\n        var currentExports = module.__proto__.exports;\r\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n        // This cannot happen in MainTemplate because the exports mismatch between\r\n        // templating and execution.\r\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n        // A module can be accepted automatically based on its exports, e.g. when\r\n        // it is a Refresh Boundary.\r\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n            // Save the previous exports on update so we can compare the boundary\r\n            // signatures.\r\n            module.hot.dispose(function (data) {\r\n                data.prevExports = currentExports;\r\n            });\r\n            // Unconditionally accept an update to this module, we'll check if it's\r\n            // still a Refresh Boundary later.\r\n            module.hot.accept();\r\n            // This field is set when the previous version of this module was a\r\n            // Refresh Boundary, letting us know we need to check for invalidation or\r\n            // enqueue an update.\r\n            if (prevExports !== null) {\r\n                // A boundary can become ineligible if its exports are incompatible\r\n                // with the previous exports.\r\n                //\r\n                // For example, if you add/remove/change exports, we'll want to\r\n                // re-execute the importing modules, and force those components to\r\n                // re-render. Similarly, if you convert a class component to a\r\n                // function, we want to invalidate the boundary.\r\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                    module.hot.invalidate();\r\n                }\r\n                else {\r\n                    self.$RefreshHelpers$.scheduleUpdate();\r\n                }\r\n            }\r\n        }\r\n        else {\r\n            // Since we just executed the code for the module, it's possible that the\r\n            // new exports made it ineligible for being a boundary.\r\n            // We only care about the case when we were _previously_ a boundary,\r\n            // because we already accepted this update (accidental side effect).\r\n            var isNoLongerABoundary = prevExports !== null;\r\n            if (isNoLongerABoundary) {\r\n                module.hot.invalidate();\r\n            }\r\n        }\r\n    }\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RXZCLGtEQUFJO3dCQUFDMEIsSUFBSSxFQUFHLENBQVE7Ozs7Ozs7dUdBQ2xCQyxDQUFDOzRCQUFDSixTQUFTLEVBQUksQ0FBb0Isc0JBQW9DLE9BQWxDZixRQUFRLEtBQUssQ0FBUSxXQUFJLENBQVE7Ozs7Ozs7c0NBQUksQ0FBSzs7O3lGQUVqRlIsa0RBQUk7d0JBQUMwQixJQUFJLEVBQUcsQ0FBVzs7Ozs7Ozt1R0FDckJDLENBQUM7NEJBQUNKLFNBQVMsRUFBSSxDQUFvQixzQkFBdUMsT0FBckNmLFFBQVEsS0FBSyxDQUFXLGNBQUksQ0FBUTs0QkFBSWdCLEtBQUssRUFBSSxDQUFDaUI7Z0NBQUFBLFlBQVksRUFBRSxDQUFNOzRCQUFBLENBQUM7Ozs7Ozs7c0NBQUUsQ0FBUTs7Ozs7OztBQVFqSSxDQUFDO0dBbkVRcEMsR0FBRzs7UUFHS0gsa0RBQVM7OztLQUhqQkcsR0FBRztBQW9FWiwrREFBZUEsR0FBRyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2LmpzPzg2NGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHtVc2VyQ29udGV4dH0gZnJvbSAnLi4vY29udGV4dC9pbmRleCc7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtBdmF0YXJ9IGZyb20gXCJhbnRkXCJcclxuXHJcbmZ1bmN0aW9uIE5hdiAoKSB7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcclxuICBjb25zdCBbY3VyclBhZ2UsIHNldEN1cnJQYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCk9PntcclxuICAgIC8vT25seSB1cGRhdGluZyBpZiB3ZSBhcmUgaW4gY2xpZW50IG1vZGUgb2YgbmV4dGpzXHJcbiAgICBwcm9jZXNzLmJyb3dzZXIgJiYgc2V0Q3VyclBhZ2Uod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTsgXHJcbiAgICBjb25zb2xlLmxvZyhcInN0YXRlIG9uIHJlbG9hZDpcIixzdGF0ZSk7XHJcbiAgfSwgW3Byb2Nlc3MuYnJvd3NlciAmJiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWVdKTtcclxuXHJcbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiYXV0aFwiKTtcclxuICAgIHNldFN0YXRlKG51bGwpOyAvL3Jlc2V0dGluZyB1c2VyIGluZm9ybWF0aW9uXHJcbiAgICAvLyBjb25zb2xlLmxvZyhzdGF0ZSk7XHJcbiAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICA8bmF2IGNsYXNzTmFtZT1cIm5hdiBkLWZsZXgganVzdGlmeS1jb250ZW50LWxlZnQgcC0zXCIgc3R5bGUgPSB7e2JhY2tncm91bmRDb2xvcjogXCJibGFja1wifX0+ICBcclxuICAgICAgPExpbmsgaHJlZiA9IFwiL1wiID5cclxuICAgICAgICA8YSBjbGFzc05hbWUgPXtgbmF2LWxpbmsgdGV4dC1saWdodCAke2N1cnJQYWdlID09PSBcIi9cIiAmJiBcImFjdGl2ZVwifWB9PlxyXG4gICAgICAgICAgPEF2YXRhciBzcmMgPSBcIi9pbWFnZXMvbG9nby5wbmdcIiBjbGFzc05hbWU9XCJtci0yXCIvPiBIb21lXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICBcclxuICAgICAgXHJcblxyXG4gICAgICB7c3RhdGUgPyAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gZHJvcGRvd24tdG9nZ2xlIHRleHQtbGlnaHRcIiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJkcm9wZG93bk1lbnVCdXR0b24xXCIgZGF0YS1icy10b2dnbGU9XCJkcm9wZG93blwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPlxyXG4gICAgICAgICAgICAgIHtzdGF0ZS51c2VyICYmIHN0YXRlLnVzZXIuZmlyc3RfbmFtZX1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCIgYXJpYS1sYWJlbGxlZGJ5PVwiZHJvcGRvd25NZW51QnV0dG9uMVwiPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWYgPSBcIi91c2VyL3Byb2ZpbGVcIiA+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZSA9IHtgbmF2LWxpbmsgZHJvcGRvd24taXRlbSAgJHtjdXJyUGFnZSA9PT0gXCIvdXNlci9wcm9maWxlXCIgJiYgXCJhY3RpdmVcIn1gfT5Qcm9maWxlPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPiAgICBcclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmID0gXCIvdXNlci9lZGl0UHJvZmlsZVwiID5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lID0ge2BuYXYtbGluayBkcm9wZG93bi1pdGVtICAke2N1cnJQYWdlID09PSBcIi91c2VyL2VkaXRQcm9maWxlXCIgJiYgXCJhY3RpdmVcIn1gfT5VcGRhdGUgUHJvZmlsZTwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz4gICAgXHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGk+PGEgb25DbGljayA9IHtsb2dvdXR9IGNsYXNzTmFtZSA9IFwiZHJvcGRvd24taXRlbSBuYXYtbGlua1wiPiBMb2dvdXQgPC9hPjwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICAgKVxyXG4gICAgICA6XHJcbiAgICAgIChcclxuICAgICAgPD5cclxuICAgICAgICA8TGluayBocmVmID0gXCIvbG9naW5cIiA+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWUgPXtgbmF2LWxpbmsgdGV4dC1saWdodCAke2N1cnJQYWdlID09PSBcIi9sb2dpblwiICYmIFwiYWN0aXZlXCJ9YH0+TG9naW48L2E+XHJcbiAgICAgICAgPC9MaW5rPiAgICBcclxuICAgICAgICA8TGluayBocmVmID0gXCIvcmVnaXN0ZXJcIiA+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWUgPXtgbmF2LWxpbmsgdGV4dC1saWdodCAke2N1cnJQYWdlID09PSBcIi9yZWdpc3RlclwiICYmIFwiYWN0aXZlXCJ9YH0gc3R5bGUgPSB7e2JvcmRlclJhZGl1czogJzEwcHgnfX0+UmVnaXN0ZXI8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgICAgXHJcbiAgPC9uYXY+XHJcblxyXG4gIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBOYXY7Il0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJVc2VyQ29udGV4dCIsInVzZVJvdXRlciIsIlJlYWN0IiwiQXZhdGFyIiwiTmF2Iiwic3RhdGUiLCJzZXRTdGF0ZSIsImN1cnJQYWdlIiwic2V0Q3VyclBhZ2UiLCJyb3V0ZXIiLCJwcm9jZXNzIiwiYnJvd3NlciIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJjb25zb2xlIiwibG9nIiwibG9nb3V0IiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsInB1c2giLCJuYXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImhyZWYiLCJhIiwic3JjIiwiZGl2IiwiYnV0dG9uIiwidHlwZSIsImlkIiwiZGF0YS1icy10b2dnbGUiLCJhcmlhLWV4cGFuZGVkIiwidXNlciIsImZpcnN0X25hbWUiLCJ1bCIsImFyaWEtbGFiZWxsZWRieSIsImxpIiwib25DbGljayIsImJvcmRlclJhZGl1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Nav.js\n");

/***/ })

});
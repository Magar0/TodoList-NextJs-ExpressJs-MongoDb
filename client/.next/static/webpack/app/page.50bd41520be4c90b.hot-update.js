"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/document/page.jsx":
/*!******************************************!*\
  !*** ./src/components/document/page.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_DeleteOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=DeleteOutlined!=!@ant-design/icons */ \"(app-pages-browser)/./node_modules/@ant-design/icons/es/icons/DeleteOutlined.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ui_textCustomize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/textCustomize */ \"(app-pages-browser)/./src/components/ui/textCustomize.jsx\");\n/* harmony import */ var antd_es_input_Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/es/input/Input */ \"(app-pages-browser)/./node_modules/antd/es/input/Input.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _store_slices_todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/slices/todo */ \"(app-pages-browser)/./src/store/slices/todo.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Document = ()=>{\n    _s();\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const { todoList, currentTodoSelected } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.todo);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n    const handleDelete = async ()=>{\n        const response = await fetch(\"\".concat(\"http://localhost:4000/\", \"todo\"), {\n            method: \"DELETE\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                id: currentTodoSelected._id\n            })\n        });\n        if (response.ok) {\n            dispatch((0,_store_slices_todo__WEBPACK_IMPORTED_MODULE_3__.deleteTodo)(currentTodoSelected._id));\n        }\n    };\n    const handleUpdate = async ()=>{\n        const res = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].put(\"\".concat(\"http://localhost:4000/\", \"todo\"), {\n            id: currentTodoSelected._id,\n            title: input,\n            description\n        });\n        if ((res === null || res === void 0 ? void 0 : res.statusText) !== \"OK\") {\n            return alert(\"Error editing\");\n        }\n        const newList = todoList.filter((ele)=>ele._id !== currentTodoSelected._id);\n        newList.push({\n            id: currentTodoSelected._id,\n            title: input,\n            description\n        });\n        dispatch((0,_store_slices_todo__WEBPACK_IMPORTED_MODULE_3__.setTodoList)(newList));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (input !== (currentTodoSelected === null || currentTodoSelected === void 0 ? void 0 : currentTodoSelected.title) || description !== (currentTodoSelected === null || currentTodoSelected === void 0 ? void 0 : currentTodoSelected.description)) {\n            handleUpdate();\n        }\n    }, [\n        input,\n        description\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (currentTodoSelected) {\n            setInput(currentTodoSelected === null || currentTodoSelected === void 0 ? void 0 : currentTodoSelected.title);\n            setDescription(currentTodoSelected === null || currentTodoSelected === void 0 ? void 0 : currentTodoSelected.description);\n        }\n    }, [\n        currentTodoSelected\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex h-full flex-grow flex-col items-start gap-5 rounded-md border-[1px] border-[#e5e3e3] bg-white px-10 py-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-full justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_es_input_Input__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        className: \"w-fit border-none text-4xl font-semibold text-[#1B1B1B]\",\n                        value: input,\n                        onChange: (e)=>setInput(e.target.value),\n                        placeholder: \"New Addition\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Thapa\\\\Desktop\\\\to-do-list\\\\client\\\\src\\\\components\\\\document\\\\page.jsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_DeleteOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        className: \"cursor-pointer text-xl hover:text-red-700\",\n                        onClick: handleDelete\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Thapa\\\\Desktop\\\\to-do-list\\\\client\\\\src\\\\components\\\\document\\\\page.jsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Thapa\\\\Desktop\\\\to-do-list\\\\client\\\\src\\\\components\\\\document\\\\page.jsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_textCustomize__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Thapa\\\\Desktop\\\\to-do-list\\\\client\\\\src\\\\components\\\\document\\\\page.jsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-[1px] w-full bg-black\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Thapa\\\\Desktop\\\\to-do-list\\\\client\\\\src\\\\components\\\\document\\\\page.jsx\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                // autoSize={true}\n                onChange: (e)=>setDescription(e.target.value),\n                // style={{ height: \"100%\", resize: \"none\" }}\n                placeholder: \"Type your description here\",\n                className: \"h-full w-full resize-none border-none text-base font-light\",\n                value: description\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Thapa\\\\Desktop\\\\to-do-list\\\\client\\\\src\\\\components\\\\document\\\\page.jsx\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Thapa\\\\Desktop\\\\to-do-list\\\\client\\\\src\\\\components\\\\document\\\\page.jsx\",\n        lineNumber: 65,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Document, \"B1vMA+hqMSJsfbl1a8JAxwRGA5Y=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch\n    ];\n});\n_c = Document;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Document);\nvar _c;\n$RefreshReg$(_c, \"Document\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2RvY3VtZW50L3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUVtRDtBQUNBO0FBQ0g7QUFDRjtBQUNOO0FBQ2U7QUFDTztBQUNwQztBQUUxQixNQUFNWSxXQUFXOztJQUNmLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHWCwrQ0FBUUE7SUFDbEMsTUFBTSxDQUFDWSxhQUFhQyxlQUFlLEdBQUdiLCtDQUFRQTtJQUM5QyxNQUFNLEVBQUVjLFFBQVEsRUFBRUMsbUJBQW1CLEVBQUUsR0FBR1Ysd0RBQVdBLENBQUMsQ0FBQ1csUUFBVUEsTUFBTUMsSUFBSTtJQUMzRSxNQUFNQyxXQUFXZCx3REFBV0E7SUFFNUIsTUFBTWUsZUFBZTtRQUNuQixNQUFNQyxXQUFXLE1BQU1DLE1BQU0sR0FBc0MsT0FBbkNDLHdCQUFrQyxFQUFDLFNBQU87WUFDeEVHLFFBQVE7WUFDUkMsU0FBUztnQkFDUCxnQkFBZ0I7WUFDbEI7WUFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO2dCQUFFQyxJQUFJZixvQkFBb0JnQixHQUFHO1lBQUM7UUFDckQ7UUFDQSxJQUFJWCxTQUFTWSxFQUFFLEVBQUU7WUFDZmQsU0FBU1osOERBQVVBLENBQUNTLG9CQUFvQmdCLEdBQUc7UUFDN0M7SUFDRjtJQUVBLE1BQU1FLGVBQWU7UUFDbkIsTUFBTUMsTUFBTSxNQUFNMUIsNkNBQUtBLENBQUMyQixHQUFHLENBQUMsR0FBc0MsT0FBbkNiLHdCQUFrQyxFQUFDLFNBQU87WUFDdkVRLElBQUlmLG9CQUFvQmdCLEdBQUc7WUFDM0JLLE9BQU8xQjtZQUNQRTtRQUNGO1FBRUEsSUFBSXNCLENBQUFBLGdCQUFBQSwwQkFBQUEsSUFBS0csVUFBVSxNQUFLLE1BQU07WUFDNUIsT0FBT0MsTUFBTTtRQUNmO1FBQ0EsTUFBTUMsVUFBVXpCLFNBQVMwQixNQUFNLENBQzdCLENBQUNDLE1BQVFBLElBQUlWLEdBQUcsS0FBS2hCLG9CQUFvQmdCLEdBQUc7UUFFOUNRLFFBQVFHLElBQUksQ0FBQztZQUFFWixJQUFJZixvQkFBb0JnQixHQUFHO1lBQUVLLE9BQU8xQjtZQUFPRTtRQUFZO1FBQ3RFTSxTQUFTWCwrREFBV0EsQ0FBQ2dDO0lBQ3ZCO0lBRUF4QyxnREFBU0EsQ0FBQztRQUNSLElBQ0VXLFdBQVVLLGdDQUFBQSwwQ0FBQUEsb0JBQXFCcUIsS0FBSyxLQUNwQ3hCLGlCQUFnQkcsZ0NBQUFBLDBDQUFBQSxvQkFBcUJILFdBQVcsR0FDaEQ7WUFDQXFCO1FBQ0Y7SUFDRixHQUFHO1FBQUN2QjtRQUFPRTtLQUFZO0lBRXZCYixnREFBU0EsQ0FBQztRQUNSLElBQUlnQixxQkFBcUI7WUFDdkJKLFNBQVNJLGdDQUFBQSwwQ0FBQUEsb0JBQXFCcUIsS0FBSztZQUNuQ3ZCLGVBQWVFLGdDQUFBQSwwQ0FBQUEsb0JBQXFCSCxXQUFXO1FBQ2pEO0lBQ0YsR0FBRztRQUFDRztLQUFvQjtJQUV4QixxQkFDRSw4REFBQzRCO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUN6QywyREFBS0E7d0JBQ0p5QyxXQUFVO3dCQUNWQyxPQUFPbkM7d0JBQ1BvQyxVQUFVLENBQUNDLElBQU1wQyxTQUFTb0MsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO3dCQUN4Q0ksYUFBWTs7Ozs7O2tDQUVkLDhEQUFDcEQsOEZBQWNBO3dCQUNiK0MsV0FBVTt3QkFDVk0sU0FBUy9COzs7Ozs7Ozs7Ozs7MEJBR2IsOERBQUNsQix5REFBYUE7Ozs7OzBCQUNkLDhEQUFDMEM7Z0JBQUlDLFdBQVU7Ozs7OzswQkFDZiw4REFBQ087Z0JBQ0Msa0JBQWtCO2dCQUNsQkwsVUFBVSxDQUFDQyxJQUFNbEMsZUFBZWtDLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSztnQkFDOUMsNkNBQTZDO2dCQUM3Q0ksYUFBWTtnQkFDWkwsV0FBVTtnQkFDVkMsT0FBT2pDOzs7Ozs7Ozs7Ozs7QUFJZjtHQTlFTUg7O1FBR3NDSixvREFBV0E7UUFDcENELG9EQUFXQTs7O0tBSnhCSztBQWdGTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9kb2N1bWVudC9wYWdlLmpzeD8zNzM5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IHsgRGVsZXRlT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFRleHRDdXN0b21pemUgZnJvbSBcIi4uL3VpL3RleHRDdXN0b21pemVcIjtcclxuaW1wb3J0IFRleHRBcmVhIGZyb20gXCJhbnRkL2VzL2lucHV0L1RleHRBcmVhXCI7XHJcbmltcG9ydCBJbnB1dCBmcm9tIFwiYW50ZC9lcy9pbnB1dC9JbnB1dFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgZGVsZXRlVG9kbywgc2V0VG9kb0xpc3QgfSBmcm9tIFwiQC9zdG9yZS9zbGljZXMvdG9kb1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBEb2N1bWVudCA9ICgpID0+IHtcclxuICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2Rlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IHsgdG9kb0xpc3QsIGN1cnJlbnRUb2RvU2VsZWN0ZWQgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudG9kbyk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICBjb25zdCBoYW5kbGVEZWxldGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NFUlZFUl9VUkx9dG9kb2AsIHtcclxuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgaWQ6IGN1cnJlbnRUb2RvU2VsZWN0ZWQuX2lkIH0pLFxyXG4gICAgfSk7XHJcbiAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgZGlzcGF0Y2goZGVsZXRlVG9kbyhjdXJyZW50VG9kb1NlbGVjdGVkLl9pZCkpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVVwZGF0ZSA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnB1dChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TRVJWRVJfVVJMfXRvZG9gLCB7XHJcbiAgICAgIGlkOiBjdXJyZW50VG9kb1NlbGVjdGVkLl9pZCxcclxuICAgICAgdGl0bGU6IGlucHV0LFxyXG4gICAgICBkZXNjcmlwdGlvbixcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChyZXM/LnN0YXR1c1RleHQgIT09IFwiT0tcIikge1xyXG4gICAgICByZXR1cm4gYWxlcnQoXCJFcnJvciBlZGl0aW5nXCIpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbmV3TGlzdCA9IHRvZG9MaXN0LmZpbHRlcihcclxuICAgICAgKGVsZSkgPT4gZWxlLl9pZCAhPT0gY3VycmVudFRvZG9TZWxlY3RlZC5faWQsXHJcbiAgICApO1xyXG4gICAgbmV3TGlzdC5wdXNoKHsgaWQ6IGN1cnJlbnRUb2RvU2VsZWN0ZWQuX2lkLCB0aXRsZTogaW5wdXQsIGRlc2NyaXB0aW9uIH0pO1xyXG4gICAgZGlzcGF0Y2goc2V0VG9kb0xpc3QobmV3TGlzdCkpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoXHJcbiAgICAgIGlucHV0ICE9PSBjdXJyZW50VG9kb1NlbGVjdGVkPy50aXRsZSB8fFxyXG4gICAgICBkZXNjcmlwdGlvbiAhPT0gY3VycmVudFRvZG9TZWxlY3RlZD8uZGVzY3JpcHRpb25cclxuICAgICkge1xyXG4gICAgICBoYW5kbGVVcGRhdGUoKTtcclxuICAgIH1cclxuICB9LCBbaW5wdXQsIGRlc2NyaXB0aW9uXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoY3VycmVudFRvZG9TZWxlY3RlZCkge1xyXG4gICAgICBzZXRJbnB1dChjdXJyZW50VG9kb1NlbGVjdGVkPy50aXRsZSk7XHJcbiAgICAgIHNldERlc2NyaXB0aW9uKGN1cnJlbnRUb2RvU2VsZWN0ZWQ/LmRlc2NyaXB0aW9uKTtcclxuICAgIH1cclxuICB9LCBbY3VycmVudFRvZG9TZWxlY3RlZF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGgtZnVsbCBmbGV4LWdyb3cgZmxleC1jb2wgaXRlbXMtc3RhcnQgZ2FwLTUgcm91bmRlZC1tZCBib3JkZXItWzFweF0gYm9yZGVyLVsjZTVlM2UzXSBiZy13aGl0ZSBweC0xMCBweS04XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZpdCBib3JkZXItbm9uZSB0ZXh0LTR4bCBmb250LXNlbWlib2xkIHRleHQtWyMxQjFCMUJdXCJcclxuICAgICAgICAgIHZhbHVlPXtpbnB1dH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SW5wdXQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJOZXcgQWRkaXRpb25cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPERlbGV0ZU91dGxpbmVkXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciB0ZXh0LXhsIGhvdmVyOnRleHQtcmVkLTcwMFwiXHJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVEZWxldGV9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxUZXh0Q3VzdG9taXplIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1bMXB4XSB3LWZ1bGwgYmctYmxhY2tcIj48L2Rpdj5cclxuICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgLy8gYXV0b1NpemU9e3RydWV9XHJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXREZXNjcmlwdGlvbihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgLy8gc3R5bGU9e3sgaGVpZ2h0OiBcIjEwMCVcIiwgcmVzaXplOiBcIm5vbmVcIiB9fVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIGRlc2NyaXB0aW9uIGhlcmVcIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImgtZnVsbCB3LWZ1bGwgcmVzaXplLW5vbmUgYm9yZGVyLW5vbmUgdGV4dC1iYXNlIGZvbnQtbGlnaHRcIlxyXG4gICAgICAgIHZhbHVlPXtkZXNjcmlwdGlvbn1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEb2N1bWVudDtcclxuIl0sIm5hbWVzIjpbIkRlbGV0ZU91dGxpbmVkIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlRleHRDdXN0b21pemUiLCJUZXh0QXJlYSIsIklucHV0IiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsImRlbGV0ZVRvZG8iLCJzZXRUb2RvTGlzdCIsImF4aW9zIiwiRG9jdW1lbnQiLCJpbnB1dCIsInNldElucHV0IiwiZGVzY3JpcHRpb24iLCJzZXREZXNjcmlwdGlvbiIsInRvZG9MaXN0IiwiY3VycmVudFRvZG9TZWxlY3RlZCIsInN0YXRlIiwidG9kbyIsImRpc3BhdGNoIiwiaGFuZGxlRGVsZXRlIiwicmVzcG9uc2UiLCJmZXRjaCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TRVJWRVJfVVJMIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaWQiLCJfaWQiLCJvayIsImhhbmRsZVVwZGF0ZSIsInJlcyIsInB1dCIsInRpdGxlIiwic3RhdHVzVGV4dCIsImFsZXJ0IiwibmV3TGlzdCIsImZpbHRlciIsImVsZSIsInB1c2giLCJkaXYiLCJjbGFzc05hbWUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwib25DbGljayIsInRleHRhcmVhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/document/page.jsx\n"));

/***/ })

});
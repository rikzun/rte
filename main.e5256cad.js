"use strict";
(self["webpackChunkrte"] = self["webpackChunkrte"] || []).push([["main"],{

/***/ "./src/App.style.scss":
/*!****************************!*\
  !*** ./src/App.style.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   App: () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var _App_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.style.scss */ "./src/App.style.scss");
/* harmony import */ var _components_InputField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/InputField */ "./src/components/InputField/index.ts");
/* harmony import */ var _cypher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cypher */ "./src/cypher.ts");
/* harmony import */ var _utils_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @utils/react */ "./src/utils/react.ts");





function App() {
    var input = (0,_utils_react__WEBPACK_IMPORTED_MODULE_4__.useStorage)('');
    var mod = (0,_cypher__WEBPACK_IMPORTED_MODULE_3__.getMod)(input.value.split(' ')[0].trimEnd());
    var indexes = function() {
        var arr = [];
        if (mod == null || !input.value) return arr;
        var _arr_;
        for(var i = 0; ((_arr_ = arr[arr.length - 1]) !== null && _arr_ !== void 0 ? _arr_ : 0) < input.value.length + 100; i++){
            var index = (0,_cypher__WEBPACK_IMPORTED_MODULE_3__.getIndex)(mod, i);
            var _arr_1;
            var previous = (_arr_1 = arr[arr.length - 1]) !== null && _arr_1 !== void 0 ? _arr_1 : 0;
            arr.push(index + previous);
        }
        return arr;
    }();
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "container",
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_InputField__WEBPACK_IMPORTED_MODULE_2__.InputField, {
                value: input.value,
                onChange: input.set,
                indexes: indexes
            }, void 0, false, {
                fileName: "/home/runner/work/rte/rte/src/App.tsx",
                lineNumber: 26,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "output",
                children: indexes.map(function(v) {
                    return input.value[v];
                })
            }, void 0, false, {
                fileName: "/home/runner/work/rte/rte/src/App.tsx",
                lineNumber: 32,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "/home/runner/work/rte/rte/src/App.tsx",
        lineNumber: 25,
        columnNumber: 9
    }, this);
}


/***/ }),

/***/ "./src/components/InputField/InputFIeld.style.sass":
/*!*********************************************************!*\
  !*** ./src/components/InputField/InputFIeld.style.sass ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/InputField/InputField.tsx":
/*!**************************************************!*\
  !*** ./src/components/InputField/InputField.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InputField: () => (/* binding */ InputField)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _InputFIeld_style_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InputFIeld.style.sass */ "./src/components/InputField/InputFIeld.style.sass");
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}



function InputField(param) {
    var _this = this;
    var value = param.value, onChange = param.onChange, indexes = param.indexes;
    var onInput = function(e) {
        var target = e.target;
        onChange(target.outerText);
    };
    var onPaste = function(e) {
        e.preventDefault();
        var target = e.target;
        var text = e.clipboardData.getData("text/plain");
        target.innerText = text;
        onChange(text);
    };
    var letters = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function() {
        var lastIndex = indexes[indexes.length - 1];
        if (!lastIndex) return [];
        var arr = [];
        var lt = value.split('');
        for(var i = 0; i <= lastIndex; i++){
            var currentLt = lt[i];
            var props = {
                key: i,
                className: indexes.includes(i) ? 'tt' : ''
            };
            switch(currentLt){
                case '\n':
                    arr.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", _object_spread({}, props), void 0, false, {
                        fileName: "/home/runner/work/rte/rte/src/components/InputField/InputField.tsx",
                        lineNumber: 41,
                        columnNumber: 37
                    }, _this));
                    break;
                default:
                    arr.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", _object_spread_props(_object_spread({}, props), {
                        children: "a"
                    }), void 0, false, {
                        fileName: "/home/runner/work/rte/rte/src/components/InputField/InputField.tsx",
                        lineNumber: 42,
                        columnNumber: 35
                    }, _this));
                    break;
            }
        }
        return arr;
    }, [
        value,
        indexes
    ]);
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "input-container",
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "input-field",
                onInput: onInput,
                onPaste: onPaste,
                contentEditable: true,
                spellCheck: false
            }, void 0, false, {
                fileName: "/home/runner/work/rte/rte/src/components/InputField/InputField.tsx",
                lineNumber: 51,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "overlay",
                children: letters
            }, void 0, false, {
                fileName: "/home/runner/work/rte/rte/src/components/InputField/InputField.tsx",
                lineNumber: 59,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "/home/runner/work/rte/rte/src/components/InputField/InputField.tsx",
        lineNumber: 50,
        columnNumber: 9
    }, this);
}


/***/ }),

/***/ "./src/components/InputField/index.ts":
/*!********************************************!*\
  !*** ./src/components/InputField/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InputField: () => (/* reexport safe */ _InputField__WEBPACK_IMPORTED_MODULE_0__.InputField)
/* harmony export */ });
/* harmony import */ var _InputField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputField */ "./src/components/InputField/InputField.tsx");



/***/ }),

/***/ "./src/cypher.ts":
/*!***********************!*\
  !*** ./src/cypher.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getIndex: () => (/* binding */ getIndex),
/* harmony export */   getMod: () => (/* binding */ getMod)
/* harmony export */ });
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function getMod(word) {
    var sum = _to_consumable_array(word).reduce(function(acc, v) {
        acc += v.codePointAt(0);
        return acc;
    }, 0);
    return Math.log(sum) * sum >>> 0 << 2;
}
function getIndex(mod, index) {
    var a = mod + (index + 1) >>> 0 | 0;
    var b = a << Math.PI >>> 0 | 0;
    var c = a >> b >> 9 >>> 0 | 0;
    var final = String(a + b + c);
    var num = Number(final[final.length - 1]);
    return num | 1;
}


/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.tsx");



var container = document.getElementById("root");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_App__WEBPACK_IMPORTED_MODULE_2__.App, {}, void 0, false, {
    fileName: "/home/runner/work/rte/rte/src/index.tsx",
    lineNumber: 7,
    columnNumber: 13
}, undefined));


/***/ }),

/***/ "./src/utils/react.ts":
/*!****************************!*\
  !*** ./src/utils/react.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useStorage: () => (/* binding */ useStorage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}

function useStorage(value) {
    var _useState = _sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value), 2), state = _useState[0], setState = _useState[1];
    return {
        value: state,
        set: setState
    };
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__("./src/index.tsx")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.e5256cad.js.map
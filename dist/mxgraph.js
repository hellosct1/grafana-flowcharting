/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/mxgraph.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/mxgraph/javascript/dist/build.js":
/*!*******************************************************!*\
  !*** ./node_modules/mxgraph/javascript/dist/build.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/***/ }),

/***/ "./src/mxgraph.js":
/*!************************!*\
  !*** ./src/mxgraph.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar mxgraph = __webpack_require__(/*! mxgraph */ \"./node_modules/mxgraph/javascript/dist/build.js\")({\n  mxImageBasePath: \"/public/plugins/agenty-flowcharting-panel/libs/mxgraph/javascript/src/images\",\n  mxBasePath: \"/public/plugins/agenty-flowcharting-panel/libs/mxgraph/javascript/dist\"\n});\n\nvar Mx =\n/*#__PURE__*/\nfunction (_BaseObject) {\n  _inherits(Mx, _BaseObject);\n\n  function Mx(bidon) {\n    var _this;\n\n    _classCallCheck(this, Mx);\n\n    if (options === undefined) {\n      throw new TypeError(\"Options not defined in Hero.\");\n    }\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Mx).call(this, bidon));\n    _this._mxGraph = mxgraph.mxGraph;\n    _this._mxShape = mxgraph.mxShape;\n    _this._mxConnectionConstraint = mxgraph.mxConnectionConstraint;\n    _this._mxPoint = mxgraph.mxPoint;\n    _this._mxPolyline = mxgraph.mxPolyline;\n    _this._mxEvent = mxgraph.mxEvent;\n    _this._mxRubberband = mxgraph.mxRubberband;\n    _this._mxCellState = mxgraph.mxCellState;\n\n    _this.init();\n\n    return _this;\n  }\n\n  _createClass(Mx, [{\n    key: \"init\",\n    value: function init() {\n      this._mxGraph.prototype.getAllConnectionConstraints = function (terminal, source) {\n        if (terminal != null && terminal.shape != null) {\n          if (terminal.shape.stencil != null) {\n            if (terminal.shape.stencil != null) {\n              return terminal.shape.stencil.constraints;\n            }\n          } else if (terminal.shape.constraints != null) {\n            return terminal.shape.constraints;\n          }\n        }\n\n        return null;\n      };\n    }\n  }, {\n    key: \"draw\",\n    value: function draw() {\n      var container = document.getElementById(\"this.containerDivId\");\n      this._mxShape.prototype.constraints = [new mxConnectionConstraint(new mxPoint(0.25, 0), true), new mxConnectionConstraint(new mxPoint(0.5, 0), true), new mxConnectionConstraint(new mxPoint(0.75, 0), true), new mxConnectionConstraint(new mxPoint(0, 0.25), true), new mxConnectionConstraint(new mxPoint(0, 0.5), true), new mxConnectionConstraint(new mxPoint(0, 0.75), true), new mxConnectionConstraint(new mxPoint(1, 0.25), true), new mxConnectionConstraint(new mxPoint(1, 0.5), true), new mxConnectionConstraint(new mxPoint(1, 0.75), true), new mxConnectionConstraint(new mxPoint(0.25, 1), true), new mxConnectionConstraint(new mxPoint(0.5, 1), true), new mxConnectionConstraint(new mxPoint(0.75, 1), true)]; // Edges have no connection points\n\n      this._mxPolyline.prototype.constraints = null; // Disables the built-in context menu\n\n      this._mxEvent.disableContextMenu(container); // Creates the graph inside the given container\n\n\n      var graph = new mxGraph(container);\n      graph.setConnectable(true); // Enables connect preview for the default edge style\n\n      graph.connectionHandler.createEdgeState = function (me) {\n        var edge = graph.createEdge(null, null, null, null, null);\n        return new mxCellState(this.graph.view, edge, this.graph.getCellStyle(edge));\n      }; // Specifies the default edge style\n\n\n      graph.getStylesheet().getDefaultEdgeStyle()['edgeStyle'] = 'orthogonalEdgeStyle'; // Enables rubberband selection\n\n      new mxRubberband(graph); // Gets the default parent for inserting new cells. This\n      // is normally the first child of the root (ie. layer 0).\n\n      var parent = graph.getDefaultParent(); // Adds cells to the model in a single step\n\n      graph.getModel().beginUpdate();\n\n      try {\n        var v1 = graph.insertVertex(parent, null, 'Hello,', 20, 20, 80, 30);\n        var v2 = graph.insertVertex(parent, null, 'World!', 200, 150, 80, 30);\n        var e1 = graph.insertEdge(parent, null, '', v1, v2);\n      } finally {\n        // Updates the display\n        graph.getModel().endUpdate();\n      }\n    }\n  }]);\n\n  return Mx;\n}(BaseObject);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Mx);\n\n//# sourceURL=webpack:///./src/mxgraph.js?");

/***/ })

/******/ });
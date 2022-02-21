(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/2dcanvas/Geometies/Base.ts":
/*!********************************************!*\
  !*** ./src/app/2dcanvas/Geometies/Base.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_NORMAL_DRAW_SETTING": () => (/* binding */ DEFAULT_NORMAL_DRAW_SETTING),
/* harmony export */   "DEFAULT_HIGHLIGHT_DRAW_SETTING": () => (/* binding */ DEFAULT_HIGHLIGHT_DRAW_SETTING),
/* harmony export */   "GeometryBase": () => (/* binding */ GeometryBase)
/* harmony export */ });
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
const DEFAULT_NORMAL_DRAW_SETTING = {
  fillStyle: "rgba(255, 255, 0, 1)",
  lineWidth: 1,
  strokeStyle: "rgba(0, 0, 0, 1)"
};
const DEFAULT_HIGHLIGHT_DRAW_SETTING = {
  strokeStyle: "rgba(255, 0, 0, 255)",
  lineWidth: 5,
  fillStyle: "rgba(255, 255, 255, 1)"
};
class GeometryBase {
  constructor() {
    this.brushConfig = {
      normal: DEFAULT_NORMAL_DRAW_SETTING,
      highlight: DEFAULT_HIGHLIGHT_DRAW_SETTING
    };
    this.highlight = false;
    this.checked = false;
    this.index = -1;
  }
  setNormalPaintStyle(options) {
    this.brushConfig.normal = __spreadValues(__spreadValues({}, this.brushConfig.normal), options);
  }
  setHighlightPaintStyle(options) {
    this.brushConfig.highlight = __spreadValues(__spreadValues({}, this.brushConfig.highlight), options);
  }
  getPaintStyle() {
    return this.isHighlight() ? this.brushConfig.highlight : this.brushConfig.normal;
  }
  setShapeParameter(x, y) {
  }
  setAssistSetting(options) {
  }
  moveTo(x, y) {
  }
  moveDist(distX, distY) {
  }
  choose(x, y) {
  }
  getOffset(x, y) {
  }
  draw(ctx) {
  }
  validate() {
  }
  setIndex(index = -1) {
    this.index = index;
  }
  getIndex() {
    return this.index;
  }
  setChecked() {
    this.checked = true;
  }
  setUnChecked() {
    this.checked = false;
  }
  isChecked() {
    return this.checked;
  }
  setHighlight() {
    this.highlight = true;
  }
  setUnHighlight() {
    this.highlight = false;
  }
  isHighlight() {
    return this.highlight;
  }
}


/***/ }),

/***/ "./src/app/2dcanvas/Geometies/Circle.ts":
/*!**********************************************!*\
  !*** ./src/app/2dcanvas/Geometies/Circle.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Circle": () => (/* binding */ Circle)
/* harmony export */ });
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base */ "./src/app/2dcanvas/Geometies/Base.ts");

class Circle extends _Base__WEBPACK_IMPORTED_MODULE_0__.GeometryBase {
  constructor(x, y, r = 0) {
    super();
    this.x = x;
    this.y = y;
    this.r = r;
  }
  setShapeParameter(x, y) {
    this.r = Math.sqrt(Math.pow(this.x - x, 2) + Math.pow(this.y - y, 2));
  }
  moveDist(distX, distY) {
    this.x += distX;
    this.y += distY;
  }
  getOffset(x, y) {
    return {
      distX: x - this.x,
      distY: y - this.y
    };
  }
  choose(x, y) {
    return Math.pow(this.x - x, 2) + Math.pow(this.y - y, 2) < Math.pow(this.r, 2);
  }
  draw(ctx) {
    const brushConfig = this.getPaintStyle();
    ctx.beginPath();
    ctx.fillStyle = brushConfig.fillStyle;
    ctx.strokeStyle = brushConfig.strokeStyle;
    ctx.lineWidth = brushConfig.lineWidth;
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
  }
  validate() {
    return this.r >= 5;
  }
}


/***/ }),

/***/ "./src/app/2dcanvas/Geometies/Line.ts":
/*!********************************************!*\
  !*** ./src/app/2dcanvas/Geometies/Line.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Line": () => (/* binding */ Line)
/* harmony export */ });
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base */ "./src/app/2dcanvas/Geometies/Base.ts");

class Line extends _Base__WEBPACK_IMPORTED_MODULE_0__.GeometryBase {
  constructor(x, y) {
    super();
    this.path = [{ x, y }];
    this.smooth = false;
    this.lineWidth = 10;
    this.samplingIntervalNumber = 2;
  }
  setShapeParameter(x, y) {
    const lastPoint = this.path[this.path.length - 1];
    if (Math.abs(lastPoint.x - x) > 1 || Math.abs(lastPoint.y - y) > 1) {
      this.path.push({ x, y });
    }
  }
  setAssistSetting({ smooth }) {
    this.smooth = smooth;
  }
  moveTo(x, y) {
    const startPoint = this.path[0];
    const startPoinTGeometryOffsetX = x - startPoint.x;
    const startPoinTGeometryOffsetY = y - startPoint.y;
    for (let i = 0; i < this.path.length; i++) {
      this.path[i].x += startPoinTGeometryOffsetX;
      this.path[i].y += startPoinTGeometryOffsetY;
    }
  }
  moveDist(distX, distY) {
    for (let i = 0; i < this.path.length; i++) {
      this.path[i].x += distX;
      this.path[i].y += distY;
    }
  }
  choose(x, y) {
    const round = this.lineWidth > 10 ? Math.pow(this.lineWidth, 2) : 30;
    for (let i = 0; i < this.path.length; i++) {
      if (Math.pow(this.path[i].x - x, 2) + Math.pow(this.path[i].y - y, 2) < round) {
        return true;
      }
    }
    return false;
  }
  getOffset(x, y) {
    return {
      distX: x - this.path[0].x,
      distY: y - this.path[0].y
    };
  }
  draw(ctx) {
    const brushConfig = this.getPaintStyle();
    ctx.fillStyle = `rgba(0, 0, 0, 0)`;
    ctx.strokeStyle = brushConfig.strokeStyle;
    ctx.lineWidth = brushConfig.lineWidth;
    ctx.lineJoin = "round";
    if (!this.smooth) {
      ctx.beginPath();
      for (let i = 0; i < this.path.length; i++) {
        ctx.lineTo(this.path[i].x, this.path[i].y);
      }
      ctx.stroke();
      ctx.closePath();
      return;
    }
    if (this.path.length > 3) {
      ctx.beginPath();
      ctx.moveTo(this.path[0].x, this.path[0].y);
      let i = 1;
      for (i = 1; i < this.path.length - 2; i += this.samplingIntervalNumber) {
        if (this.path[i] && this.path[i + 1]) {
          const xc = (this.path[i].x + this.path[i + 1].x) / 2;
          const yc = (this.path[i].y + this.path[i + 1].y) / 2;
          ctx.quadraticCurveTo(this.path[i].x, this.path[i].y, xc, yc);
        }
      }
      if (i >= this.path.length - 2) {
        i = this.path.length - 2;
      }
      ctx.quadraticCurveTo(this.path[i].x, this.path[i].y, this.path[i + 1].x, this.path[i + 1].y);
      ctx.stroke();
      ctx.closePath();
      return;
    }
  }
  validate() {
    return this.path.length >= 5;
  }
}


/***/ }),

/***/ "./src/app/2dcanvas/Geometies/Rect.ts":
/*!********************************************!*\
  !*** ./src/app/2dcanvas/Geometies/Rect.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Rect": () => (/* binding */ Rect)
/* harmony export */ });
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base */ "./src/app/2dcanvas/Geometies/Base.ts");

class Rect extends _Base__WEBPACK_IMPORTED_MODULE_0__.GeometryBase {
  constructor(x, y, w, h) {
    super();
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  setShapeParameter(x, y) {
    this.w = x - this.x;
    this.h = y - this.y;
  }
  moveDist(distX, distY) {
    this.x += distX;
    this.y += distY;
  }
  getOffset(x, y) {
    return {
      distX: x - this.x,
      distY: y - this.y
    };
  }
  choose(x, y) {
    const absoluteMiddleX = this.x + this.w / 2;
    const absoluteMiddleY = this.y + this.h / 2;
    return Math.abs(x - absoluteMiddleX) < Math.abs(this.w / 2) && Math.abs(y - absoluteMiddleY) < Math.abs(this.h / 2);
  }
  draw(ctx) {
    const brushConfig = this.getPaintStyle();
    ctx.beginPath();
    ctx.fillStyle = brushConfig.fillStyle;
    ctx.strokeStyle = brushConfig.strokeStyle;
    ctx.lineWidth = brushConfig.lineWidth;
    ctx.rect(this.x, this.y, this.w, this.h);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
  }
  validate() {
    return Math.abs(this.w) >= 5 && Math.abs(this.h) >= 5;
  }
}


/***/ }),

/***/ "./src/app/2dcanvas/Scene/CanvasController.ts":
/*!****************************************************!*\
  !*** ./src/app/2dcanvas/Scene/CanvasController.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CanvasContoller": () => (/* binding */ CanvasContoller)
/* harmony export */ });
/* harmony import */ var _utils_Events_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Events.class */ "./src/app/utils/Events.class.ts");
/* harmony import */ var _Scene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Scene */ "./src/app/2dcanvas/Scene/Scene.ts");


const KEYCODE_DELETE = 46;
const KEYCODE_CTRL = 17;
class CanvasContoller extends _Scene__WEBPACK_IMPORTED_MODULE_1__.Scene {
  constructor(canvasElement) {
    super(canvasElement);
    this.variablesPool;
    this.eventsHandler;
  }
  init() {
    this.variablesPool = {};
    this.eventsHandler = new _utils_Events_class__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.initScene();
    this.initCanvasContoller();
  }
  initCanvasContoller() {
    this.bindRightClickEvent();
    this.bindMousedownEvent();
    this.bindMousemoveEvent();
    this.bindMouseupEvent();
    this.bindKeydownEvent();
    this.bindKeyupEvent();
    this.bindBlurEvent();
  }
  isOnlyCtrlKeydown() {
    return this.keyboardState.keys.length === 1 && this.keyboardState.keys[0] === KEYCODE_CTRL;
  }
  bindRightClickEvent() {
    this.canvasElement.addEventListener("contextmenu", (evte) => {
    });
  }
  bindMousedownEvent() {
    this.canvasElement.addEventListener("mousedown", (evte) => {
      evte.stopPropagation();
      this.mouseState.down = true;
      this.mouseState.x = evte.offsetX;
      this.mouseState.y = evte.offsetY;
      Promise.resolve().then(() => {
        if (evte.button !== 0) {
          return;
        }
        if (this.config.state === _Scene__WEBPACK_IMPORTED_MODULE_1__.ECanvasState.DRAWING) {
          this.mouseState.selectedIndexs = [];
          if (this.geometryConstructor) {
            this.variablesPool.geometryTarget = new this.geometryConstructor(this.mouseState.x, this.mouseState.y);
            this.variablesPool.geometryTarget.setNormalPaintStyle(this.toolState.paintBrushState);
            this.variablesPool.geometryTarget.setAssistSetting({ smooth: this.toolState.smooth });
          }
          this.mouseState.pointTarget = this.variablesPool.geometryTarget;
          this.variablesPool.geometryTarget = null;
          this.clearCanvas(this.offScreen.cacheCanvasCtx);
          for (let i = 0; i < this.geometries.length; i++) {
            this.geometries[i].setUnHighlight();
            this.geometries[i].setUnChecked();
            this.geometries[i].draw(this.offScreen.cacheCanvasCtx);
          }
          this.config.dirty = true;
          return;
        }
        if (this.config.state === _Scene__WEBPACK_IMPORTED_MODULE_1__.ECanvasState.SELECT) {
          this.variablesPool.targetResult = this.findClickedTarget(this.mouseState.x, this.mouseState.y);
          if (!this.variablesPool.targetResult.geometryTarget) {
            this.mouseState.selectedIndexs = [];
            for (let i = 0; i < this.geometries.length; i++) {
              this.geometries[i].setUnChecked();
              this.geometries[i].setUnHighlight();
            }
            this.mouseState.toolTarget = this.tools.boxSelector;
            this.mouseState.toolTarget.setStartCoordinate(this.mouseState.x, this.mouseState.y);
          } else {
            const inIndex = this.mouseState.selectedIndexs.indexOf(this.variablesPool.targetResult.geometryTargetIndex);
            if (this.mouseState.selectedIndexs.length >= 2 && inIndex >= 0) {
              if (this.isOnlyCtrlKeydown()) {
                if (inIndex >= 0) {
                  this.mouseState.selectedIndexs.splice(inIndex, 1);
                  this.variablesPool.targetResult.geometryTarget.setUnChecked();
                  this.variablesPool.targetResult.geometryTarget.setUnHighlight();
                } else {
                  this.mouseState.selectedIndexs.push(this.variablesPool.targetResult.geometryTargetIndex);
                  this.variablesPool.targetResult.geometryTarget.setChecked();
                  this.variablesPool.targetResult.geometryTarget.setHighlight();
                }
              }
            } else {
              if (this.isOnlyCtrlKeydown()) {
                if (inIndex >= 0) {
                  this.mouseState.selectedIndexs.splice(inIndex, 1);
                  this.variablesPool.targetResult.geometryTarget.setUnChecked();
                  this.variablesPool.targetResult.geometryTarget.setUnHighlight();
                } else {
                  this.mouseState.selectedIndexs.push(this.variablesPool.targetResult.geometryTargetIndex);
                  this.variablesPool.targetResult.geometryTarget.setChecked();
                  this.variablesPool.targetResult.geometryTarget.setHighlight();
                }
              } else {
                this.mouseState.selectedIndexs = [this.variablesPool.targetResult.geometryTargetIndex];
                for (let i = 0; i < this.geometries.length; i++) {
                  if (this.mouseState.selectedIndexs.includes(i)) {
                    continue;
                  }
                  this.geometries[i].setUnChecked();
                  this.geometries[i].setUnHighlight();
                }
                this.variablesPool.targetResult.geometryTarget.setChecked();
                this.variablesPool.targetResult.geometryTarget.setHighlight();
              }
            }
          }
          this.clearCanvas(this.offScreen.cacheCanvasCtx);
          for (let i = 0; i < this.geometries.length; i++) {
            if (this.mouseState.selectedIndexs.includes(i)) {
              continue;
            }
            this.geometries[i].draw(this.offScreen.cacheCanvasCtx);
          }
          this.config.dirty = true;
        }
      });
    });
  }
  bindMousemoveEvent() {
    document.addEventListener("mousemove", (evte) => {
      evte.stopPropagation();
      if (!this.mouseState.down || this.isOnlyCtrlKeydown()) {
        return;
      }
      if (evte.clientX - this.config.canvasRect.left <= 0 || evte.clientY - this.config.canvasRect.top <= 0 || evte.clientX >= this.config.canvasRect.right || evte.clientY >= this.config.canvasRect.bottom) {
        return;
      }
      this.variablesPool.moveDistX = evte.offsetX - this.mouseState.x;
      this.variablesPool.moveDistY = evte.offsetY - this.mouseState.y;
      this.mouseState.x = evte.offsetX;
      this.mouseState.y = evte.offsetY;
      this.mouseState.isMove = true;
      if (this.config.state === _Scene__WEBPACK_IMPORTED_MODULE_1__.ECanvasState.DRAWING && this.mouseState.pointTarget) {
        this.mouseState.pointTarget.setShapeParameter(this.mouseState.x, this.mouseState.y);
      }
      if (this.config.state === _Scene__WEBPACK_IMPORTED_MODULE_1__.ECanvasState.SELECT) {
        if (this.mouseState.toolTarget) {
          this.mouseState.toolTarget.setShapeParameter(this.mouseState.x, this.mouseState.y);
        }
        for (let i = this.mouseState.selectedIndexs.length - 1; i >= 0; i--) {
          const geometry = this.geometries[this.mouseState.selectedIndexs[i]];
          geometry.moveDist(this.variablesPool.moveDistX, this.variablesPool.moveDistY);
        }
      }
    });
  }
  bindMouseupEvent() {
    document.addEventListener("mouseup", (evte) => {
      evte.stopPropagation();
      if (this.mouseState.down) {
        this.mouseState.isMove = false;
        this.mouseState.down = false;
        if (this.config.state === _Scene__WEBPACK_IMPORTED_MODULE_1__.ECanvasState.DRAWING && this.mouseState.pointTarget) {
          if (this.mouseState.pointTarget.validate()) {
            this.mouseState.pointTarget.setIndex(this.geometries.length);
            this.geometries.push(this.mouseState.pointTarget);
          }
          this.mouseState.pointTarget = null;
          this.clearCanvas(this.offScreen.cacheCanvasCtx);
          for (let i = 0; i < this.geometries.length; i++) {
            this.geometries[i].draw(this.offScreen.cacheCanvasCtx);
          }
          this.config.dirty = false;
          return;
        }
        if (this.config.state === _Scene__WEBPACK_IMPORTED_MODULE_1__.ECanvasState.SELECT) {
          if (this.mouseState.toolTarget) {
            this.mouseState.toolTarget.restoreStatus();
            this.mouseState.toolTarget = null;
            this.clearCanvas(this.canvasCtx);
            this.paintWith(this.canvasCtx, this.offScreen.cacheCanvasElement);
          }
          this.mouseState.pointTarget = null;
          this.config.dirty = false;
        }
      }
    });
  }
  bindBlurEvent() {
    window.addEventListener("blur", (evte) => {
      this.keyboardState.keys = [];
      this.config.dirty = false;
    });
  }
  bindKeydownEvent() {
    document.addEventListener("keydown", (evte) => {
      if (!this.keyboardState.keys.includes(evte.keyCode)) {
        this.keyboardState.keys.push(evte.keyCode);
      }
      if (evte.keyCode === KEYCODE_DELETE && this.mouseState.selectedIndexs.length) {
        const geometries = [];
        for (let i = 0; i < this.geometries.length; i++) {
          if (!this.mouseState.selectedIndexs.includes(i)) {
            geometries.push(this.geometries[i]);
          }
        }
        this.geometries = geometries;
        this.clearCanvas(this.offScreen.cacheCanvasCtx);
        for (let i = 0; i < this.geometries.length; i++) {
          this.geometries[i].draw(this.offScreen.cacheCanvasCtx);
        }
        this.config.dirty = true;
        this.mouseState.selectedIndexs = [];
      }
    });
  }
  bindKeyupEvent() {
    document.addEventListener("keyup", (evte) => {
      const opKeyIndex = this.keyboardState.keys.indexOf(evte.keyCode);
      if (opKeyIndex >= 0) {
        this.keyboardState.keys.splice(opKeyIndex, 1);
      }
      if (!this.mouseState.down && !this.keyboardState.keys.length) {
        this.config.dirty = false;
      }
    });
  }
}


/***/ }),

/***/ "./src/app/2dcanvas/Scene/Scene.ts":
/*!*****************************************!*\
  !*** ./src/app/2dcanvas/Scene/Scene.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ECanvasState": () => (/* binding */ ECanvasState),
/* harmony export */   "DEFAULT_CANVAS_DRAW_SETTING": () => (/* binding */ DEFAULT_CANVAS_DRAW_SETTING),
/* harmony export */   "Scene": () => (/* binding */ Scene)
/* harmony export */ });
/* harmony import */ var _Tools_BoxSelect_Tool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Tools/BoxSelect.Tool */ "./src/app/2dcanvas/Tools/BoxSelect.Tool.ts");
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};

var ECanvasState = /* @__PURE__ */ ((ECanvasState2) => {
  ECanvasState2["DRAWING"] = "DRAWING";
  ECanvasState2["SELECT"] = "SELECT";
  return ECanvasState2;
})(ECanvasState || {});
const DEFAULT_CANVAS_DRAW_SETTING = {
  strokeStyle: "#000000",
  fillStyle: "#ffff00",
  lineWidth: 4
};
class Scene {
  constructor(canvasElement) {
    if (!canvasElement || canvasElement.nodeName.toUpperCase() !== "CANVAS") {
      return;
    }
    this.geometryConstructor;
    this.geometries;
    this.config;
    this.tools;
    this.toolState;
    this.mouseState;
    this.keyboardState;
    this.offScreen;
    this.canvasCtx;
    this.canvasElement = canvasElement;
  }
  initScene() {
    this.bindWindowResizeEvent();
    this.geometryConstructor = null;
    this.geometries = [];
    this.config = {
      state: "DRAWING" /* DRAWING */,
      canvasRect: this.createCanvasRect(),
      dirty: false,
      reDrawByResizeTimer: null
    };
    this.tools = this.initTools();
    this.toolState = this.initToolState();
    this.mouseState = this.initMouseState();
    this.keyboardState = this.initKeyboardState();
    this.offScreen = this.createOffScreenCanvas();
    this.canvasCtx = this.canvasElement.getContext("2d");
    this.setCanvasElementRect();
    this.continuedRender();
  }
  bindWindowResizeEvent() {
    window.addEventListener("resize", (evte) => {
      window.clearTimeout(this.config.reDrawByResizeTimer);
      this.config.reDrawByResizeTimer = window.setTimeout(() => {
        this.config.canvasRect = this.createCanvasRect();
        this.setCanvasElementRect();
        this.clearCanvas(this.canvasCtx);
        for (let i = this.geometries.length - 1; i >= 0; i--) {
          this.geometries[i].draw(this.canvasCtx);
        }
      }, 300);
    });
  }
  setCanvasElementRect(rect = {}) {
    const canvasRect = __spreadValues(__spreadValues({}, this.config.canvasRect), rect);
    this.canvasElement.tabIndex = 0;
    this.canvasElement.width = canvasRect.width;
    this.canvasElement.height = canvasRect.height;
    this.offScreen.cacheCanvasElement.width = canvasRect.width;
    this.offScreen.cacheCanvasElement.height = canvasRect.height;
  }
  initToolState() {
    const paintBrushState = __spreadValues({}, DEFAULT_CANVAS_DRAW_SETTING);
    return {
      paintBrushState,
      smooth: false
    };
  }
  initTools() {
    const boxSelector = new _Tools_BoxSelect_Tool__WEBPACK_IMPORTED_MODULE_0__.BoxSelectTool(0, 0, 0, 0);
    return {
      boxSelector
    };
  }
  initMouseState() {
    return {
      x: -1,
      y: -1,
      targetOffsetX: 0,
      targetOffsetY: 0,
      selectedIndexs: [],
      down: false,
      pointTarget: null,
      toolTarget: null,
      isMove: false
    };
  }
  initKeyboardState() {
    return {
      keys: []
    };
  }
  createCanvasRect() {
    const domRect = this.canvasElement.getBoundingClientRect();
    return domRect.toJSON();
  }
  createOffScreenCanvas() {
    const cacheCanvasElement = document.createElement("canvas");
    const offScreen = {
      cacheCanvasElement,
      cacheCanvasCtx: cacheCanvasElement.getContext("2d")
    };
    return offScreen;
  }
  continuedRender() {
    window.requestAnimationFrame(() => {
      if (!this.config.dirty) {
        this.continuedRender();
        return;
      }
      this.clearCanvas(this.canvasCtx);
      this.paintWith(this.canvasCtx, this.offScreen.cacheCanvasElement);
      if (this.mouseState.toolTarget) {
        this.mouseState.toolTarget.draw(this.canvasCtx);
      }
      if (this.mouseState.pointTarget) {
        this.mouseState.pointTarget.draw(this.canvasCtx);
      }
      for (let i = this.mouseState.selectedIndexs.length - 1; i >= 0; i--) {
        const geometry = this.geometries[this.mouseState.selectedIndexs[i]];
        geometry.draw(this.canvasCtx);
      }
      this.continuedRender();
    });
  }
  rerenderWith(ctx, geometries = []) {
    const _geometries = geometries.length ? geometries : this.geometries;
    this.clearCanvas(ctx);
    for (let i = 0; i < _geometries.length; i++) {
      _geometries[i].draw(ctx);
    }
  }
  rerender() {
    this.rerenderWith(this.offScreen.cacheCanvasCtx);
    this.rerenderWith(this.canvasCtx);
  }
  getToolState() {
    return JSON.parse(JSON.stringify(this.toolState));
  }
  setToolState(toolState) {
    this.toolState = JSON.parse(JSON.stringify(toolState));
  }
  setGeometryConstructor(geometryConstructor) {
    this.geometryConstructor = geometryConstructor;
  }
  toggleStateToDrawing() {
    this.config.state = "DRAWING" /* DRAWING */;
  }
  toggleStateToSelect() {
    this.config.state = "SELECT" /* SELECT */;
  }
  clearAllGeometries() {
    this.geometries = [];
  }
  removeGeometry(index) {
    if (String(+index) === "NaN" || index < 0) {
      return;
    }
    this.geometries.splice(index, 1);
  }
  addGeometry(geometry) {
    this.geometries.push(geometry);
  }
  pushGeometries(geometries) {
    geometries.forEach((item) => {
      this.geometries.push(item);
    });
  }
  clearCanvas(ctx) {
    ctx.clearRect(0, 0, this.config.canvasRect.width, this.config.canvasRect.height);
  }
  paintWith(ctx, sourceCanvas, x = 0, y = 0) {
    ctx.drawImage(sourceCanvas, x, y, this.config.canvasRect.width, this.config.canvasRect.height);
  }
  findClickedTarget(x, y) {
    let geometryTarget = null;
    let geometryTargetIndex = -1;
    for (let i = this.geometries.length - 1; i >= 0; i--) {
      if (this.geometries[i].choose(x, y) && !geometryTarget) {
        geometryTarget = this.geometries[i];
        geometryTargetIndex = i;
        break;
      }
    }
    return {
      geometryTarget,
      geometryTargetIndex
    };
  }
}


/***/ }),

/***/ "./src/app/2dcanvas/Tools/BoxSelect.Tool.ts":
/*!**************************************************!*\
  !*** ./src/app/2dcanvas/Tools/BoxSelect.Tool.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoxSelectTool": () => (/* binding */ BoxSelectTool)
/* harmony export */ });
const drawDashLine = (ctx, [x1, y1], [x2, y2], step = 5) => {
  const x = x2 - x1;
  const y = y2 - y1;
  const count = Math.floor(Math.sqrt(x * x + y * y) / step);
  const xv = x / count;
  const yv = y / count;
  for (let i = 0; i < count; i++) {
    if (i % 2 === 0) {
      ctx.moveTo(x1, y1);
    } else {
      ctx.lineTo(x1, y1);
    }
    x1 += xv;
    y1 += yv;
  }
  ctx.lineTo(x2, y2);
};
class BoxSelectTool {
  constructor(x, y, w, h) {
    this.brushConfig = {
      fillStyle: "rgba(255, 255, 255, 0)",
      lineWidth: 1,
      strokeStyle: "rgba(0, 0, 0, 1)"
    };
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  setStartCoordinate(x, y) {
    this.x = x + this.brushConfig.lineWidth;
    this.y = y + this.brushConfig.lineWidth;
  }
  restoreStatus() {
    this.x = 0;
    this.y = 0;
    this.w = 0;
    this.h = 0;
  }
  setShapeParameter(x, y) {
    this.w = x - this.x;
    this.h = y - this.y;
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.brushConfig.fillStyle;
    ctx.strokeStyle = this.brushConfig.strokeStyle;
    ctx.lineWidth = this.brushConfig.lineWidth;
    this.drawDashRect(ctx, this.x, this.y, this.w, this.h);
    ctx.closePath();
  }
  drawDashRect(ctx, left, top, width, height, step = 5) {
    drawDashLine(ctx, [left, top], [left + width, top], step);
    ctx.stroke();
    drawDashLine(ctx, [left + width, top], [left + width, top + height], step);
    ctx.stroke();
    drawDashLine(ctx, [left + width, top + height], [left, top + height], step);
    ctx.stroke();
    drawDashLine(ctx, [left, top + height], [left, top], step);
    ctx.stroke();
  }
}


/***/ }),

/***/ "./src/app/utils/Events.class.ts":
/*!***************************************!*\
  !*** ./src/app/utils/Events.class.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EEVENT_NAMESPANCE": () => (/* binding */ EEVENT_NAMESPANCE),
/* harmony export */   "default": () => (/* binding */ Events)
/* harmony export */ });
var EEVENT_NAMESPANCE = /* @__PURE__ */ ((EEVENT_NAMESPANCE2) => {
  EEVENT_NAMESPANCE2["DRAW_START"] = "DRAW_START";
  EEVENT_NAMESPANCE2["DRAW_DOING"] = "DRAW_DOING";
  EEVENT_NAMESPANCE2["DRAW_FINISHED"] = "DRAW_FINISHED";
  EEVENT_NAMESPANCE2["SELECT"] = "SELECT";
  EEVENT_NAMESPANCE2["CANCEL_SELECT"] = "CANCEL_SELECT";
  EEVENT_NAMESPANCE2["DELETE_ONE"] = "DELETE_ONE";
  return EEVENT_NAMESPANCE2;
})(EEVENT_NAMESPANCE || {});
class Events {
  constructor() {
    this.events = {};
  }
  on(name, callback) {
    if (typeof name !== "string" || !name || typeof callback !== "function") {
      return;
    }
    if (!this.events[name]) {
      this.events[name] = [];
    }
    this.events[name].push(callback);
  }
  emit(name) {
    if (!arguments.length || typeof name !== "string" || !this.events[name]) {
      return;
    }
    const params = Array.from(arguments).splice(1);
    this.events[name].forEach((item, index) => {
      item(...params);
    });
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************************!*\
  !*** ./src/app/2dcanvas/main.ts ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Circle": () => (/* binding */ Circle),
/* harmony export */   "Line": () => (/* binding */ Line),
/* harmony export */   "Rect": () => (/* binding */ Rect),
/* harmony export */   "CanvasContoller": () => (/* binding */ CanvasContoller),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Scene_CanvasController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Scene/CanvasController */ "./src/app/2dcanvas/Scene/CanvasController.ts");
/* harmony import */ var _Geometies_Circle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Geometies/Circle */ "./src/app/2dcanvas/Geometies/Circle.ts");
/* harmony import */ var _Geometies_Line__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Geometies/Line */ "./src/app/2dcanvas/Geometies/Line.ts");
/* harmony import */ var _Geometies_Rect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Geometies/Rect */ "./src/app/2dcanvas/Geometies/Rect.ts");




const Circle = _Geometies_Circle__WEBPACK_IMPORTED_MODULE_1__.Circle;
const Line = _Geometies_Line__WEBPACK_IMPORTED_MODULE_2__.Line;
const Rect = _Geometies_Rect__WEBPACK_IMPORTED_MODULE_3__.Rect;
const CanvasContoller = _Scene_CanvasController__WEBPACK_IMPORTED_MODULE_0__.CanvasContoller;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Scene_CanvasController__WEBPACK_IMPORTED_MODULE_0__.CanvasContoller);

})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=2dcanvas.js.map
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

/***/ "./lib/src/2dcanvas/Geometies/Base.ts":
/*!********************************************!*\
  !*** ./lib/src/2dcanvas/Geometies/Base.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GeometryBase = exports.DEFAULT_HIGHLIGHT_DRAW_SETTING = exports.DEFAULT_NORMAL_DRAW_SETTING = void 0;
exports.DEFAULT_NORMAL_DRAW_SETTING = {
    fillStyle: 'rgba(255, 255, 0, 1)',
    lineWidth: 1,
    strokeStyle: 'rgba(0, 0, 0, 1)',
};
exports.DEFAULT_HIGHLIGHT_DRAW_SETTING = {
    strokeStyle: 'rgba(255, 0, 0, 255)',
    lineWidth: 5,
    fillStyle: 'rgba(255, 255, 255, 1)',
};
var GeometryBase = /** @class */ (function () {
    function GeometryBase() {
        this.brushConfig = {
            normal: exports.DEFAULT_NORMAL_DRAW_SETTING,
            highlight: exports.DEFAULT_HIGHLIGHT_DRAW_SETTING,
        };
        this.highlight = false;
        this.checked = false;
        this.index = -1;
        this.id = null;
    }
    GeometryBase.prototype.setNormalPaintStyle = function (options) {
        this.brushConfig.normal = __assign(__assign({}, this.brushConfig.normal), options);
    };
    GeometryBase.prototype.setHighlightPaintStyle = function (options) {
        this.brushConfig.highlight = __assign(__assign({}, this.brushConfig.highlight), options);
    };
    GeometryBase.prototype.getPaintStyle = function () {
        return this.isHighlight() ? this.brushConfig.highlight : this.brushConfig.normal;
    };
    GeometryBase.prototype.setShapeParameter = function (x, y) {
        /* ... */
    };
    GeometryBase.prototype.setAssistSetting = function (options) {
        /* ... */
    };
    GeometryBase.prototype.moveTo = function (x, y) {
        /* ... */
    };
    GeometryBase.prototype.moveDist = function (distX, distY) {
        /* ... */
    };
    GeometryBase.prototype.choose = function (x, y) {
        /* ... */
    };
    GeometryBase.prototype.getOffset = function (x, y) {
        /* ... */
    };
    GeometryBase.prototype.draw = function (ctx) {
        /* ... */
    };
    GeometryBase.prototype.validate = function () {
        /* ... */
    };
    GeometryBase.prototype.setIndex = function (index) {
        if (index === void 0) { index = -1; }
        this.index = index;
    };
    GeometryBase.prototype.getIndex = function () {
        return this.index;
    };
    GeometryBase.prototype.setChecked = function () {
        this.checked = true;
    };
    GeometryBase.prototype.setUnChecked = function () {
        this.checked = false;
    };
    GeometryBase.prototype.isChecked = function () {
        return this.checked;
    };
    GeometryBase.prototype.setHighlight = function () {
        this.highlight = true;
    };
    GeometryBase.prototype.setUnHighlight = function () {
        this.highlight = false;
    };
    GeometryBase.prototype.isHighlight = function () {
        return this.highlight;
    };
    GeometryBase.prototype.setId = function (id) {
        this.id = id;
    };
    GeometryBase.prototype.getId = function () {
        return this.id;
    };
    return GeometryBase;
}());
exports.GeometryBase = GeometryBase;


/***/ }),

/***/ "./lib/src/2dcanvas/Geometies/Circle.ts":
/*!**********************************************!*\
  !*** ./lib/src/2dcanvas/Geometies/Circle.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Circle = void 0;
var Base_1 = __webpack_require__(/*! ./Base */ "./lib/src/2dcanvas/Geometies/Base.ts");
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(x, y, r) {
        if (r === void 0) { r = 0; }
        var _this = _super.call(this) || this;
        _this.x = x;
        _this.y = y;
        _this.r = r;
        return _this;
    }
    Circle.prototype.setShapeParameter = function (x, y) {
        this.r = Math.sqrt(Math.pow(this.x - x, 2) + Math.pow(this.y - y, 2));
    };
    Circle.prototype.moveDist = function (distX, distY) {
        this.x += distX;
        this.y += distY;
    };
    Circle.prototype.getOffset = function (x, y) {
        return {
            distX: x - this.x,
            distY: y - this.y,
        };
    };
    Circle.prototype.choose = function (x, y) {
        return Math.pow(this.x - x, 2) + Math.pow(this.y - y, 2) < Math.pow(this.r, 2);
    };
    Circle.prototype.draw = function (ctx) {
        var brushConfig = this.getPaintStyle();
        ctx.beginPath();
        ctx.fillStyle = brushConfig.fillStyle;
        ctx.strokeStyle = brushConfig.strokeStyle;
        ctx.lineWidth = brushConfig.lineWidth;
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
    };
    Circle.prototype.validate = function () {
        return this.r >= 5;
    };
    return Circle;
}(Base_1.GeometryBase));
exports.Circle = Circle;


/***/ }),

/***/ "./lib/src/2dcanvas/Geometies/Line.ts":
/*!********************************************!*\
  !*** ./lib/src/2dcanvas/Geometies/Line.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Line = void 0;
var Base_1 = __webpack_require__(/*! ./Base */ "./lib/src/2dcanvas/Geometies/Base.ts");
var Line = /** @class */ (function (_super) {
    __extends(Line, _super);
    function Line(x, y) {
        var _this = _super.call(this) || this;
        _this.path = [{ x: x, y: y }];
        _this.smooth = false;
        _this.lineWidth = 10;
        _this.samplingIntervalNumber = 2;
        return _this;
    }
    Line.prototype.setShapeParameter = function (x, y) {
        var lastPoint = this.path[this.path.length - 1];
        if (Math.abs(lastPoint.x - x) > 1 || Math.abs(lastPoint.y - y) > 1) {
            this.path.push({ x: x, y: y });
        }
    };
    Line.prototype.setAssistSetting = function (setting) {
        if (typeof setting.smooth !== 'undefined') {
            this.smooth = !!setting.smooth;
        }
    };
    Line.prototype.moveTo = function (x, y) {
        var startPoint = this.path[0];
        var startPoinTGeometryOffsetX = x - startPoint.x;
        var startPoinTGeometryOffsetY = y - startPoint.y;
        for (var i = 0; i < this.path.length; i++) {
            this.path[i].x += startPoinTGeometryOffsetX;
            this.path[i].y += startPoinTGeometryOffsetY;
        }
    };
    Line.prototype.moveDist = function (distX, distY) {
        for (var i = 0; i < this.path.length; i++) {
            this.path[i].x += distX;
            this.path[i].y += distY;
        }
    };
    Line.prototype.choose = function (x, y) {
        var round = this.lineWidth > 10 ? Math.pow(this.lineWidth, 2) : 30;
        for (var i = 0; i < this.path.length; i++) {
            if (Math.pow(this.path[i].x - x, 2) + Math.pow(this.path[i].y - y, 2) < round) {
                return true;
            }
        }
        return false;
    };
    Line.prototype.getOffset = function (x, y) {
        return {
            distX: x - this.path[0].x,
            distY: y - this.path[0].y,
        };
    };
    Line.prototype.draw = function (ctx) {
        var brushConfig = this.getPaintStyle();
        ctx.fillStyle = "rgba(0, 0, 0, 0)";
        ctx.strokeStyle = brushConfig.strokeStyle;
        ctx.lineWidth = brushConfig.lineWidth;
        ctx.lineJoin = 'round';
        /*
            ???????????????
         */
        if (!this.smooth) {
            ctx.beginPath();
            for (var i = 0; i < this.path.length; i++) {
                ctx.lineTo(this.path[i].x, this.path[i].y);
            }
            ctx.stroke();
            ctx.closePath();
            return;
        }
        if (this.path.length > 3) {
            ctx.beginPath();
            ctx.moveTo(this.path[0].x, this.path[0].y);
            var i = 1;
            // let samplingIntervalNumber: number = this.path.length >= this.samplingIntervalNumber ? this.samplingIntervalNumber : 1
            for (i = 1; i < this.path.length - 2; i += this.samplingIntervalNumber) {
                if (this.path[i] && this.path[i + 1]) {
                    var xc = (this.path[i].x + this.path[i + 1].x) / 2;
                    var yc = (this.path[i].y + this.path[i + 1].y) / 2;
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
    };
    Line.prototype.validate = function () {
        return this.path.length >= 5;
    };
    return Line;
}(Base_1.GeometryBase));
exports.Line = Line;


/***/ }),

/***/ "./lib/src/2dcanvas/Geometies/Rect.ts":
/*!********************************************!*\
  !*** ./lib/src/2dcanvas/Geometies/Rect.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Rect = void 0;
var Base_1 = __webpack_require__(/*! ./Base */ "./lib/src/2dcanvas/Geometies/Base.ts");
var Rect = /** @class */ (function (_super) {
    __extends(Rect, _super);
    function Rect(x, y, w, h) {
        var _this = _super.call(this) || this;
        _this.x = x;
        _this.y = y;
        _this.w = w;
        _this.h = h;
        return _this;
    }
    Rect.prototype.setShapeParameter = function (x, y) {
        this.w = x - this.x;
        this.h = y - this.y;
    };
    Rect.prototype.moveDist = function (distX, distY) {
        this.x += distX;
        this.y += distY;
    };
    Rect.prototype.getOffset = function (x, y) {
        return {
            distX: x - this.x,
            distY: y - this.y,
        };
    };
    Rect.prototype.choose = function (x, y) {
        var absoluteMiddleX = this.x + this.w / 2;
        var absoluteMiddleY = this.y + this.h / 2;
        return Math.abs(x - absoluteMiddleX) < Math.abs(this.w / 2) && Math.abs(y - absoluteMiddleY) < Math.abs(this.h / 2);
    };
    Rect.prototype.draw = function (ctx) {
        var brushConfig = this.getPaintStyle();
        ctx.beginPath();
        ctx.fillStyle = brushConfig.fillStyle;
        ctx.strokeStyle = brushConfig.strokeStyle;
        ctx.lineWidth = brushConfig.lineWidth;
        ctx.rect(this.x, this.y, this.w, this.h);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
    };
    Rect.prototype.validate = function () {
        return Math.abs(this.w) >= 5 && Math.abs(this.h) >= 5;
    };
    return Rect;
}(Base_1.GeometryBase));
exports.Rect = Rect;


/***/ }),

/***/ "./lib/src/2dcanvas/Scene/GeoCanvas.ts":
/*!*********************************************!*\
  !*** ./lib/src/2dcanvas/Scene/GeoCanvas.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GeoCanvas = void 0;
var EventBus_1 = __importDefault(__webpack_require__(/*! ../../utils/EventBus */ "./lib/src/utils/EventBus.ts"));
var Scene_1 = __webpack_require__(/*! ./Scene */ "./lib/src/2dcanvas/Scene/Scene.ts");
var KEYCODE_DELETE = 46;
var KEYCODE_CTRL = 17;
var GeoCanvas = /** @class */ (function (_super) {
    __extends(GeoCanvas, _super);
    function GeoCanvas(canvasElement) {
        var _this = _super.call(this, canvasElement) || this;
        _this.variablesPool = new Map();
        _this.eventsHandler = EventBus_1.default;
        _this.variablesPool.set('mouseWheelEventHandler', _this.mouseWheelEventHandler.bind(_this));
        return _this;
    }
    GeoCanvas.prototype.init = function () {
        this.initScene();
        this.initGeoCanvas();
    };
    GeoCanvas.prototype.initGeoCanvas = function () {
        this.bindRightClickEvent();
        this.bindMousedownEvent();
        this.bindMousemoveEvent();
        this.bindMouseupEvent();
        this.bindMouseWheelEvent();
        this.bindKeydownEvent();
        this.bindKeyupEvent();
        this.bindBlurEvent();
    };
    GeoCanvas.prototype.isOnlyCtrlKeydown = function () {
        return this.keyboardState.keys.length === 1 && this.keyboardState.keys[0] === KEYCODE_CTRL;
    };
    GeoCanvas.prototype.bindRightClickEvent = function () {
        this.canvasElement.addEventListener('contextmenu', function (evte) {
            // evte.preventDefault()
        });
    };
    GeoCanvas.prototype.bindMousedownEvent = function () {
        var _this = this;
        this.canvasElement.addEventListener('mousedown', function (evte) {
            evte.stopPropagation();
            _this.mouseState.down = true;
            _this.mouseState.x = evte.offsetX;
            _this.mouseState.y = evte.offsetY;
            Promise.resolve().then(function () {
                if (evte.button !== 0) {
                    return;
                }
                /* ???????????? */
                if (_this.config.state === Scene_1.ECanvasState.DRAWING) {
                    var geometryTarget = null;
                    _this.mouseState.selectedIndexs = [];
                    /* ?????????????????? */
                    if (_this.geometryConstructor) {
                        geometryTarget = new _this.geometryConstructor(_this.mouseState.x, _this.mouseState.y);
                        // geometryTarget.setNormalPaintStyle(this.drawSetting.paintBrushState)
                        geometryTarget.setAssistSetting({ smooth: _this.drawSetting.smooth });
                    }
                    /* ??????????????????????????????????????????????????????  */
                    _this.mouseState.pointTarget = geometryTarget;
                    /* ?????????????????? */
                    _this.clearCanvas(_this.offScreen.cacheCanvasCtx);
                    for (var i = 0; i < _this.geometries.length; i++) {
                        _this.geometries[i].setUnHighlight();
                        _this.geometries[i].setUnChecked();
                        _this.geometries[i].draw(_this.offScreen.cacheCanvasCtx);
                    }
                    /* ... */
                    _this.config.dirty = true;
                    return;
                }
                /* ???????????? */
                if (_this.config.state === Scene_1.ECanvasState.SELECT) {
                    /* ??????????????????????????????????????????????????? */
                    var targetResult = _this.findClickedTarget(_this.mouseState.x, _this.mouseState.y);
                    if (!targetResult.geometryTarget) {
                        /*
                            ???????????????????????????
                                ?????????????????????????????????
                                ????????????????????????"????????????"??????
                         */
                        _this.mouseState.selectedIndexs = [];
                        for (var i = 0; i < _this.geometries.length; i++) {
                            _this.geometries[i].setUnChecked();
                            _this.geometries[i].setUnHighlight();
                        }
                        _this.mouseState.toolTarget = _this.tools.boxSelector;
                        _this.mouseState.toolTarget.setStartCoordinate(_this.mouseState.x, _this.mouseState.y);
                    }
                    else {
                        var inIndex = _this.mouseState.selectedIndexs.indexOf(targetResult.geometryTargetIndex);
                        if (_this.mouseState.selectedIndexs.length >= 2 && inIndex >= 0) {
                            /* ????????????????????????????????????????????? */
                            if (_this.isOnlyCtrlKeydown()) {
                                _this.mouseState.selectedIndexs.splice(inIndex, 1);
                                targetResult.geometryTarget.setUnChecked();
                                targetResult.geometryTarget.setUnHighlight();
                            }
                        }
                        else {
                            if (_this.isOnlyCtrlKeydown()) {
                                /* (???)?????? Ctrl ??????????????????/?????????????????????????????? */
                                if (inIndex >= 0) {
                                    _this.mouseState.selectedIndexs.splice(inIndex, 1);
                                    targetResult.geometryTarget.setUnChecked();
                                    targetResult.geometryTarget.setUnHighlight();
                                }
                                else {
                                    _this.mouseState.selectedIndexs.push(targetResult.geometryTargetIndex);
                                    targetResult.geometryTarget.setChecked();
                                    targetResult.geometryTarget.setHighlight();
                                }
                            }
                            else {
                                /* ????????????????????????????????????????????? */
                                _this.mouseState.selectedIndexs = [targetResult.geometryTargetIndex];
                                for (var i = 0; i < _this.geometries.length; i++) {
                                    if (_this.mouseState.selectedIndexs[0] === i) {
                                        continue;
                                    }
                                    _this.geometries[i].setUnChecked();
                                    _this.geometries[i].setUnHighlight();
                                }
                                targetResult.geometryTarget.setChecked();
                                targetResult.geometryTarget.setHighlight();
                            }
                        }
                    }
                    /* ?????????????????? */
                    _this.clearCanvas(_this.offScreen.cacheCanvasCtx);
                    for (var i = 0; i < _this.geometries.length; i++) {
                        if (_this.mouseState.selectedIndexs.includes(i)) {
                            continue;
                        }
                        _this.geometries[i].draw(_this.offScreen.cacheCanvasCtx);
                    }
                    /* ... */
                    _this.config.dirty = true;
                }
            });
        });
    };
    GeoCanvas.prototype.bindMousemoveEvent = function () {
        var _this = this;
        document.addEventListener('mousemove', function (evte) {
            evte.stopPropagation();
            if (!_this.mouseState.down || _this.isOnlyCtrlKeydown()) {
                return;
            }
            if (evte.clientX - _this.config.canvasRect.left <= 0 ||
                evte.clientY - _this.config.canvasRect.top <= 0 ||
                evte.clientX >= _this.config.canvasRect.right ||
                evte.clientY >= _this.config.canvasRect.bottom) {
                return;
            }
            _this.variablesPool.set('moveDistX', evte.offsetX - _this.mouseState.x);
            _this.variablesPool.set('moveDistY', evte.offsetY - _this.mouseState.y);
            _this.mouseState.x = evte.offsetX;
            _this.mouseState.y = evte.offsetY;
            _this.mouseState.isMove = true;
            /* ???????????? */
            if (_this.config.state === Scene_1.ECanvasState.DRAWING && _this.mouseState.pointTarget) {
                _this.mouseState.pointTarget.setShapeParameter(_this.mouseState.x, _this.mouseState.y);
            }
            /* ???????????? */
            if (_this.config.state === Scene_1.ECanvasState.SELECT) {
                if (_this.mouseState.toolTarget) {
                    _this.mouseState.toolTarget.setShapeParameter(_this.mouseState.x, _this.mouseState.y);
                }
                for (var i = _this.mouseState.selectedIndexs.length - 1; i >= 0; i--) {
                    var geometry = _this.geometries[_this.mouseState.selectedIndexs[i]];
                    geometry.moveDist(_this.variablesPool.get('moveDistX'), _this.variablesPool.get('moveDistY'));
                }
            }
        });
    };
    GeoCanvas.prototype.bindMouseupEvent = function () {
        var _this = this;
        document.addEventListener('mouseup', function (evte) {
            evte.stopPropagation();
            if (_this.mouseState.down) {
                _this.mouseState.isMove = false;
                _this.mouseState.down = false;
                /* ???????????? */
                if (_this.config.state === Scene_1.ECanvasState.DRAWING && _this.mouseState.pointTarget) {
                    /* ????????????????????????????????? */
                    if (_this.mouseState.pointTarget.validate()) {
                        _this.mouseState.pointTarget.setIndex(_this.geometries.length);
                        _this.geometries.push(_this.mouseState.pointTarget);
                    }
                    _this.mouseState.pointTarget = null;
                    /* ?????????????????? */
                    _this.clearCanvas(_this.offScreen.cacheCanvasCtx);
                    for (var i = 0; i < _this.geometries.length; i++) {
                        _this.geometries[i].draw(_this.offScreen.cacheCanvasCtx);
                    }
                    /* ... */
                    _this.config.dirty = false;
                    return;
                }
                /* ???????????? */
                if (_this.config.state === Scene_1.ECanvasState.SELECT) {
                    if (_this.mouseState.toolTarget) {
                        _this.mouseState.toolTarget.restoreStatus();
                        _this.mouseState.toolTarget = null;
                        _this.clearCanvas(_this.canvasCtx);
                        /* ??????????????????????????????????????? */
                        _this.paintWith(_this.canvasCtx, _this.offScreen.cacheCanvasElement);
                    }
                    _this.mouseState.pointTarget = null;
                    /* ... */
                    _this.config.dirty = false;
                }
            }
        });
    };
    GeoCanvas.prototype.bindMouseWheelEvent = function () {
        this.canvasElement.addEventListener('mousewheel', this.variablesPool.get('mouseWheelEventHandler'));
        this.canvasElement.addEventListener('DOMMouseScroll', this.variablesPool.get('mouseWheelEventHandler'));
    };
    GeoCanvas.prototype.bindBlurEvent = function () {
        var _this = this;
        window.addEventListener('blur', function (evte) {
            _this.keyboardState.keys = [];
            _this.config.dirty = false;
        });
    };
    GeoCanvas.prototype.bindKeydownEvent = function () {
        var _this = this;
        document.addEventListener('keydown', function (evte) {
            if (!_this.keyboardState.keys.includes(evte.keyCode)) {
                _this.keyboardState.keys.push(evte.keyCode);
            }
            /* ?????????????????? */
            if (evte.keyCode === KEYCODE_DELETE && _this.mouseState.selectedIndexs.length) {
                var geometries = [];
                for (var i = 0; i < _this.geometries.length; i++) {
                    if (!_this.mouseState.selectedIndexs.includes(i)) {
                        geometries.push(_this.geometries[i]);
                    }
                }
                _this.geometries = geometries;
                _this.clearCanvas(_this.offScreen.cacheCanvasCtx);
                for (var i = 0; i < _this.geometries.length; i++) {
                    _this.geometries[i].draw(_this.offScreen.cacheCanvasCtx);
                }
                _this.config.dirty = true;
                _this.mouseState.selectedIndexs = [];
            }
        });
    };
    GeoCanvas.prototype.bindKeyupEvent = function () {
        var _this = this;
        document.addEventListener('keyup', function (evte) {
            var opKeyIndex = _this.keyboardState.keys.indexOf(evte.keyCode);
            if (opKeyIndex >= 0) {
                _this.keyboardState.keys.splice(opKeyIndex, 1);
            }
            if (!_this.mouseState.down && !_this.keyboardState.keys.length) {
                _this.config.dirty = false;
            }
        });
    };
    GeoCanvas.prototype.mouseWheelEventHandler = function (evte) {
        evte.preventDefault();
    };
    return GeoCanvas;
}(Scene_1.Scene));
exports.GeoCanvas = GeoCanvas;


/***/ }),

/***/ "./lib/src/2dcanvas/Scene/Scene.ts":
/*!*****************************************!*\
  !*** ./lib/src/2dcanvas/Scene/Scene.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Scene = exports.DEFAULT_CANVAS_DRAW_SETTING = exports.ECanvasState = void 0;
var BoxSelect_Tool_1 = __webpack_require__(/*! ../Tools/BoxSelect.Tool */ "./lib/src/2dcanvas/Tools/BoxSelect.Tool.ts");
var ECanvasState;
(function (ECanvasState) {
    ECanvasState["DRAWING"] = "DRAWING";
    ECanvasState["SELECT"] = "SELECT";
})(ECanvasState = exports.ECanvasState || (exports.ECanvasState = {}));
exports.DEFAULT_CANVAS_DRAW_SETTING = {
    strokeStyle: '#000000',
    fillStyle: '#ffff00',
    lineWidth: 2,
};
var Scene = /** @class */ (function () {
    function Scene(canvasElement) {
        if (!canvasElement || canvasElement.nodeName.toUpperCase() !== 'CANVAS') {
            throw new Error("target dom must be a canvas element.");
        }
        this.geometryConstructor;
        this.geometries;
        this.config;
        this.tools;
        this.drawSetting;
        this.mouseState;
        this.keyboardState;
        this.offScreen;
        this.canvasCtx;
        this.canvasElement = canvasElement;
    }
    Scene.prototype.initScene = function () {
        this.bindWindowResizeEvent();
        this.geometryConstructor = null;
        this.geometries = [];
        this.config = {
            state: ECanvasState.DRAWING,
            canvasRect: this.createCanvasRect(),
            dirty: false,
            reDrawByResizeTimer: null,
        };
        this.tools = this.initTools();
        this.drawSetting = this.initDrawSetting();
        this.mouseState = this.initMouseState();
        this.keyboardState = this.initKeyboardState();
        this.offScreen = this.createOffScreenCanvas();
        this.canvasCtx = this.canvasElement.getContext('2d');
        this.setCanvasElementRect();
        this.continuedRender();
    };
    Scene.prototype.bindWindowResizeEvent = function () {
        var _this = this;
        window.addEventListener('resize', function (evte) {
            window.clearTimeout(_this.config.reDrawByResizeTimer);
            _this.config.reDrawByResizeTimer = window.setTimeout(function () {
                _this.config.canvasRect = _this.createCanvasRect();
                _this.setCanvasElementRect();
                /* ?????????????????? */
                _this.clearCanvas(_this.canvasCtx);
                for (var i = _this.geometries.length - 1; i >= 0; i--) {
                    _this.geometries[i].draw(_this.canvasCtx);
                }
            }, 300);
        });
    };
    Scene.prototype.setCanvasElementRect = function (rect) {
        if (rect === void 0) { rect = {}; }
        var canvasRect = __assign(__assign({}, this.config.canvasRect), rect);
        this.canvasElement.tabIndex = 0;
        this.canvasElement.width = canvasRect.width;
        this.canvasElement.height = canvasRect.height;
        this.offScreen.cacheCanvasElement.width = canvasRect.width;
        this.offScreen.cacheCanvasElement.height = canvasRect.height;
    };
    Scene.prototype.initDrawSetting = function () {
        var paintBrushState = __assign({}, exports.DEFAULT_CANVAS_DRAW_SETTING);
        return {
            paintBrushState: paintBrushState,
            smooth: false,
        };
    };
    Scene.prototype.initTools = function () {
        var boxSelector = new BoxSelect_Tool_1.BoxSelectTool(0, 0, 0, 0);
        return {
            boxSelector: boxSelector,
        };
    };
    Scene.prototype.initMouseState = function () {
        return {
            x: -1,
            y: -1,
            targetOffsetX: 0,
            targetOffsetY: 0,
            selectedIndexs: [],
            down: false,
            pointTarget: null,
            toolTarget: null,
            isMove: false,
        };
    };
    Scene.prototype.initKeyboardState = function () {
        return {
            keys: [],
        };
    };
    Scene.prototype.createCanvasRect = function () {
        var domRect = this.canvasElement.getBoundingClientRect();
        return domRect.toJSON();
    };
    Scene.prototype.createOffScreenCanvas = function () {
        var cacheCanvasElement = document.createElement('canvas');
        var offScreen = {
            cacheCanvasElement: cacheCanvasElement,
            cacheCanvasCtx: cacheCanvasElement.getContext('2d'),
        };
        /*
            ??????
         */
        // const tc1 = document.getElementById(`t_c_1`)
        // tc1 && (() => { tc1.innerHTML = '' })()
        // tc1 && (() => { tc1.appendChild(offScreen.cacheCanvasElement) })()
        return offScreen;
    };
    Scene.prototype.continuedRender = function () {
        var _this = this;
        window.requestAnimationFrame(function () {
            if (!_this.config.dirty) {
                _this.continuedRender();
                return;
            }
            _this.clearCanvas(_this.canvasCtx);
            /* ??????????????????????????????????????? */
            _this.paintWith(_this.canvasCtx, _this.offScreen.cacheCanvasElement);
            if (_this.mouseState.toolTarget) {
                _this.mouseState.toolTarget.draw(_this.canvasCtx);
            }
            if (_this.mouseState.pointTarget) {
                _this.mouseState.pointTarget.draw(_this.canvasCtx);
            }
            for (var i = _this.mouseState.selectedIndexs.length - 1; i >= 0; i--) {
                var geometry = _this.geometries[_this.mouseState.selectedIndexs[i]];
                // if (geometry === this.mouseState.pointTarget) {
                //     continue
                // }
                geometry.draw(_this.canvasCtx);
            }
            _this.continuedRender();
        });
    };
    Scene.prototype.rerenderWith = function (ctx, geometries) {
        if (geometries === void 0) { geometries = []; }
        var _geometries = geometries.length ? geometries : this.geometries;
        this.clearCanvas(ctx);
        for (var i = 0; i < _geometries.length; i++) {
            _geometries[i].draw(ctx);
        }
    };
    Scene.prototype.getPixCanvasData = function () {
        return this.canvasCtx.getImageData(this.config.canvasRect.left, this.config.canvasRect.top, this.config.canvasRect.width, this.config.canvasRect.height);
    };
    Scene.prototype.rerender = function () {
        this.rerenderWith(this.offScreen.cacheCanvasCtx);
        this.rerenderWith(this.canvasCtx);
    };
    Scene.prototype.getDrawSetting = function () {
        return JSON.parse(JSON.stringify(this.drawSetting));
    };
    Scene.prototype.setDrawSetting = function (drawSetting) {
        this.drawSetting = JSON.parse(JSON.stringify(drawSetting));
    };
    Scene.prototype.setGeometryConstructor = function (geometryConstructor) {
        this.geometryConstructor = geometryConstructor;
    };
    Scene.prototype.toggleStateToDrawing = function () {
        this.config.state = ECanvasState.DRAWING;
    };
    Scene.prototype.toggleStateToSelect = function () {
        this.config.state = ECanvasState.SELECT;
    };
    Scene.prototype.clearAllGeometries = function () {
        // this.geometries = []
        this.geometries.length = 0;
    };
    Scene.prototype.removeGeometry = function (index) {
        if (String(+index) === 'NaN' || index < 0) {
            return;
        }
        this.geometries.splice(index, 1);
    };
    Scene.prototype.addGeometry = function (geometry) {
        this.geometries.push(geometry);
    };
    Scene.prototype.pushGeometries = function (geometries) {
        var _this = this;
        geometries.forEach(function (item) {
            _this.geometries.push(item);
        });
    };
    Scene.prototype.clearCanvas = function (ctx) {
        ctx.clearRect(0, 0, this.config.canvasRect.width, this.config.canvasRect.height);
    };
    Scene.prototype.paintWith = function (ctx, sourceCanvas, x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        ctx.drawImage(sourceCanvas, x, y, this.config.canvasRect.width, this.config.canvasRect.height);
    };
    Scene.prototype.findClickedTarget = function (x, y) {
        var geometryTarget = null;
        var geometryTargetIndex = -1;
        for (var i = this.geometries.length - 1; i >= 0; i--) {
            if (this.geometries[i].choose(x, y) && !geometryTarget) {
                geometryTarget = this.geometries[i];
                geometryTargetIndex = i;
                break;
            }
        }
        return {
            geometryTarget: geometryTarget,
            geometryTargetIndex: geometryTargetIndex,
        };
    };
    return Scene;
}());
exports.Scene = Scene;


/***/ }),

/***/ "./lib/src/2dcanvas/Tools/BoxSelect.Tool.ts":
/*!**************************************************!*\
  !*** ./lib/src/2dcanvas/Tools/BoxSelect.Tool.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BoxSelectTool = void 0;
var drawDashLine = function (ctx, _a, _b, step) {
    var x1 = _a[0], y1 = _a[1];
    var x2 = _b[0], y2 = _b[1];
    if (step === void 0) { step = 5; }
    var x = x2 - x1;
    var y = y2 - y1;
    var count = Math.floor(Math.sqrt(x * x + y * y) / step);
    var xv = x / count;
    var yv = y / count;
    for (var i = 0; i < count; i++) {
        if (i % 2 === 0) {
            ctx.moveTo(x1, y1);
        }
        else {
            ctx.lineTo(x1, y1);
        }
        x1 += xv;
        y1 += yv;
    }
    ctx.lineTo(x2, y2);
};
var BoxSelectTool = /** @class */ (function () {
    function BoxSelectTool(x, y, w, h) {
        this.brushConfig = {
            fillStyle: 'rgba(255, 255, 255, 0)',
            lineWidth: 0.5,
            strokeStyle: 'rgba(0, 0, 0, 1)',
        };
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    BoxSelectTool.prototype.setStartCoordinate = function (x, y) {
        this.x = x + this.brushConfig.lineWidth;
        this.y = y + this.brushConfig.lineWidth;
    };
    BoxSelectTool.prototype.restoreStatus = function () {
        this.x = 0;
        this.y = 0;
        this.w = 0;
        this.h = 0;
    };
    BoxSelectTool.prototype.setShapeParameter = function (x, y) {
        this.w = x - this.x;
        this.h = y - this.y;
    };
    BoxSelectTool.prototype.draw = function (ctx) {
        ctx.beginPath();
        ctx.fillStyle = this.brushConfig.fillStyle;
        ctx.strokeStyle = this.brushConfig.strokeStyle;
        ctx.lineWidth = this.brushConfig.lineWidth;
        this.drawDashRect(ctx, this.x, this.y, this.w, this.h);
        ctx.closePath();
    };
    BoxSelectTool.prototype.drawDashRect = function (ctx, left, top, width, height, step) {
        if (step === void 0) { step = 5; }
        drawDashLine(ctx, [left, top], [left + width, top], step);
        ctx.stroke();
        drawDashLine(ctx, [left + width, top], [left + width, top + height], step);
        ctx.stroke();
        drawDashLine(ctx, [left + width, top + height], [left, top + height], step);
        ctx.stroke();
        drawDashLine(ctx, [left, top + height], [left, top], step);
        ctx.stroke();
    };
    return BoxSelectTool;
}());
exports.BoxSelectTool = BoxSelectTool;


/***/ }),

/***/ "./lib/src/utils/EventBus.ts":
/*!***********************************!*\
  !*** ./lib/src/utils/EventBus.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var DEFAULT_NS = "stname";
var EventBus = /** @class */ (function () {
    function EventBus() {
        this.handlers = {};
        this.handlers = {};
    }
    EventBus.prototype.on = function (eventName, callback, spaceName) {
        if (spaceName === void 0) { spaceName = DEFAULT_NS; }
        var handlers = this.handlers;
        var sn = spaceName || DEFAULT_NS;
        if (!eventName || typeof eventName !== 'string' || typeof callback !== 'function') {
            return;
        }
        if (!handlers[sn]) {
            handlers[sn] = {};
        }
        if (!handlers[sn][eventName]) {
            handlers[sn][eventName] = [];
        }
        handlers[sn][eventName].push(callback);
    };
    EventBus.prototype.emit = function (eventName, params, spaceName) {
        if (spaceName === void 0) { spaceName = DEFAULT_NS; }
        return __awaiter(this, void 0, void 0, function () {
            var handlers, sn, length, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        handlers = this.handlers;
                        sn = spaceName || DEFAULT_NS;
                        if (!eventName || typeof eventName !== 'string' || !handlers[sn]) {
                            return [2 /*return*/];
                        }
                        length = (handlers[sn][eventName] || []).length;
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < length)) return [3 /*break*/, 4];
                        return [4 /*yield*/, handlers[sn][eventName][i](params)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    EventBus.prototype.subscribe = function (eventName, callback, spaceName) {
        if (spaceName === void 0) { spaceName = DEFAULT_NS; }
        var handlers = this.handlers;
        var sn = spaceName || DEFAULT_NS;
        if (!eventName || typeof eventName !== 'string' || typeof callback !== 'function') {
            return;
        }
        if (!handlers[sn]) {
            handlers[sn] = {};
        }
        handlers[sn][eventName] = callback;
    };
    EventBus.prototype.exec = function (eventName, params, spaceName) {
        if (spaceName === void 0) { spaceName = DEFAULT_NS; }
        return __awaiter(this, void 0, void 0, function () {
            var handlers, sn;
            var _this = this;
            return __generator(this, function (_a) {
                handlers = this.handlers;
                sn = spaceName || DEFAULT_NS;
                return [2 /*return*/, new Promise(function (_) { return __awaiter(_this, void 0, void 0, function () {
                        var errorMsg, fn, res, e_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, , 3]);
                                    errorMsg = null;
                                    if (!eventName || typeof eventName !== 'string') {
                                        errorMsg = new Error("Illegal parameter");
                                    }
                                    if (!handlers[sn]) {
                                        errorMsg = new Error("Unknown namespace");
                                    }
                                    if (!handlers[sn][eventName] || typeof handlers[sn][eventName] !== 'function') {
                                        errorMsg = new Error("Unknown listening function");
                                    }
                                    if (errorMsg) {
                                        _({ error: errorMsg, data: null, __arguments: { eventName: eventName, params: params, spaceName: sn } });
                                        return [2 /*return*/];
                                    }
                                    fn = handlers[sn][eventName];
                                    return [4 /*yield*/, fn(params)];
                                case 1:
                                    res = _a.sent();
                                    _({ error: null, data: res, __arguments: { eventName: eventName, params: params, spaceName: sn } });
                                    return [3 /*break*/, 3];
                                case 2:
                                    e_1 = _a.sent();
                                    _({ error: e_1, data: null, __arguments: { eventName: eventName, params: params, spaceName: sn } });
                                    return [3 /*break*/, 3];
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    EventBus.prototype.clearEvent = function (eventName, spaceName) {
        if (spaceName === void 0) { spaceName = DEFAULT_NS; }
        var handlers = this.handlers;
        var sn = spaceName || DEFAULT_NS;
        if (!eventName || typeof eventName !== 'string' || !handlers[sn]) {
            return;
        }
        delete handlers[sn][eventName];
    };
    EventBus.prototype.clearNameSpace = function (spaceName) {
        if (spaceName === void 0) { spaceName = DEFAULT_NS; }
        var handlers = this.handlers;
        var sn = spaceName || DEFAULT_NS;
        if (!handlers[sn]) {
            return;
        }
        handlers[sn] = {};
    };
    return EventBus;
}());
exports["default"] = new EventBus();


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************************!*\
  !*** ./lib/src/2dcanvas/main.ts ***!
  \**********************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var GeoCanvas_1 = __webpack_require__(/*! ./Scene/GeoCanvas */ "./lib/src/2dcanvas/Scene/GeoCanvas.ts");
var Circle_1 = __webpack_require__(/*! ./Geometies/Circle */ "./lib/src/2dcanvas/Geometies/Circle.ts");
var Line_1 = __webpack_require__(/*! ./Geometies/Line */ "./lib/src/2dcanvas/Geometies/Line.ts");
var Rect_1 = __webpack_require__(/*! ./Geometies/Rect */ "./lib/src/2dcanvas/Geometies/Rect.ts");
exports["default"] = {
    GeoCanvas: GeoCanvas_1.GeoCanvas,
    Geometry: {
        Circle: Circle_1.Circle,
        Line: Line_1.Line,
        Rect: Rect_1.Rect,
    },
};

})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=2dcanvas.js.map
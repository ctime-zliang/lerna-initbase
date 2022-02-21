!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var o=e();for(var n in o)("object"==typeof exports?exports:t)[n]=o[n]}}(this,(function(){return(()=>{"use strict";var t={386:function(t,e){var o=this&&this.__assign||function(){return o=Object.assign||function(t){for(var e,o=1,n=arguments.length;o<n;o++)for(var i in e=arguments[o])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},o.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.GeometryBase=e.DEFAULT_HIGHLIGHT_DRAW_SETTING=e.DEFAULT_NORMAL_DRAW_SETTING=void 0,e.DEFAULT_NORMAL_DRAW_SETTING={fillStyle:"rgba(255, 255, 0, 1)",lineWidth:1,strokeStyle:"rgba(0, 0, 0, 1)"},e.DEFAULT_HIGHLIGHT_DRAW_SETTING={strokeStyle:"rgba(255, 0, 0, 255)",lineWidth:5,fillStyle:"rgba(255, 255, 255, 1)"};var n=function(){function t(){this.brushConfig={normal:e.DEFAULT_NORMAL_DRAW_SETTING,highlight:e.DEFAULT_HIGHLIGHT_DRAW_SETTING},this.highlight=!1,this.checked=!1,this.index=-1}return t.prototype.setNormalPaintStyle=function(t){this.brushConfig.normal=o(o({},this.brushConfig.normal),t)},t.prototype.setHighlightPaintStyle=function(t){this.brushConfig.highlight=o(o({},this.brushConfig.highlight),t)},t.prototype.getPaintStyle=function(){return this.isHighlight()?this.brushConfig.highlight:this.brushConfig.normal},t.prototype.setShapeParameter=function(t,e){},t.prototype.setAssistSetting=function(t){},t.prototype.moveTo=function(t,e){},t.prototype.moveDist=function(t,e){},t.prototype.choose=function(t,e){},t.prototype.getOffset=function(t,e){},t.prototype.draw=function(t){},t.prototype.validate=function(){},t.prototype.setIndex=function(t){void 0===t&&(t=-1),this.index=t},t.prototype.getIndex=function(){return this.index},t.prototype.setChecked=function(){this.checked=!0},t.prototype.setUnChecked=function(){this.checked=!1},t.prototype.isChecked=function(){return this.checked},t.prototype.setHighlight=function(){this.highlight=!0},t.prototype.setUnHighlight=function(){this.highlight=!1},t.prototype.isHighlight=function(){return this.highlight},t}();e.GeometryBase=n},88:function(t,e,o){var n,i=this&&this.__extends||(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});Object.defineProperty(e,"__esModule",{value:!0}),e.Circle=void 0;var s=function(t){function e(e,o,n){void 0===n&&(n=0);var i=t.call(this)||this;return i.x=e,i.y=o,i.r=n,i}return i(e,t),e.prototype.setShapeParameter=function(t,e){this.r=Math.sqrt(Math.pow(this.x-t,2)+Math.pow(this.y-e,2))},e.prototype.moveDist=function(t,e){this.x+=t,this.y+=e},e.prototype.getOffset=function(t,e){return{distX:t-this.x,distY:e-this.y}},e.prototype.choose=function(t,e){return Math.pow(this.x-t,2)+Math.pow(this.y-e,2)<Math.pow(this.r,2)},e.prototype.draw=function(t){var e=this.getPaintStyle();t.beginPath(),t.fillStyle=e.fillStyle,t.strokeStyle=e.strokeStyle,t.lineWidth=e.lineWidth,t.arc(this.x,this.y,this.r,0,2*Math.PI),t.stroke(),t.fill(),t.closePath()},e.prototype.validate=function(){return this.r>=5},e}(o(386).GeometryBase);e.Circle=s},342:function(t,e,o){var n,i=this&&this.__extends||(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});Object.defineProperty(e,"__esModule",{value:!0}),e.Line=void 0;var s=function(t){function e(e,o){var n=t.call(this)||this;return n.path=[{x:e,y:o}],n.smooth=!1,n.lineWidth=10,n.samplingIntervalNumber=2,n}return i(e,t),e.prototype.setShapeParameter=function(t,e){var o=this.path[this.path.length-1];(Math.abs(o.x-t)>1||Math.abs(o.y-e)>1)&&this.path.push({x:t,y:e})},e.prototype.setAssistSetting=function(t){var e=t.smooth;this.smooth=e},e.prototype.moveTo=function(t,e){for(var o=this.path[0],n=t-o.x,i=e-o.y,s=0;s<this.path.length;s++)this.path[s].x+=n,this.path[s].y+=i},e.prototype.moveDist=function(t,e){for(var o=0;o<this.path.length;o++)this.path[o].x+=t,this.path[o].y+=e},e.prototype.choose=function(t,e){for(var o=this.lineWidth>10?Math.pow(this.lineWidth,2):30,n=0;n<this.path.length;n++)if(Math.pow(this.path[n].x-t,2)+Math.pow(this.path[n].y-e,2)<o)return!0;return!1},e.prototype.getOffset=function(t,e){return{distX:t-this.path[0].x,distY:e-this.path[0].y}},e.prototype.draw=function(t){var e=this.getPaintStyle();if(t.fillStyle="rgba(0, 0, 0, 0)",t.strokeStyle=e.strokeStyle,t.lineWidth=e.lineWidth,t.lineJoin="round",!this.smooth){t.beginPath();for(var o=0;o<this.path.length;o++)t.lineTo(this.path[o].x,this.path[o].y);return t.stroke(),void t.closePath()}if(this.path.length>3){for(t.beginPath(),t.moveTo(this.path[0].x,this.path[0].y),o=1,o=1;o<this.path.length-2;o+=this.samplingIntervalNumber)if(this.path[o]&&this.path[o+1]){var n=(this.path[o].x+this.path[o+1].x)/2,i=(this.path[o].y+this.path[o+1].y)/2;t.quadraticCurveTo(this.path[o].x,this.path[o].y,n,i)}return o>=this.path.length-2&&(o=this.path.length-2),t.quadraticCurveTo(this.path[o].x,this.path[o].y,this.path[o+1].x,this.path[o+1].y),t.stroke(),void t.closePath()}},e.prototype.validate=function(){return this.path.length>=5},e}(o(386).GeometryBase);e.Line=s},244:function(t,e,o){var n,i=this&&this.__extends||(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});Object.defineProperty(e,"__esModule",{value:!0}),e.Rect=void 0;var s=function(t){function e(e,o,n,i){var s=t.call(this)||this;return s.x=e,s.y=o,s.w=n,s.h=i,s}return i(e,t),e.prototype.setShapeParameter=function(t,e){this.w=t-this.x,this.h=e-this.y},e.prototype.moveDist=function(t,e){this.x+=t,this.y+=e},e.prototype.getOffset=function(t,e){return{distX:t-this.x,distY:e-this.y}},e.prototype.choose=function(t,e){var o=this.x+this.w/2,n=this.y+this.h/2;return Math.abs(t-o)<Math.abs(this.w/2)&&Math.abs(e-n)<Math.abs(this.h/2)},e.prototype.draw=function(t){var e=this.getPaintStyle();t.beginPath(),t.fillStyle=e.fillStyle,t.strokeStyle=e.strokeStyle,t.lineWidth=e.lineWidth,t.rect(this.x,this.y,this.w,this.h),t.stroke(),t.fill(),t.closePath()},e.prototype.validate=function(){return Math.abs(this.w)>=5&&Math.abs(this.h)>=5},e}(o(386).GeometryBase);e.Rect=s},730:function(t,e,o){var n,i=this&&this.__extends||(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.CanvasContoller=void 0;var r=s(o(98)),a=o(714),h=function(t){function e(e){var o=t.call(this,e)||this;return o.variablesPool,o.eventsHandler,o}return i(e,t),e.prototype.init=function(){this.variablesPool={},this.eventsHandler=new r.default,this.initScene(),this.initCanvasContoller()},e.prototype.initCanvasContoller=function(){this.bindRightClickEvent(),this.bindMousedownEvent(),this.bindMousemoveEvent(),this.bindMouseupEvent(),this.bindKeydownEvent(),this.bindKeyupEvent(),this.bindBlurEvent()},e.prototype.isOnlyCtrlKeydown=function(){return 1===this.keyboardState.keys.length&&17===this.keyboardState.keys[0]},e.prototype.bindRightClickEvent=function(){this.canvasElement.addEventListener("contextmenu",(function(t){}))},e.prototype.bindMousedownEvent=function(){var t=this;this.canvasElement.addEventListener("mousedown",(function(e){e.stopPropagation(),t.mouseState.down=!0,t.mouseState.x=e.offsetX,t.mouseState.y=e.offsetY,Promise.resolve().then((function(){if(0===e.button)if(t.config.state!==a.ECanvasState.DRAWING){if(t.config.state===a.ECanvasState.SELECT){if(t.variablesPool.targetResult=t.findClickedTarget(t.mouseState.x,t.mouseState.y),t.variablesPool.targetResult.geometryTarget){var o=t.mouseState.selectedIndexs.indexOf(t.variablesPool.targetResult.geometryTargetIndex);if(t.mouseState.selectedIndexs.length>=2&&o>=0)t.isOnlyCtrlKeydown()&&(o>=0?(t.mouseState.selectedIndexs.splice(o,1),t.variablesPool.targetResult.geometryTarget.setUnChecked(),t.variablesPool.targetResult.geometryTarget.setUnHighlight()):(t.mouseState.selectedIndexs.push(t.variablesPool.targetResult.geometryTargetIndex),t.variablesPool.targetResult.geometryTarget.setChecked(),t.variablesPool.targetResult.geometryTarget.setHighlight()));else if(t.isOnlyCtrlKeydown())o>=0?(t.mouseState.selectedIndexs.splice(o,1),t.variablesPool.targetResult.geometryTarget.setUnChecked(),t.variablesPool.targetResult.geometryTarget.setUnHighlight()):(t.mouseState.selectedIndexs.push(t.variablesPool.targetResult.geometryTargetIndex),t.variablesPool.targetResult.geometryTarget.setChecked(),t.variablesPool.targetResult.geometryTarget.setHighlight());else{for(t.mouseState.selectedIndexs=[t.variablesPool.targetResult.geometryTargetIndex],n=0;n<t.geometries.length;n++)t.mouseState.selectedIndexs.includes(n)||(t.geometries[n].setUnChecked(),t.geometries[n].setUnHighlight());t.variablesPool.targetResult.geometryTarget.setChecked(),t.variablesPool.targetResult.geometryTarget.setHighlight()}}else{t.mouseState.selectedIndexs=[];for(var n=0;n<t.geometries.length;n++)t.geometries[n].setUnChecked(),t.geometries[n].setUnHighlight();t.mouseState.toolTarget=t.tools.boxSelector,t.mouseState.toolTarget.setStartCoordinate(t.mouseState.x,t.mouseState.y)}for(t.clearCanvas(t.offScreen.cacheCanvasCtx),n=0;n<t.geometries.length;n++)t.mouseState.selectedIndexs.includes(n)||t.geometries[n].draw(t.offScreen.cacheCanvasCtx);t.config.dirty=!0}}else{t.mouseState.selectedIndexs=[],t.geometryConstructor&&(t.variablesPool.geometryTarget=new t.geometryConstructor(t.mouseState.x,t.mouseState.y),t.variablesPool.geometryTarget.setNormalPaintStyle(t.toolState.paintBrushState),t.variablesPool.geometryTarget.setAssistSetting({smooth:t.toolState.smooth})),t.mouseState.pointTarget=t.variablesPool.geometryTarget,t.variablesPool.geometryTarget=null,t.clearCanvas(t.offScreen.cacheCanvasCtx);for(n=0;n<t.geometries.length;n++)t.geometries[n].setUnHighlight(),t.geometries[n].setUnChecked(),t.geometries[n].draw(t.offScreen.cacheCanvasCtx);t.config.dirty=!0}}))}))},e.prototype.bindMousemoveEvent=function(){var t=this;document.addEventListener("mousemove",(function(e){if(e.stopPropagation(),t.mouseState.down&&!t.isOnlyCtrlKeydown()&&!(e.clientX-t.config.canvasRect.left<=0||e.clientY-t.config.canvasRect.top<=0||e.clientX>=t.config.canvasRect.right||e.clientY>=t.config.canvasRect.bottom)&&(t.variablesPool.moveDistX=e.offsetX-t.mouseState.x,t.variablesPool.moveDistY=e.offsetY-t.mouseState.y,t.mouseState.x=e.offsetX,t.mouseState.y=e.offsetY,t.mouseState.isMove=!0,t.config.state===a.ECanvasState.DRAWING&&t.mouseState.pointTarget&&t.mouseState.pointTarget.setShapeParameter(t.mouseState.x,t.mouseState.y),t.config.state===a.ECanvasState.SELECT)){t.mouseState.toolTarget&&t.mouseState.toolTarget.setShapeParameter(t.mouseState.x,t.mouseState.y);for(var o=t.mouseState.selectedIndexs.length-1;o>=0;o--)t.geometries[t.mouseState.selectedIndexs[o]].moveDist(t.variablesPool.moveDistX,t.variablesPool.moveDistY)}}))},e.prototype.bindMouseupEvent=function(){var t=this;document.addEventListener("mouseup",(function(e){if(e.stopPropagation(),t.mouseState.down){if(t.mouseState.isMove=!1,t.mouseState.down=!1,t.config.state===a.ECanvasState.DRAWING&&t.mouseState.pointTarget){t.mouseState.pointTarget.validate()&&(t.mouseState.pointTarget.setIndex(t.geometries.length),t.geometries.push(t.mouseState.pointTarget)),t.mouseState.pointTarget=null,t.clearCanvas(t.offScreen.cacheCanvasCtx);for(var o=0;o<t.geometries.length;o++)t.geometries[o].draw(t.offScreen.cacheCanvasCtx);return void(t.config.dirty=!1)}t.config.state===a.ECanvasState.SELECT&&(t.mouseState.toolTarget&&(t.mouseState.toolTarget.restoreStatus(),t.mouseState.toolTarget=null,t.clearCanvas(t.canvasCtx),t.paintWith(t.canvasCtx,t.offScreen.cacheCanvasElement)),t.mouseState.pointTarget=null,t.config.dirty=!1)}}))},e.prototype.bindBlurEvent=function(){var t=this;window.addEventListener("blur",(function(e){t.keyboardState.keys=[],t.config.dirty=!1}))},e.prototype.bindKeydownEvent=function(){var t=this;document.addEventListener("keydown",(function(e){if(t.keyboardState.keys.includes(e.keyCode)||t.keyboardState.keys.push(e.keyCode),46===e.keyCode&&t.mouseState.selectedIndexs.length){for(var o=[],n=0;n<t.geometries.length;n++)t.mouseState.selectedIndexs.includes(n)||o.push(t.geometries[n]);for(t.geometries=o,t.clearCanvas(t.offScreen.cacheCanvasCtx),n=0;n<t.geometries.length;n++)t.geometries[n].draw(t.offScreen.cacheCanvasCtx);t.config.dirty=!0,t.mouseState.selectedIndexs=[]}}))},e.prototype.bindKeyupEvent=function(){var t=this;document.addEventListener("keyup",(function(e){var o=t.keyboardState.keys.indexOf(e.keyCode);o>=0&&t.keyboardState.keys.splice(o,1),t.mouseState.down||t.keyboardState.keys.length||(t.config.dirty=!1)}))},e}(a.Scene);e.CanvasContoller=h},714:function(t,e,o){var n=this&&this.__assign||function(){return n=Object.assign||function(t){for(var e,o=1,n=arguments.length;o<n;o++)for(var i in e=arguments[o])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},n.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.Scene=e.DEFAULT_CANVAS_DRAW_SETTING=e.ECanvasState=void 0;var i,s=o(907);!function(t){t.DRAWING="DRAWING",t.SELECT="SELECT"}(i=e.ECanvasState||(e.ECanvasState={})),e.DEFAULT_CANVAS_DRAW_SETTING={strokeStyle:"#000000",fillStyle:"#ffff00",lineWidth:4};var r=function(){function t(t){t&&"CANVAS"===t.nodeName.toUpperCase()&&(this.geometryConstructor,this.geometries,this.config,this.tools,this.toolState,this.mouseState,this.keyboardState,this.offScreen,this.canvasCtx,this.canvasElement=t)}return t.prototype.initScene=function(){this.bindWindowResizeEvent(),this.geometryConstructor=null,this.geometries=[],this.config={state:i.DRAWING,canvasRect:this.createCanvasRect(),dirty:!1,reDrawByResizeTimer:null},this.tools=this.initTools(),this.toolState=this.initToolState(),this.mouseState=this.initMouseState(),this.keyboardState=this.initKeyboardState(),this.offScreen=this.createOffScreenCanvas(),this.canvasCtx=this.canvasElement.getContext("2d"),this.setCanvasElementRect(),this.continuedRender()},t.prototype.bindWindowResizeEvent=function(){var t=this;window.addEventListener("resize",(function(e){window.clearTimeout(t.config.reDrawByResizeTimer),t.config.reDrawByResizeTimer=window.setTimeout((function(){t.config.canvasRect=t.createCanvasRect(),t.setCanvasElementRect(),t.clearCanvas(t.canvasCtx);for(var e=t.geometries.length-1;e>=0;e--)t.geometries[e].draw(t.canvasCtx)}),300)}))},t.prototype.setCanvasElementRect=function(t){void 0===t&&(t={});var e=n(n({},this.config.canvasRect),t);this.canvasElement.tabIndex=0,this.canvasElement.width=e.width,this.canvasElement.height=e.height,this.offScreen.cacheCanvasElement.width=e.width,this.offScreen.cacheCanvasElement.height=e.height},t.prototype.initToolState=function(){return{paintBrushState:n({},e.DEFAULT_CANVAS_DRAW_SETTING),smooth:!1}},t.prototype.initTools=function(){return{boxSelector:new s.BoxSelectTool(0,0,0,0)}},t.prototype.initMouseState=function(){return{x:-1,y:-1,targetOffsetX:0,targetOffsetY:0,selectedIndexs:[],down:!1,pointTarget:null,toolTarget:null,isMove:!1}},t.prototype.initKeyboardState=function(){return{keys:[]}},t.prototype.createCanvasRect=function(){return this.canvasElement.getBoundingClientRect().toJSON()},t.prototype.createOffScreenCanvas=function(){var t=document.createElement("canvas");return{cacheCanvasElement:t,cacheCanvasCtx:t.getContext("2d")}},t.prototype.continuedRender=function(){var t=this;window.requestAnimationFrame((function(){if(t.config.dirty){t.clearCanvas(t.canvasCtx),t.paintWith(t.canvasCtx,t.offScreen.cacheCanvasElement),t.mouseState.toolTarget&&t.mouseState.toolTarget.draw(t.canvasCtx),t.mouseState.pointTarget&&t.mouseState.pointTarget.draw(t.canvasCtx);for(var e=t.mouseState.selectedIndexs.length-1;e>=0;e--)t.geometries[t.mouseState.selectedIndexs[e]].draw(t.canvasCtx);t.continuedRender()}else t.continuedRender()}))},t.prototype.rerenderWith=function(t,e){void 0===e&&(e=[]);var o=e.length?e:this.geometries;this.clearCanvas(t);for(var n=0;n<o.length;n++)o[n].draw(t)},t.prototype.rerender=function(){this.rerenderWith(this.offScreen.cacheCanvasCtx),this.rerenderWith(this.canvasCtx)},t.prototype.getToolState=function(){return JSON.parse(JSON.stringify(this.toolState))},t.prototype.setToolState=function(t){this.toolState=JSON.parse(JSON.stringify(t))},t.prototype.setGeometryConstructor=function(t){this.geometryConstructor=t},t.prototype.toggleStateToDrawing=function(){this.config.state=i.DRAWING},t.prototype.toggleStateToSelect=function(){this.config.state=i.SELECT},t.prototype.clearAllGeometries=function(){this.geometries=[]},t.prototype.removeGeometry=function(t){"NaN"===String(+t)||t<0||this.geometries.splice(t,1)},t.prototype.addGeometry=function(t){this.geometries.push(t)},t.prototype.pushGeometries=function(t){var e=this;t.forEach((function(t){e.geometries.push(t)}))},t.prototype.clearCanvas=function(t){t.clearRect(0,0,this.config.canvasRect.width,this.config.canvasRect.height)},t.prototype.paintWith=function(t,e,o,n){void 0===o&&(o=0),void 0===n&&(n=0),t.drawImage(e,o,n,this.config.canvasRect.width,this.config.canvasRect.height)},t.prototype.findClickedTarget=function(t,e){for(var o=null,n=-1,i=this.geometries.length-1;i>=0;i--)if(this.geometries[i].choose(t,e)&&!o){o=this.geometries[i],n=i;break}return{geometryTarget:o,geometryTargetIndex:n}},t}();e.Scene=r},907:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.BoxSelectTool=void 0;var o=function(t,e,o,n){var i=e[0],s=e[1],r=o[0],a=o[1];void 0===n&&(n=5);for(var h=r-i,c=a-s,l=Math.floor(Math.sqrt(h*h+c*c)/n),u=h/l,f=c/l,p=0;p<l;p++)p%2==0?t.moveTo(i,s):t.lineTo(i,s),i+=u,s+=f;t.lineTo(r,a)},n=function(){function t(t,e,o,n){this.brushConfig={fillStyle:"rgba(255, 255, 255, 0)",lineWidth:1,strokeStyle:"rgba(0, 0, 0, 1)"},this.x=t,this.y=e,this.w=o,this.h=n}return t.prototype.setStartCoordinate=function(t,e){this.x=t+this.brushConfig.lineWidth,this.y=e+this.brushConfig.lineWidth},t.prototype.restoreStatus=function(){this.x=0,this.y=0,this.w=0,this.h=0},t.prototype.setShapeParameter=function(t,e){this.w=t-this.x,this.h=e-this.y},t.prototype.draw=function(t){t.beginPath(),t.fillStyle=this.brushConfig.fillStyle,t.strokeStyle=this.brushConfig.strokeStyle,t.lineWidth=this.brushConfig.lineWidth,this.drawDashRect(t,this.x,this.y,this.w,this.h),t.closePath()},t.prototype.drawDashRect=function(t,e,n,i,s,r){void 0===r&&(r=5),o(t,[e,n],[e+i,n],r),t.stroke(),o(t,[e+i,n],[e+i,n+s],r),t.stroke(),o(t,[e+i,n+s],[e,n+s],r),t.stroke(),o(t,[e,n+s],[e,n],r),t.stroke()},t}();e.BoxSelectTool=n},98:(t,e)=>{var o;Object.defineProperty(e,"__esModule",{value:!0}),e.EEVENT_NAMESPANCE=void 0,(o=e.EEVENT_NAMESPANCE||(e.EEVENT_NAMESPANCE={})).DRAW_START="DRAW_START",o.DRAW_DOING="DRAW_DOING",o.DRAW_FINISHED="DRAW_FINISHED",o.SELECT="SELECT",o.CANCEL_SELECT="CANCEL_SELECT",o.DELETE_ONE="DELETE_ONE";var n=function(){function t(){this.events={}}return t.prototype.on=function(t,e){"string"==typeof t&&t&&"function"==typeof e&&(this.events[t]||(this.events[t]=[]),this.events[t].push(e))},t.prototype.emit=function(t){if(arguments.length&&"string"==typeof t&&this.events[t]){var e=Array.from(arguments).splice(1);this.events[t].forEach((function(t,o){t.apply(void 0,e)}))}},t}();e.default=n}},e={};function o(n){var i=e[n];if(void 0!==i)return i.exports;var s=e[n]={exports:{}};return t[n].call(s.exports,s,s.exports,o),s.exports}var n={};return(()=>{var t=n,e=o(730),i=o(88),s=o(342),r=o(244);i.Circle,s.Line,r.Rect,e.CanvasContoller,t.default=e.CanvasContoller})(),n.default})()}));
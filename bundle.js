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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); // modules


var _loaders = __webpack_require__(1);

var _spriteSheet = __webpack_require__(2);

var _spriteSheet2 = _interopRequireDefault(_spriteSheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// addEventListener to wait for document to be loaded before loading <canvas>.
document.addEventListener("DOMContentLoaded", function () {
  function drawBackground(background, context, sprite) {
    background.ranges.forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 4),
          x1 = _ref2[0],
          x2 = _ref2[1],
          y1 = _ref2[2],
          y2 = _ref2[3];

      // Info on performance when using i++ vs ++i https://stackoverflow.com/questions/29885719/i-vs-i-in-a-javascript-for-loop
      for (var x = x1; x < x2; x++) {
        for (var y = y1; y < y2; y++) {
          sprite.drawTile(background.tile, context, x, y);
        }
      }
    });
  }

  // Step 1:
  var canvasEl = document.getElementById("game-screen");
  canvasEl.width = 640;
  canvasEl.height = 640;

  var ctx = canvasEl.getContext("2d"); // context (or ctx) contains the API that we draw with
  // ctx.fillRect(0, 0, 50, 50); // draw black rectangle to test ctx

  (0, _loaders.loadImage)('https://res.cloudinary.com/dtluc0y85/image/upload/v1512870709/spriteSheet_cgq5yb.png').then(function (image) {
    // load tiles.png, chain a .then() to create spriteSheet with image and tile size.
    var sprite = new _spriteSheet2.default(image, 16, 16); // specify tile size
    sprite.define("ground", 0, 0); // define sprite with a name and coord of where the tile is located in spriteSheet.png.
    sprite.define("sky", 3, 23);

    (0, _loaders.loadLevel)('1-1').then(function (level) {
      level.backgrounds.forEach(function (background) {
        return drawBackground(background, ctx, sprite);
      });
    });
  });
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadImage = loadImage;
exports.loadLevel = loadLevel;


// function takes a url and returns a promise
function loadImage(url) {
  return new Promise(function (resolve) {
    var image = new Image(); // create image instance and attach a "load" type event listener. Load event fires when image is downloaded and ready to display
    image.addEventListener('load', function () {
      resolve(image); // resolve promise with the image itself, meaning promise is fulfilled
    });
    image.src = url; // in order to initiate image downloading
  });
}

function loadLevel(name) {
  return fetch('./docs/levels/' + name + '.json').then(function (res) {
    return res.json();
  }).catch(function (error) {
    return console.log(error);
  });
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SpriteSheet = function () {
  function SpriteSheet(image, width, height) {
    _classCallCheck(this, SpriteSheet);

    this.image = image;
    this.width = width;
    this.height = height;
    this.tiles = new Map(); // save tile buffer to Map instance
  }

  _createClass(SpriteSheet, [{
    key: "define",
    value: function define(name, x, y) {
      // buffer is used to save subset of image (which in this case is a tile), so we don't have to draw from large image file every time
      var buffer = document.createElement("canvas"); // create <canvas> element programmatically using JS
      buffer.width = this.width;
      buffer.height = this.height;
      // draw subset (i.e. tile) of image in this buffer
      buffer.getContext("2d").drawImage(this.image, x * this.width, y * this.height, this.width, this.height, // size of subset (i.e. tile) image
      0, 0, this.width, this.height // draw full buffer of subset
      );
      this.tiles.set(name, buffer); // Map.prototype.set(key, value) method adds or updates key and value of element to Map object. For more info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/set
    }

    // we want to draw buffer to context

  }, {
    key: "draw",
    value: function draw(name, context, x, y) {
      var buffer = this.tiles.get(name); // Map.prototype.get(key) returns key of specified element from Map object. We want to retrieve buffer from tiles.set() in Map object.
      context.drawImage(buffer, x, y); // drawImage() method is polymorphic, meaning behavior changes depending on number of args and type of args. In this case, (buffer, x, y) draws buffer img onto canvas. For more info: https://www.w3schools.com/tags/canvas_drawimage.asp
    }
  }, {
    key: "drawTile",
    value: function drawTile(name, context, x, y) {
      this.draw(name, context, x * this.width, y * this.height);
    }
  }]);

  return SpriteSheet;
}();

exports.default = SpriteSheet;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map
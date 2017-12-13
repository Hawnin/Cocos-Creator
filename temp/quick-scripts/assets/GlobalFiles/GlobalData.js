(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/GlobalFiles/GlobalData.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '2d632uABvJJIbRIiPZAHu25', 'GlobalData', __filename);
// GlobalFiles/GlobalData.js

"use strict";

var lives = 5;
var score = 0;
var path = [];

//x, y, coordinates for pre defined path for levels.
path[0] = [170, 200, 440, 300, 170, 400, 440, 500, 170, 600, 440, 700, 170, 800, 440, 900, 170, 1000, 440, 1100, 170, 1200, 440, 1300, 170, 1400, 440, 1500, 170, 1600, 440, 1700, 440, 1900];

//get set for HP and Score for evaluation.
var globalFile = {
	globalLives: function globalLives() {
		return lives;
	},

	globalScore: function globalScore() {
		return score;
	},

	globalPath: function globalPath() {
		return path;
	}
};

module.exports = globalFile;

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=GlobalData.js.map
        
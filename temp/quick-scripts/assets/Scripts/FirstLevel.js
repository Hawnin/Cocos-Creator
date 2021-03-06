(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/FirstLevel.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'b8d3fprpdpLfL3b93GLaboR', 'FirstLevel', __filename);
// Scripts/FirstLevel.js

"use strict";

var global = require("GlobalData");

cc.Class({
	extends: cc.Component,

	properties: {
		groundOnePrefab: {
			default: null,
			type: cc.Prefab
		},

		groundTwoPrefab: {
			default: null,
			type: cc.Prefab
		},
		groundWinnerPrefab: {
			default: null,
			type: cc.Prefab
		},

		player: {
			default: null,
			type: cc.Node
		},
		floor: {
			default: null,
			type: cc.Node
		},

		background: {
			default: null,
			type: cc.Node
		},
		ScoreNumber: {
			default: null,
			type: cc.Label
		},
		LivesNumber: {
			default: null,
			type: cc.Label
		},
		tmpScore: 0,
		tmpLives: 5
	},

	spawner: function spawner() {

		var randY = 0;
		var randX = 0;

		for (var i = 0; i < this.path[0].length - 2; i++) {
			// Select a random ground (1 to 2 ground)
			var groundSpawn = Math.floor(Math.random() * 2 + 1);
			//creat the 1 or 2 prefab based on the random number
			switch (2) {
				case 1:
					var newGround = cc.instantiate(this.groundOnePrefab);
					newGround.setPosition(cc.p(this.path[0][i], this.path[0][i + 1]));
					newGround.parent = this.node;
					var sprite = newGround.getComponent(cc.Sprite);
					cc.loader.loadRes("groundone", function (err, data) {
						this.spriteFrame = new cc.SpriteFrame(data);
					}.bind(sprite));
					break;
				case 2:
					//var newGround = cc.instantiate(this.groundTwoPrefab);
					//this.groundTwoNode.addChild(newGround);
					//break;

					var newGround = cc.instantiate(this.groundTwoPrefab);
					newGround.setPosition(cc.p(this.path[0][i], this.path[0][i + 1]));
					newGround.parent = this.node;
					var sprite = newGround.getComponent(cc.Sprite);
					cc.loader.loadRes("groundtwo", function (err, data) {
						this.spriteFrame = new cc.SpriteFrame(data);
					}.bind(sprite));
					break;
			}
			cc.log(this.path[0].length);
			cc.log(i);
			i++;

			if (i > this.path[0].length - 4) {
				//cc.log("inside");
				//cc.log(this.path[0][i+1]);
				//cc.log(this.path[0][i+2]);
				var newGround = cc.instantiate(this.groundWinnerPrefab);
				newGround.setPosition(cc.p(this.path[0][i + 1], this.path[0][i + 2]));
				newGround.parent = this.node;
				var sprite = newGround.getComponent(cc.Sprite);
				cc.loader.loadRes("groundwin", function (err, data) {
					this.spriteFrame = new cc.SpriteFrame(data);
				}.bind(sprite));
			}
		}
	},

	// use this for initialization
	onLoad: function onLoad() {
		this.Lives = global.globalLives();
		this.Score = global.globalScore();
		this.path = global.globalPath();
		this.spawner();
		this.Started = false;
		//this.LivesNumber.string;
	},

	// called every frame, uncomment this function to activate update callback
	update: function update(dt) {
		//cc.log(this.player.x);
		//getting score based on reached heights
		if (this.player.y > this.tmpScore) {
			this.tmpScore += 100;
			this.Score += 100;
			this.ScoreNumber.string = this.Score;
		}
		//if(!this.Started){
		//	this.LivesNumber.setString(parseInt(this.tmpScore));
		//	this.ScoreNumber.setString(parseInt(this.tmpLives));
		//}
		if (this.player.y > 1950 && (this.player.x < 480 || this.player.x > 420)) {
			cc.log("Winner");
			//global.globalScore()+=this.Score;
			var director = cc.director;
			director.loadScene('MainMenu');
		}
		if (this.tmpScore - 500 > this.player.y) {
			cc.log("Dead");
			var director = cc.director;
			director.loadScene('MainMenu');
		}
		if (this.Started && this.player.y > 151) {
			this.Started = true;
			this.tmpLives--;
			this.LivesNumber.string = this.tmpLives;
		}
	}
});

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
        //# sourceMappingURL=FirstLevel.js.map
        
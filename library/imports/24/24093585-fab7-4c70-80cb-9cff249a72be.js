"use strict";
cc._RF.push(module, '24093WF+rdMcIDLnP8kmnK+', 'MainMenu');
// Scripts/MainMenu.js

'use strict';

cc.Class({
	extends: cc.Component,

	properties: {
		backgroundMusic: {
			default: null,
			url: cc.audioEngine
		},

		btnExit: {
			default: null,
			type: cc.Button
		},

		btnStart: {
			default: null,
			type: cc.Button
		},

		btnSettings: {
			default: null,
			type: cc.Button
		}

	},

	// use this for initialization
	onLoad: function onLoad() {
		cc.audioEngine.playMusic(this.backgroundMusic, true, 0, 2);
	},

	ExitGame: function ExitGame() {
		cc.game.end();
	},

	StartGame: function StartGame() {
		cc.audioEngine.stopMusic();
		var director = cc.director;
		director.loadScene('FirstLevel');
	},
	SettingGame: function SettingGame() {
		var director = cc.director;
		director.loadScene('Settings');
	}
	// called every frame, uncomment this function to activate update callback
	// update: function (dt) {

	// },
});

cc._RF.pop();
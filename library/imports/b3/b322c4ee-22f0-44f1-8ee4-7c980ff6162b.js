"use strict";
cc._RF.push(module, 'b322cTuIvBE8Y7kfJgP9hYr', 'Settings');
// Scripts/Settings.js

'use strict';

cc.Class({
				extends: cc.Component,

				properties: {
								btnBack: {
												default: null,
												type: cc.Button
								},
								slider: cc.Slider
				},

				// use this for initialization
				onLoad: function onLoad() {},

				BackGame: function BackGame() {

								var director = cc.director;
								director.loadScene('MainMenu');
				},

				onSliderHEvent: function onSliderHEvent(slider, customEventData) {
								var volume = slider.progress;
								cc.audioEngine.setMusicVolume(volume);
				}
}
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },
);

cc._RF.pop();
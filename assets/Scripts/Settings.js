cc.Class({
    extends: cc.Component,

    properties: {
			btnBack:{
			default:null,
			type: cc.Button
		},
		slider: cc.Slider,
    },

    // use this for initialization
    onLoad: function () {

    },
	
	BackGame: function(){

		var director = cc.director;
		director.loadScene('MainMenu');
	},
	
	
	onSliderHEvent (slider,customEventData) {
		var volume = slider.progress;
        cc.audioEngine.setMusicVolume(volume);
    },
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

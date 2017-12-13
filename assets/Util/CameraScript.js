cc.Class({
    extends: cc.Component,

    properties: {
		target: {
            default: null,
            type: cc.Node
        },
		camera:cc.Camera,
	
	
    },

    // use this for initialization
    onLoad: function () {
        //this.startFollow = false;
        //let canvas = cc.find('Canvas').getComponent(cc.Canvas); 
        this.visibleSize = cc.view.getVisibleSize();
        this.initZoomRatio = this.camera.zoomRatio;
		this.previousPos = this.node.position;
		
    },
    //onEnable: function () {
    //    cc.director.getPhysicsManager().attachDebugDrawToCamera(this.camera);
    //},
    //onDisable: function () {
    //    cc.director.getPhysicsManager().detachDebugDrawFromCamera(this.camera);
    //},
	
	
    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
    let targetPos;
	targetPos = this.target.parent.convertToWorldSpaceAR(this.target.position);
	this.node.position = this.node.parent.convertToNodeSpaceAR(targetPos);
	this.previousPos = targetPos;
	
	},
});

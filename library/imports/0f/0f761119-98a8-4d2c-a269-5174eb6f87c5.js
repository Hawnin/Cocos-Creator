"use strict";
cc._RF.push(module, '0f761EZmKhNLKJpUXTrb4fF', 'PlatformMotion');
// Util/PlatformMotion.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        speed: 10,
        distance: 200
    },

    // use this for initialization
    onLoad: function onLoad() {
        this._movedDistance = this.distance / 2;
        this._direction = 1;
        this._movedDiff = 0;
    },

    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {
        var d = this.speed * this._direction * dt;

        var movedDistance = this._movedDistance + Math.abs(d);
        this._movedDistance += Math.abs(d);

        if (movedDistance > this.distance) {
            d = this.distance - this._movedDistance;
            this._movedDistance = 0;
            this._direction *= -1;
        } else {
            this._movedDistance = movedDistance;
        }

        this.node.x += d;
        this._movedDiff = d;
    }
});

cc._RF.pop();
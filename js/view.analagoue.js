"use strict";

import {nowTimeModel} from "./model.time.js";

export let analogeNowTimeView = {
    init: function() {
        this.analogeWatch = document.createElement("div")
        this.analogeWatch.id = "clockFace";
        document.getElementById("analogWatch").appendChild(this.analogeWatch);
        this.hourHand = document.createElement("div")
        this.hourHand.id = "hourHand";
        document.getElementById("clockFace").appendChild(this.hourHand);
        this.minuteHand = document.createElement("div")
        this.minuteHand.id = "minuteHand";
        document.getElementById("clockFace").appendChild(this.minuteHand);
        this.secondHand = document.createElement("div")
        this.secondHand.id = "secondHand";
        document.getElementById("clockFace").appendChild(this.secondHand);
    },

    moveHands: function() {
        let hours = nowTimeModel.nowTime.getHours();
        let minutes = nowTimeModel.nowTime.getMinutes();
        let seconds = nowTimeModel.nowTime.getSeconds();
        this.hourHand.style.transform = "rotate(" + hours * (360/12) + "deg)";
        this.minuteHand.style.transform = "rotate(" + minutes * (360/60) + "deg)";
        this.secondHand.style.transform = "rotate(" + seconds * (360/60) +  "deg)";
    }
}
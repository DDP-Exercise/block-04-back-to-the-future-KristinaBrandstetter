"use strict";

import {nowTimeModel} from "./model.time.js";

export let digitalNowTimeView = {
    init: function () {
        this.digitalWatch = document.createElement("p");
        document.getElementById("digitalWatch").appendChild(this.digitalWatch);
    },

    getTime: function () {
        let hours = nowTimeModel.nowTime.getHours();
        let minutes = nowTimeModel.nowTime.getMinutes();
        let seconds = nowTimeModel.nowTime.getSeconds();
        this.digitalWatch.textContent = String(hours).padStart(2, "0") + ":" + String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0");
    }
}

digitalNowTimeView.init();

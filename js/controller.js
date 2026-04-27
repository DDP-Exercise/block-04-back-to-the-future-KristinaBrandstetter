"use strict";
/*******************************************************
 *     Back to the Future - 100p
 *
 *     Marty! Marty can you read me? This is Doc Brown,
 *     im messaging you from the Year of 1955!
 *
 *     The Flux Capacitor worked and I traveled back in time!
 *     I don't have time to explain all the details, but
 *     time itself is of the essence Marty! As proud as I am
 *     of my achievement, it seems like I can't come back to
 *     the future. At least not without your help!
 *
 *     Do you remember the Wrist-watch I gave you? You need
 *     to sync its hands to match the digital clock of the
 *     Delorean! Only when they are perfectly in sync, the
 *     Flux Capacitor can bring me back to 1985!
 *
 *     I think it's best to create a model first, which keeps
 *     track of the true time. Once we got that, we can sync
 *     the two clocks in separate views. Yours, analogue and
 *     animated, mine digital. Use this controller file to
 *     glue everything together!
 *
 *     Our clocks should be synced in no-time! Got it?
 *     No - Time! *laughs nervously*. Unfortunatley, I only
 *     have enough fuel for one ride. So we need to be 100%
 *     certain that it works. I'd suggest you add a button somewhere
 *     that saves the current time into the localStorage.
 *
 *     Now hurry Marty! Or I will be stuck in the past forever!
 *
 *     Doc Brown - 1955-11-05
 *     Kristina - 2026-04-23
 *******************************************************/

// HINT:
//setInterval(functionName, 1000); //will call functionName() every 1000 miliseconds. z.B den Sekundenzeiger vorrücke z.B.

import {nowTimeModel} from "./model.time.js";
import {digitalNowTimeView} from "./view.digital.js";
import {analogeNowTimeView} from "./view.analagoue.js";

export let nowTimeController = {
    updateTime: function () {
        nowTimeModel.setTime();
        digitalNowTimeView.getTime();
        analogeNowTimeView.moveHands();
    },
    init(){
        digitalNowTimeView.init();
        analogeNowTimeView.init();
        setInterval(nowTimeController.updateTime, 1000);
        this.currentTime();
    },

    currentTime: function () {
        this.button = document.createElement("button");
        this.button.textContent = "Save current time to local storage";
        this.button.addEventListener("click", nowTimeController.saveTime);
        document.getElementById("btn").appendChild(this.button);
    },

    saveTime: function () {
        localStorage.setItem("currentTime", nowTimeModel.nowTime);
    }
}

nowTimeController.init();
let isInitialized = false;
let frames = [];
let currentFrame;

window.onload = () => {
    onresize();
};

window.onresize = () => {
    let imgIds = ["imgIntro", "imgUserName", "imgClassZone", "imgCheckEngine", "imgCheckLamp"];
    let imgWidthRates = [0.3, 0.4, 0.3, 0.4, 0.5];
    let images = imgIds.map((item) => {
        return document.getElementById(item);
    })

    let windowWidth = window.innerWidth;
    for (let i = 0; i < images.length; i++) {
        images[i].width = Math.round(windowWidth * imgWidthRates[i]);
    }

    let divIds = ["imgIntro", "imgUserName", "imgClassZone", "divImageEngine", "divImageLamp"];
    divIds.forEach(divId => {
        if (windowWidth < 800) document.getElementById(divId).classList.add("w3-hide");
        else document.getElementById(divId).classList.remove("w3-hide");
    });
}

function Init() {
    frames = [
        new Frame("divIntro"),
        new FrameUserName("divUserName"),
        new FrameAboutStation("divAboutStation"),
        new FrameAboutFuel("divAboutFuel"),
        new FrameClassZone("divFrameClassZone"),
        new FrameCheckEngineAndStarter("divFrameCheckEngineAndStarter"),
        new FrameCheckLamp("divFrameCheckLamp"),
        new FrameCheckCabel("divFrameCheckCabel"),
        new FrameCheckWire("divFrameCheckWire"),
        new FrameResult("divResult")
    ];
    for (let i = 0; i < frames.length; i++) {
        if (i > 0) frames[i].PrevFrame = frames[i - 1];
        if (i < frames.length - 1) frames[i].NextFrame = frames[i + 1];
        frames[i].Init();
    }

    currentFrame = frames[0];
}

function btnNextClick() {
    if (!isInitialized) {
        Init();
        isInitialized = true;
    }

    if (currentFrame.IsComplete() && currentFrame.NextFrame != null) {
        currentFrame.Hide();
        currentFrame = currentFrame.NextFrame;
        currentFrame.Show();
    }
}

function btnPrevClick() {
    if (currentFrame.PrevFrame != null) {
        currentFrame.Hide();
        currentFrame = currentFrame.PrevFrame;
        currentFrame.Show();
    }
}
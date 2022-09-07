let frames = [];
let currentFrame;

window.onload = () => {
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

    onresize();

    currentFrame = frames[0];
    currentFrame.Show();
};

window.onresize = () => {
    let width = window.innerWidth;
    if (width > 1000) {
        let img = document.getElementById("imgPict1");
        img.width = Math.round(width / 3);
        img.hidden = false;
    } else {
        document.getElementById("imgPict1").hidden = true;
    }
}

function btnNextClick() {
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
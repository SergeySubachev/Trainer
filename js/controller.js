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

    currentFrame = frames[0];
    currentFrame.Show();
};

function btnNextClick() {
    if (currentFrame.IsComplete() && currentFrame.NextFrame != null) {
        currentFrame.Hide();
        currentFrame = currentFrame.NextFrame;
        currentFrame.Show();
    }
}

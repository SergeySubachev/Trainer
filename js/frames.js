class Frame {
    ContainerId = "";
    NextFrame = null;
    PrevFrame = null;

    constructor(divId) {
        this.ContainerId = divId;
    }

    Init() {}

    Hide() {
        document.getElementById(this.ContainerId).hidden = true;
    }

    Show() {
        document.getElementById(this.ContainerId).hidden = false;
    }
    
    //можно переходить дальше
    IsComplete() {
        return true;
    }
}
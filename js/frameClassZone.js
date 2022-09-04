class FrameClassZone extends Frame {
    Tasks = [];

    Init() {
        let frame = this.PrevFrame;
        while (!frame.hasOwnProperty("DateFromWorking")) {
            frame = frame.PrevFrame;
        }
        let doc = PUE;
        let classZone = "В-Iг";
        if (frame.DateFromWorking >= new Date(2009, 5, 1)) {
            doc = FZ123;
            classZone = "2";
        }
        let task = new ClassZoneDocumentTask("divClassZoneDocument", doc);        
        this.Tasks.push(task);
        task.Init();

        task = new ClassZoneTask("divClassZone", classZone);
        this.Tasks.push(task);
        task.Init();
    }
}
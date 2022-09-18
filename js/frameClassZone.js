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

    IsComplete() {
        for (const task of this.Tasks) {
            if (!task.IsComplete()) return false;
        }

        const isTrainerMode = document.getElementById("radioTrainerMode").checked;
        if (isTrainerMode) {
            for (const task of this.Tasks) {
                if (task.GetResult() != 1) {
                    return false;
                }
            }
        }
        
        return true;
    }

    GetResult(result = []) {
        const count = this.Tasks.length;
        const sum = this.Tasks.reduce((partialSum, a) => partialSum + a.GetResult(), 0);
        result.push(new ResultBlock("Определение класса зоны", sum / count));
    }
}
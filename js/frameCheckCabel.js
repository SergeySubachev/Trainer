class FrameCheckCabel extends Frame {
    Tasks = [];

    Init() {
        //создать все CabelPartCheckTask. Перед этим выбирать запчасти
        //в итоге получится маркировка, создать тесты по маркировке

        let cabelThreadTask = new CabelThreadTask("spanCabelThreadTask");
        let sThread = cabelThreadTask.CorrectOptionObject.Marks;
        let cabelIsolateTask = new CabelIsolateTask("spanCabelIsolateTask");
        let sIsolate = cabelIsolateTask.CorrectOptionObject.Marks;
        let cabelCoverTask = new CabelCoverTask("spanCabelCoverTask");
        let sCover = cabelCoverTask.CorrectOptionObject.Marks;
        let cabelBronTask = new CabelBronTask("spanCabelBronTask");
        let sBron = cabelBronTask.CorrectOptionObject.Marks;
        let sUnderBron = "";
        let sOuterCover = "";

        this.Tasks = [cabelThreadTask, cabelIsolateTask, cabelCoverTask, cabelBronTask];

        if (sBron != "") {
            let cabelUnderBronTask = new CabelUnderBronTask("spanCabelUnderBronTask");
            sUnderBron = cabelUnderBronTask.CorrectOptionObject.Marks;
            let cabelOuterCoverTask = new CabelOuterCoverTask("spanCabelOuterCoverTask");
            sOuterCover = cabelOuterCoverTask.CorrectOptionObject.Marks;
            document.getElementById("divCabelUnderBronTask").hidden = false;
            document.getElementById("divCabelOuterCoverTask").hidden = false;
            this.Tasks.push(cabelUnderBronTask);
            this.Tasks.push(cabelOuterCoverTask);
        }

        let marking = "";
        if (sIsolate == "Ц") marking = sIsolate + sThread + sCover + sBron + sUnderBron + sOuterCover;
        else if (sIsolate == "-В") marking = sThread + sCover + sBron + sUnderBron + sOuterCover + sIsolate;
        else if (sIsolate == "Р") marking = sThread + sCover + sIsolate + sBron + sUnderBron + sOuterCover;
        else marking = sThread + sIsolate + sCover + sBron + sUnderBron + sOuterCover;

        document.getElementById("spanCabelMarking").innerText = marking;

        for (const task of this.Tasks) {
            task.Init();
        }
    }
}
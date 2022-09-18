class FrameCheckCabel extends Frame {
    Tasks = [];

    Init() {
        //маркировка
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
            document.getElementById("divCabelUnderBronTask").hidden = false;
            this.Tasks.push(cabelUnderBronTask);

            let cabelOuterCoverTask = new CabelOuterCoverTask("spanCabelOuterCoverTask");
            sOuterCover = cabelOuterCoverTask.CorrectOptionObject.Marks;
            document.getElementById("divCabelOuterCoverTask").hidden = false;
            this.Tasks.push(cabelOuterCoverTask);
        } else {
            document.getElementById("divCabelUnderBronTask").hidden = true;
            document.getElementById("divCabelOuterCoverTask").hidden = true;
        }

        //проверка       
        let isSatisfy = "соответствует";
        let isNotSatisfy = "не соответствует";
        let cabelThreadCheckTask = new CabelPartCheckTask("spanCabelThreadCheckTask", isSatisfy);
        this.Tasks.push(cabelThreadCheckTask);

        let PE = [Isolate_П, Isolate_Пс, Isolate_Пв, Isolate_Пвс];
        let isolateSatisfy = PE.includes(cabelIsolateTask.CorrectOptionObject) ? isNotSatisfy : isSatisfy;
        let cabelIsolateCheckTask = new CabelPartCheckTask("spanCabelIsolateCheckTask", isolateSatisfy);
        this.Tasks.push(cabelIsolateCheckTask);

        let coverSatisfy = cabelCoverTask.CorrectOptionObject == Cover_П ? isNotSatisfy : isSatisfy;
        let cabelCoverCheckTask = new CabelPartCheckTask("spanCabelCoverCheckTask", coverSatisfy);
        this.Tasks.push(cabelCoverCheckTask);

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
        //конструкция - 4 или 6 тестов; проверка соответствия - последние 3
        const cabelPartsTests = this.Tasks.slice(0, -3);
        const cabelCheckTests = this.Tasks.slice(-3);
        const cabelPartsScore = cabelPartsTests.reduce((partialSum, a) => partialSum + a.GetResult(), 0);
        const cabelCheckScore = cabelCheckTests.reduce((partialSum, a) => partialSum + a.GetResult(), 0);
        result.push(new ResultBlock("Расшифровка маркировки кабеля силовой сети", cabelPartsScore / cabelPartsTests.length));
        result.push(new ResultBlock("Проверка соответствия кабеля силовой сети", cabelCheckScore / cabelCheckTests.length));
    }
}
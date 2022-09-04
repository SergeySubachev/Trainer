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

class FrameUserName extends Frame {
    UserName = "";
    Group = "";

    IsComplete() {
        this.UserName = document.getElementById("tbUserName").value;
        if (this.UserName.length == 0) return false;
        this.Group = document.getElementById("selectGroup").value;
        if (this.Group == "none") return false;
        return true;
    }
}

class FrameAboutStation extends Frame {
    DateFromWorking = null;

    Init() {
        let year = 1990 + Math.round(Math.random() * 31);
        let mounth = 1 + Math.round(Math.random() * 11);
        this.DateFromWorking = new Date(year, mounth, 1);
        document.getElementById("dateFrom").innerHTML = `Дата ввода в эксплуатацию: 01.${mounth < 10 ? "0" + mounth : mounth}.${year}.`;
    }
}

class FrameAboutFuel extends Frame {
    Fuels = []; //применяемое топливо
    Tasks = []; //категория и группа смеси

    Init() {
        let tableFuels = document.getElementById("tableFuels");
        this.Fuels = [gazoline80, gazoline92, gazoline95, dieselSummer, dieselWinter];
        for (let fuel of this.Fuels) {
            let row = document.createElement("tr");
            tableFuels.appendChild(row);

            let tdName = document.createElement("td");
            tdName.innerHTML = fuel.Name;
            row.appendChild(tdName);

            let tdTvsp = document.createElement("td");
            tdTvsp.innerHTML = fuel.Tvsp;
            row.appendChild(tdTvsp);

            let tdTsv = document.createElement("td");
            tdTsv.innerHTML = fuel.Tsv;
            row.appendChild(tdTsv);

            let tdClow = document.createElement("td");
            tdClow.innerHTML = fuel.Clow;
            row.appendChild(tdClow);

            let tdHigh = document.createElement("td");
            tdHigh.innerHTML = fuel.Chigh;
            row.appendChild(tdHigh);

            let tdCategory = document.createElement("td");
            tdCategory.id = fuel.Name + " Category";
            row.appendChild(tdCategory);
            let categoryTask = new SubstanceCategoryTask(tdCategory.id, fuel.Category.Name);
            categoryTask.Init();
            this.Tasks.push(categoryTask);

            let tdGroup = document.createElement("td");
            tdGroup.id = fuel.Name + " Group";
            row.appendChild(tdGroup);
            let groupTask = new SubstanceGroupTask(tdGroup.id, fuel.Group.Name);
            groupTask.Init();
            this.Tasks.push(groupTask);
        }
    }

    IsComplete() {
        for (const task of this.Tasks) {
            if (!task.IsComplete()) return false;
        }
        return true;
    }
}

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

class FrameCheckEngine extends Frame {
    Tasks = [];

    Init() {
        //наивысшая категория и группа ВОС из используемых веществ
        let frame = this.PrevFrame;
        while (!frame.hasOwnProperty("Fuels")) {
            frame = frame.PrevFrame;
        }
        let maxCategory = SUBSTANCE_IIA;
        let maxGroup = SUBSTANCE_T1;
        for (const fuel of frame.Fuels) {
            if (fuel.Category.Value > maxCategory.Value) maxCategory = fuel.Category;
            if (fuel.Group.Value > maxGroup.Value) maxGroup = fuel.Group;
        }

        let task = new EngineCheckTask("divCheckEngine", maxCategory, maxGroup);
        task.Init();
        this.Tasks.push(task);

        task = new StarterCheckTask("divCheckStarter", maxCategory, maxGroup);
        task.Init();
        this.Tasks.push(task);
    }
}

class FrameResult extends Frame {
    Show() {
        let frame = this.PrevFrame;
        while (!frame.hasOwnProperty("UserName")) {
            frame = frame.PrevFrame;
        }
        document.getElementById("resultUserName").innerText = frame.UserName;
        document.getElementById("resultUserGroup").innerText = frame.Group;

        let allScore = 0;
        let userScore = 0;
        while (frame != null) {
            if (frame.hasOwnProperty("Tasks")) {
                for (const task of frame.Tasks) {
                    allScore++;
                    userScore += task.GetResult();
                }
            }
            frame = frame.NextFrame;
        }
        let percent = userScore / allScore * 100;
        document.getElementById("resultPercent").innerText = `Результат: ${userScore} из ${allScore} (${percent}%)`;

        super.Show();
    }
}
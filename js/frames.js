class Frame {
    ContainerId = "";
    NextFrame = null;

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
            let categoryTask = new SubstanceCategoryTask(tdCategory.id, fuel.Category);
            categoryTask.Init();
            this.Tasks.push(categoryTask);

            let tdGroup = document.createElement("td");
            tdGroup.id = fuel.Name + " Group";
            row.appendChild(tdGroup);
            let groupTask = new SubstanceGroupTask(tdGroup.id, fuel.Group);
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
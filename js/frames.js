class Frame {
    DivId = "";
    NextFrame = null;

    constructor(divId) {
        this.DivId = divId;
    }

    Init() {}

    Hide() {
        document.getElementById(this.DivId).hidden = true;
    }

    Show() {
        document.getElementById(this.DivId).hidden = false;
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
    Fuels = [];

    Init() {
        let tableFuels = document.getElementById("tableFuels");
        this.Fuels = [gazoline80, gazoline92, gazoline95, dieselSummer, dieselWinter];
        for (let fuel of this.Fuels) {
            let row = document.createElement("tr");

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
            let selectCategory = document.createElement("select");
            let opt = document.createElement("option");
            opt.value = "none";
            opt.selected = true;
            opt.disabled = true;
            opt.hidden = true;
            opt.innerText = "выберите категорию";
            selectCategory.appendChild(opt);
            let categories = [ "IIA", "IIB", "IIC" ];
            for (let cat of categories) {
                opt = document.createElement("option");
                opt.value = cat;
                opt.innerText = cat;
                selectCategory.appendChild(opt);
            }
            tdCategory.appendChild(selectCategory);
            row.appendChild(tdCategory);

            let tdGroup = document.createElement("td");
            let selectGroup = document.createElement("select");
            opt = document.createElement("option");
            opt.value = "none";
            opt.selected = true;
            opt.disabled = true;
            opt.hidden = true;
            opt.innerText = "выберите группу";
            selectGroup.appendChild(opt);
            let groups = [ "T1", "T2", "T3", "T4", "T5", "T6" ];
            for (let group of groups) {
                opt = document.createElement("option");
                opt.value = group;
                opt.innerText = group;
                selectGroup.appendChild(opt);
            }
            tdGroup.appendChild(selectGroup);
            row.appendChild(tdGroup);

            tableFuels.appendChild(row);
        }
    }

    IsComplete() {
        
    }
}
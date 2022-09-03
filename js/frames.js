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
            tableFuels.appendChild(row);
        }
    }
}
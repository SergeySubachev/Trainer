const StateEnum = {
    INTRO: 0,
    USERNAME: 1,
    ABOUTSTATION: 2,
    SELECTFUEL: 3,
    SELECTEXERCISE: 4,
    EXERCISE: 5,
    RESULT: 6
}

class Controller {
    userName;
    dateFromWorking
    startTime;
    state = -1;
    exercise;

    Init() {
        document.getElementById("intro").hidden = false;
        this.state = StateEnum.INTRO;

        let year = 1990 + Math.round(Math.random() * 31);
        let mounth = 1 + Math.round(Math.random() * 11);
        this.dateFromWorking = new Date(year, mounth, 1);
        document.getElementById("dateFrom").innerHTML = `Дата ввода в эксплуатацию: 01.${mounth < 10 ? "0" + mounth : mounth}.${year}.`;

        let tableFuels = document.getElementById("tableFuels");
        let fuels =  [ gazoline80, gazoline92, gazoline95, dieselSummer, dieselWinter ];        
        for (let fuel of fuels) {
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

            let selectFuel = document.getElementById("selectFuel");
            let opt = document.createElement("option");
            opt.value = fuel;
            opt.text = fuel.Name;
            selectFuel.appendChild(opt);


        }
    }

    NextFrame() {
        switch (this.state) {
            case StateEnum.INTRO:
                document.getElementById("intro").hidden = true;
                document.getElementById("userName").hidden = false;
                this.state = StateEnum.USERNAME;
                break;
            case StateEnum.USERNAME:
                this.UserName = document.getElementById("tbUserName").value;
                if (this.UserName.length == 0) return;
                if (document.getElementById("selectGroup").value == "none") return;
                document.getElementById("userName").hidden = true;
                document.getElementById("aboutStation").hidden = false;
                this.state = StateEnum.ABOUTSTATION;
                break;
            case StateEnum.ABOUTSTATION:
                document.getElementById("aboutStation").hidden = true;
                document.getElementById("divAboutFuel").hidden = false;
                this.state = StateEnum.SELECTFUEL;
                break;
            case StateEnum.SELECTFUEL:
                if (document.getElementById("selectFuel").value == "none") return;
                document.getElementById("divAboutFuel").hidden = true;
                //document.getElementById("divAboutFuel").hidden = false;
                //this.state = StateEnum.SELECTFUEL;
                break;
            // case StateEnum.EXERCISE:
            //     let task = this.Exercise.GetCurrentTask();
            //     task.OnAnswer();
            //     if (task.Answered) {
            //         if (this.Exercise.Next()) {
            //             this.ShowHtml(this.Exercise.GetCurrentTask().Html);
            //         }
            //         else {
            //             let now = new Date().getTime();
            //             let testTime = new Date(now - this.StartTime + new Date().getTimezoneOffset() * 60 * 1000);
            //             let proc = Math.round(this.Exercise.GetResult() * 100).toString();
            //             this.EmailContent = `${this.Exercise.Caption}. ${this.UserName}. Результат: ${proc}%.`;
            //             let html = `<h3>${this.Exercise.Caption}</h3>`;
            //             html += `<h3>Количество вопросов: ${this.Exercise.Tasks.length}</h3>`;
            //             html += `<h3>${this.UserName}</h3>`;
            //             html += "<h3>Результат: " + proc + "%</h3>";
            //             html += `<h3>${testTime.toLocaleTimeString()}</h3 >`;
            //             //отправлять пока не будем html += "<button id='btnSendEmail' onclick='btnSendEmailClick()'>Отправить по email</button>";
            //             this.ShowHtml(html);
            //             this.State = StateEnum.RESULT;
            //         }
            //     }
            //     break;
            // case StateEnum.RESULT:
            //     this.Start();
            //     break;
            default:
                throw new Error("Unknown CurrentFrame");
        }
    }
}

const controller = new Controller();

window.onload = () => {
    controller.Init();
};

function btnNextClick() {
    controller.NextFrame();
}

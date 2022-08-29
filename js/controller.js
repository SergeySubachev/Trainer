﻿let StateEnum = {
    INTRO: 0,
    USERNAME: 1,
    ABOUTSTATION: 2,
    SELECTFUEL: 3,
    SELECTEXERCISE: 4,
    EXERCISE: 5,
    RESULT: 6
}

class Controller {
    UserName;
    StartTime;
    State = -1;
    Exercise;
    ExerciseSettings = [];
    EmailContent = " ";

    Start() {
        this.State = StateEnum.INTRO;
        this.ShowHtml(introHtml);
        document.getElementById('btnNext').onclick = btnNextClick;
    }

    ShowHtml(html) {
        document.getElementById('divMain').innerHTML = html;
    }

    NextFrame() {
        switch (this.State) {
            case StateEnum.INTRO:
                this.ShowHtml(userNameHtml);
                document.getElementById('btnNext').onclick = btnNextClick;
                this.State = StateEnum.USERNAME;
                break;
            case StateEnum.USERNAME:
                this.UserName = document.getElementById("tbUserName").value;
                if (this.UserName.length == 0) return;
                this.ShowHtml(aboutStationHtml);
                document.getElementById('btnNext').onclick = btnNextClick;
                this.State = StateEnum.ABOUTSTATION;
                break;
            case StateEnum.ABOUTSTATION:
                this.ShowHtml(selectFuelHtml);
                document.getElementById('btnNext').onclick = btnNextClick;
                this.State = StateEnum.SELECTFUEL;
                break;
            // case StateEnum.SELECTEXERCISE:
            //     let options = $("input");
            //     for (var i = 0; i < options.length; i++) {
            //         let inp = options[i];
            //         if (inp.checked) {
            //             let count = $("#tbTasksCount")[0].value;
            //             switch (inp.value) {
            //                 case "0":
            //                     //this.ReadExerciseSettings("ClassZoneExercise");
            //                     this.Exercise = new ClassZoneExercise(count);
            //                     break;
            //                 case "1":
            //                     this.Exercise = new CategoryAndGroupExercise(count);
            //                     break;
            //                 case "2":
            //                     this.Exercise = new DeviceMarkingExercise(count);
            //                     break;
            //                 case "3":
            //                     this.Exercise = new DeviceCheckExercise(count);
            //                     break;
            //                 case "5":
            //                     this.Exercise = new CabelMarkingExercise(count);
            //                     break;
            //                 case "7":
            //                     this.Exercise = new CabelCheckExercise(count);
            //                     break;
            //                 default:
            //                     this.Exercise = new ClassZoneExercise(count);
            //             }
            //             this.Exercise.Begin();
            //             this.ShowHtml(this.Exercise.GetCurrentTask().Html);
            //             this.State = StateEnum.EXERCISE;
            //             this.StartTime = new Date().getTime();
            //             return;
            //         }
            //     }
            //     break;
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

let controller = new Controller();

window.onload = () => {
    controller.Start();
};

function btnNextClick() {
    controller.NextFrame();
}

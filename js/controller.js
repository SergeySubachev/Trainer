let StateEnum = {
    INTRO: 0,
    USERNAME: 1,
    SELECTEXERCISE: 2,
    EXERCISE: 3,
    RESULT: 4
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
    }

    //ReadExerciseSettings() {
    //    $.ajax({
    //        url: 'ExerciseSettings.json',
    //        async: true, //false - deprecated
    //        dataType: 'json',
    //        success: function (response) {
    //            controller.ExerciseSettings = response;
    //            alert(controller.ExerciseSettings[0].TasksCount);
    //        }
    //    });
    //}

    //ShowFile(htmlFileName) {
    //.load работает только на сервере
    //    $("#divMain").load(htmlFileName);
    //}

    ShowHtml(html) {
        $("#divMain").html(html);
    }

    /*NextFrame() {
        switch (this.State) {
            case StateEnum.INTRO:
                this.ShowFile("./Frames/UserName.html");
                this.State = StateEnum.USERNAME;
                break;
            case StateEnum.USERNAME:
                this.UserName = $("#tbUserName")[0].value;
                if (this.UserName.length == 0)
                    return;
                this.ShowFile("./Frames/SelectExercise.html");
                this.State = StateEnum.SELECTEXERCISE;
                break;
            case StateEnum.SELECTEXERCISE:
                let options = $("input");
                for (var i = 0; i < options.length; i++) {
                    let inp = options[i];
                    if (inp.checked) {
                        let count = $("#tbTasksCount")[0].value;
                        switch (inp.value) {
                            case "0":
                                //this.ReadExerciseSettings("ClassZoneExercise");
                                this.Exercise = new ClassZoneExercise(count);
                                break;
                            case "1":
                                this.Exercise = new CategoryAndGroupExercise(count);
                                break;
                            case "2":
                                this.Exercise = new DeviceMarkingExercise(count);
                                break;
                            case "3":
                                this.Exercise = new DeviceCheckExercise(count);
                                break;
                            case "5":
                                this.Exercise = new CabelMarkingExercise(count);
                                break;
                            case "7":
                                this.Exercise = new CabelCheckExercise(count);
                                break;
                            default:
                                this.Exercise = new ClassZoneExercise(count);
                        }
                        this.Exercise.Begin();
                        this.ShowHtml(this.Exercise.GetCurrentTask().Html);
                        this.State = StateEnum.EXERCISE;
                        this.StartTime = new Date().getTime();
                        return;
                    }
                }
                break;
            case StateEnum.EXERCISE:
                let task = this.Exercise.GetCurrentTask();
                task.OnAnswer();
                if (task.Answered) {
                    if (this.Exercise.Next()) {
                        this.ShowHtml(this.Exercise.GetCurrentTask().Html);
                    }
                    else {
                        let now = new Date().getTime();
                        let testTime = new Date(now - this.StartTime + new Date().getTimezoneOffset() * 60 * 1000);
                        let proc = Math.round(this.Exercise.GetResult() * 100).toString();
                        this.EmailContent = `${this.Exercise.Caption}. ${this.UserName}. Результат: ${proc}%.`;
                        let html = `<h3>${this.Exercise.Caption}</h3>`;
                        html += `<h3>Количество вопросов: ${this.Exercise.Tasks.length}</h3>`;
                        html += `<h3>${this.UserName}</h3>`;
                        html += "<h3>Результат: " + proc + "%</h3>";
                        html += `<h3>${testTime.toLocaleTimeString()}</h3 >`;
                        //отправлять пока не будем html += "<button id='btnSendEmail' onclick='btnSendEmailClick()'>Отправить по email</button>";
                        this.ShowHtml(html);
                        this.State = StateEnum.RESULT;
                    }
                }
                break;
            case StateEnum.RESULT:
                this.Start();
                break;
            default:
                throw new Error("Unknown CurrentFrame");
        }
    }*/
}

let controller = new Controller();

window.onload = () => {
    controller.Start();
};

function btnNextClick() {
    controller.NextFrame();    
}


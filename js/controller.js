// class Controller {
//     Init() {
//         // let tableFuels = document.getElementById("tableFuels");
//         // let fuels =  [ gazoline80, gazoline92, gazoline95, dieselSummer, dieselWinter ];        
//         // for (let fuel of fuels) {

//         //     let selectFuel = document.getElementById("selectFuel");
//         //     let opt = document.createElement("option");
//         //     opt.value = fuel;
//         //     opt.text = fuel.Name;
//         //     selectFuel.appendChild(opt);


//         }
//     }

//     NextFrame() {
//             // case StateEnum.EXERCISE:
//             //     let task = this.Exercise.GetCurrentTask();
//             //     task.OnAnswer();
//             //     if (task.Answered) {
//             //         if (this.Exercise.Next()) {
//             //             this.ShowHtml(this.Exercise.GetCurrentTask().Html);
//             //         }
//             //         else {
//             //             let now = new Date().getTime();
//             //             let testTime = new Date(now - this.StartTime + new Date().getTimezoneOffset() * 60 * 1000);
//             //             let proc = Math.round(this.Exercise.GetResult() * 100).toString();
//             //             this.EmailContent = `${this.Exercise.Caption}. ${this.UserName}. Результат: ${proc}%.`;
//             //             let html = `<h3>${this.Exercise.Caption}</h3>`;
//             //             html += `<h3>Количество вопросов: ${this.Exercise.Tasks.length}</h3>`;
//             //             html += `<h3>${this.UserName}</h3>`;
//             //             html += "<h3>Результат: " + proc + "%</h3>";
//             //             html += `<h3>${testTime.toLocaleTimeString()}</h3 >`;
//             //             //отправлять пока не будем html += "<button id='btnSendEmail' onclick='btnSendEmailClick()'>Отправить по email</button>";
//             //             this.ShowHtml(html);
//             //             this.State = StateEnum.RESULT;
//             //         }
//             //     }
//             //     break;
//             // case StateEnum.RESULT:
//             //     this.Start();
//             //     break;
//             default:
//                 throw new Error("Unknown CurrentFrame");
//         }
//     }
// }

let frames = [];
let currentFrame;

window.onload = () => {
    frames = [
        new Frame("divIntro"),
        new FrameUserName("divUserName"),
        new FrameAboutStation("divAboutStation"),
        new FrameAboutFuel("divAboutFuel")
    ];
    for (let i = 0; i < frames.length; i++) {
        frames[i].Init();
        if (i < frames.length - 1) frames[i].NextFrame = frames[i + 1];
    }

    currentFrame = frames[0];
    currentFrame.Show();
};

function btnNextClick() {
    if (currentFrame.IsComplete() && currentFrame.NextFrame != null) {
        currentFrame.Hide();
        currentFrame = currentFrame.NextFrame;
        currentFrame.Show();
    }
}

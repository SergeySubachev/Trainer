class Task {
    Html = "";
    Answered = false;
    OnAnswer() {
        this.Answered = true;
    }
    GetResult() {
        if (this.Answered)
            return 1;
        else
            return 0;
    }
}

// class OneInManyTest extends Task {
//     TestText = "";
//     SelectID = "OneInManyTest";
//     Options = [];
//     CorrectOption = "";
//     AnsweredOption;

//     constructor(selectId) {
//         super();
//         this.SelectID = selectId;
//     }

//     OnAnswer() {
//         //если внутри select перечислены option (т.е. checkbox)
//         let options = $(`#${this.SelectID} option`);
//         if (options.length > 0) {
//             for (var i = 0; i < options.length; i++) {
//                 let opt = options[i];
//                 if (opt.selected) {
//                     if (!opt.disabled) {
//                         this.AnsweredOption = opt.value;
//                         this.Answered = true;
//                     }
//                     return;
//                 }
//             }
//             return;
//         }

//         //если radio
//         options = $(`#${this.SelectID} input`);
//         if (options.length > 0) {
//             for (var i = 0; i < options.length; i++) {
//                 let opt = options[i];
//                 if (opt.checked) {
//                     this.AnsweredOption = opt.value;
//                     this.Answered = true;
//                     return;
//                 }
//             }   
//         }        
//     }

//     GetResult() {
//         if (this.Answered && (this.AnsweredOption == this.CorrectOption))
//             return 1;
//         else
//             return 0;
//     }
// }

// class ManyInManyTest extends Task {
//     TestText = "";
//     SelectID = "ManyInManyTest";
//     Options = [];
//     CorrectOptions = [];
//     AnsweredOptions = [];

//     constructor(selectId) {
//         super();
//         this.SelectID = selectId;
//     }

//     OnAnswer() {
//         this.AnsweredOptions = [];
//         let options = $(`#${this.SelectID} input`); //checkboxes
//         for (var i = 0; i < options.length; i++) {
//             let opt = options[i];
//             if (opt.checked) {
//                 this.AnsweredOptions.push(opt.value);
//             }
//         }
//         this.Answered = true;
//     }

//     GetResult() {
//         if (!this.Answered)
//             return 0;

//         //если что-то не отметили - 0
//         for (var i = 0; i < this.CorrectOptions.length; i++) {
//             if (this.AnsweredOptions.indexOf(this.CorrectOptions[i]) < 0)
//                 return 0;
//         }

//         //если отметили что-то лишнее - 0
//         for (var i = 0; i < this.AnsweredOptions.length; i++) {
//             if (this.CorrectOptions.indexOf(this.AnsweredOptions[i]) < 0)
//                 return 0;
//         }

//         //только если полное совпадение отмеченных и неотмеченных
//         return 1;
//     }
// }

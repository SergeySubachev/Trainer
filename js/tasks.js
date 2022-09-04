class Task {
    ContainerId = "";

    Init() { }

    IsComplete() {
        return true;
    }

    GetResult() {
        return 0;
    }
}

class OneInManyTest extends Task {
    Options = [];
    CorrectOption;

    constructor(containerId, options, correctOption) {
        super();
        this.ContainerId = containerId;
        this.Options = options;
        this.CorrectOption = correctOption;
    }

    Init() {
        let container = document.getElementById(this.ContainerId);
        let selector = document.createElement("select");
        container.appendChild(selector);
        let opt = document.createElement("option");
        opt.value = "none";
        opt.selected = true;
        opt.disabled = true;
        opt.hidden = true;
        opt.innerText = "???";
        selector.appendChild(opt);
        for (let optVal of this.Options) {
            opt = document.createElement("option");
            opt.value = optVal;
            opt.innerText = optVal;
            selector.appendChild(opt);
        }
    }

    IsComplete() {
        let container = document.getElementById(this.ContainerId);
        let selector = container.firstChild;
        if (selector.value == "none") return false;
        return true;
    }

    GetResult() {
        let container = document.getElementById(this.ContainerId);
        let selector = container.firstChild;
        if (selector.value == this.CorrectOption) return 1;
        return 0;
    }
}

class SubstanceCategoryTask extends OneInManyTest {
    constructor(containerId, correctOption) {
        super(containerId, ["IIA", "IIB", "IIC"], correctOption);
    }
}

class SubstanceGroupTask extends OneInManyTest {
    constructor(containerId, correctOption) {
        super(containerId, ["T1", "T2", "T3", "T4", "T5", "T6"], correctOption);
    }
}

const PUE = "Правила устройства электроустановок";
const FZ123 = "Технический регламент о требованиях пожарной безопасности";
class ClassZoneDocumentTask extends OneInManyTest {
    constructor(containerId, correctOption) {
        super(containerId, [PUE, FZ123], correctOption);
    }
}

class ClassZoneTask extends OneInManyTest {
    constructor(containerId, correctOption) {
        super(containerId, ["П-I", "П-II", "П-IIа", "П-III", "В-I", "В-Iа", "В-Iб", "В-Iг", "В-II", "В-IIа", "0", "1", "2", "20", "21", "22"], correctOption);
    }
}

class ManyInManyTest extends Task {
    Options = [];
    CorrectOptions = [];

    constructor(containerId, options, correctOptions) {
        super();
        this.ContainerId = containerId;
        this.Options = options;
        this.CorrectOptions = correctOptions;
    }

    Init() {
        let container = document.getElementById(this.ContainerId);
        for (let option of this.Options) {
            let div = document.createElement("div");
            container.appendChild(div);
            let label = document.createElement("label");
            div.appendChild(label);
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.value = option;
            label.appendChild(checkbox);
            let span = document.createElement("span");
            span.innerText = option;
            label.appendChild(span);
        }
    }

    // OnAnswer() {
    //     this.AnsweredOptions = [];
    //     let options = $(`#${this.SelectID} input`); //checkboxes
    //     for (var i = 0; i < options.length; i++) {
    //         let opt = options[i];
    //         if (opt.checked) {
    //             this.AnsweredOptions.push(opt.value);
    //         }
    //     }
    //     this.Answered = true;
    // }

    // GetResult() {
    //     // if (!this.Answered)
    //     //     return 0;

    //     // //если что-то не отметили - 0
    //     // for (var i = 0; i < this.CorrectOptions.length; i++) {
    //     //     if (this.AnsweredOptions.indexOf(this.CorrectOptions[i]) < 0)
    //     //         return 0;
    //     // }

    //     // //если отметили что-то лишнее - 0
    //     // for (var i = 0; i < this.AnsweredOptions.length; i++) {
    //     //     if (this.CorrectOptions.indexOf(this.AnsweredOptions[i]) < 0)
    //     //         return 0;
    //     // }

    //     //только если полное совпадение отмеченных и неотмеченных
    //     return 1;
    // }
}

class DeviceCheckTask extends ManyInManyTest {
    constructor(containerId, correctOptions) {
        super(containerId, ["соответствует", "не соответствует по классу зоны", "не соответствует по категории ВОС", "не соответствует по группе ВОС"], correctOptions);
    }
}
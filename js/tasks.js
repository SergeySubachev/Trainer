function GetRandom(options = []) {
    let i = Math.round(Math.random() * (options.length - 1));
    return options[i];
}

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
        container.innerHTML = "";
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

        let result;
        const isTrainerMode = document.getElementById("radioTrainerMode").checked;

        if (selector.value == this.CorrectOption) {
            result = 1;
            if (isTrainerMode) {
                selector.style.background = "MediumSeaGreen";
            }
        } else {
            result = 0;
            if (isTrainerMode) {
                selector.style.background = "Tomato";
            }
        }

        return result;
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
        container.innerHTML = "";
        container.style.background = "initial";
        for (let option of this.Options) {
            let div = document.createElement("div");
            container.appendChild(div);
            let label = document.createElement("label");
            div.appendChild(label);
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.value = option;
            checkbox.classList.add("w3-check");
            label.appendChild(checkbox);
            let span = document.createElement("span");
            span.style.marginLeft = "5px";
            span.innerText = option;
            label.appendChild(span);
        }
    }

    GetResult() {
        let answeredOptions = [];
        let container = document.getElementById(this.ContainerId);
        let divs = container.children;
        for (const div of divs) {
            let label = div.firstChild;
            let checkbox = label.firstChild;
            if (checkbox.checked) {
                answeredOptions.push(checkbox.value);
            }
        }

        let result = 1; //только если полное совпадение отмеченных и неотмеченных
        const isTrainerMode = document.getElementById("radioTrainerMode").checked;

        //если что-то не отметили - 0
        for (const correctOption of this.CorrectOptions) {
            if (answeredOptions.indexOf(correctOption) < 0) {
                result = 0;
                break;
            }
        }

        //если отметили что-то лишнее - 0
        for (const answeredOption of answeredOptions) {
            if (this.CorrectOptions.indexOf(answeredOption) < 0) {
                result = 0;
                break;
            }
        }

        if (isTrainerMode) {
            if (result == 1) {
                container.style.background = "MediumSeaGreen";
            } else {
                container.style.background = "Tomato";
            }
        }

        return result;
    }
}
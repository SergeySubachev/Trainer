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

class DeviceLevel {
    constructor(name, value) {
        this.Name = name;
        this.Value = value;
    }
}
const DEVICELEVEL_0 = new DeviceLevel("0", 0);
const DEVICELEVEL_1 = new DeviceLevel("1", 1);
const DEVICELEVEL_2 = new DeviceLevel("2", 2);

class DeviceGroup {
    constructor(name, value) {
        this.Name = name;
        this.Value = value;
    }
}
const DEVICEGROUP_IIA = new DeviceGroup("IIA", 0);
const DEVICEGROUP_IIB = new DeviceGroup("IIB", 1);
const DEVICEGROUP_IIC = new DeviceGroup("IIC", 2);
const DEVICEGROUP_II = new DeviceGroup("II", 3);

class DeviceTempClass {
    constructor(name, value) {
        this.Name = name;
        this.Value = value;
    }
}
const DEVICETEMPCLASS_T1 = new DeviceTempClass("T1", 1);
const DEVICETEMPCLASS_T2 = new DeviceTempClass("T2", 2);
const DEVICETEMPCLASS_T3 = new DeviceTempClass("T3", 3);
const DEVICETEMPCLASS_T4 = new DeviceTempClass("T4", 4);
const DEVICETEMPCLASS_T5 = new DeviceTempClass("T5", 5);
const DEVICETEMPCLASS_T6 = new DeviceTempClass("T6", 6);

class DeviceCheckTask extends ManyInManyTest {
    DeviceLevel = DEVICELEVEL_0;
    DeviceProtectionType = "";
    DeviceGroup = DEVICEGROUP_II;
    DeviceTempClass = DEVICETEMPCLASS_T1;

    constructor(containerId, correctOptions) {
        super(containerId, [
            "соответствует",
            "не соответствует по классу зоны",
            "не соответствует по категории ВОС",
            "не соответствует по группе ВОС"
        ], correctOptions);
    }

    GetRandom(options = []) {
        let i = Math.round(Math.random(options.length - 1));
        return options[i];
    }
}

//проверка двигателя
class EngineCheckTask extends DeviceCheckTask {
    constructor(containerId, substanceCategory = SUBSTANCE_IIA, substanceGroup = SUBSTANCE_T1) {
        super(containerId, []);
        this.DeviceLevel = this.GetRandom([DEVICELEVEL_0, DEVICELEVEL_1, DEVICELEVEL_2]);
        let typeOptions;
        switch (this.DeviceLevel.Value) {
            case 0:
                typeOptions = ["d", "ia", "s"]
                break;
            case 1:
                typeOptions = ["d", "ib", "s"]
                break;
            case 2:
                typeOptions = ["d", "ic", "e", "s"]
                break;
        }
        this.DeviceProtectionType = this.GetRandom(typeOptions);
        if (this.DeviceProtectionType == "d") {
            this.DeviceGroup = this.GetRandom([DEVICEGROUP_IIA, DEVICEGROUP_IIB, DEVICEGROUP_IIC]);
        } else {
            this.DeviceGroup = DEVICEGROUP_II;
        }
        this.DeviceTempClass = this.GetRandom([DEVICETEMPCLASS_T1, DEVICETEMPCLASS_T2, DEVICETEMPCLASS_T3, DEVICETEMPCLASS_T4, DEVICETEMPCLASS_T5, DEVICETEMPCLASS_T6]);

        let correctOptions = [];
        let allSaticfy = true;
        //классу зоны по-любому соответсвует
        if (this.DeviceGroup.Value < substanceCategory.Value) {
            correctOptions.push("не соответствует по категории ВОС");
            allSaticfy = false;
        }
        if (this.DeviceTempClass.Value < substanceGroup.Value) {
            correctOptions.push("не соответствует по группе ВОС");
            allSaticfy = false;
        }
        if (allSaticfy) {
            correctOptions.push("соответствует");
        }
        this.CorrectOptions = correctOptions;
    }

    Init() {
        super.Init();        
        document.getElementById("spanEngineMarking").innerText = `${this.DeviceLevel.Name}Ex${this.DeviceProtectionType}${this.DeviceGroup.Name}${this.DeviceTempClass.Name}`;
    }
}

//проверка пускателя
class StarterCheckTask extends DeviceCheckTask {
    constructor(containerId, substanceCategory = SUBSTANCE_IIA, substanceGroup = SUBSTANCE_T1) {
        super(containerId, []);
        this.DeviceLevel = this.GetRandom([DEVICELEVEL_0, DEVICELEVEL_1, DEVICELEVEL_2]);
        let typeOptions;
        switch (this.DeviceLevel.Value) {
            case 0:
                typeOptions = ["d", "ia", "o", "s"]
                break;
            case 1:
                typeOptions = ["d", "ib", "o", "s"]
                break;
            case 2:
                typeOptions = ["d", "ic", "e", "o", "s"]
                break;
        }
        this.DeviceProtectionType = this.GetRandom(typeOptions);
        if (this.DeviceProtectionType == "d") {
            this.DeviceGroup = this.GetRandom([DEVICEGROUP_IIA, DEVICEGROUP_IIB, DEVICEGROUP_IIC]);
        } else {
            this.DeviceGroup = DEVICEGROUP_II;
        }
        this.DeviceTempClass = this.GetRandom([DEVICETEMPCLASS_T1, DEVICETEMPCLASS_T2, DEVICETEMPCLASS_T3, DEVICETEMPCLASS_T4, DEVICETEMPCLASS_T5, DEVICETEMPCLASS_T6]);

        let correctOptions = [];
        let allSaticfy = true;
        //классу зоны по-любому соответсвует
        if (this.DeviceGroup.Value < substanceCategory.Value) {
            correctOptions.push("не соответствует по категории ВОС");
            allSaticfy = false;
        }
        if (this.DeviceTempClass.Value < substanceGroup.Value) {
            correctOptions.push("не соответствует по группе ВОС");
            allSaticfy = false;
        }
        if (allSaticfy) {
            correctOptions.push("соответствует");
        }
        this.CorrectOptions = correctOptions;
    }

    Init() {
        super.Init();        
        document.getElementById("spanStarterMarking").innerText = `${this.DeviceLevel.Name}Ex${this.DeviceProtectionType}${this.DeviceGroup.Name}${this.DeviceTempClass.Name}`;
    }
}
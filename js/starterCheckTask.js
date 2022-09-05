class StarterCheckTask extends DeviceCheckTask {
    constructor(containerId, substanceCategory = SUBSTANCE_IIA, substanceGroup = SUBSTANCE_T1) {
        super(containerId, []);
        this.DeviceLevel = GetRandom([DEVICELEVEL_0, DEVICELEVEL_1, DEVICELEVEL_2]);
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
        this.DeviceProtectionType = GetRandom(typeOptions);
        if (this.DeviceProtectionType == "d") {
            this.DeviceGroup = GetRandom([DEVICEGROUP_IIA, DEVICEGROUP_IIB, DEVICEGROUP_IIC]);
        } else {
            this.DeviceGroup = DEVICEGROUP_II;
        }
        this.DeviceTempClass = GetRandom([DEVICETEMPCLASS_T1, DEVICETEMPCLASS_T2, DEVICETEMPCLASS_T3, DEVICETEMPCLASS_T4, DEVICETEMPCLASS_T5, DEVICETEMPCLASS_T6]);

        let correctOptions = [];
        let allSatisfy = true;
        //классу зоны по-любому соответсвует
        if (this.DeviceGroup.Value < substanceCategory.Value) {
            correctOptions.push("не соответствует по категории ВОС");
            allSatisfy = false;
        }
        if (this.DeviceTempClass.Value < substanceGroup.Value) {
            correctOptions.push("не соответствует по группе ВОС");
            allSatisfy = false;
        }
        if (allSatisfy) {
            correctOptions.push("соответствует");
        }
        this.CorrectOptions = correctOptions;
    }

    Init() {
        super.Init();
        document.getElementById("spanStarterMarking").innerText = `${this.DeviceLevel.Name}Ex${this.DeviceProtectionType}${this.DeviceGroup.Name}${this.DeviceTempClass.Name}`;
    }
}
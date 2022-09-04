class LampCheckTask extends DeviceCheckTask {
    constructor(containerId, substanceCategory = SUBSTANCE_IIA, substanceGroup = SUBSTANCE_T1) {
        super(containerId, []);
        this.DeviceLevel = this.GetRandom([DEVICELEVEL_1, DEVICELEVEL_2]);
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
        document.getElementById("spanLampMarking").innerText = `${this.DeviceLevel.Name}Ex${this.DeviceProtectionType}${this.DeviceGroup.Name}${this.DeviceTempClass.Name}`;
    }
}
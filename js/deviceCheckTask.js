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
}
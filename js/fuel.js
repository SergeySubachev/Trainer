class SubstanceCategory {
    constructor(name, value) {
        this.Name = name;
        this.Value = value;
    }
}
const SUBSTANCE_IIA = new SubstanceCategory("IIA", 0);
const SUBSTANCE_IIB = new SubstanceCategory("IIB", 1);
const SUBSTANCE_IIC = new SubstanceCategory("IIC", 2);

class SubstanceGroup {
    constructor(name, value) {
        this.Name = name;
        this.Value = value;
    }
}
const SUBSTANCE_T1 = new SubstanceGroup("T1", 1);
const SUBSTANCE_T2 = new SubstanceGroup("T2", 2);
const SUBSTANCE_T3 = new SubstanceGroup("T3", 3);
const SUBSTANCE_T4 = new SubstanceGroup("T4", 4);
const SUBSTANCE_T5 = new SubstanceGroup("T5", 5);
const SUBSTANCE_T6 = new SubstanceGroup("T6", 6);

class Fuel {
    constructor(Name = "", Tvsp = 0, Bemz = 0, Tsv = 0, Clow = 0, Chigh = 0, Category = SUBSTANCE_IIA, Group = SUBSTANCE_T1) {
        this.Name = Name;
        this.Tvsp = Tvsp;
        this.Bemz = Bemz;
        this.Tsv = Tsv;
        this.Clow = Clow;
        this.Chigh = Chigh;
        this.Category = Category;
        this.Group = Group;
    }
}

const gazoline80 = new Fuel("Бензин АИ-80", -37, 1.02, 320, 0.78, 5.6, SUBSTANCE_IIA, SUBSTANCE_T3);
const gazoline92 = new Fuel("Бензин АИ-92", -36, 1.02, 370, 0.98, 5.5, SUBSTANCE_IIA, SUBSTANCE_T3);
const gazoline95 = new Fuel("Бензин АИ-95", -39, 1.02, 375, 1.1, 6.14, SUBSTANCE_IIA, SUBSTANCE_T3);
const gazoline98 = new Fuel("Бензин АИ-98", -39, 1.02, 375, 1.1, 6.14, SUBSTANCE_IIA, SUBSTANCE_T3);
const dieselSummer = new Fuel("Дизельное топливо 'Л'", 40, 0.75, 210, 0.52, 6.2, SUBSTANCE_IIB, SUBSTANCE_T3);
const dieselWinter = new Fuel("Дизельное топливо 'З'", 35, 0.75, 225, 0.61, 6.2, SUBSTANCE_IIB, SUBSTANCE_T3);

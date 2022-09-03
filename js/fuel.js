class Fuel {
    constructor(Name, Tvsp, Tsv, Clow, Chigh, Category, Group) {
        this.Name = Name;
        this.Tvsp = Tvsp;
        this.Tsv = Tsv;
        this.Clow = Clow;
        this.Chigh = Chigh;
        this.Category = Category;
        this.Group = Group;
    }
}

const gazoline80 = new Fuel("Бензин АИ-80", -37, 320, 0.78, 5.6, "IIA", "T3");
const gazoline92 = new Fuel("Бензин АИ-92", -36, 370, 0.98, 5.5, "IIA", "T3");
const gazoline95 = new Fuel("Бензин АИ-95", -39, 375, 1.1, 6.14, "IIA", "T3");
const dieselSummer = new Fuel("Дизельное топливо 'Л'", 40, 210, 0.52, 6.2, "IIB", "T3");
const dieselWinter = new Fuel("Дизельное топливо 'З'", 35, 225, 0.61, 6.2, "IIB", "T3");

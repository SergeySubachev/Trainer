class WirePart {
    Description = "";
    constructor(description) {
        this.Description = description;
    }
}

const WireThread_М = new WirePart("медные");
const WireThread_А = new WirePart("алюминиевые");

const WireIsolate_В = new WirePart("поливинилхлоридная");
const WireIsolate_П = new WirePart("полиэтиленовая");
const WireIsolate_Р = new WirePart("резиновая");

const WireFeature_н = new WirePart("нет");
const WireFeature_2 = new WirePart("гибкий");
const WireFeature_3 = new WirePart("повышенной гибкости");
const WireFeature_4 = new WirePart("особо гибкий");
const WireFeature_ТО = new WirePart("в оплётке из х/б пряжи, пропитанной противогнилостным составом");
const WireFeature_П = new WirePart("плоский, с разделительным основанием");
const WireFeature_ВД = new WirePart("гибкий, в ПВХ оболочке, двухжильный");
const WireFeature_Д = new WirePart("в оплётке из х/б пряжи, двухжильный");
const WireFeature_С = new WirePart("плоский, без разделительного основания");
const WireFeature_Cover_П = new WirePart("в полиэтиленовой оболочке");
const WireFeature_Cover_В = new WirePart("в поливинилхлоридной оболочке");
const WireFeature_Cover_ВЗ = new WirePart("в поливинилхлоридной оболочке с круглым защитным проводом");
const WireFeature_Cover_ГН = new WirePart("с гибкой жилой, в резиновой (найритовой) негорючей оболочке");
const WireFeature_Cover_Н = new WirePart("в резиновой (найритовой) негорючей оболочке");
const WireFeature_Cover_Пров = new WirePart("в оплётке из стальных оцинкованных проволок");
const WireFeature_Cover_РПров = new WirePart("в резиновой оболочке, в оплётке из стальных оцинкованных проволок");
const WireFeature_Cover_Ф = new WirePart("в металлической фальцованной защитной оболочке из сплава АМЦ");
const WireFeature_Cover_Фл = new WirePart("в металлической фальцованной защитной оболочке из латуни");

class Wire {
    Marks = "";
    Thread = WireThread_М;
    Isolate = WireIsolate_В;
    Feature = WireFeature_н;
    constructor(marks, thread, isolate, feature) {
        this.Marks = marks;
        this.Thread = thread;
        this.Isolate = isolate;
        this.Feature = feature;
    }
}

const WIRES = [
    new Wire("ПВ", WireThread_М, WireIsolate_В, WireFeature_н),
    new Wire("ПВ-1", WireThread_М, WireIsolate_В, WireFeature_н),
    new Wire("ПВ-2", WireThread_М, WireIsolate_В),
    new Wire("ПВ-3", WireThread_М, WireIsolate_В),
    new Wire("ПВ-4", WireThread_М, WireIsolate_В),
    new Wire("АПВ", WireThread_А, WireIsolate_В, WireFeature_н),
    new Wire("ПП", WireThread_М, WireIsolate_П, WireFeature_н),
    new Wire("АПП", WireThread_А, WireIsolate_П, WireFeature_н),
    new Wire("ПР", WireThread_М, WireIsolate_Р, WireFeature_н),
    new Wire("АПР", WireThread_А, WireIsolate_Р, WireFeature_н),
    new Wire("ПРТО", WireThread_М, WireIsolate_Р, WireFeature_ТО),
    new Wire("АПРТО", WireThread_А, WireIsolate_Р, WireFeature_ТО),
    new Wire("ППР", WireThread_М, WireIsolate_Р, WireFeature_П),
    new Wire("АППР", WireThread_А, WireIsolate_Р, WireFeature_П),
    new Wire("ПРВД", WireThread_М, WireIsolate_Р, WireFeature_ВД),
    new Wire("ПРД", WireThread_М, WireIsolate_Р, WireFeature_Д),
    new Wire("ППВС", WireThread_М, WireIsolate_В, WireFeature_С),
    new Wire("АППВС", WireThread_А, WireIsolate_В, WireFeature_С),
    new Wire("ВПП", WireThread_М, WireIsolate_П, WireFeature_Cover_П),
    new Wire("ВПВ", WireThread_М, WireIsolate_П, WireFeature_Cover_В),
    new Wire("ПВВЗ", WireThread_М, WireIsolate_В, WireFeature_Cover_ВЗ),
    new Wire("ПРГН", WireThread_М, WireIsolate_Р, WireFeature_Cover_ГН),
    new Wire("ПРН", WireThread_М, WireIsolate_Р, WireFeature_Cover_Н),
    new Wire("АПРН", WireThread_А, WireIsolate_Р, WireFeature_Cover_Н),
    new Wire("ПРП", WireThread_М, WireIsolate_Р, WireFeature_Cover_Пров),
    new Wire("ПРРП", WireThread_М, WireIsolate_Р, WireFeature_Cover_РПров),
    new Wire("АПРРП", WireThread_А, WireIsolate_Р, WireFeature_Cover_РПров),
    new Wire("ПРФ", WireThread_М, WireIsolate_Р, WireFeature_Cover_Ф),
    new Wire("АПРФ", WireThread_А, WireIsolate_Р, WireFeature_Cover_Ф),
    new Wire("ПРФл", WireThread_М, WireIsolate_Р, WireFeature_Cover_Фл)
];

class WireThreadTask extends OneInManyTest {
    constructor(containerId, correctOption) {
        let options = [WireThread_М.Description, WireThread_А.Description];
        super(containerId, options, correctOption);
    }
}

class WireIsolateTask extends OneInManyTest {
    constructor(containerId, correctOption) {
        let options = [
            WireIsolate_В.Description,
            WireIsolate_П.Description,
            WireIsolate_Р.Description
        ];
        super(containerId, options, correctOption);
    }
}

class WireFeatureTask extends OneInManyTest {
    constructor(containerId, correctOption) {
        let options = [
            WireFeature_н.Description,
            WireFeature_2.Description,
            WireFeature_3.Description,
            WireFeature_4.Description,
            WireFeature_ТО.Description,
            WireFeature_П.Description,
            WireFeature_ВД.Description,
            WireFeature_Д.Description,
            WireFeature_С.Description,
            WireFeature_Cover_П.Description,
            WireFeature_Cover_В.Description,
            WireFeature_Cover_ВЗ.Description,
            WireFeature_Cover_ГН.Description,
            WireFeature_Cover_Н.Description,
            WireFeature_Cover_Пров.Description,
            WireFeature_Cover_РПров.Description,
            WireFeature_Cover_Ф.Description,
            WireFeature_Cover_Фл.Description
        ];
        super(containerId, options, correctOption);
    }
}

const WireLaying1 = "на скобах";
const WireLaying2 = "на тросах";
const WireLaying3 = "в трубе";

class WirePartCheckTask extends OneInManyTest {
    constructor(containerId, correctOption) {
        super(containerId, ["соответствует", "не соответствует"], correctOption);
    }
}
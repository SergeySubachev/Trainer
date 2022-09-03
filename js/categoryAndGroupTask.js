﻿class CategoryAndGroupTask extends Task {
    SubstanceName;
    CategoryTest;
    GroupTest;

    constructor(substanceName, category, group) {
        super();

        this.SubstanceName = substanceName;

        this.CategoryTest = new OneInManyTest("CategoryTest");
        this.CategoryTest.Options = ["IIA", "IIB", "IIC"];
        this.CategoryTest.CorrectOption = category;

        this.GroupTest = new OneInManyTest("GroupTest");
        this.GroupTest.Options = ["T1", "T2", "T3", "T4", "T5", "T6"];
        this.GroupTest.CorrectOption = group;

        this.Html = "<h3>Определите категорию и группу взрывоопасной смеси:</h3>";
        this.Html += this.SubstanceName;
        this.Html += "<p>";
        this.Html += "<select id='CategoryTest'>";
        this.Html += "<option value='null' disabled selected>Категория...</option>";
        for (var i = 0; i < this.CategoryTest.Options.length; i++) {
            let option = this.CategoryTest.Options[i];
            this.Html += `<option value="${option}">${option}</option>`;
        }
        this.Html += "</select>";

        this.Html += "<select id='GroupTest'>";
        this.Html += "<option value='null' disabled selected>Группа...</option>";
        for (var i = 0; i < this.GroupTest.Options.length; i++) {
            let option = this.GroupTest.Options[i];
            this.Html += `<option value="${option}">${option}</option>`;
        }
        this.Html += "</select>";
        this.Html += "</p>";
    }

    OnAnswer() {
        this.CategoryTest.OnAnswer();
        this.GroupTest.OnAnswer();
        this.Answered = this.CategoryTest.Answered && this.GroupTest.Answered;
    }

    GetResult() {
        //оба должны быть выбраны правильно
        return this.CategoryTest.GetResult() * this.GroupTest.GetResult();
    }
}

let CategoryAndGroupTasksBase = [
    new CategoryAndGroupTask("Аммиак", "IIA", "T1"),
    new CategoryAndGroupTask("Аллил хлоридный", "IIA", "T1"),
    new CategoryAndGroupTask("Ацетон", "IIA", "T1"),
    new CategoryAndGroupTask("Ацетонитрил", "IIA", "T1"),
    new CategoryAndGroupTask("Бензол", "IIA", "T1"),
    new CategoryAndGroupTask("Бензотрифторид", "IIA", "T1"),
    new CategoryAndGroupTask("Винил хлористый", "IIA", "T1"),
    new CategoryAndGroupTask("Винилиден хлористый", "IIA", "T1"),
    new CategoryAndGroupTask("1,2 – дихлорпропан", "IIA", "T1"),
    new CategoryAndGroupTask("Дихлорэтан", "IIA", "T1"),
    new CategoryAndGroupTask("Диэтиламин", "IIA", "T1"),
    new CategoryAndGroupTask("Дизопропиловый эфир", "IIA", "T1"),
    new CategoryAndGroupTask("Доменный газ", "IIA", "T1"),
    new CategoryAndGroupTask("Изобутилен", "IIA", "T1"),
    new CategoryAndGroupTask("Изобутан", "IIA", "T1"),
    new CategoryAndGroupTask("Изопропилбензол", "IIA", "T1"),
    new CategoryAndGroupTask("Кислота уксусная", "IIA", "T1"),
    new CategoryAndGroupTask("Ксилол", "IIA", "T1"),
    new CategoryAndGroupTask("Метан (промышленный)", "IIA", "T1"),
    new CategoryAndGroupTask("Метилацетат", "IIA", "T1"),
    new CategoryAndGroupTask("A-метилстирол", "IIA", "T1"),
    new CategoryAndGroupTask("Метил хлористый", "IIA", "T1"),
    new CategoryAndGroupTask("Метилизоцинат", "IIA", "T1"),
    new CategoryAndGroupTask("Метилхлорформиат", "IIA", "T1"),
    new CategoryAndGroupTask("Метилциклопропилкетон", "IIA", "T1"),
    new CategoryAndGroupTask(" Метилэтилкетон", "IIA", "T1"),
    new CategoryAndGroupTask("Окись углерода", "IIA", "T1"),
    new CategoryAndGroupTask("Пропан", "IIA", "T1"),
    new CategoryAndGroupTask("Пиридин", "IIA", "T1"),
    new CategoryAndGroupTask("Растворитель Р-4", "IIA", "T1"),
    new CategoryAndGroupTask("Разбавитель РЭ-1", "IIA", "T1"),
    new CategoryAndGroupTask("Сольвент нефтяной", "IIA", "T1"),
    new CategoryAndGroupTask("Стирол", "IIA", "T1"),
    new CategoryAndGroupTask("Спирт диацетоновый", "IIA", "T1"),
    new CategoryAndGroupTask("Tолуол", "IIA", "T1"),
    new CategoryAndGroupTask("Tрифторхлорпропан", "IIA", "T1"),
    new CategoryAndGroupTask("Tрифторпропен", "IIA", "T1"),
    new CategoryAndGroupTask("Tрифторэтан", "IIA", "T1"),
    new CategoryAndGroupTask("Tрифторхлорэтилен", "IIA", "T1"),
    new CategoryAndGroupTask("Tриэтиламин", "IIA", "T1"),
    new CategoryAndGroupTask("Хлорбензол", "IIA", "T1"),
    new CategoryAndGroupTask("Циклопентадиен", "IIA", "T1"),
    new CategoryAndGroupTask("Этан", "IIA", "T1"),
    new CategoryAndGroupTask("Этил хлористый", "IIA", "T1"),
    new CategoryAndGroupTask("Алкилбензол", "IIA", "T2"),
    new CategoryAndGroupTask("Амилацетат", "IIA", "T2"),
    new CategoryAndGroupTask("Ангидрид уксусный", "IIA", "T2"),
    new CategoryAndGroupTask("Ацетилацетон", "IIA", "T2"),
    new CategoryAndGroupTask("Ацетил хлористый", "IIA", "T2"),
    new CategoryAndGroupTask("Ацетопропилхлорид", "IIA", "T2"),
    new CategoryAndGroupTask("Бензин Б95/130", "IIA", "T2"),
    new CategoryAndGroupTask("Бутан", "IIA", "T2"),
    new CategoryAndGroupTask("Бутилацетат", "IIA", "T2"),
    new CategoryAndGroupTask("Бутилпропионат", "IIA", "T2"),
    new CategoryAndGroupTask("Винилацетат", "IIA", "T2"),
    new CategoryAndGroupTask("Винилиден фтористый", "IIA", "T2"),
    new CategoryAndGroupTask("Диатол", "IIA", "T2"),
    new CategoryAndGroupTask("Диизопропиламин", "IIA", "T2"),
    new CategoryAndGroupTask("Диметиламин", "IIA", "T2"),
    new CategoryAndGroupTask("Диметилформамид", "IIA", "T2"),
    new CategoryAndGroupTask("Изопентан", "IIA", "T2"),
    new CategoryAndGroupTask("Изопрен", "IIA", "T2"),
    new CategoryAndGroupTask("Изопропиламин", "IIA", "T2"),
    new CategoryAndGroupTask("Изооктан", "IIA", "T2"),
    new CategoryAndGroupTask("Кислота пропионовая", "IIA", "T2"),
    new CategoryAndGroupTask("Метиламин", "IIA", "T2"),
    new CategoryAndGroupTask("Метилизобутилкетон", "IIA", "T2"),
    new CategoryAndGroupTask("Метилметакрилат", "IIA", "T2"),
    new CategoryAndGroupTask("Метилмеркаптан", "IIA", "T2"),
    new CategoryAndGroupTask("Метилтрихлорсилан", "IIA", "T2"),
    new CategoryAndGroupTask("2-метилтиофен", "IIA", "T2"),
    new CategoryAndGroupTask("Метилфуран", "IIA", "T2"),
    new CategoryAndGroupTask("Моноизобутиламин", "IIA", "T2"),
    new CategoryAndGroupTask("Метилхлорметилдихлорсилан", "IIA", "T2"),
    new CategoryAndGroupTask("Окись мезитила", "IIA", "T2"),
    new CategoryAndGroupTask("Пентадиен-1,3", "IIA", "T2"),
    new CategoryAndGroupTask("Пропиламин", "IIA", "T2"),
    new CategoryAndGroupTask("Пропилен", "IIA", "T2"),
    new CategoryAndGroupTask("Растворитель № 646", "IIA", "T2"),
    new CategoryAndGroupTask("Разбавитель РДВ", "IIA", "T2"),
    new CategoryAndGroupTask("Спирт бутиловый нормальный", "IIA", "T2"),
    new CategoryAndGroupTask("Tрифторпропилметилдихлорсилан", "IIA", "T2"),
    new CategoryAndGroupTask("Tрифторэтилен", "IIA", "T2"),
    new CategoryAndGroupTask("Изобутил хлористый", "IIA", "T2"),
    new CategoryAndGroupTask("Этиламин", "IIA", "T2"),
    new CategoryAndGroupTask("Этилацетат", "IIA", "T2"),
    new CategoryAndGroupTask("Этилбутират", "IIA", "T2"),
    new CategoryAndGroupTask("Этилен-диамин", "IIA", "T2"),
    new CategoryAndGroupTask("Этиленхлоргидрин", "IIA", "T2"),
    new CategoryAndGroupTask("Этилизобутират", "IIA", "T2"),
    new CategoryAndGroupTask("Растворитель Р-5", "IIA", "T1"),
    new CategoryAndGroupTask("Растворитель РС-1", "IIA", "T1"),
    new CategoryAndGroupTask("Растворитель № 647", "IIA", "T2"),
    new CategoryAndGroupTask("Растворитель № 648", "IIA", "T2"),
    new CategoryAndGroupTask("Растворитель № 649", "IIA", "T2"),
    new CategoryAndGroupTask("Растворитель БЭФ", "IIA", "T2"),
    new CategoryAndGroupTask("Растворитель АЭ", "IIA", "T2"),
    new CategoryAndGroupTask("Разбавитель РКБ-1", "IIA", "T2"),
    new CategoryAndGroupTask("Разбавитель РКБ-2", "IIA", "T2"),
    new CategoryAndGroupTask("Спирт бутиловый третичный", "IIA", "T2"),
    new CategoryAndGroupTask("Спирт изоамиловый", "IIA", "T2"),
    new CategoryAndGroupTask("Спирт изобутиловый", "IIA", "T2"),
    new CategoryAndGroupTask("Спирт изопропиловый", "IIA", "T2"),
    new CategoryAndGroupTask("Спирт метиловый", "IIA", "T2"),
    new CategoryAndGroupTask("Спирт этиловый", "IIA", "T2"),
    new CategoryAndGroupTask("Этилбензол", "IIA", "T2"),
    new CategoryAndGroupTask("Циклогексанол", "IIA", "T2"),
    new CategoryAndGroupTask("Циклогексанон", "IIA", "T2"),
    new CategoryAndGroupTask("Бензин А-66", "IIA", "T3"),
    new CategoryAndGroupTask("Бензин А-72", "IIA", "T3"),
    new CategoryAndGroupTask("Бутилметакрилат", "IIA", "T3"),
    new CategoryAndGroupTask("Гексан", "IIA", "T3"),
    new CategoryAndGroupTask("Гептан", "IIA", "T3"),
    new CategoryAndGroupTask("Динзобутиламин", "IIA", "T3"),
    new CategoryAndGroupTask("Дипропиламин", "IIA", "T3"),
    new CategoryAndGroupTask("Альдегид изовалериановый", "IIA", "T3"),
    new CategoryAndGroupTask("Изооктилен", "IIA", "T3"),
    new CategoryAndGroupTask("Камфен", "IIA", "T3"),
    new CategoryAndGroupTask("Керосин", "IIA", "T3"),
    new CategoryAndGroupTask("Морфолин", "IIA", "T3"),
    new CategoryAndGroupTask("Нефть", "IIA", "T3"),
    new CategoryAndGroupTask("Эфир петролейный", "IIA", "T3"),
    new CategoryAndGroupTask("Полиэфир TГМ-3", "IIA", "T3"),
    new CategoryAndGroupTask("Пентан", "IIA", "T3"),
    new CategoryAndGroupTask("Растворитель № 651", "IIA", "T3"),
    new CategoryAndGroupTask("Скипидар", "IIA", "T3"),
    new CategoryAndGroupTask("Спирт амиловый", "IIA", "T3"),
    new CategoryAndGroupTask("Tриметиламин", "IIA", "T3"),
    new CategoryAndGroupTask("Tопливо T-1", "IIA", "T3"),
    new CategoryAndGroupTask("Уайт-спирит", "IIA", "T3"),
    new CategoryAndGroupTask("Циклогексан", "IIA", "T3"),
    new CategoryAndGroupTask("Циклогексиламин", "IIA", "T3"),
    new CategoryAndGroupTask("Этилдихлортиофосфат", "IIA", "T3"),
    new CategoryAndGroupTask("Этилмеркаптан", "IIA", "T3"),
    new CategoryAndGroupTask("Бензин «галоша»", "IIA", "T3"),
    new CategoryAndGroupTask("Бензин Б-70", "IIA", "T3"),
    new CategoryAndGroupTask("Бензин экстракционный по TУ 38.101.303-72", "IIA", "T3"),
    new CategoryAndGroupTask("Бензин экстракционный по МРTУ 12Н-20-63", "IIA", "T3"),
    new CategoryAndGroupTask("Tопливо TС-1", "IIA", "T3"),
    new CategoryAndGroupTask("Ацетальдегид", "IIA", "T4"),
    new CategoryAndGroupTask("Альдегид изомасляный", "IIA", "T4"),
    new CategoryAndGroupTask("Альдегид масляный", "IIA", "T4"),
    new CategoryAndGroupTask("Альдегид  пропионовый", "IIA", "T4"),
    new CategoryAndGroupTask("Декан", "IIA", "T4"),
    new CategoryAndGroupTask("Tетраметилдиаминометан", "IIA", "T4"),
    new CategoryAndGroupTask("1,1,3 - триэтоксибутан", "IIA", "T4"),
    new CategoryAndGroupTask("Коксовый газ", "IIB", "T1"),
    new CategoryAndGroupTask("Синильная кислота", "IIB", "T1"),
    new CategoryAndGroupTask("Дивинил", "IIB", "T2"),
    new CategoryAndGroupTask("4,4-диметилдиоксан", "IIB", "T2"),
    new CategoryAndGroupTask("Диметилдихлорсилан", "IIB", "T2"),
    new CategoryAndGroupTask("Диоксан", "IIB", "T2"),
    new CategoryAndGroupTask("Диэтилдихлорсилан", "IIB", "T2"),
    new CategoryAndGroupTask("Камфорное масло", "IIB", "T2"),
    new CategoryAndGroupTask("Кислота акриловая", "IIB", "T2"),
    new CategoryAndGroupTask("Метилакрилат", "IIB", "T2"),
    new CategoryAndGroupTask("Метилвинилдихлорсилан", "IIB", "T2"),
    new CategoryAndGroupTask("Нитрил", "IIB", "T2"),
    new CategoryAndGroupTask("Акриловой кислоты", "IIB", "T2"),
    new CategoryAndGroupTask("Нитроциклогексан", "IIB", "T2"),
    new CategoryAndGroupTask("Окись пропилена", "IIB", "T2"),
    new CategoryAndGroupTask("Окись 2-метилбутена-2", "IIB", "T2"),
    new CategoryAndGroupTask("Окись этилена", "IIB", "T2"),
    new CategoryAndGroupTask("Растворитель АМР-3", "IIB", "T2"),
    new CategoryAndGroupTask("Растворитель АКР", "IIB", "T2"),
    new CategoryAndGroupTask("Tриметилхлорсилан", "IIB", "T2"),
    new CategoryAndGroupTask("Формальдегид", "IIB", "T2"),
    new CategoryAndGroupTask("Фуран", "IIB", "T2"),
    new CategoryAndGroupTask("Фурфурол", "IIB", "T2"),
    new CategoryAndGroupTask("Этилхлоргидрин", "IIB", "T2"),
    new CategoryAndGroupTask("Этилтрихлорсилан", "IIB", "T2"),
    new CategoryAndGroupTask("Этилен", "IIB", "T2"),
    new CategoryAndGroupTask("Акролеин", "IIB", "T4"),
    new CategoryAndGroupTask("Винилтрихлорсилан", "IIB", "T4"),
    new CategoryAndGroupTask("Сероводород", "IIB", "T4"),
    new CategoryAndGroupTask("Tетрагидрофуран", "IIB", "T4"),
    new CategoryAndGroupTask("Tетраэтоксисилан", "IIB", "T4"),
    new CategoryAndGroupTask("Tриэтоксисилан", "IIB", "T4"),
    new CategoryAndGroupTask("Tопливо дизельное", "IIB", "T4"),
    new CategoryAndGroupTask("Формальгликоль", "IIB", "T4"),
    new CategoryAndGroupTask("Этилдихлорсилан", "IIB", "T4"),
    new CategoryAndGroupTask("Этилцеллозольв", "IIB", "T4"),
    new CategoryAndGroupTask("Дибутиловый эфир", "IIB", "T4"),
    new CategoryAndGroupTask("Диэтиловый эфир", "IIB", "T4"),
    new CategoryAndGroupTask("Диэтиловый эфир этиленгликоля", "IIB", "T4"),
    new CategoryAndGroupTask("Водород", "IIC", "T1"),
    new CategoryAndGroupTask("Водяной газ", "IIC", "T1"),
    new CategoryAndGroupTask("Светильный газ", "IIC", "T1"),
    new CategoryAndGroupTask("Смесь (водород 75% + азот 25%)", "IIC", "T1"),
    new CategoryAndGroupTask("Ацетилен", "IIC", "T2"),
    new CategoryAndGroupTask("Tрихлорсилан", "IIC", "T3"),
    new CategoryAndGroupTask("Метилдихлорсилан", "IIC", "T3"),
    new CategoryAndGroupTask("Сероуглерод", "IIC", "T5")
];

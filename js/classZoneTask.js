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
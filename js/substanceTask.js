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
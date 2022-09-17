class FrameCheckWire extends Frame {
    Tasks = [];

    Init() {
        //провод
        let wire = GetRandom(WIRES);
        document.getElementById("spanWireMarking").innerText = wire.Marks;

        //способ прокладки. Если с горючим наружным покровом - выбираем "в трубе"
        let burning = [WireFeature_ТО, WireFeature_Д, WireFeature_Cover_П];
        let laying = burning.includes(wire.Feature)
            ? WireLayingTube 
            : GetRandom([WireLayingStaples, WireLayingHawser, WireLayingTube]);
        document.getElementById("spanWireLaying").innerText = laying;
       
        this.Tasks = [
            new WireThreadTask("spanWireThreadTask", wire.Thread.Description),
            new WireIsolateTask("spanWireIsolateTask", wire.Isolate.Description),
            new WireFeatureTask("spanWireFeatureTask", wire.Feature.Description),
        ];

        //проверка соответствия
        let isSatisfy = "соответствует";
        let isNotSatisfy = "не соответствует";

        let threadSatisfy = isSatisfy;
        this.Tasks.push(new WirePartCheckTask("spanWireThreadCheckTask", threadSatisfy));

        let isolateSatisfy = wire.Isolate == WireIsolate_П ? isNotSatisfy : isSatisfy;
        this.Tasks.push(new WirePartCheckTask("spanWireIsolateCheckTask", isolateSatisfy));

        //проложенные открыто не должны иметь горючий наружный покров
        //но у нас если горючий, то в трубе, поэтому всегда соответствует
        let featureSatisfy = isSatisfy;
        this.Tasks.push(new WirePartCheckTask("spanWireFeatureCheckTask", featureSatisfy));

        //проверка способа прокладки        
        let layingSatisfy = laying != WireLayingTube ? isNotSatisfy : isSatisfy;
        this.Tasks.push(new WirePartCheckTask("spanWireLayingCheckTask", layingSatisfy));

        for (const task of this.Tasks) {
            task.Init();
        }
    }

    IsComplete() {
        for (const task of this.Tasks) {
            if (!task.IsComplete()) return false;
        }
        return true;
    }
}
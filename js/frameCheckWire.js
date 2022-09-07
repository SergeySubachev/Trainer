class FrameCheckWire extends Frame {
    Tasks = [];

    Init() {
        let wire = GetRandom(WIRES);
        document.getElementById("spanWireMarking").innerText = wire.Marks;

        let laying = GetRandom([WireLaying1, WireLaying2, WireLaying3]);
        document.getElementById("spanWireLaying").innerText = laying;
       
        this.Tasks = [
            new WireThreadTask("spanWireThreadTask", wire.Thread.Description),
            new WireIsolateTask("spanWireIsolateTask", wire.Isolate.Description),
            new WireFeatureTask("spanWireFeatureTask", wire.Feature.Description),
        ];

        let isSatisfy = "соответствует";
        let isNotSatisfy = "не соответствует";

        let threadSatisfy = isSatisfy;
        this.Tasks.push(new WirePartCheckTask("spanWireThreadCheckTask", threadSatisfy));

        let isolateSatisfy = wire.Isolate == WireIsolate_П ? isNotSatisfy : isSatisfy;
        this.Tasks.push(new WirePartCheckTask("spanWireIsolateCheckTask", isolateSatisfy));

        //проложенные открыто не должны иметь горючий наружный покров
        let burnable = [WireFeature_ТО, WireFeature_Д, WireFeature_Cover_П];
        let featureSatisfy = laying != WireLaying3 && burnable.includes(wire.Feature) ? isNotSatisfy : isSatisfy;
        this.Tasks.push(new WirePartCheckTask("spanWireFeatureCheckTask", featureSatisfy));

        let layingSatisfy = laying != WireLaying3 ? isNotSatisfy : isSatisfy;
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
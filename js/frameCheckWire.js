class FrameCheckWire extends Frame {
    Tasks = [];

    Init() {
        let wire = GetRandom(WIRES);
        document.getElementById("spanWireMarking").innerText = wire.Marks;

        this.Tasks = [
            new WireThreadTask("spanWireThreadTask", wire.Thread.Description),
            new WireIsolateTask("spanWireIsolateTask", wire.Isolate.Description),
            new WireFeatureTask("spanWireFeatureTask", wire.Feature.Description)
        ];

        for (const task of this.Tasks) {
            task.Init();
        }
    }
}
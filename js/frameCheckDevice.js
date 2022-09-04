class FrameCheckDevice extends Frame {
    Tasks = [];
    MaxCategory = SUBSTANCE_IIA;
    MaxGroup = SUBSTANCE_T1;

    Init() {
        //наивысшая категория и группа ВОС из используемых веществ
        let frame = this.PrevFrame;
        while (!frame.hasOwnProperty("Fuels")) {
            frame = frame.PrevFrame;
        }
        for (const fuel of frame.Fuels) {
            if (fuel.Category.Value > this.MaxCategory.Value) this.MaxCategory = fuel.Category;
            if (fuel.Group.Value > this.MaxGroup.Value) this.MaxGroup = fuel.Group;
        }
    }
}

class FrameCheckEngineAndStarter extends FrameCheckDevice {
    Init() {
        super.Init();

        let task = new EngineCheckTask("divCheckEngine", this.MaxCategory, this.MaxGroup);
        task.Init();
        this.Tasks.push(task);

        task = new StarterCheckTask("divCheckStarter", this.MaxCategory, this.MaxGroup);
        task.Init();
        this.Tasks.push(task);
    }
}

class FrameCheckLamp extends FrameCheckDevice {
    Init() {
        super.Init();

        let task = new LampCheckTask("divCheckLamp", this.MaxCategory, this.MaxGroup);
        task.Init();
        this.Tasks.push(task);
    }
}
class FrameAboutFuel extends Frame {
    Fuels = []; //применяемое топливо
    Tasks = []; //категория и группа смеси

    Init() {
        let tableFuels = document.getElementById("tableFuels");
        this.Fuels = [gazoline80, gazoline92, gazoline95, dieselSummer, dieselWinter];
        for (let fuel of this.Fuels) {
            let row = document.createElement("tr");
            tableFuels.appendChild(row);

            let tdName = document.createElement("td");
            tdName.innerHTML = fuel.Name;
            row.appendChild(tdName);

            let tdTvsp = document.createElement("td");
            tdTvsp.innerHTML = fuel.Tvsp;
            row.appendChild(tdTvsp);

            let tdTsv = document.createElement("td");
            tdTsv.innerHTML = fuel.Tsv;
            row.appendChild(tdTsv);

            let tdClow = document.createElement("td");
            tdClow.innerHTML = fuel.Clow;
            row.appendChild(tdClow);

            let tdHigh = document.createElement("td");
            tdHigh.innerHTML = fuel.Chigh;
            row.appendChild(tdHigh);

            let tdCategory = document.createElement("td");
            tdCategory.id = fuel.Name + " Category";
            row.appendChild(tdCategory);
            let categoryTask = new SubstanceCategoryTask(tdCategory.id, fuel.Category.Name);
            categoryTask.Init();
            this.Tasks.push(categoryTask);

            let tdGroup = document.createElement("td");
            tdGroup.id = fuel.Name + " Group";
            row.appendChild(tdGroup);
            let groupTask = new SubstanceGroupTask(tdGroup.id, fuel.Group.Name);
            groupTask.Init();
            this.Tasks.push(groupTask);
        }
    }

    IsComplete() {
        for (const task of this.Tasks) {
            if (!task.IsComplete()) return false;
        }
        return true;
    }
}
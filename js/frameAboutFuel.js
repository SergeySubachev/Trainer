class FrameAboutFuel extends Frame {
    Fuels = []; //применяемое топливо
    Tasks = []; //категория и группа смеси

    Init() {
        let tableFuelsBody = document.getElementById("tableFuelsBody");
        tableFuelsBody.innerHTML = "";
        this.Fuels = [gazoline92, gazoline95, gazoline98, dieselSummer, dieselWinter];
        for (let fuel of this.Fuels) {
            let row = document.createElement("tr");
            tableFuelsBody.appendChild(row);

            let tdName = document.createElement("td");
            tdName.innerHTML = fuel.Name;
            row.appendChild(tdName);

            let tdTvsp = document.createElement("td");
            tdTvsp.innerHTML = fuel.Tvsp;
            tdTvsp.classList.add("w3-center");
            row.appendChild(tdTvsp);

            let tdTsv = document.createElement("td");
            tdTsv.innerHTML = fuel.Tsv;
            tdTsv.classList.add("w3-center");
            row.appendChild(tdTsv);

            let tdClow = document.createElement("td");
            tdClow.innerHTML = fuel.Clow;
            tdClow.classList.add("w3-center");
            row.appendChild(tdClow);

            let tdHigh = document.createElement("td");
            tdHigh.innerHTML = fuel.Chigh;
            tdHigh.classList.add("w3-center");
            row.appendChild(tdHigh);

            let tdCategory = document.createElement("td");
            tdCategory.id = fuel.Name + " Category";
            tdCategory.classList.add("w3-center");
            row.appendChild(tdCategory);
            let categoryTask = new SubstanceCategoryTask(tdCategory.id, fuel.Category.Name);
            categoryTask.Init();
            this.Tasks.push(categoryTask);

            let tdGroup = document.createElement("td");
            tdGroup.id = fuel.Name + " Group";
            tdGroup.classList.add("w3-center");
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

        const isTrainerMode = document.getElementById("radioTrainerMode").checked;
        if (isTrainerMode) {
            for (const task of this.Tasks) {
                if (task.GetResult() != 1) {
                    return false;
                }
            }
        }

        return true;
    }

    GetResult(result = []) {
        let fuelsCount = this.Fuels.length;
        let categoriesScore = 0;
        let groupsScore = 0;
        for (let i = 0; i < fuelsCount; i++) {
            categoriesScore += this.Tasks[i * 2].GetResult();
            groupsScore += this.Tasks[i * 2 + 1].GetResult();
        }

        result.push(new ResultBlock("Определение категории взрывоопасной смеси", categoriesScore / fuelsCount));
        result.push(new ResultBlock("Определение группы взрывоопасной смеси", groupsScore / fuelsCount));
    }
}
class Exercise {
    caption = " ";
    tasks = [];
    currentTaskIndex = -1;

    Begin() {
        this.currentTaskIndex = 0;
    }

    GetCurrentTask() {
        if (this.currentTaskIndex >= 0)
            return this.Tasks[this.currentTaskIndex];
        else
            return null;
    }

    Next() {
        this.currentTaskIndex++;
        return this.currentTaskIndex < this.Tasks.length;
    }

    GetResult() {
        let sum = 0;
        for (var i = 0; i < this.Tasks.length; i++) {
            sum += this.Tasks[i].GetResult();
        }
        return sum / this.Tasks.length;
    }

    // RandomSelect(options, count) {
    //     if (count > options.length)
    //         count = options.length;
    
    //     let result = [];
    //     let inserted = [];
    //     let i = 0;
    //     while (i < count) {
    //         let ind = Math.round(Math.random() * (options.length - 1));
    //         if (inserted.indexOf(ind) < 0) {
    //             result.push(options[ind]);
    //             inserted.push(ind);
    //             i++;
    //         }
    //     }
    
    //     return result;
    // }
}

class 

// class ClassZoneExercise extends Exercise {
//     constructor(tasksCount) {
//         super();

//         this.caption = "Определение класса зоны по ПУЭ";

//         this.tasks = RandomSelect(ClassZoneTasksBase, tasksCount);
//     }
// }

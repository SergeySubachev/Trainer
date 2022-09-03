class CategoryAndGroupExercise extends Exercise {
    constructor(tasksCount) {
        super();

        this.Caption = "Определение категории и группы взрывоопасной смеси";

        this.Tasks = RandomSelect(CategoryAndGroupTasksBase, tasksCount);
    }
}

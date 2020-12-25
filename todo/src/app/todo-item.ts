export class TodoItem {
    constructor(taskVal: string, completVal: boolean=false){
        this.task = taskVal;
        this.complete = completVal;
    }

    task: string;
    complete:boolean;
}

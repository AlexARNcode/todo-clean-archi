import { TaskId } from "./TaskId";
import { TaskStatus } from "./TaskStatus";
import type { TaskTitle } from "./TaskTitle";

export class Task {
  readonly id: TaskId;
  readonly title: TaskTitle;
  private _status: TaskStatus;

  constructor(id: TaskId, title: TaskTitle) {
    this.id = id;
    this.title = title;
    this._status = TaskStatus.TODO;
  }

  get status(): TaskStatus {
    return this._status;
  }

  markAsDone(): void {
    this._status = TaskStatus.DONE;
  }   

  markAsTodo(): void {
    this._status = TaskStatus.TODO;
  }
}
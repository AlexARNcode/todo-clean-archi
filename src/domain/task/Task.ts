import { TaskId } from "./TaskId";
import { TaskStatus } from "./TaskStatus";

export class Task {
  readonly id: TaskId;
  readonly title: string;
  status: TaskStatus;

  constructor(id: TaskId, title: string) {
    this.id = id;
    this.title = title;
    this.status = TaskStatus.TODO;
  }
}

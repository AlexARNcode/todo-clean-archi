import type { Task } from "@/domain/task/Task";
import { TaskStatus } from "@/domain/task/TaskStatus";

export type TaskDTO = {
  id: string;
  title: string;
  status: TaskStatus;
};

export class TaskAdapter {
  static toDTO(task: Task): TaskDTO {
    return {
      id: task.id.value,
      title: task.title.value,
      status: task.status,
    };
  }
}

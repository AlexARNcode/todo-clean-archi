import type { Task } from "@/domain/task/Task";

export class TaskAdapter {
  static toDTO(task: Task) {
    return {
      id: task.id.value,
      title: task.title.value,
      status: task.status,
    };
  }
}

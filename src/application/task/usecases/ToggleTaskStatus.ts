import type { TaskRepository } from "@/domain/task/TaskRepository";
import { TaskStatus } from "@/domain/task/TaskStatus";

export class ToggleTaskStatus {
  constructor(private readonly repo: TaskRepository) {}

  execute(input: { id: string }): void {
    const task = this.repo.findById(input.id);

    if (!task) {
      throw new Error("Task not found");
    }

    if (task.status === TaskStatus.TODO) {
      task.markAsDone();
    } else {
      task.markAsTodo();
    }

    this.repo.save(task);
  }
}

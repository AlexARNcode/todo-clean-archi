import type { TaskRepository } from "@/domain/task/TaskRepository";
import { TaskId } from "@/domain/task/TaskId";

export class DeleteTask {
  constructor(private readonly repo: TaskRepository) {}

  execute(input: { id: string }): void {
    const taskId = new TaskId(input.id);
    this.repo.delete(taskId);
  }
}

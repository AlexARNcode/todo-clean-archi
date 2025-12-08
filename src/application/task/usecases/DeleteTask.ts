import type { TaskRepository } from "@/domain/task/TaskRepository";
import { TaskId } from "@/domain/task/TaskId";

export class DeleteTask {
  constructor(private readonly repo: TaskRepository) {}

  async execute(input: { id: string }): Promise<void> {
    const taskId = new TaskId(input.id);
    await this.repo.delete(taskId);
  }
}

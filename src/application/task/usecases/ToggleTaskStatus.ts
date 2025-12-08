import type { TaskRepository } from "@/domain/task/TaskRepository";

export class ToggleTaskStatus {
  constructor(private readonly repo: TaskRepository) {}

  async execute(input: { id: string }): Promise<void> {
    const task = await this.repo.findById(input.id);

    if (!task) {
      throw new Error("Task not found");
    }

    if (task.status === "TODO") {
      task.markAsDone();
    } else {
      task.markAsTodo();
    }

    await this.repo.save(task);
  }
}

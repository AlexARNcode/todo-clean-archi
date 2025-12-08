import type { TaskRepository } from "@/domain/task/TaskRepository";
import { Task } from "@/domain/task/Task";
import { TaskId } from "@/domain/task/TaskId";
import { TaskTitle } from "@/domain/task/TaskTitle";

export class CreateTask {
  constructor(private readonly repo: TaskRepository) {}

  async execute(input: { title: string }): Promise<Task> {
    const title = TaskTitle.create(input.title);
    const id = new TaskId(crypto.randomUUID());

    const task = new Task(id, title);

    await this.repo.save(task);

    return task;
  }
}

import { describe, it, expect } from "vitest";
import { InMemoryTaskRepository } from "@/infrastructure/InMemoryTaskRepository";
import { CreateTask } from "@/application/task/usecases/CreateTask";

describe("CreateTask use case", () => {
  it("should create a new task", async () => {
    const repo = new InMemoryTaskRepository();
    const usecase = new CreateTask(repo);

    const created = await usecase.execute({
      title: "My task",
    });

    const tasks = await repo.findAll();

    expect(tasks.length).toBe(1);

    const task = tasks[0]!;
    expect(task.title.value).toBe("My task");
  });
});

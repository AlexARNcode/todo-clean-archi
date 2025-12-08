import { describe, it, expect } from "vitest";
import { InMemoryTaskRepository } from "@/infrastructure/InMemoryTaskRepository";
import { DeleteTask } from "./DeleteTask";
import { CreateTask } from "./CreateTask";

describe("DeleteTask use case", () => {
  it("should delete a task by its id", async () => {
    const repo = new InMemoryTaskRepository();
    const createTask = new CreateTask(repo);
    const deleteTask = new DeleteTask(repo);

    const taskA = await createTask.execute({ title: "Task A" });
    const taskB = await createTask.execute({ title: "Task B" });

    await deleteTask.execute({ id: taskA.id.value });

    const tasks = await repo.findAll();

    expect(tasks).toHaveLength(1);

    expect(tasks[0]!.title.value).toBe("Task B");
  });
});
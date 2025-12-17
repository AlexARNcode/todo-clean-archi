import { describe, it, expect } from "vitest";
import { InMemoryTaskRepository } from "@/infrastructure/InMemoryTaskRepository";
import { DeleteTask } from "./DeleteTask";
import { CreateTask } from "./CreateTask";

describe("DeleteTask use case", () => {
  it("should delete a task by its id", () => {
    const repo = new InMemoryTaskRepository();
    const createTask = new CreateTask(repo);
    const deleteTask = new DeleteTask(repo);

    const taskA = createTask.execute({ title: "Task A" });
    const taskB = createTask.execute({ title: "Task B" });

    deleteTask.execute({ id: taskA.id.value });

    const tasks = repo.findAll();

    expect(tasks).toHaveLength(1);

    expect(tasks[0]!.title.value).toBe("Task B");
  });
});
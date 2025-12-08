import { describe, it, expect } from "vitest";
import { InMemoryTaskRepository } from "@/infrastructure/InMemoryTaskRepository";
import { CreateTask } from "./CreateTask";
import { ToggleTaskStatus } from "./ToggleTaskStatus";
import { TaskStatus } from "@/domain/task/TaskStatus";


describe("ToggleTaskStatus use case", () => {
  it("should toggle a task from TODO to DONE and back", async () => {
    const repo = new InMemoryTaskRepository();
    const createTask = new CreateTask(repo);
    const toggleStatus = new ToggleTaskStatus(repo);

    const task = await createTask.execute({ title: "My task" });

    await toggleStatus.execute({ id: task.id.value });

    const tasksAfterFirstToggle = await repo.findAll();
    expect(tasksAfterFirstToggle[0]!.status).toBe(TaskStatus.DONE);

    await toggleStatus.execute({ id: task.id.value });

    const tasksAfterSecondToggle = await repo.findAll();
    expect(tasksAfterSecondToggle[0]!.status).toBe(TaskStatus.TODO);
  });
});

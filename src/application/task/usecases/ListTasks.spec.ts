import { describe, it, expect } from "vitest";
import { InMemoryTaskRepository } from "@/infrastructure/InMemoryTaskRepository";
import { ListTasks } from "@/application/task/usecases/ListTasks";
import { Task } from "@/domain/task/Task";
import { TaskId } from "@/domain/task/TaskId";
import { TaskTitle } from "@/domain/task/TaskTitle";

describe("ListTasks use case", () => {
  it("should return all tasks", async () => {
    const repo = new InMemoryTaskRepository();

    await repo.save(new Task(new TaskId("1"), TaskTitle.create("Task A")));
    await repo.save(new Task(new TaskId("2"), TaskTitle.create("Task B")));

    const usecase = new ListTasks(repo);
    const tasks = await usecase.execute();

    expect(tasks).toHaveLength(2);

    expect(tasks[0]?.title.value).toBe("Task A");
    expect(tasks[1]?.title.value).toBe("Task B");
  });
});

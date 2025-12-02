import { describe, it, expect } from 'vitest'

import { Task } from './Task'
import { TaskId } from './TaskId'
import { TaskStatus } from './TaskStatus'

describe("Task entity", () => {
  it("should create a task with id, title and default status TODO", () => {
    const id = new TaskId("1");
    const task = new Task(id, "First task");

    expect(task.id.value).toBe("1");
    expect(task.title).toBe("First task");
    expect(task.status).toBe(TaskStatus.TODO);
  });
});

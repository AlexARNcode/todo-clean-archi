import { describe, it, expect } from 'vitest'

import { Task } from './Task'
import { TaskId } from './TaskId'
import { TaskStatus } from './TaskStatus'
import { InvalidTaskTitleError, TaskTitle } from './TaskTitle';

const VALID_TITLE = "Test task";

describe("Task entity", () => {
  it("should create a task with id, title and default status TODO", () => {
    const id = new TaskId("1");
    const task = new Task(id, TaskTitle.create(VALID_TITLE));

    expect(task.id.value).toBe("1");
    expect(task.title.value).toBe(VALID_TITLE);
    expect(task.status).toBe(TaskStatus.TODO);
  });

  it('should allow marking a task as DONE', () => {
    const task = new Task(new TaskId('1'), TaskTitle.create(VALID_TITLE))
    
    task.markAsDone()

    expect(task.status).toBe(TaskStatus.DONE)
  })

  it('should allow marking a task as TODO again', () => {
    const task = new Task(new TaskId('1'), TaskTitle.create(VALID_TITLE))
    
    task.markAsDone()
    task.markAsTodo()

    expect(task.status).toBe(TaskStatus.TODO)
  })
});

describe("TaskTitle Value Object", () => {
  it("should create a valid title", () => {
    const title = TaskTitle.create(VALID_TITLE);
    expect(title.value).toBe(VALID_TITLE);
});

  it("should not allow an empty title", () => {
       expect(() => TaskTitle.create("   ")).toThrow(InvalidTaskTitleError);
  })
})

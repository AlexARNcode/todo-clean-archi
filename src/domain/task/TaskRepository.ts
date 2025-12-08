import { Task } from "@/domain/task/Task";
import type { TaskId } from "./TaskId";

export interface TaskRepository {
  save(task: Task): Promise<void>;
  findAll(): Promise<Task[]>;
  delete(id: TaskId): Promise<void>;
}

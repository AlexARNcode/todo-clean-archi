import { Task } from "@/domain/task/Task";
import type { TaskId } from "./TaskId";

export interface TaskRepository {
  save(task: Task): Promise<void>;
   findById(id: string): Promise<Task | null>;
  findAll(): Promise<Task[]>;
  delete(id: TaskId): Promise<void>;
}

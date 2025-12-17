import { Task } from "@/domain/task/Task";
import type { TaskId } from "./TaskId";

export interface TaskRepository {
  save(task: Task): void;
  findById(id: string): Task | null;
  findAll(): Task[];
  delete(id: TaskId): void;
}

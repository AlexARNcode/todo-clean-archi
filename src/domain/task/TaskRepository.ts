import { Task } from "@/domain/task/Task";

export interface TaskRepository {
  save(task: Task): Promise<void>;
  findAll(): Promise<Task[]>;
}

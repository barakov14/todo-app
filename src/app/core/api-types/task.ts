export interface CreateTask {
  name: string;
  date: Date;
  description: string;
  tags: string[];
  status: TaskStatus[]
}


export interface Task {
  name: string;
  date: Date;
  description: string;
  tags: string[];
  status: TaskStatus[]
}

export enum TaskStatusEnum {
  myTasks = "Мои задачи",
  importantTasks = "Важные задачи",
  deletedTasks = "Удаленные",
  completedTasks = "Выполненные"
}

export type TaskStatus = {
  value: "Мои задачи" | "Важные задачи" | "Удаленные" | "Выполненные"
}

export interface CompleteTask {
  completed: boolean;
  taskName: string
}

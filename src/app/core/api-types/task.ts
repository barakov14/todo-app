export interface CreateTask {
  name: string;
  date: Date;
  isImportant: boolean;
  description: string;
  tags: string[];
  isCompleted: boolean;
  isDeleted: boolean
}


export interface Task {
  name: string;
  date: Date;
  isImportant: boolean;
  description: string;
  tags: string[];
  isCompleted: boolean;
  isDeleted: boolean;
}

export interface Tasks {
  tasksList: Task[]
  taskType: string
}

export interface ITodoItem {
  title: string;
  content: string;
}

export interface ITodoData extends ITodoItem {
  id: string;
  createdAt: string;
  updatedAt: string;
}

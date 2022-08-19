export const QueryTodoKeys = {
  todoList: ['todoList'] as const,
  todo: (todoId: string) => [...QueryTodoKeys.todoList, 'todo', todoId] as const,
};

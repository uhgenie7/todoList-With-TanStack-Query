export const QueryTodoKeys = {
  all: ['todos'] as const,
  lists: () => [...QueryTodoKeys.all, 'list'] as const,
  details: () => [...QueryTodoKeys.all, 'detail'] as const,
  detail: (id: string) => [...QueryTodoKeys.details(), id] as const,
  TODOS: 'TODOS',
  TODO: ['todo'],
  LIST: 'LIST',
};

import { rest } from 'msw';
import TodoList from '@src/components/molecules/TodoList';
import { server } from '@src/mocks/server';
import { renderWithClient } from '@src/__tests__/utils';

describe('query component <TodoList />', () => {
  test('successful query component', async () => {
    const result = renderWithClient(<TodoList />);

    expect(await result.findByText(/hello/i)).toBeInTheDocument();
  });

  test('failure query component', async () => {
    server.use(
      rest.get('/todos', (_, res, ctx) => {
        return res(ctx.status(400));
      }),
    );

    const result = renderWithClient(<TodoList />);

    expect(await result.findByText(/문제/i)).toBeInTheDocument();
  });
});

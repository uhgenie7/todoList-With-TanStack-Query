import { rest } from 'msw';
import { renderHook, waitFor } from '@testing-library/react';
import { server } from '@src/mocks/server';
import { createWrapper } from '../utils';
import { useGetTodoListQuery } from '@src/hooks/query/todo';

describe('useGetTodoListQuery Test', () => {
  const errorHandler = jest.fn();

  test('GetTodoList Query hook 성공', async () => {
    const { result } = renderHook(() => useGetTodoListQuery(errorHandler), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
  });

  test('GetTodoList Query hook 실패', async () => {
    server.use(
      rest.get('*', (req, res, ctx) => {
        return res(ctx.status(500));
      }),
    );

    const { result } = renderHook(() => useGetTodoListQuery(errorHandler), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isError).toEqual(true));

    expect(result.current.error).toBeDefined();
  });
});

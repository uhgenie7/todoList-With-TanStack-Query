import { rest } from 'msw';
import { renderHook, waitFor } from '@testing-library/react';
import { server } from '../../jest.setup';
import { createWrapper } from '../utils';
import { useGetTodoListQuery } from '@src/hooks/query/todo';

describe('useGetTodoListQuery Test', () => {
  const errorHandler = jest.fn();

  test('GetTodoList Query hook 성공', async () => {
    const todoList = [
      {
        title: 'hi',
        content: 'hello',
        id: 'z3FGrcRL55qDCFnP4KRtn',
        createdAt: '2022-07-24T14:15:55.537Z',
        updatedAt: '2022-07-24T14:15:55.537Z',
      },
      {
        title: 'hi',
        content: 'hello',
        id: 'z3FGrcRL55qDCFnP4KRtn',
        createdAt: '2022-07-24T14:15:55.537Z',
        updatedAt: '2022-07-24T14:15:55.537Z',
      },
    ];

    const { result } = renderHook(() => useGetTodoListQuery(errorHandler), {
      wrapper: createWrapper(),
    });

    console.log(result.current.isSuccess);

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data).toBe(todoList);
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

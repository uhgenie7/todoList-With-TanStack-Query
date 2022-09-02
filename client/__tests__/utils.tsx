import { render } from '@testing-library/react';
import { rest } from 'msw';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const handlers = [
  rest.get('/todos', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
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
      ]),
    );
  }),
];

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
      mutations: {
        useErrorBoundary: true,
      },
    },
    logger: {
      log: console.log,
      warn: console.warn,
      error: () => {},
    },
  });

export function renderWithClient(ui: React.ReactElement) {
  const testQueryClient = createTestQueryClient();
  const { rerender, ...result } = render(<QueryClientProvider client={testQueryClient}>{ui}</QueryClientProvider>);
  return {
    ...result,
    rerender: (rerenderUi: React.ReactElement) =>
      rerender(<QueryClientProvider client={testQueryClient}>{rerenderUi}</QueryClientProvider>),
  };
}

export function createWrapper() {
  const testQueryClient = createTestQueryClient();
  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={testQueryClient}>{children}</QueryClientProvider>
  );
}

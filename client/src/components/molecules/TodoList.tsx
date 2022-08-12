import { useQuery, QueryClient, dehydrate } from '@tanstack/react-query';
import { QueryKeys } from '@src/constants/QueryKeys';
import TodoItem from './TodoItem';
import { getTodosAPI } from '@src/apis/todos';
import TodoItemCreateForm from '../molecules/TodoItemCreateForm';
import styled from 'styled-components';
import { useTodoActions } from '@src/hooks/useTodoActions';

const TodoList = () => {
  const userTodoActions = useTodoActions();

  const {
    data: { data: freshTodos },
    refetch,
  } = useQuery(QueryKeys.TODOS, userTodoActions.handleGetTodoList, {
    suspense: true,
  });

  return (
    <Container>
      <div className="form">
        <TodoItemCreateForm refetch={refetch} />
      </div>
      <ul className="messages">
        {freshTodos &&
          [...freshTodos]
            .reverse()
            .map(({ id, title, content, createdAt, updatedAt }) => (
              <TodoItem
                id={id}
                key={id}
                title={title}
                content={content}
                createdAt={createdAt}
                updatedAt={updatedAt}
                refetch={refetch}
              />
            ))}
      </ul>
    </Container>
  );
};

export default TodoList;

const Container = styled.div`
  .form {
    margin-bottom: 1rem;
  }
`;

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(QueryKeys.TODOS, getTodosAPI);

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
}

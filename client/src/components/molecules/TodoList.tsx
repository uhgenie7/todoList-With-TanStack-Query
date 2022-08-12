import { QueryClient, dehydrate } from '@tanstack/react-query';
import { QueryTodoKeys } from '@src/constants/QueryTodoKeys';
import TodoItem from './TodoItem';
import { getTodoListAPI } from '@src/apis/todos';
import TodoItemCreateForm from '../molecules/TodoItemCreateForm';
import styled from 'styled-components';
import { useGetTodoListQuery } from '@src/hooks/query/todo';

const TodoList = () => {
  const {
    data: { data: freshTodos },
  } = useGetTodoListQuery();

  console.log(freshTodos);

  return (
    <Container>
      <div className="form">
        <TodoItemCreateForm />
      </div>
      <ul className="messages">
        {freshTodos &&
          [...freshTodos]
            .reverse()
            .map(({ id, title, content, createdAt, updatedAt }) => (
              <TodoItem id={id} key={id} title={title} content={content} createdAt={createdAt} updatedAt={updatedAt} />
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

  await queryClient.prefetchQuery(QueryTodoKeys.all, getTodoListAPI);

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
}

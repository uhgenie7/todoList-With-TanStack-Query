// import { QueryClient, dehydrate } from '@tanstack/react-query';
// import { QueryTodoKeys } from '@src/constants/QueryTodoKeys';
import TodoItem from './TodoItem';
// import { getTodoListAPI } from '@src/apis/todos';
import { useGetTodoListQuery } from '@src/hooks/query/todo';
import customToast from '@src/utils/customToast';
import styled from 'styled-components';

const TodoList = () => {
  const toast = customToast();

  const { data: freshTodos } = useGetTodoListQuery({
    errorHandler: (message: string) => toast.error(message),
  });

  console.log(freshTodos);

  return (
    <Container>
      <h2>할일 목록</h2>
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
  ul {
    height: 500px;
    overflow-y: scroll;
  }
`;

// export async function getStaticProps() {
//   const queryClient = new QueryClient();

//   await queryClient.prefetchQuery(QueryTodoKeys.all, getTodoListAPI);

//   return {
//     props: {
//       dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
//     },
//   };
// }

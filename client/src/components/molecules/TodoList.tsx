import TodoItem from './TodoItem';
import { useGetTodoListQuery } from '@src/hooks/query/todo';
import customToast from '@src/utils/customToast';
import styled from 'styled-components';

const TodoList = () => {
  const toast = customToast();

  const { data: freshTodos } = useGetTodoListQuery({
    errorHandler: (message: string) => toast.error(message),
  });

  return (
    <Container>
      <h2>할일 목록</h2>
      <ul className="messages">
        {freshTodos && freshTodos.length > 0 ? (
          [...freshTodos]
            .reverse()
            .map(({ id, title, content, createdAt, updatedAt }) => (
              <TodoItem id={id} key={id} title={title} content={content} createdAt={createdAt} updatedAt={updatedAt} />
            ))
        ) : (
          <li>할일을 추가해주세요</li>
        )}
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

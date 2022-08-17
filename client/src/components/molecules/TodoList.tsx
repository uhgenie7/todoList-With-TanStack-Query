// import { QueryClient, dehydrate } from '@tanstack/react-query';
// import { QueryTodoKeys } from '@src/constants/QueryTodoKeys';
import TodoItem from './TodoItem';
// import { getTodoListAPI } from '@src/apis/todos';
import { useGetTodoListQuery } from '@src/hooks/query/todo';
import customToast from '@src/utils/customToast';

const TodoList = () => {
  const toast = customToast();

  const { data: freshTodos } = useGetTodoListQuery({
    errorHandler: (message: string) => toast.error(message),
  });

  console.log(freshTodos);

  return (
    <div>
      <h2>할일 목록</h2>
      <ul className="messages">
        {freshTodos &&
          [...freshTodos]
            .reverse()
            .map(({ id, title, content, createdAt, updatedAt }) => (
              <TodoItem id={id} key={id} title={title} content={content} createdAt={createdAt} updatedAt={updatedAt} />
            ))}
      </ul>
    </div>
  );
};

export default TodoList;

// export async function getStaticProps() {
//   const queryClient = new QueryClient();

//   await queryClient.prefetchQuery(QueryTodoKeys.all, getTodoListAPI);

//   return {
//     props: {
//       dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
//     },
//   };
// }

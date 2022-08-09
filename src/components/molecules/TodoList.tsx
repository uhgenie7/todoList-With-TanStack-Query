import { useQuery, QueryClient, dehydrate, useMutation, useQueryClient } from '@tanstack/react-query';
import { QueryKeys } from '@src/constants/QueryKeys';
import Todo from './Todo';
import { getTodosAPI } from '@src/apis/todos';

const TodoList = () => {
  const {
    data: {
      data: { data: freshTodos },
    },
  } = useQuery(QueryKeys.TODOS, getTodosAPI, {
    suspense: true,
  });

  return (
    <>
      <ul className="messages">
        {freshTodos &&
          freshTodos.map(({ id, title, content, createdAt, updatedAt }) => (
            <Todo id={id} key={id} title={title} content={content} createdAt={createdAt} updatedAt={updatedAt} />
          ))}
      </ul>
    </>
  );
};

export default TodoList;

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(QueryKeys.TODOS, getTodosAPI);

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
}

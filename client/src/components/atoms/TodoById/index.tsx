import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useGetTodoByIdQuery } from '@src/hooks/query/todo';

const TodoById = () => {
  const {
    query: { id },
  } = useRouter();

  const { data: detailTodos, refetch } = useGetTodoByIdQuery(id);

  useEffect(() => {
    refetch();
  }, [id]);

  return (
    <>
      <h3>{detailTodos?.data?.title}</h3>
      <p>{detailTodos?.data?.content}</p>
    </>
  );
};

export default TodoById;

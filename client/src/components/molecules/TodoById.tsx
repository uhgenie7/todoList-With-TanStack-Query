import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useGetTodoByIdQuery } from '@src/hooks/query/todo';
import useToast from '@src/hooks/useToast';

const TodoById = () => {
  const toast = useToast();
  const router = useRouter();
  const id = router.query + '';

  const { data: detailTodos, refetch } = useGetTodoByIdQuery({
    todoId: id,
    errorHandler: (message: string) => toast.error(message),
  });

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

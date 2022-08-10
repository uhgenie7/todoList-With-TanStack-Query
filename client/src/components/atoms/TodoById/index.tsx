import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from '@src/constants/QueryKeys';
import { getTodoByIdAPI } from '@src/apis/todos';

const TodoById = () => {
  const {
    query: { id },
  } = useRouter();

  const { data: detailTodos, refetch } = useQuery(QueryKeys.TODO, () => getTodoByIdAPI(id), {
    suspense: true,
  });

  useEffect(() => {
    refetch();
  }, [id]);

  return (
    <>
      <h3>{detailTodos?.data.title}</h3>
      <p>{detailTodos?.data.content}</p>
    </>
  );
};

export default TodoById;

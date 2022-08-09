import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from '@src/constants/QueryKeys';
import { getTodoByIdAPI } from '@src/apis/todos';

const TodoById = () => {
  const {
    query: { id },
  } = useRouter();

  const {
    data: { data: detailTodos },
  } = useQuery(QueryKeys.TODO, () => getTodoByIdAPI(id));

  console.log(detailTodos);
  return (
    <>
      <h3>{detailTodos.data.title}</h3>
      <p>{detailTodos.data.content}</p>
    </>
  );
};

export default TodoById;

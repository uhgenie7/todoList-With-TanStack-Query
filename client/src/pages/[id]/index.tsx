import { useRouter } from 'next/router';
import TodosPage from '@src/components/pages/TodosPage';

const TodoDetail = () => {
  const {
    query: { id },
  } = useRouter();

  return <>{id && <TodosPage />}</>;
};

export default TodoDetail;

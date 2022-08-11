import { useRouter } from 'next/router';
import Todos from '@src/components/organism/Todos';

const TodoDetail = () => {
  const {
    query: { id },
  } = useRouter();

  return <>{id && <Todos />}</>;
};

export default TodoDetail;

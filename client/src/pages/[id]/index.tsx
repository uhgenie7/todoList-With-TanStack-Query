import { useRouter } from 'next/router';
import Todos from '@src/components/organism/Todos';
import AppLayout from '@src/components/atoms/AppLayout';

const TodoDetail = () => {
  const {
    query: { id },
  } = useRouter();

  return <AppLayout>{id && <Todos />}</AppLayout>;
};

export default TodoDetail;

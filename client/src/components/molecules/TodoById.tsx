import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useGetTodoByIdQuery } from '@src/hooks/query/todo';
import customToast from '@src/utils/customToast';
import styled from 'styled-components';

const TodoById = () => {
  const toast = customToast();
  const router = useRouter();
  const id = router.query.id + '';

  const { data: detailTodos, refetch } = useGetTodoByIdQuery({
    todoId: id,
    errorHandler: (message: string) => toast.error(message),
  });

  useEffect(() => {
    refetch();
  }, [id]);

  return (
    <Container>
      <h3>상세 제목: {detailTodos?.data?.title}</h3>
      <p>상세 내용: {detailTodos?.data?.content}</p>
    </Container>
  );
};

export default TodoById;

const Container = styled.div`
  position: fixed;
  right: 10%;
  background: var(--main);
`;

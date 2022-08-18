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
      <div>
        <button onClick={() => router.push('/')}>(닫기)</button>
      </div>
      <h3>제목: {detailTodos?.data?.title}</h3>
      <p>내용: {detailTodos?.data?.content}</p>
    </Container>
  );
};

export default TodoById;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: var(--hightlight);
  border: 1px solid var(--main2);
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 1rem;
  overflow-y: scroll;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  h3,
  p {
    word-break: break-all;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 16px;
  }

  button {
    float: right;
  }
`;

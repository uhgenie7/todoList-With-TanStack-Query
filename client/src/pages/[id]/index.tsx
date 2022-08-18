import { useRouter } from 'next/router';
import TodosPage from '@src/components/pages/TodosPage';
import TodoById from '@src/components/molecules/TodoById';
import AsyncBoundary from '@src/components/boundaries/AsyncBoundary';
import DefaultErrorFallback from '@src/components/atoms/DefaultErrorFallback';
import styled from 'styled-components';

const TodoDetail = () => {
  const {
    query: { id },
  } = useRouter();

  return (
    <Container>
      {id && (
        <>
          <TodosPage />
          <div className="todoByIdSection">
            <AsyncBoundary rejectedFallback={DefaultErrorFallback} pendingFallback={<SkeletonTodoById />}>
              <TodoById />
            </AsyncBoundary>
          </div>
        </>
      )}
    </Container>
  );
};

export default TodoDetail;

const Container = styled.div`
  .todoByIdSection {
    width: 300px;
    height: 500px;
    position: fixed;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const SkeletonTodoById = styled.div`
  width: 300px;
  height: 500px;
  background-color: rgba(255, 255, 255, 0.2);
`;

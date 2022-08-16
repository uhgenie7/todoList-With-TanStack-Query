import TodoItemCreateForm from '@src/components/molecules/TodoItemCreateForm';
import TodoList from '@src/components/molecules/TodoList';
import styled from 'styled-components';
import AsyncBoundary from '@src/components/boundaries/AsyncBoundary';
import DefaultErrorFallback from '@src/components/atoms/DefaultErrorFallback';
import PageLoader from '@src/components/atoms/PageLoader';

const TodosPage = () => {
  return (
    <Container>
      <div className="row">
        <section>
          <AsyncBoundary rejectedFallback={DefaultErrorFallback} pendingFallback={<PageLoader />}>
            <TodoItemCreateForm />
          </AsyncBoundary>
          <AsyncBoundary rejectedFallback={DefaultErrorFallback} pendingFallback={<PageLoader />}>
            <TodoList />
          </AsyncBoundary>
        </section>
      </div>
    </Container>
  );
};

export default TodosPage;

const Container = styled.div`
  .row {
    display: flex;
  }
`;

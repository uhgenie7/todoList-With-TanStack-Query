import { Suspense } from 'react';
import PageLoader from '@src/components/atoms/PageLoader';
import TodoItemCreateForm from '@src/components/molecules/TodoItemCreateForm';
import TodoList from '@src/components/molecules/TodoList';
import styled from 'styled-components';

const TodosPage = () => {
  return (
    <Container>
      <div className="row">
        <section>
          <TodoItemCreateForm />
          <Suspense fallback={<PageLoader />}>
            <TodoList />
          </Suspense>
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

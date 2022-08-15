import TodoItemCreateForm from '@src/components/molecules/TodoItemCreateForm';
import TodoList from '@src/components/molecules/TodoList';
import styled from 'styled-components';
import ExtendsAsyncBoundary from '../boundaries/ExtendsAsyncBoundary';

const TodosPage = () => {
  return (
    <Container>
      <div className="row">
        <section>
          <TodoItemCreateForm />
          <ExtendsAsyncBoundary>
            <TodoList />
          </ExtendsAsyncBoundary>
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

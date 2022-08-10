import TodoList from '../molecules/TodoList';
import styled from 'styled-components';
import { ITodoArr } from '@src/types';

const Todos = ({ todos }: ITodoArr) => {
  return (
    <Container>
      <div className="row">
        <section>
          <h2>목록</h2>
          <TodoList todos={todos} />
        </section>
      </div>
    </Container>
  );
};

export default Todos;

const Container = styled.div`
  .row {
    display: flex;
  }
`;

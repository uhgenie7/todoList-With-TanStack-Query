import TodoList from '../molecules/TodoList';
import styled from 'styled-components';

const Todos = () => {
  return (
    <Container>
      <div className="row">
        <section>
          <h2>목록</h2>
          <TodoList />
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

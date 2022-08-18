import styled from 'styled-components';

const PageLoader = () => {
  return (
    <Container>
      <h2>Loading...</h2>
    </Container>
  );
};

export default PageLoader;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

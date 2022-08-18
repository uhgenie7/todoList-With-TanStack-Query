import styled from 'styled-components';
import Button from '../Button';

interface IProps {
  reset?: () => void;
}

const DefaultErrorFallback = ({ reset }: IProps) => {
  return (
    <Container>
      <Button isCorrect={true} onClick={reset}>
        Try again
      </Button>
    </Container>
  );
};

export default DefaultErrorFallback;

const Container = styled.div`
  margin-bottom: 1rem;
`;

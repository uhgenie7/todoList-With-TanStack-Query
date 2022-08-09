import styled from 'styled-components';

interface IProps {
  children: React.ReactNode;
}
const AppLayout = ({ children }: IProps) => {
  return <Container>{children}</Container>;
};

export default AppLayout;

const Container = styled.div`
  padding: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

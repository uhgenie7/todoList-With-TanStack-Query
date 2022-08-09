import styled from 'styled-components';

interface IProps {
  children: React.ReactNode;
}
const AppLayout = ({ children }: IProps) => {
  return <Container>{children}</Container>;
};

export default AppLayout;

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

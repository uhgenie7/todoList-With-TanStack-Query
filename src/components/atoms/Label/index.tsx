import styled from 'styled-components';

const Label = ({ labelFor, labelValue }: { labelFor: string; labelValue: string }) => {
  return <Container htmlFor={labelFor}>{labelValue}</Container>;
};

export default Label;

const Container = styled.label`
  display: inline-block;
  width: 70px;
  font-size: 0.8rem;
  margin-right: 0.5rem;
  outline: none;
`;

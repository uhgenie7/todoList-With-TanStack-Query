import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import Button from '@src/components/atoms/Button';
import styled from 'styled-components';
import InputForm from './InputForm';
import useToast from '@src/hooks/useToast';
import { useTodoActions } from '@src/hooks/useTodoActions';

const TodoItemCreateForm = ({ refetch, ...props }) => {
  const todoAction = useTodoActions();
  const toast = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
  });

  const { mutate: addTodoItem } = useMutation((todo) => todoAction.handleCreateTodoItem(todo), {
    onSuccess: (res) => {
      toast.success('추가되었습니다.');
      refetch();
      reset({ title: '', content: '' });
      console.log(res);
    },
  });

  const onSubmit = (todo) => {
    addTodoItem(todo);
    console.log(todo);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper
          labelValue="제목"
          labelFor="title"
          placeholder="제목을 입력해주세요"
          {...register('title', { required: '제목은 필수입니다' })}
          isError={!!errors.title}
          errorMessage={errors && errors.title?.message}
        />

        <InputWrapper
          labelValue="내용"
          labelFor="content"
          placeholder="내용을 입력해주세요"
          {...register('content', { required: '내용은 필수입니다' })}
          isError={!!errors.content}
          errorMessage={errors && errors.content?.message}
        />
        <ButtonWrapper buttonValue="추가" isCorrect={true} type="submit" {...props} />
      </form>
    </Container>
  );
};

export default TodoItemCreateForm;

const Container = styled.div`
  .todo {
    display: flex;
    flex-direction: column;
  }

  p {
    margin-top: 0.5rem;
    font-size: 0.8rem;
    color: var(--danger);
  }
`;

const InputWrapper = styled(InputForm)`
  margin-bottom: 1rem;
`;

const ButtonWrapper = styled(Button)`
  width: auto;
  margin-top: 16px;
  margin-right: 4px;
`;

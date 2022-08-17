import { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Button from '@src/components/atoms/Button';
import styled from 'styled-components';
import InputForm from './InputForm';
import type { ITodoItem } from '@src/types/todoTypes';
import { useCreateTodoQuery } from '@src/hooks/query/todo';
import customToast from '@src/utils/customToast';
import { useQueryClient } from '@tanstack/react-query';

const TodoItemCreateForm = ({ ...props }) => {
  const queryClient = useQueryClient();
  const toast = customToast();
  const [todo, setTodo] = useState<ITodoItem>();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ITodoItem>({
    mode: 'onSubmit',
  });

  const { mutate: onTodoItemCreate } = useCreateTodoQuery({
    options: {
      onSuccess: async () => {
        await queryClient.invalidateQueries(['todoList']);
        toast.success('등록 성공');
      },
    },
    todo: todo,
    errorHandler: (message: string) => toast.error(message),
  });

  const onSubmit: SubmitHandler<ITodoItem> = (todo: ITodoItem) => {
    setTodo(todo);
  };

  useEffect(() => {
    if (todo) {
      onTodoItemCreate(todo);
      reset({ title: '', content: '' });
    }
  }, [todo]);

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

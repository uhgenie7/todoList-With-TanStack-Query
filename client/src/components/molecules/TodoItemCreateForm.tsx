import { useState, useRef, useCallback, useEffect, createRef, ChangeEvent } from 'react';
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
  const inputFocus = useRef<HTMLInputElement>(null);

  const [todo, setTodo] = useState<ITodoItem>({
    title: '',
    content: '',
  });

  const { title, content } = todo;

  const onChangeTodoTitle = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const todoTitle = e.target.value;
      setTodo((prev) => {
        return { ...prev, title: todoTitle };
      });
    },
    [todo],
  );

  const onChangeTodoContent = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const todoValue = e.target.value;
      setTodo((prev) => {
        return { ...prev, content: todoValue };
      });
    },
    [todo],
  );
  const { mutate: onTodoItemCreate } = useCreateTodoQuery({
    options: {
      onSuccess: async () => {
        await queryClient.invalidateQueries(['todoList']);
        toast.success('등록 성공');
      },
    },
    todo: todo!,
    errorHandler: (message: string) => toast.error(message),
  });

  // const onSubmit: SubmitHandler<ITodoItem> = (todo: ITodoItem) => {
  //   setTodo(todo);
  // };

  // useEffect(() => {
  //   if (todo) {
  //     onTodoItemCreate(todo);
  //     reset({ title: '', content: '' });
  //   }
  // }, [todo]);

  const onSubmitCreateForm = () => {
    if (!!title && !!content) {
      onTodoItemCreate(todo);
      setTodo((prev) => {
        return { ...prev, title: '', content: '' };
      });
    } else {
      toast.error('할일을 입력하고 제출해주세요!');
    }
  };

  const onFocusNextInput = () => {
    inputFocus?.current?.focus();
  };

  return (
    <Container>
      <InputWrapper
        labelValue="제목"
        labelFor="title"
        placeholder="제목을 입력해주세요 (10자 이내)"
        value={title}
        onChange={onChangeTodoTitle}
        maxLength={10}
        onKeyDown={onFocusNextInput}
      />
      <InputWrapper
        ref={inputFocus}
        labelValue="내용"
        labelFor="content"
        placeholder="내용을 입력해주세요"
        value={content}
        onChange={onChangeTodoContent}
        onKeyDown={onSubmitCreateForm}
      />
      <ButtonWrapper isCorrect={!!title && !!content} onClick={onSubmitCreateForm} {...props}>
        추가
      </ButtonWrapper>
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
  width: 100%;
  margin-top: 16px;
  margin-right: 4px;
`;

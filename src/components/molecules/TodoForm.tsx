import { useState, useCallback, ChangeEvent } from 'react';
import { useMutation } from '@tanstack/react-query';
import Button from '@src/components/atoms/Button';
import styled from 'styled-components';
import InputForm from './InputForm';
import { createTodoAPI } from '@src/apis/todos';

interface ITodos {
  title: string;
  content: string;
}

const TodoForm = ({ refetch, ...props }) => {
  const [todo, setTodo] = useState<ITodos>({
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

  // const addTodo = useCallback(async () => {
  //   if (!!title && !!content) {
  //     await createTodoAPI(todo);
  //   } else {
  //     toast.error('빈칸을 채워주세요');
  //   }
  // }, [todo]);

  const { mutate: addTodo } = useMutation(() => createTodoAPI(todo), {
    onSuccess: (res) => {
      refetch();
      console.log(res);
    },
  });

  return (
    <Container>
      <div className="todo">
        <InputWrapper
          labelValue="제목"
          labelFor="title"
          placeholder="제목을 입력해주세요"
          value={title}
          onChange={onChangeTodoTitle}
          {...props}
        />
        <InputWrapper
          labelValue="내용"
          labelFor="content"
          placeholder="내용을 입력해주세요"
          value={content}
          onChange={onChangeTodoContent}
          {...props}
        />
        <ButtonWrapper buttonValue="추가" isCorrect={true} onClick={addTodo} {...props} />
      </div>
    </Container>
  );
};

export default TodoForm;

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

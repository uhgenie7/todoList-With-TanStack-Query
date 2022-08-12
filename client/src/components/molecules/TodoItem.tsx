import { useState, useCallback, ChangeEvent } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import { ITodo } from '@src/types';
import styled from 'styled-components';
import showToast from '@src/libs/common';
import TodoById from '@src/components/atoms/TodoById';
import { Suspense } from 'react';
import { useTodoActions } from '@src/hooks/useTodoActions';
import useDate from '@src/hooks/useDate';

const TodoItem = ({ id, title, content, createdAt, updatedAt, refetch }: ITodo) => {
  const todoAction = useTodoActions();
  const toast = showToast();
  const router = useRouter();
  const { query } = useRouter();
  const createdDate = useDate(createdAt);
  const updatedDate = useDate(updatedAt);

  const [readOnly, setReadOnly] = useState(true);

  const [todo, setTodo] = useState({
    title: title,
    content: content,
  });

  const { title: oldTitle, content: oldContent } = todo;

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

  const handleTodoById = useCallback(() => {
    router.push(`/${id}`, undefined, { scroll: false });
  }, []);

  const handleModiActive = () => setReadOnly(false);
  const handleReadOnly = () => setReadOnly(true);

  const { mutate: onUpdate } = useMutation(() => todoAction.handleUpdateTodoItem(id, todo), {
    onSuccess: (res) => {
      toast.success('등록되었습니다');
      refetch();
      handleReadOnly();
      console.log(res);
    },
  });

  const { mutate: onDelete } = useMutation(() => todoAction.handleDeleteTodoItem(id), {
    onSuccess: (res) => {
      toast.success('삭제되었습니다');
      refetch();
      console.log(res);
    },
  });

  const cancelTodo = () => {
    setTodo({
      title: title,
      content: content,
    });
    setReadOnly(true);
  };

  return (
    <>
      <Container onClick={handleTodoById}>
        <InputWrapper
          isTitle={true}
          placeholder="제목을 입력해주세요"
          value={oldTitle}
          onChange={onChangeTodoTitle}
          readOnly={readOnly}
        />
        <div className="row">
          <InputWrapper
            isTitle={false}
            placeholder="내용을 입력해주세요"
            value={oldContent}
            onChange={onChangeTodoContent}
            readOnly={readOnly}
          />
          <ButtonWrapper isDanger={true} buttonValue="삭제" isCorrect={true} onClick={onDelete} />
          <ButtonWrapper
            isDanger={false}
            buttonValue={readOnly ? '수정' : '제출'}
            isCorrect={true}
            onClick={readOnly ? handleModiActive : onUpdate}
          />
          {!readOnly && <ButtonWrapper isDanger={false} buttonValue="취소" isCorrect={true} onClick={cancelTodo} />}
        </div>
        <p>최초 생성일: {createdDate}</p>
        <p>수정일: {updatedDate}</p>
      </Container>
      {id === query.id && (
        <Suspense fallback={<div>loading</div>}>
          <TodoById />
        </Suspense>
      )}
    </>
  );
};

export default TodoItem;

const Container = styled.li`
  cursor: pointer;
  &:hover {
    background-color: var(--mainOpacity);
  }
  margin-bottom: 20px;
  border: 1px solid var(--main2);
  border-radius: 10px;
  padding: 15px;
  .row {
    display: flex;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 16px;
  }
`;

const ButtonWrapper = styled(Button)<{ isDanger: boolean }>`
  background: ${({ isDanger }) => (isDanger ? 'var(--danger)' : 'var(--main)')};
  color: ${({ isDanger }) => (isDanger ? 'black' : 'black')};
  width: auto;
  margin-right: 4px;
`;

const InputWrapper = styled(Input)<{ readOnly: boolean; isTitle: boolean }>`
  width: 300px;
  margin-right: 10px;
  margin-bottom: 4px;
  cursor: ${({ readOnly }) => (readOnly ? 'pointer' : 'text')};
  background: ${({ readOnly }) => (readOnly ? 'white' : 'var(--mainOpacity)')};
  border: ${({ readOnly }) => (readOnly ? 'none' : '1px solid var(--main)')};
  font-size: ${({ isTitle }) => (isTitle ? '1.5rem' : '1rem')};
  font-weight: ${({ isTitle }) => (isTitle ? 'bold' : 'normal')};
`;

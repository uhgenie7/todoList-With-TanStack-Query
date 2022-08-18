import TodosPage from '@src/components/pages/TodosPage';

const MainPage = () => {
  return (
    <div>
      <TodosPage />
    </div>
  );
};

export default MainPage;

// export const getServerSideProps: GetServerSideProps = async () => {
//   const { data: todos } = await getTodoListAPI();

//   return {
//     props: { todos },
//   };
// };

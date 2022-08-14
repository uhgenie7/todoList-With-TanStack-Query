import TodosPage from '@src/components/pages/TodosPage';
import Header from '@src/components/atoms/Header';

const MainPage = () => {
  return (
    <div>
      <Header />
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

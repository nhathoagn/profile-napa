import Edit from "../Edit/Edit";
import TodoList from "../TodoList/TodoList";
import CreateUser from "../Users/CreateUser";
import ListUsers from "../Users/ListUsers";
import UserDetails from "../Users/UserDetails";
import UserTodo from "../Users/UserTodo";
import ViewProfile from "../ViewProfile/ViewProfile";

const Contents = ({ option }) => {
  return (
    <>
      {option == 1 ? (
        <TodoList />
      ) : option == 2 ? (
        <ListUsers />
      ) : option == 3 ? (
        <ViewProfile />
      ) : option == 4 ? (
        <Edit />
      ) : option == 5 ? (
        <CreateUser />
      ) : option == 6 ? (
        <UserDetails />
      ) : option == 7 ? (
        <UserTodo />
      ) : (
        <></>
      )}
    </>
  );
};

export default Contents;

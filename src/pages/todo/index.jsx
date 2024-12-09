import { useEffect } from "react";
import TodoItem from "../../components/todo/TodoItem";
import { useNavigate } from "react-router-dom";

const Index = ({ todoList, setTodoList }) => {
  const navigate = useNavigate();

  const deleteTodo = id => {
    const newList = todoList.filter(item => item.id !== id);
    setTodoList(newList);
    alert(`${id} : 삭제했습니다`);
  };

  const postHandler = () => {
    navigate(`add`);
  };

  useEffect(() => {
    return () => {};
  }, []);
  // useEffect 를 사용해 할 일 목록을 불러오기
  // useState 를 사용해 목록을 map 으로 출력하기
  return (
    <>
      <h1>Todo List</h1>
      <ul>
        {todoList.map(item => {
          return (
            <li key={item.id}>
              <TodoItem item={item} deleteTodo={deleteTodo} />
            </li>
          );
        })}
        <li>
          <button
            onClick={() => {
              postHandler();
            }}
          >
            추가하기
          </button>
        </li>
      </ul>
    </>
  );
};
export default Index;

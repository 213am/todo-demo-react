import { useNavigate, useSearchParams } from "react-router-dom";
import { TODO_MOCK_DATA } from "../../constants/mockData";
import { useEffect, useState } from "react";

const TodoDetail = ({ todoList }) => {
  // js 로 패스 이동하기
  const navigate = useNavigate();
  // SearchParams 를 이용해서
  const [searchParams] = useSearchParams();
  const id = parseInt(searchParams.get("id"));
  const [todo, setTodo] = useState({});

  const getTodo = () => {
    const data = todoList.filter(item => item.id === id);
    console.log(data);
    const findData = data[0];
    console.log(findData);
    setTodo({ ...findData });
  };

  const editClickHandler = () => {
    navigate(`/todo/edit/${todo.id}`);
  };

  useEffect(() => {
    getTodo();
    return () => {};
  }, []);

  return (
    <div>
      <h1>TodoDetail</h1>
      <div>
        <div>작성자 : {todo.author}</div>
        <div>날짜 : {todo.date}</div>
        <div>제목 : {todo.title}</div>
        <div>내용 : {todo.content}</div>
      </div>
      <div>
        <button
          onClick={() => {
            editClickHandler();
          }}
        >
          수정하기
        </button>
      </div>
    </div>
  );
};
export default TodoDetail;

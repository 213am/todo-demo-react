import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TODO_MOCK_DATA } from "../../constants/mockData";

const initTodo = {
  id: 0,
  title: "",
  content: "",
  author: "",
  date: "",
  complete: 0,
  privacy: 0,
};

const TodoEdit = ({ todoList, setTodoList }) => {
  const navigate = useNavigate();
  // params 로 id 를 받아오기
  const { id } = useParams();
  const todoId = parseInt(id);
  const [todo, setTodo] = useState({});
  const [formData, setFormData] = useState(initTodo);

  const getTodo = () => {
    const data = todoList.filter(item => item.id === todoId);
    const findData = data[0];

    setTodo({ ...findData });
  };

  const postTodo = () => {
    console.log("formData :", formData);
    const originData = [...todoList];
    const newTodoData = originData.map(item => {
      if (formData.id === item.id) {
        return formData;
      } else {
        return item;
      }
    });
    setTodoList(newTodoData);
  };

  const changeHandler = e => {
    const { name, value, type, checked } = e.target;
    // console.log(name, value, type, checked);
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? (checked ? 1 : 0) : value,
    });
  };

  const editButtonHandler = e => {
    e.preventDefault();
    postTodo();
    alert("내용이 수정되었습니다");
    navigate(`/todo/detail?id=${formData.id}`);
  };

  const backClickHandler = () => {
    navigate(`/todo/detail?id=${formData.id}`);
  };

  // useEffect 에서 id 를 이용해서 출력할 내용 불러오기
  useEffect(() => {
    getTodo();
    return () => {};
  }, []);
  // useState 로 화면 리렌더링
  return (
    <div>
      <h1>TodoEdit</h1>
      <form onSubmit={() => editButtonHandler()}>
        <label htmlFor="author">작성자</label>
        <input
          type="text"
          name="author"
          value={todo.author}
          readOnly
          disabled
        />
        <br />
        <label htmlFor="title">제목</label>
        <input
          type="text"
          name="title"
          defaultValue={todo.title}
          onChange={e => {
            e.target.value;
          }}
        />
        <br />
        <label htmlFor="content">내용</label>
        <input type="textarea" name="content" defaultValue={todo.content} />
        <br />
        <label htmlFor="date">날짜</label>
        <input type="date" name="date" defaultValue={todo.date} />
        <br />
        <label>진행상황</label>
        <label>
          <input
            type="checkbox"
            name="complete"
            value={formData.complete}
            checked={formData.complete === 1 ? true : false}
            onChange={e => {
              changeHandler(e);
            }}
          />
        </label>
        <br />
        <label>공개여부</label>
        <label>
          <input
            type="checkbox"
            name="privacy"
            value={formData.privacy}
            checked={formData.privacy === 1 ? true : false}
            onChange={e => {
              changeHandler(e);
            }}
          />
        </label>
        <div>
          <button
            type="submit"
            onClick={() => {
              backClickHandler();
            }}
          >
            수정
          </button>
          <button
            onClick={() => {
              navigate("/todo");
            }}
          >
            목록보기
          </button>
        </div>
      </form>
    </div>
  );
};
export default TodoEdit;

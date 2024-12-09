import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const initTodo = {
  id: 0,
  title: "",
  content: "",
  author: "",
  date: "",
  complete: 0,
  privacy: 0,
};

const TodoAdd = ({ todoList, setTodoList, countId, setCountId }) => {
  const navigate = useNavigate();
  // params 로 id 를 받아오기
  const [formData, setFormData] = useState(initTodo);

  const postTodo = () => {
    console.log("formData :", { ...formData, id: countId });
    const newTodoData = [...todoList, { ...formData, id: countId }];
    setTodoList(newTodoData);
    setCountId(++countId);
  };

  const changeHandler = e => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? (checked ? 1 : 0) : value,
    });
  };

  const submitHandler = e => {
    e.preventDefault();
    postTodo();
    alert("할 일이 새로 등록되었습니다");
    navigate(`/todo`);
  };

  // useEffect 에서 id 를 이용해서 출력할 내용 불러오기
  useEffect(() => {
    return () => {};
  }, []);
  // useState 로 화면 리렌더링
  return (
    <div>
      <h1>Todo Add</h1>
      <form onSubmit={e => submitHandler(e)}>
        <label htmlFor="author">작성자</label>
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={e => {
            changeHandler(e);
          }}
        />
        <br />
        <label htmlFor="title">제목</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={e => {
            changeHandler(e);
          }}
        />
        <br />
        <label htmlFor="content">내용</label>
        <input
          type="textarea"
          name="content"
          value={formData.content}
          onChange={e => {
            changeHandler(e);
          }}
        />
        <br />
        <label htmlFor="date">날짜</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={e => {
            changeHandler(e);
          }}
        />
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
              submitHandler();
            }}
          >
            등록
          </button>
          <button
            onClick={() => {
              navigate("/todo");
            }}
          >
            취소하기
          </button>
        </div>
      </form>
    </div>
  );
};
export default TodoAdd;

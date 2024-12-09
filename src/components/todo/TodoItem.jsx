import { Link } from "react-router-dom";

const TodoItem = ({ item, deleteTodo }) => {
  const { id, title, author, date } = item;
  // <Link> 삭제, 자세히 보기 버튼
  // 제목, 작성자, 날짜
  return (
    <>
      <Link to={`/todo/detail?id=${id}`}>
        <div>{title}</div>
      </Link>
      <div>{author}</div>
      <div>{date}</div>
      <br />
      <button
        onClick={() => {
          deleteTodo(id);
        }}
      >
        삭제하기
      </button>
    </>
  );
};
export default TodoItem;

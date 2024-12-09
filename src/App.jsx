import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";
import TodoIndex from "./pages/todo/index";
import TodoDetail from "./pages/todo/TodoDetail";
import TodoEdit from "./pages/todo/TodoEdit";
import TodoAdd from "./pages/todo/TodoAdd";
import { TODO_MOCK_DATA } from "./constants/mockData";
import { useState } from "react";

let originData = [...TODO_MOCK_DATA];

const App = () => {
  const [countId, setCountId] = useState(originData.length);
  const [todoList, setTodoList] = useState(originData);

  return (
    <Router>
      <Layout>
        <Routes>
          {/* 사이트 소개 */}
          <Route path="/" element={<About />}></Route>
          {/* Todo 중첩 */}
          <Route path="/todo">
            <Route
              index
              element={
                <TodoIndex todoList={todoList} setTodoList={setTodoList} />
              }
            ></Route>
            <Route
              path="add"
              element={
                <TodoAdd
                  todoList={todoList}
                  setTodoList={setTodoList}
                  countId={countId}
                  setCountId={setCountId}
                />
              }
            ></Route>
            <Route
              path="detail"
              element={<TodoDetail todoList={todoList} />}
            ></Route>
            <Route
              path="edit/:id"
              element={
                <TodoEdit todoList={todoList} setTodoList={setTodoList} />
              }
            ></Route>
          </Route>
          {/* 잘못된 path */}
          <Route path="#" element={<NotFound />}></Route>
        </Routes>
      </Layout>
    </Router>
  );
};
export default App;

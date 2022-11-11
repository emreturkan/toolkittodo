import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, changeCompleted, removeTodo } from "./store/TodosSlice";
import ListGroup from "react-bootstrap/ListGroup";
const App = () => {
  const { todos } = useSelector(state => state.TodosSlice);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);

  const onAdd = () => {
    dispatch(addTodo({ id: new Date().getTime(), title, completed }));
  };

  const toggle = (id, completed) => {
    dispatch(changeCompleted(id, completed));
  };

  const deleteTodo = id => {
    dispatch(removeTodo(id));
  };
  return (
    <div className="mt-5 d-flex flex-column justify-content-center align-items-center">
      <h1>TODO LİST</h1>
      <Form className="w-50">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Tamamlandı mı?"
            checked={completed}
            onChange={e => setCompleted(e.target.checked)}
          />
        </Form.Group>
        <Button variant="primary" onClick={onAdd}>
          Ekle
        </Button>
      </Form>
      <div className="w-25 mt-4">
        <ListGroup>
          {todos?.map(todo => (
            <ListGroup.Item
              key={todo.id}
              className="d-flex justify-content-between align-items-center flex-row"
            >
              <div className="d-flex flex-row align-items-center ">
                <h1 className="me-4">{todo.title}</h1>
                <span
                  style={
                    todo.completed ? { textDecoration: "line-through" } : null
                  }
                >
                  Tamamlandı mı ?{" "}
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() =>
                      toggle({ id: todo.id, completed: !todo.completed })
                    }
                  />
                </span>
              </div>
              <Button variant="danger" onClick={() => deleteTodo(todo.id)}>
                Sil
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </div>
  );
};

export default App;

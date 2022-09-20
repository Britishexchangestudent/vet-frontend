import { useEffect, useState } from "react";
import Modal from "./components/Modal";
import {
  addTodo,
  completeSubTodo,
  completeTodo,
  fetchTodos,
} from "./functions/todo";

function App() {
  const [todos, setTodos] = useState([]);
  const [modal, setModal] = useState(false);
  const [todoText, setTodoText] = useState("");

  useEffect(() => {
    fetchTodos().then((res) => {
      setTodos(res);
    });
  }, []);

  const complete = async (id) => {
    const result = await completeTodo(id).then((res) => {
      return res;
    });

    setTodos((item) =>
      item.map((todo) => {
        if (todo._id === result._id) {
          todo = result;
        }
        return todo;
      })
    );
  };

  const subComplete = async (id, subId) => {
    const result = await completeSubTodo(id, subId).then((res) => {
      return res;
    });

    setTodos((item) =>
      item.map((todo) => {
        if (todo._id === result._id) {
          todo = result;
        }
        return todo;
      })
    );
  };

  const add = async () => {
    const result = await addTodo(todoText).then((res) => {
      return res;
    });

    setTodos([...todos, result]);

    setModal(false);
  };

  return (
    <>
      {modal && (
        <Modal title="Add Task">
          <input
            type="text"
            className="my-6 w-full px-4 py-2 rounded-md text-black"
            onChange={(e) => setTodoText(e.target.value)}
          />
          <div className="flex items-center justify-between px-6">
            <button
              onClick={() => setModal(false)}
              className="bg-dark px-4 py-2 rounded-md shadow-lg"
            >
              Cancel
            </button>
            <button
              onClick={add}
              className="bg-dark px-4 py-2 rounded-md shadow-lg"
            >
              Add
            </button>
          </div>
        </Modal>
      )}
      <div className="h-screen w-screen bg-dark">
        <div className="w-[80vw] mx-auto h-screen overflow-y-auto bg-black-2">
          <div className="flex items-center px-6 my-12 justify-between text-white">
            <h1 className="text-3xl font-bold underline">Your tasks!</h1>
            <button
              onClick={() => setModal(true)}
              className="bg-dark px-4 py-2 rounded-md shadow-lg"
            >
              Add Task
            </button>
          </div>

          {todos?.map((todo) => (
            <div key={todo?._id}>
              <div className="w-[80vw] bg-dark py-6 px-6 flex items-center text-white mt-3">
                <input
                  type="checkbox"
                  className="h-5 w-5"
                  checked={todo?.complete}
                  onChange={() => {}}
                  onClick={() => complete(todo?._id)}
                />
                <p className={`ml-3 ${todo?.complete && "line-through"}`}>
                  {todo?.text}
                </p>
                <button className="bg-dark px-4 py-2 rounded-md shadow-lg ml-auto">
                  Add Task
                </button>
              </div>

              {todo?.subTodos?.map((item) => (
                <div
                  key={item?._id}
                  className="w-[80vw] bg-dark py-6 px-6 pl-10 flex items-center text-white"
                >
                  <input
                    checked={item?.complete}
                    onChange={() => {}}
                    onClick={() => subComplete(todo?._id, item?._id)}
                    type="checkbox"
                    className="h-5 w-5"
                  />
                  <p className={`ml-3 ${item?.complete && "line-through"}`}>
                    {item?.text}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;

import axios from "axios";

export const fetchTodos = async () => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/todos`
    );

    return data;
  } catch (error) {
    console.log(`error`, error);
  }
};

export const completeTodo = async (id) => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/todos/complete/${id}`
    );

    return data;
  } catch (error) {
    console.log(`error`, error);
  }
};

export const completeSubTodo = async (id, subId) => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/todo/${id}/subtodo/${subId}`
    );

    return data;
  } catch (error) {
    console.log(`error`, error);
  }
};

export const addTodo = async (text) => {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/todos/new`,
      {
        text,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return data;
  } catch (error) {
    console.log(`error`, error);
  }
};

import axios from "axios";

// Find record by properties
async function getOneBy(filters) {
  const records = await getAllAccount();
  for (let record of records.data) {
    let found = true;
    for (let key in filters) {
      if (record[key] !== filters[key]) {
        found = false;
      }
    }
    if (found) return record;
  }
}

export const checkEmailExist = async (email) => {
  if ((await getOneBy({ email })) == undefined) {
    return false;
  } else return await getOneBy({ email });
};

export const login = async (email, password) => {
  try {
    const data = await checkEmailExist(email);
    if (data.password == password) {
      if (localStorage.getItem("id") === null)
        localStorage.setItem("id", JSON.stringify(data.id));
      return data;
    }
  } catch (err) {
    console.log(err);
  }
};

export const register = async (data) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    await axios.post(
      `https://profile-json-server.herokuapp.com/users`,
      data,
      config
    );
  } catch (err) {
    console.log(err);
  }
};

export const editUser = async (id, data) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    await axios.put(
      `https://profile-json-server.herokuapp.com/users/${id}`,
      data,
      config
    );
  } catch (err) {
    console.log(err);
  }
};

export const getUserById = async (id) => {
  try {
    id = id || "";
    return await axios.get(
      `https://profile-json-server.herokuapp.com/users/${id}`
    );
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

export const deleteUser = async (id) => {
  try {
    return await axios.delete(
      `https://profile-json-server.herokuapp.com/users/${id}`
    );
  } catch (error) {
    console.log(error);
  }
};

export const getAllAccount = async () => {
  return await axios.get(`https://profile-json-server.herokuapp.com/users`);
};

export const getAllTodo = async () => {
  try {
    const { data } = await axios.get(
      `https://profile-json-server.herokuapp.com/todos`
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const postTodo = async (data) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    return await axios.post(
      `https://profile-json-server.herokuapp.com/todos`,
      data,
      config
    );
  } catch (error) {
    console.log(error);
  }
};

export const getTodoById = async (id, data) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const todo = await axios.get(
      `https://profile-json-server.herokuapp.com/todos/${id}`,
      data,
      config
    );
    return todo.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateTodo = async (id, data) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    return await axios.put(
      `https://profile-json-server.herokuapp.com/todos/${id}`,
      data,
      config
    );
  } catch (error) {
    console.log(error);
  }
};

export const deleteTodo = async (id) => {
  try {
    return await axios.delete(`https://profile-json-server.herokuapp.com/todos/${id}`);
  } catch (error) {
    console.log(error);
  }
};

// Get Todo by id user
export const getTodoByIdUser = async(idUser) => {
  try {
    const result = [];
    const todos = await getAllTodo();
    todos.map((todo) => {
      if(todo.user == idUser) result.push(todo);
    })
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
}
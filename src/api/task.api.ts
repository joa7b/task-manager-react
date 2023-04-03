const baseURL = "http://localhost:3001";

type configType = {
  method: string;
  headers: HeadersInit;
  body: string;
};

const taskApi = {
  createTask: async (config: configType) => {
    try {
      const response = await fetch(`${baseURL}/manager/task`, config);
      const data = response.json();
      return data;
    } catch (err) {
      return err;
    }
  },

  findAllTasks: async () => {
    try {
      const response = await fetch(`${baseURL}/manager/task`);
      const data = response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  },
};

export default taskApi;

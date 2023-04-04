export type TaskInfo = {
  theme: string;
  start_hour: {
    hour: string;
    minute: string;
  };
  end_hour: {
    hour: string;
    minute: string;
  };
  description: string;
};

export type TaskFull = {
  id: string;
  user: object;
  task: TaskInfo;
};

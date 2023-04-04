import { useEffect, useState } from "react";

import { Tab } from "../../components/dashboard/tab";
import { Card } from "../../components/dashboard/card";
import { Footer } from "../../components/main/footer";
import { Welcome } from "../../components/dashboard/welcome";

import { TaskFull } from "../../../utils/types/dashboard.types";
import api from "../../../api/task.api";

import task from "../../mocks/task.json";

export const Dashboard = () => {
  const [taskInfos, setTaskInfos] = useState<any | null>(null);
  const [taskList, setTaskList] = useState<boolean>(true);

  const handleTask = async () => {
    const getData = await api.findAllTasks();
    setTaskInfos(getData);
  };

  useEffect(() => {
    handleTask();
  }, [taskInfos, taskList]);

  return (
    <main>
      <Welcome />
      <Tab setTaskList={setTaskList} />
      {taskInfos ? (
        taskInfos.map((element: any) => (
          <Card
            taskTitle={element.task.theme}
            taskStartHour={element.task.start_hour}
            taskEndHour={element.task.end_hour}
          />
        ))
      ) : (
        <p
          style={{
            color: "white",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {taskList ? "Crie uma tarefa." : "Você não possui tarefas completas."}
        </p>
      )}

      <Footer />
    </main>
  );
};

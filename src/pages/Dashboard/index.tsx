import { useState } from "react";

import { Tab } from "../../components/dashboard/tab";
import { Card } from "../../components/dashboard/card";
import { Footer } from "../../components/main/footer";
import { Welcome } from "../../components/dashboard/welcome";

import { TaskFull } from "../../types/dashboard.types";

import task from "../../mocks/task.json";

export const Dashboard = () => {
  const [taskInfos, setTaskInfos] = useState<TaskFull[]>(task);

  return (
    <main>
      <Welcome />
      <Tab />
      {taskInfos.map((element) => (
        <Card
          taskTitle={element.task.theme}
          taskStartHour={element.task.start_hour}
          taskEndHour={element.task.end_hour}
        />
      ))}
      <Footer />
    </main>
  );
};

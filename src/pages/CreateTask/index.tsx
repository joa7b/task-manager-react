import { Footer } from "../../components/main/footer";
import { DateCard } from "../../components/createTask/dateCard";
import { FormTask } from "../../components/createTask/formTask";
import { useState } from "react";
import api from "../../../api/task.api";

export type formDataTask = {
  taskTitle: string;
  taskDate: string;
  taskDescription: string;
};

export const CreateTask = () => {
  const [formData, setFormData] = useState<formDataTask | {}>({});

  const handleFormData = async (data: any) => {
    const init = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };
    await api.createTask(init);
  };

  return (
    <main>
      <DateCard setFormData={setFormData} formData={formData} />
      <FormTask
        setFormData={setFormData}
        formData={formData}
        handleFormData={handleFormData}
      />
      <Footer />
    </main>
  );
};

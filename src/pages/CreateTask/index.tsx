import { Footer } from "../../components/main/footer";
import { DateCard } from "../../components/createTask/dateCard";
import { FormTask } from "../../components/createTask/formTask";
import { useState } from "react";

export const CreateTask = () => {
  const [formData, setFormData] = useState()
  
  return (
    <main>
      <DateCard />
      <FormTask />
      <Footer />
    </main>
  );
};

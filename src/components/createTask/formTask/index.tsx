import { useState } from "react";
import api from "../../../api/task.api";

import {
  FormTaskWrapper,
  FormTaskItem,
  FormTitleInput,
  FormInput,
  FormTextAreaDescription,
  ButtonSubmit,
} from "./style";

export const FormTask = () => {
  const [taskTitle, setTaskTitle] = useState<any>();
  const [taskStartDate, setTaskStartDate] = useState<string>();
  const [taskEndDate, setTaskEndDate] = useState<string>();
  const [taskDescription, setTaskDescription] = useState<string>();

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const init = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        taskTitle,
        taskStartDate,
        taskEndDate,
        taskDescription,
      }),
    };
    await api.createTask(init);
  };

  return (
    <FormTaskWrapper onSubmit={onSubmit}>
      <FormTaskItem>
        <FormTitleInput>Título</FormTitleInput>
        <FormInput
          type="text"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
      </FormTaskItem>

      <FormTaskItem>
        <FormTitleInput>Descrição</FormTitleInput>
        <FormTextAreaDescription
          name=""
          id=""
          cols={30}
          rows={10}
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        ></FormTextAreaDescription>
      </FormTaskItem>

      <FormTaskItem style={{alignItems: "center"}}>
        <ButtonSubmit type="submit">enviar</ButtonSubmit>
      </FormTaskItem>
    </FormTaskWrapper>
  );
};

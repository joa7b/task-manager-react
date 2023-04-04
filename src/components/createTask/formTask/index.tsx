import { useState } from "react";

import {
  FormTaskWrapper,
  FormTaskItem,
  FormTitleInput,
  FormInput,
  FormTextAreaDescription,
  ButtonSubmit,
} from "./style";

type DateCardProps = {
  setFormData: (data: object) => void;
  formData: object;
  handleFormData: (data: object) => void;
}

export const FormTask = (props: DateCardProps) => {
  const [taskTitle, setTaskTitle] = useState<any>();
  const [taskDescription, setTaskDescription] = useState<string>();

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const data = {
      taskTitle: taskTitle,
      taskDescription: taskDescription,
    }
    props.setFormData({...props.formData, ...data});
    props.handleFormData(props.formData);
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

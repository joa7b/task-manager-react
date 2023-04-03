import styled from "styled-components";

export const FormTaskWrapper = styled.form`
  display: flex;
  flex-direction: column;
  padding: 30px 100px;
  gap: 20px;
  color: #fff;
`;

export const FormTaskItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
`;

export const FormTitleInput = styled.span``;

export const FormInput = styled.input`
  background-color: #1f2534;
  border: none;
  border-bottom: 1px solid white;
  padding: 10px;
  color: white;

  &:focus {
    outline: none;
  }
`;

export const FormTextAreaDescription = styled.textarea`
  background-color: #1f2534;
  border: none;
  border-bottom: 1px solid white;
  padding: 10px;
  color: white;

  &:focus {
    outline: none;
  }
`;

export const ButtonSubmit = styled.button`
  width: 325px;
  height: 50px;
  font-weight: 600;
  font-size: 20px;
  border-radius: 15px;

  &:hover {
    cursor: pointer;
  }
`;

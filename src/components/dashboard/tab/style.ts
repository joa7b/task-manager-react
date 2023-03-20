import styled from "styled-components";

export const TabWrapper = styled.section`
  background-color: #fff;
  width: 50%;
  margin: auto;
  height: 7rem;
  display: flex;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 5%;
  padding: 10px;
`;

export const TabItem = styled.div`
  padding: 20px 15%;
  border-radius: 15px;
  font-size: 20px;
  font-weight: bold;
  color: white;

  &:first-child {
    background-color: #2f394b;
  }
  &:not(:first-child) {
    color: #2f394b;
  }
`;

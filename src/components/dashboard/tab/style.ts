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
  border: 0.2px solid rgba(217, 217, 217, 0.15);
  filter: drop-shadow(14px 18px 34px rgba(0, 0, 0, 0.32));
  border-radius: 15px;
`;

export const TabItem = styled.div`
  padding: 20px;
  width: 200px;
  text-align: center;
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

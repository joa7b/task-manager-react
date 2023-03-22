import styled from "styled-components";

export const CardWrapper = styled.section`
  width: 50%;
  margin: auto;
  height: 7rem;
  display: flex;
  border-radius: 15px;
  align-items: center;
  margin-top: 5%;
  padding: 15px;
  background: rgb(41, 47, 63);
  background: linear-gradient(
    0deg,
    rgba(41, 47, 63, 1) 0%,
    rgba(41, 47, 63, 1) 80%
  );
  border: 0.2px solid rgba(217, 217, 217, 0.15);
  filter: drop-shadow(14px 18px 34px rgba(0, 0, 0, 0.32));
  border-radius: 15px;
  justify-content: space-evenly;
  gap: 25px;
`;

export const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 200px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  font-size: 40px;

  &:first-child {
    background-color: #e5e5e5;
  }

  &:not(:first-child) {
    &:not(:last-child) {
      width: 100%;
      align-items: flex-start;
    }
  }
`;

export const IconCardCategory = styled.i`
  background: linear-gradient(180deg, #f5ba93 0%, #ef9183 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const TaskTitle = styled.h3`
  color: #fff;
  font-weight: 400;
  font-size: 16px;
  text-transform: capitalize;
`;

export const TaskDescription = styled.p`
  color: #d9d9d9;
  font-weight: 400;
  font-size: 12px;
`;

export const IconCardMenu = styled.i`
  color: #fff;
`;

import styled from "styled-components";

export const DateCardWrapper = styled.section`
  padding: 30px;
  display: flex;
  justify-content: space-evenly;
`;

export const DateCardItem = styled.div`
  background-color: white;
  width: 80px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: linear-gradient(
    180deg,
    rgba(41, 47, 63, 0) 0%,
    rgba(41, 47, 63, 0.8) 100%
  );
  border: 0.2px solid rgba(217, 217, 217, 0.15);
  filter: drop-shadow(14px 18px 34px rgba(0, 0, 0, 0.32));
  border-radius: 10px;
`;

export const WeekDays = styled.p`
  color: white;
`;

export const MonthDays = styled.p``;

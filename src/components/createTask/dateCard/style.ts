import styled from "styled-components";

interface IDateCardItem {
  selected: boolean
}

export const DateCardWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  overflow-x: scroll;
`;

export const DateCardItem = styled.div<IDateCardItem>`
  background-color: white;
  min-height: 130px;
  min-width: 95px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: ${(props) =>
    props.selected
      ? "linear-gradient(180deg, #F5BA93 0%, #EF9183 100%);"
      : "linear-gradient(180deg,rgba(41, 47, 63, 0) 0%,rgba(41, 47, 63, 0.8) 100%);"};
  border: 0.2px solid rgba(217, 217, 217, 0.15);
  filter: drop-shadow(14px 18px 34px rgba(0, 0, 0, 0.32));
  border-radius: 10px;
`;

export const WeekDays = styled.p`
  color: white;
  font-size: 25px;
  margin: 0;
`;

export const MonthDays = styled.p`
  color: white;
  font-size: 50px;
  margin: 0;
  font-weight: 700;
`;

import { useEffect, useState } from "react";
import { DateCardWrapper, DateCardItem, WeekDays, MonthDays } from "./style";

type CardDate = {
  number: number;
  string: string;
};

export const DateCard = () => {
  const [days, setDays] = useState<CardDate[]>();

  const getWeekDays = () => {
    let arrDate = [];
    const curr = new Date();
    const first = curr.getDate() - curr.getDay();
    for (var i = 0; i < 7; i++) {
      let next = new Date(curr.getTime());
      next.setDate(first + i);
      const objDate = {
        number: next.getDate(),
        string: next.toLocaleDateString("pt-BR", { weekday: "short" }).slice(0,3),
      };
      arrDate.push(objDate);
    }

    setDays(arrDate);
  };

  const handleSelected = () => {
    console.log('click')
  }

  useEffect(() => {
    getWeekDays();
  }, []);

  return (
    <DateCardWrapper>
      {days?.map((element) => {
        return (
          <DateCardItem onClick={handleSelected}>
            <WeekDays>{element.string}</WeekDays>
            <MonthDays>{element.number}</MonthDays>
          </DateCardItem>
        );
      })}
    </DateCardWrapper>
  );
};

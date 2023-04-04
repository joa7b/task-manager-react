import { useEffect, useState } from "react";
import { DateCardWrapper, DateCardItem, WeekDays, MonthDays } from "./style";

type CardDate = {
  number: number;
  string: string;
};

type DateCardProps = {
  setFormData: (data: object) => void;
  formData: object;
}

export const DateCard = (props: DateCardProps) => {
  const [days, setDays] = useState<CardDate[]>();
  const [activeCardDate, setActiveCardDate] = useState<number | null>(null);

  const getWeekDays = () => {
    let arrDate = [];
    const curr = new Date();
    const first = curr.getDate() - curr.getDay();
    for (var i = 0; i < 7; i++) {
      let next = new Date(curr.getTime());
      next.setDate(first + i);
      const objDate = {
        number: next.getDate(),
        string: next
          .toLocaleDateString("pt-BR", { weekday: "short" })
          .slice(0, 3),
      };
      arrDate.push(objDate);
    }
    setDays(arrDate);
  };

  const handleSelected = (e: any) => {
    const crr = new Date();
    crr.setDate(e);
    props.setFormData({...FormData, taskDate: crr.toISOString()});
    setActiveCardDate(e);
  };

  useEffect(() => {
    getWeekDays();
    const crrDate = new Date();
    props.setFormData({...FormData, taskDate: crrDate.toISOString()});
    const newDate = crrDate.getDate();
    setActiveCardDate(newDate);
  }, []);

  return (
    <DateCardWrapper>
      {days?.map((element) => {
        return (
          <DateCardItem
            selected={element.number === activeCardDate}
            onClick={() => handleSelected(element.number)}
          >
            <WeekDays>{element.string}</WeekDays>
            <MonthDays>{element.number}</MonthDays>
          </DateCardItem>
        );
      })}
    </DateCardWrapper>
  );
};

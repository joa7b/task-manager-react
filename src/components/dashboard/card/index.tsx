import {
  CardWrapper,
  CardItem,
  IconCardCategory,
  IconCardMenu,
  TaskTitle,
  TaskDescription,
} from "./style";

type PropsType = {
  taskTitle: string;
  taskStartHour: {
    hour: string;
    minute: string;
  };
  taskEndHour: {
    hour: string;
    minute: string;
  };
};

export const Card = (props: PropsType) => {
  return (
    <CardWrapper>
      <CardItem>
        <IconCardCategory className="bi bi-telephone"></IconCardCategory>
      </CardItem>

      <CardItem>
        <TaskTitle>{props.taskTitle}</TaskTitle>

        <TaskDescription>{`${props.taskStartHour.hour} até ${props.taskEndHour.hour}`}</TaskDescription>
      </CardItem>

      <CardItem>
        <IconCardMenu className="bi bi-three-dots-vertical"></IconCardMenu>
      </CardItem>
    </CardWrapper>
  );
};

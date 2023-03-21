import {
  CardWrapper,
  CardItem,
  IconCardCategory,
  IconCardMenu,
  TaskTitle,
  TaskDescription,
} from "./style";

export const Card = () => {
  return (
    <CardWrapper>
      <CardItem>
        <IconCardCategory className="bi bi-telephone"></IconCardCategory>
      </CardItem>

      <CardItem>
        <TaskTitle>Project Meeting</TaskTitle>

        <TaskDescription>9 am to 11 am</TaskDescription>
      </CardItem>

      <CardItem>
        <IconCardMenu className="bi bi-three-dots-vertical"></IconCardMenu>
      </CardItem>
    </CardWrapper>
  );
};

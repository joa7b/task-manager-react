import { TabWrapper, TabItem } from "./style";

type TabProps = {
  setTaskList: (value: boolean) => void;
}

export const Tab = (props: TabProps) => {
  return (
    <TabWrapper>
      <TabItem onClick={() => props.setTaskList(true)}>
        <p>Lista de tarefas</p>
      </TabItem>

      <TabItem onClick={() => props.setTaskList(false)}>
        <p>Completadas</p>
      </TabItem>
    </TabWrapper>
  );
};

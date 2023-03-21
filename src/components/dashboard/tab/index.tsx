import { TabWrapper, TabItem } from "./style";

export const Tab = () => {
  return (
    <TabWrapper>
      <TabItem>
        <p>Lista de tarefas</p>
      </TabItem>

      <TabItem>
        <p>Completadas</p>
      </TabItem>
    </TabWrapper>
  );
};

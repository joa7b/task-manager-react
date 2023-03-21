import { Navbar } from "./components/main/navbar";
import { Tab } from "./components/dashboard/tab";
import {Card} from "./components/dashboard/card";

export const App = () => {
  return (
    <>
      <Navbar />
      <Tab />
      <Card />
    </>
  );
};

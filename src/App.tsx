import { Navbar } from "./components/main/navbar";
import { Tab } from "./components/dashboard/tab";
import { Card } from "./components/dashboard/card";
import { Footer } from "./components/main/footer";
import { Welcome } from "./components/dashboard/welcome";

export const App = () => {
  return (
    <>
      <Navbar />
      <Welcome />
      <section>
        <Tab />
      </section>
        <Card />
      <Footer />
    </>
  );
};

import Layout from "components/Layout";
import Jumbotron from "components/Jumbotron";
import About from "components/About";
import How from "components/How";
import SendHug from "components/SendHug"

export default function Page() {
  return (
    <Layout>
      <Jumbotron/>
      <About/>
      <How/>
      <SendHug/>
    </Layout>
  );
}

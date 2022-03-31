import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

// Layout
import Layout from "./layout/Layout";

// pages
import Biodata from "./pages/Biodata";
import Portofolio from "./pages/Portofolio";

const App = () => {
  return (
    <Layout>
      <Container>
        <Routes>
          <Route path="/" element={<Biodata />} exact />
          <Route path="/portofolio" element={<Portofolio />} />
        </Routes>
      </Container>
    </Layout>
  );
};

export default App;

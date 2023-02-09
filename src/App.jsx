import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Documents from "./pages/Documents";
import { useContext, useEffect } from "react";
import Context from "./store/Context";

function App() {
  const { setDocuments } = useContext(Context);

  useEffect(() => {
    fetch("https://trigan00.github.io/jsonapi/documents.json")
      .then((res) => res.json())
      .then((data) => setDocuments(data));
  }, [setDocuments]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="documents/:name" element={<Documents />} />
      </Route>
    </Routes>
  );
}

export default App;

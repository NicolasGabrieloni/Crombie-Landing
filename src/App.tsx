import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Features from "./Components/Features";
import Pricing from "./Components/Pricing";
import Map from "./Components/Map";
import Carrusel from "./Components/Carrusel";
import Suscribe from "./Components/Suscribe";
import Form from "./Components/Form";
import Footer from "./Components/Footer";

export const BASE_URL =
  "https://6xrb5goi1l.execute-api.us-east-1.amazonaws.com";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Features />
      <Pricing />
      <Map />
      <Carrusel />
      <Suscribe />
      <Form />
      <Footer />
    </>
  );
}

export default App;

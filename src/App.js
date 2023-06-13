import Upload from "./components/Upload";
import ImageCarousel from "./components/ImageCarousel";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="App">
      <Upload flag={toggle} setFlag={setToggle} />
      <ImageCarousel flag={toggle} />
    </div>
  );
}

export default App;

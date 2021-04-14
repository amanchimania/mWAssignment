import { Carousel } from "react-bootstrap"
import wallpaper from "./Images/wallpaper.jpg"
import GetStarted from "./Components/GetStarted"
import './App.css';
import Hair from "../src/Images/Hair.png"
import Skin from "../src/Images/Skin.png"
import Weight from "../src/Images/Weight.png"
import Products from "./Components/Products"
import Header from "./Components/Header"
import HowItWorks from "./Components/HowItWorks"
function App() {
  return (
    <div className="App" style={{ backgroundColor: "#f8f5f1" }}>
      <Header /><br /><br /><br />
      <Carousel>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={wallpaper}
            alt="Third slide"
          />
          <Carousel.Caption>
            <div className="primary" style={{ height: "350px", backgroundColor: "white", padding: "10px", borderRadius: "30px" }} >
              <h1 style={{ color: "black" }}>Heading Title</h1><br />
              <h6 style={{ color: "black" }}>We are the country's first holistic wellness platform for men. We talk ,listen to them and understand there needs</h6>
              <h4 style={{ color: "black" }}>What's your concern ?</h4><br />
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <img src={Hair} style={{ height: "150px" }} alt=""></img>
                <img src={Skin} style={{ height: "150px" }} alt=""></img>
                <img src={Weight} style={{ height: "150px" }} alt=""></img>
              </div><br /><br /><br />

            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel><br /><br /><br /><br />
      <GetStarted /><br /><hr /><br /><br /><br />
      <Products /><br /><br /><br /><br /><hr />
      <GetStarted /><br /><br /><br />
      <HowItWorks /><br /><br /><br />
    </div >
  );
}

export default App;
